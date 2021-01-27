const User = require('../models/User');
const userCtrl = {};

userCtrl.create = async (body) => {
  try {
    const { email, username, password } = body;
    const newUser = new User({ email, username, password });
    await newUser.save();
    return newUser;
  } catch (error) {
    return null;
  }
};

userCtrl.find = async (feautures) => {
  return await User.find(feautures);
};

userCtrl.findOne = async (feautures) => {
  return await User.findOne(feautures);
};

userCtrl.findById = async (params) => {
  const { id } = params;
  return await User.findById(id);
};

userCtrl.update = async (params, body) => {
  const { id } = params;
  const { username, password, email } = body;
  return await User.findByIdAndUpdate(id, { username, password, email });
};

userCtrl.remove = async (params) => {
  const { id } = params;
  return await User.findByIdAndRemove(id);
};

module.exports = userCtrl;
