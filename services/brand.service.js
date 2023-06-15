const Brand = require("../models/Brand");

exports.createBrandService = async (data) => {
  const result = await Brand.create(data);
  return result;
};

exports.getBrandService = async () => {
  const brand = await Brand.find({}).populate('products');
  return brand;
};
exports.updateBrandService = async (id, data) => {
  const result = await Brand.updateOne({ _id: id }, { $set: data });
  return result;
};
exports.deleteBrandService = async (id) => {
  const result = await Brand.deleteOne({ _id: id });
  return result;
};
