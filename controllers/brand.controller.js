const {
  createBrandService,
  getBrandService,
  updateBrandService,
  deleteBrandService,
} = require("../services/brand.service");

exports.createBrand = async (req, res, next) => {
  try {
    const result = await createBrandService(req.body);

    res.status(200).json({
      status: "success",
      message: "Data successfully added.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Brand isn't successfully added.",
      data: error.message,
    });
  }
};
exports.getBrand = async (req, res, next) => {
  try {
    const brand = await getBrandService();

    res.status(200).json({
      status: "success",
      message: "Brand data found.",
      data: brand,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Brand data not found!",
      data: error.message,
    });
  }
};

exports.updateBrand = async (req, res, next) => {
  try {
    const result = await updateBrandService(req.params.id, req.body);

    res.status(200).json({
      status: "success",
      message: "Brand data updated....",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Brand data couldn't updated....",
      data: error.message,
    });
  }
};

exports.deleteBrand = async (req, res, next) => {
  try {
    const result = await deleteBrandService(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Brand deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Brand data couldn't deleted.",
      data: error.message,
    });
  }
};
