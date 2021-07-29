const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const PostSchema = new mongoose.Schema({
  body: {
    type: String,
    required: [true, "Give us some details about this lovely photo!"],
    minLength: 4,
    maxLength: 1000,
  },
  photo: { data: Buffer, contentType: String },
  //   User Schema relationships
  postedBy: { type: ObjectId, ref: "User" },
  created: {
    type: Date,
    default: Date.now(),
  },
  updated: Date,
});

const post = mongoose.model("Post", PostSchema);

module.exports = post;
