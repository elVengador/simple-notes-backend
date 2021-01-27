const Token = require('../models/Token');
const tokenCtrl = {};

tokenCtrl.create = async (token, user) => {
  const newToken = new Token({ token, user });
  await newToken.save();
  return newToken;
};

tokenCtrl.findOne = async (token) => {
  return await Token.findOne(token);
};

tokenCtrl.remove = async (token) => {
  return await Token.findOneAndRemove(token);
};

module.exports = tokenCtrl;
