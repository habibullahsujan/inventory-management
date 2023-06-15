const {
  createCategoryService,
  getCategoryService,
  updateCategoryService,
  deleteCategoryService,
} = require("../services/category.service");

exports.createCategory = async (req, res, next) => {
  try {
    const product = await createCategoryService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data successfully added.",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data isn't successfully added.",
      data: error.message,
    });
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const product = await getCategoryService();
    res.status(200).json({
      status: "success",
      message: "Data successfully found.",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data isn't successfully found.",
      data: error.message,
    });
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const product = await updateCategoryService(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      message: "Data successfully updated.",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data isn't successfully updated.",
      data: error.message,
    });
  }
};
exports.deleteCategory = async (req, res, next) => {
  try {
    const product = await deleteCategoryService(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Data successfully deleted.",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data isn't successfully deleted.",
      data: error.message,
    });
  }
};
