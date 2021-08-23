const express = require("express");
const router = express.Router();
const {
  userID,
  getUser,
  getAllUser,
  updateUser,
  deleteUser,
  getAccount,
  updateAccount,
  deleteAccount,
} = require("./../controllers/userController");
const {
  protect,
  updateUserPassword,
  updateEmail,
} = require("./../controllers/authController");

// @desc Get all user
//@route GET "/api/v1/users"
router.get("/users", getAllUser);

// Protect all routes after this middleware
router.use(protect);

// @desc Get user without params
//@route GET "/api/v1/account"
router
  .route("/account")
  .get(getAccount, getUser)
  .patch(updateAccount)
  .delete(deleteAccount);

// @desc Update User Password
// @route PATCH /api/v1/account/updatePassword
// @access Private
router.patch("/account/updatePassword", updateUserPassword);

// @desc Get/Patch/Delete user for admins only
//@route GET/Patch/Delete "/api/v1/user/:userID"
// @access Private
router
  .route("/user/:userID")
  .get(getAccount, getUser)
  .patch(updateEmail)
  .delete(deleteUser);

// execute this first iff routes have :userID
router.param("userID", userID);
module.exports = router;
