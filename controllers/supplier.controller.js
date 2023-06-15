const {
  createSupplierService,
  getSupplierService,
  updateSupplierService,
  deleteSupplierService,
} = require("../services/supplier.service");

exports.createSupplier = async (req, res, next) => {
  try {
    const product = await createSupplierService(req.body);
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

exports.getSupplier = async (req, res, next) => {
  try {
    const products = await getSupplierService();

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

exports.updateSupplier = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateSupplierService(id, data);
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

exports.deleteSupplier = async (req, res, next) => {
  try {
    const result = await deleteSupplierService(req.params);
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
