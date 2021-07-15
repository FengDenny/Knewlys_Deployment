const express = require("express");
const {
  userSignupValidation,
  runValidationResult,
} = require("./../helpers/expressValidator");
const {
  signup,
  accountActivation,
  signin,
  forgotPassword,
  resetPassword,
  updateUserPassword,
  protect,
  logout,
} = require("./../controllers/authController");

const router = express.Router();

// @desc User Signup
//@route POST "/api/v1/auth/signup"
router.post("/auth/signup", userSignupValidation, runValidationResult, signup);

// @desc Account activation
//@route POST "/api/v1/auth/account-activation"
router.post("/auth/account-activation", accountActivation);

// @desc User Signin
//@route POST "/api/v1/auth/signin"
router.post("/auth/signin", signin);

// @desc User Logout
//@route POST "/api/v1/auth/logout"
router.get("/auth/logout", logout);

// @desc User ResetPassword
//@route POST "/api/v1/auth/forgotPassword"
//@route PATCH "/api/v1/auth/resetPassword/:token"
router.post("/auth/forgotPassword", forgotPassword);
router.patch("/auth/resetPassword/:token", resetPassword);

// auth needed after this route
router.use(protect);

// @desc Update User Password
// @route PATCH /api/v1/auth/updatePassword
// @access Private
router.patch("/auth/updatePassword", updateUserPassword);

module.exports = router;
