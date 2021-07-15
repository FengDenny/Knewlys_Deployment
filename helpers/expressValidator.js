const { check, validationResult } = require("express-validator");

// User validation
exports.userSignupValidation = [
  check("email")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,64}$/)
    .withMessage("Please enter a valid email address."),

  check("password").notEmpty().withMessage("Password is required"),
  check("password")
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/)
    .withMessage(
      "Enter a password with atleast 6 characters containing one lowercase, one uppercase, one numeric digit and one special character."
    ),
];

// validation result

exports.runValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: "fail",
      error: errors.array()[0].msg,
    });
  }
  next();
};
