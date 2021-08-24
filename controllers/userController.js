const User = require("../models/userModel");
const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");
const { getAll, getOne, updateOne, deleteOne } = require("./handlersFactory");

exports.userID = async (req, res, next, id) => {
  await User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    req.profile = user; // adds profile object in req with user info
    next();
  });
};

// get logged in user account info
exports.getAccount = (req, res, next) => {
  req.params.userID = req.user.id;
  next();
};

exports.getPostByUser = (req, res, next) => {
  // req.auth comes from protected in authController ( userProperty: "auth")
  let user = req.user && req.auth && req.params.userID == req.user.id;
  console.log("req.user", req.user, "req.auth", req.auth);
  console.log(user);
  if (!user) {
    return next(
      new AppError("User is not authorized to peform this action.", 403)
    );
  }
  next();
};

// update logged in user account info except password
exports.updateAccount = CatchAsync(async (req, res, next) => {
  if (req.body.password) {
    return next(
      new AppError(
        "Please, use /account/updatePassword to update password.",
        400
      )
    );
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.id, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

// delete logged in user account
exports.deleteAccount = CatchAsync(async (req, res, next) => {
  await User.findByIdAndDelete(req.user.id, { active: false });
  res.status(204).json({
    status: "success",
    data: null,
  });
});

// Handler factory
exports.getAllUser = getAll(User, "email createdAt");
exports.getUser = getOne(User, "email createdAt");

// for admins account only
// non-password update
exports.updateUser = updateOne(User);
exports.deleteUser = deleteOne(User);
