const Store = require("../models/Store");

exports.createStoreService = async (doc) => {
  const result = await Store.create(doc);
  return result;
};
exports.getStoreService = async () => {
  const store = await Store.find({});
  return store;
};
exports.updateStoreService = async (id, doc) => {
  const result = await Store.updateOne({ _id: id }, { $set: doc });
  return result;
};
exports.deleteStoreService = async (id) => {
  const result = await Store.deleteOne({ _id: id });
  return result;
};
