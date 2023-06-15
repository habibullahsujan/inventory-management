const {
  createUserService,
  loginUserService,
} = require("../services/user.service");
const bcrypt = require("bcryptjs");
exports.createUser = async (req, res, next) => {
  try {
    const user = await createUserService(req.body);
    res.status(200).json({
      status: "success",
      message: "User created successful.",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "User couldn't created.",
      data: error.message,
    });
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        message: "Please provide your credentials.",
      });
    }
    const user = await loginUserService(email);
    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "No user found. Please create a account.",
      });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: "fail",
        message: "Password or email is not valid.",
      });
    }
    if (user.status !== "active") {
      return res.status(401).json({
        status: "fail",
        message:
          "Your account is not active yet. Contact your manager/support email/phone.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "User data not found.",
      data: error.message,
    });
  }
};
