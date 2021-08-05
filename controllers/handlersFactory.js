const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");

// Create
exports.createOne = (Model) =>
  CatchAsync(async (req, res, next) => {
    let doc = await Model.create(req.body);
    res.status(200).json({ status: "success", data: doc });
  });

// Read
exports.getAll = (Model, select, populates, popSelect) =>
  CatchAsync(async (req, res, next) => {
    let query = Model.find().select(select);
    if (populates) query = query.populate(populates, popSelect);
    const doc = await query;
    if (!doc) {
      return next(new AppError("No document found", 404));
    }
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: doc,
    });
  });

exports.getAllImages = (Model) =>
  CatchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    const doc = await query;
    if (!doc) {
      return next(new AppError(`No document found with that ID.`, 404));
    } else if (doc && doc.photo && doc.photo.data !== null) {
      res.set("Content-Type", doc.photo.contentType);
      return res.send(doc.photo.data);
    }
  });

exports.getOne = (Model, select) =>
  CatchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.userID).select(select);
    // if (populates) query = query.populate(populates);
    const doc = await query;
    if (!doc) {
      return next(new AppError(`No document found with that ID.`, 404));
    } else if (doc) {
      res.status(200).json({
        status: "success",
        results: doc.length,
        data: doc,
      });
    }
  });

// Update (non-password)
// MUST not be used for password update
exports.updateOne = (Model) =>
  CatchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.userID, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError(`No document found with that ID.`, 404));
    } else if (doc) {
      res.status(200).json({
        status: "success",
        data: doc,
      });
    }
  });

// Delete
exports.deleteOne = (Model) =>
  CatchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.userID);

    if (!doc) {
      return next(new AppError(`No document found with that ID.`, 404));
    }
    res.status(200).json({
      status: "success",
      // no need to return any data
      data: null,
    });
  });
