const User = require("../models/userModel");
const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const crypto = require("crypto");
// sending email requirements START
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sending email requirements END
const {
  emailVerify,
  resetPassword,
  accountActivated,
} = require("../views/email/email");
const { promisify } = require("util");

exports.signup = CatchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    return next(
      new AppError(
        `${email} is already associate with an exisiting account. Please signin.`
      )
    );
  }
  const token = jwt.sign(
    { email, password },
    process.env.JWT_ACCOUNT_ACTIVATION,
    { expiresIn: "10min" }
  );

  try {
    const url = `${process.env.CLIENT_URL}/auth/activate/${token}`;

    const activateData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Account Activation Link",
      html: emailVerify(url),
    };

    sgMail.send(activateData).then(() => {
      return res.json({
        status: "success",
        message: `Email has been sent to ${email}. Follow the instructions to activate your account`,
      });
    });
  } catch (err) {
    console.log(err);
    return next(new AppError("There was a problem sending your email"), 500);
  }
});

exports.accountActivation = CatchAsync(async (req, res, next) => {
  const { token } = req.body;
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_ACCOUNT_ACTIVATION,
      function (err, decoded) {
        if (err) {
          console.log("JWT VERIFY IN ACCOUNT ACTIVATION ERROR", err);
          return next(
            new AppError("Your session has expired. Please signup again.", 401)
          );
        }
        const { email, password } = jwt.decode(token);
        const newUser = new User({ email, password });
        newUser.save((err, user) => {
          if (err) {
            console.log("SAVE USER IN ACCOUNT ACTIVATION ERROR", err);
            return next(
              new AppError(
                `${email} has already been activated. Please login.`,
                401
              )
            );
          }
          try {
            const url = `${process.env.CLIENT_URL}/`;
            const accountIsActivated = {
              from: process.env.EMAIL_FROM,
              to: email,
              subject: "Account Activated",
              html: accountActivated(url),
            };

            sgMail.send(accountIsActivated);
          } catch (err) {
            console.log(err);
            return next(
              new AppError("There was a problem sending your email"),
              500
            );
          }
          return res.json({
            status: "success",
            message: `${email} has signed up successfully! Please signin.`,
            user: newUser,
          });
        });
      }
    );
  }
});

exports.signin = CatchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password").select("-__v");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });

  const { _id } = user;

  return res.json({
    status: "success",
    message: `Welcome back, ${email}`,
    token,
    user: {
      _id,
      email,
    },
  });
});

exports.forgotPassword = CatchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return next(new AppError(`There is no user associated with ${email}`), 404);
  }
  // 2) Generate a random token
  const resetToken = user.createPasswordResetToken();
  await user.save({
    validateBeforeSave: false,
  });

  try {
    const resetURL = `${process.env.CLIENT_URL}/auth/resetPassword/${resetToken}`;
    const resetData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Reset Password Link",
      html: resetPassword(resetURL),
    };
    sgMail.send(resetData).then(() => {
      return res.json({
        status: "success",
        message: `Email has been sent to ${email}. Follow the instructions to reset your password`,
      });
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({
      validateBeforeSave: false,
    });
    return next(
      new AppError(
        "There was an error sending the email, Try again later!",
        500
      )
    );
  }
});

exports.resetPassword = CatchAsync(async (req, res, next) => {
  const { password } = req.body;
  const { token } = req.params;
  // 1) Get User based on the token provided
  // To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
  const passReq = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: {
      $gt: Date.now(),
    },
  });
  // 2) if token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired.", 400));
  }

  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  if (user.password.match(passReq)) {
    await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("jwt", token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: req.secure || req.headers["x-forwarded-proto"] === "https",
    });

    res.json({
      status: "success",
      message: "Your password has been reset successfully",
      token,
      user,
    });
  } else {
    return next(new AppError("Invalid password format", 400));
  }
});
// protected route
exports.protect = CatchAsync(async (req, res, next) => {
  let token;
  // 1) See if token is available, then retrieve it

  if (
    // Postman's authorization header that starts with a Bearer
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // to retrive the second part of the string after Bearer
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to gain access", 401)
    );
  }

  // 2) Token Verification
  const decoded = await promisify(jwt.verify)(token, process.env.jWT_SECRET);
  // console.log(decoded._id);
  // 3) Checking if user still exist
  const currentUser = await User.findById(decoded._id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user thats belongs to this token does no longer exist.",
        401
      )
    );
  }

  // 4) Check if user changed password after the token was issued

  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please log in again!", 401)
    );
  }
  // Grant access to protected route
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

//
exports.protected = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

// use this to update password
exports.updateUserPassword = CatchAsync(async (req, res, next) => {
  const { password, currentPassword } = req.body;
  const user = await User.findById(req.user.id).select("+password");

  // check if user current password is correct
  if (!(await user.correctPassword(currentPassword, user.password))) {
    return next(new AppError("Your current password is incorrect.", 400));
  }

  //  if current password is correct
  user.password = password;

  await user.save();

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return res.json({
    status: "success",
    message: "Your password has been updated.",
    token,
  });
});

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};
