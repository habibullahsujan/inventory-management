const Stock = require("../models/Stock");
const mongoose = require("mongoose");

exports.createStockService = async (doc) => {
  const result = await Stock.create(doc);
  return result;
};
exports.getStockService = async () => {
  // const stock = await Stock.find({})
  //   .populate("productId")
  //   .populate("brand.id")
  //   .populate("store.id")
  //   .populate("suppliedBy.id");
  const stock = await Stock.aggregate([
    { $match: {} },
    {
      $project: {
        store: 1,
        price: { $convert: { input: "$price", to: "int" } },
        quantity: 1,
      },
    },
    {
      $group: {
        _id: "$store.name",
        totalProductPrice: { $sum: { $multiply: ["$price", "$quantity"] } },
      },
    },
  ]);

  return stock;
};
exports.updateStockService = async (id, doc) => {
  const result = await Stock.updateOne({ _id: id }, { $set: doc });
  return result;
};
exports.deleteStockService = async (id) => {
  const result = await Stock.deleteOne({ _id: id });
  return result;
};

exports.getASingleStockService = async (id) => {
  console.log(id);
  const stock = await Stock.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(id) } },
    {
      $project: {
        name: 1,
        productId: 1,
        price: 1,
        "brand.name": { $toLower: "$brand.name" },
      },
    },
    {
      $lookup: {
        from: "brands",
        localField: "brand.name",
        foreignField: "name",
        as: "brandDetails",
      },
    },
  ]);

  return stock;
};
