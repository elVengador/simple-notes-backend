const userCtrl = require('./users.controller');
const tokenCtrl = require('./token.controller');
const auth = require('./auth');
const authCtrl = {};

let tokens = [];

authCtrl.signIn = async (email, password) => {
  // 1. verifica la valides del usuario
  const user = await userCtrl.findOne({ email });
  if (!user) {
    return { auth: false, message: "Ups, user don't exist !!" };
  }
  const validPassword = await user.matchPassword(password);
  if (!validPassword) {
    return { auth: false, message: 'Ups, password invalid !!' };
  }
  // 2. crea los tokens
  const accessToken = auth.getAccessToken(user._id);
  const refreshToken = auth.getRefreshToken(user._id);
  await tokenCtrl.create(refreshToken, user._id);
  return {
    auth: true,
    accessToken,
    refreshToken,
    user: user._id,
    message: `Welcome ${user.username}`,
  };
};

module.exports = authCtrl;
