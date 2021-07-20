const _ = require("lodash");
const formidable = require("formidable");
const User = require("../models/userModel");
const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");
const { getAll, getOne } = require("./handlersFactory");

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

// exports.getUser = async (req, res) => {
//   req.profile.passwordResetExpires = undefined;
//   req.profile.passwordResetToken = undefined;
//   return await res.json(req.profile);
// };

// Handler factory
exports.getAllUser = getAll(User, "email createdAt");
exports.getUser = getOne(User, "email createdAt");
