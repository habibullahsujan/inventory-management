const Supplier = require("../models/Supplier");

exports.createSupplierService = async (doc) => {
  const result = await Supplier.create(doc);
  return result;
};
exports.getSupplierService = async () => {
  const supplier = await Supplier.find({});
  return supplier;
};
exports.updateSupplierService = async (id, doc) => {
  const result = await Supplier.updateOne({ _id: id }, { $set: doc });
  return result;
};
exports.deleteSupplierService = async (id) => {
  const result = await Supplier.deleteOne({ _id: id });
  return result;
};
