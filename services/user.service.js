const User = require("../models/User");

exports.createUserService = async (data) => {
  const user = await User.create(data);
  return user;
};

exports.loginUserService = async (email) => {
  const user = await User.find({ email });
  return user;
};
