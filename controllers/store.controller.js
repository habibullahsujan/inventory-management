const {
    createStoreService,
    getStoreService,
    updateStoreService,
    deleteStoreService,
  } = require("../services/store.service");
  
  exports.createStore = async (req, res, next) => {
    try {
      const product = await createStoreService(req.body);
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
  exports.getStore = async (req, res, next) => {
  
    try {
      const product = await getStoreService();
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
  exports.updateStore = async (req, res, next) => {
    try {
      const product = await updateStoreService(req.params.id, req.body);
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
  exports.deleteStore = async (req, res, next) => {
    try {
      const product = await deleteStoreService(req.params.id);
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
  