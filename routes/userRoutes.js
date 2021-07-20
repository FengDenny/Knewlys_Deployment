const express = require("express");
const router = express.Router();
const {
  userID,
  getUser,
  getAllUser,
} = require("./../controllers/userController");
const { protect } = require("./../controllers/authController");

// @desc Get all user
//@route GET "/api/v1/users"
router.get("/users", getAllUser);

// @desc Get user
//@route GET "/api/v1/user/:userID"
// @access Private
router.get("/user/:userID", protect, getUser);

// execute this first iff routes have :userID
router.param("userID", userID);
module.exports = router;
