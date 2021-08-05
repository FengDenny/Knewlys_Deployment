const express = require("express");
const router = express.Router();
const { userID, getAccount } = require("./../controllers/userController");
const {
  postByID,
  createPost,
  getPost,
  getUserPost,
  postedUser,
  updatePost,
  deletePost,
  getImages,
} = require("./../controllers/postController");
const { protect, protected } = require("./../controllers/authController");
const {
  createPostValidator,
  runValidationResult,
} = require("./../helpers/expressValidator");

// @desc Get all post
// @route GET /api/v1/post
// @access Public
router.get("/post", getPost);

// @desc Get all Images
// @route GET /api/v1/photo/:id
// @access Public
router.get("/post/photo/:id", getImages);

// Protect all routes after this middleware
router.use(protect);

// @desc Create post
// @route POST /api/v1/post/:userID
// @access Private
// For formidable package, function should be first before the validator
router
  .route("/post/:userID")
  .post(createPost, createPostValidator, runValidationResult)
  .get(getUserPost);

// @desc Delete/ Update post
// @route DELETE/PATCH  /api/v1/post/:postID
// @access Private
router
  .route("/post/:postID")
  .delete(protected, postedUser, deletePost)
  .patch(protected, postedUser, updatePost);

router.param("userID", userID);
router.param("postID", postByID);

module.exports = router;
