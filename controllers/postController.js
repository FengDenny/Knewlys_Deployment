const _ = require("lodash");
const formidable = require("formidable");
const fs = require("fs");
const Post = require("../models/postModel");
const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");
const { getAll, getOne, updateOne, deleteOne } = require("./handlersFactory");

exports.postByID = async (req, res, next, id) => {
  await Post.findById(id)
    .populate("postedBy", "_id email")
    .select("_id title body created photo")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(400).json({
          error: err,
        });
      }
      req.post = post;
      next();
    });
};

exports.postedUser = CatchAsync(async (req, res, next) => {
  // true or false
  let user = req.post && req.auth && req.post.postedBy._id == req.auth._id;

  console.log("req.post ", req.post, " req.auth ", req.auth);
  console.log(user);
  if (!user) {
    return next(
      new AppError("User is not authorized to peform this action.", 403)
    );
  }
  next();
});

exports.createPost = CatchAsync(async (req, res, next) => {
  let form = new formidable.IncomingForm();
  //  to keep extensions (jpg, png, etc)
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return next(new AppError("Photo could not be uploaded", 400));
    }

    let post = new Post(fields);
    // find the user that posted the post
    req.profile.__v = undefined;
    req.profile.passwordResetExpires = undefined;
    req.profile.passwordResetToken = undefined;
    post.postedBy = req.profile;

    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }

    post.save((err, result) => {
      if (err) {
        return next(new AppError(err, 400));
      }
      res.json({
        status: "success",
        result,
      });
    });
  });
});

exports.getUserPost = CatchAsync(async (req, res, next) => {
  await Post.find({ postedBy: req.profile._id })
    .populate("postedBy", "_id email")
    .select("_id title body created")
    .sort("_created")
    .exec((err, post) => {
      if (err) {
        return next(new AppError(err, 400));
      }
      res.json({ status: "success", results: post.length, post });
    });
});

exports.updatePost = CatchAsync(async (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return next(new AppError("Photo could not be uploaded"));
    }
    // save post
    let post = req.post;
    // mutate source object with lodash
    post = _.extend(post, fields);
    post.updated = Date.now();

    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }

    post.save((err, result) => {
      if (err) {
        return next(new AppError(err, 400));
      }
      res.json({ status: "success", result });
    });
  });
});

exports.deletePost = (req, res) => {
  let post = req.post;
  post.remove((err, post) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({
      message: "Post deleted successfully",
    });
  });
};

// Handler Factory
exports.getPost = getAll(
  Post,
  "_id title body created",
  "postedBy",
  "_id email createdAt"
);
