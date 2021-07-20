const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");

exports.getAll = (Model, select) =>
  CatchAsync(async (req, res, next) => {
    let query = Model.find().select(select);
    const doc = await query;
    if (!doc) {
      return next(new AppError("No document found", 404));
    }
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model, select, populates) =>
  CatchAsync(async (req, res, next) => {
    let query = Model.find(req.params.id).select(select);
    if (populates) query = query.populate(populates);
    const doc = await query;
    if (!doc) {
      return next(new AppError(`No document found with id: ${_id}`, 404));
    }
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
