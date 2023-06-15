const Category = require("../models/Category");

exports.createCategoryService = async (data) => {
  const result = await Category.create(data);
  return result;
};

exports.getCategoryService = async () => {
  const category = await Category.find({});
  return category;
};

exports.updateCategoryService = async (id, data) => {
  const result = await Category.updateOne({ _id: id }, { $set: data });
  return result;
};

exports.deleteCategoryService = async (id) => {
  const result = await Category.deleteOne({ _id: id });
  return result;
};
