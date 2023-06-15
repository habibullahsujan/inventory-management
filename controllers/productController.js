const Product = require("../models/Product");
const {
  createProductService,
  getProductsService,
  updateProductService,
  bulkUpdateProductsService,
  deleteProductService,
  bulkDeleteProductService,
} = require("../services/product.services");

exports.createProduct = async (req, res, next) => {
  try {
    // const product = await new Product(req.body);
    // const res = await product.save();

    const product = await createProductService(req.body);
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

exports.getProduct = async (req, res, next) => {
  try {
    let filters = { ...req.query };
    const excludeFields = ["limit", "page", "sort", "fields"];

    excludeFields.forEach((field) => delete filters[field]);

    let stringFilter = JSON.stringify(filters);
    stringFilter = stringFilter.replace(
      /\b(gt|lt|gte|lte)\b/g,
      (match) => `$${match}`
    );
    filters = JSON.parse(stringFilter);

    const queries = {};
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }
    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;
      const skip = (parseInt(page) - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }
    const products = await getProductsService(filters, queries);

    res.status(200).json({
      status: "success",
      message: "Data found.",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data isn't found.",
      data: error.message,
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateProductService(id, data);
    res.status(200).json({
      status: "success",
      message: "Data successfully updated.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data couldn't updated.",
      data: error.message,
    });
  }
};

exports.bulkUpdateProducts = async (req, res, next) => {
  try {
    const result = await bulkUpdateProductsService(req.body.ids);
    res.status(200).json({
      status: "success",
      message: "Data successfully updated.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data couldn't updated.",
      data: error.message,
    });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const result = await deleteProductService(req.params);
    if (!result.deletedCount) {
      return res.status(400).json({
        status: "fail",
        message: "Product couldn't deleted.",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Product delete successful.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Product couldn't deleted.",
      data: error.message,
    });
  }
};

exports.bulkDeleteProduct = async (req, res, next) => {
  try {
    const result = await bulkDeleteProductService(req.body.ids);

    if (!result.deletedCount) {
      return res.status(400).json({
        status: "fail",
        message: "Product couldn't deleted.",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Product delete successful.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Product couldn't deleted.",
      data: error.message,
    });
  }
};

exports.fileUpload = async (req, res) => {
  try {
  
    res.status(200).json(req.file);
  } catch (error) {
    res.status(400).json("file is not upload");
  }
};
