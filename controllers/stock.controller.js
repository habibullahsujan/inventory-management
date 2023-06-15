const {
  createStockService,
  getStockService,
  updateStockService,
  deleteStockService,
  getASingleStockService,
} = require("../services/stock.service");

exports.createStock = async (req, res, next) => {
  try {
    const product = await createStockService(req.body);
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
exports.getStock = async (req, res, next) => {
  try {
    const product = await getStockService();
    res.status(200).json({
      status: "success",
      message: "Data Found.",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data not found.",
      data: error.message,
    });
  }
};
exports.updateStock=async(req,res,next)=>{
    try {
        const product = await updateStockService(req.params.id,req.body);
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
}
exports.deleteStock=async(req,res,next)=>{
    try {
        const product = await deleteStockService(req.params.id);
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
}

exports.getAStock=async(req,res,next)=>{
  try {
    const product = await getASingleStockService(req.params.id);
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
}