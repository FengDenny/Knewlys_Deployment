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

// Post create validator
exports.createPostValidator = [
  check("title").notEmpty().withMessage("Provide a title"),
  check("title")
    .isLength({ min: 4, max: 150 })
    .withMessage("Title must be between 4 to 150 characters"),
  check("body").notEmpty().withMessage("Provide a body"),
  check("title")
    .isLength({ min: 4, max: 1000 })
    .withMessage("Body must be between 4 to 1000 characters"),
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
