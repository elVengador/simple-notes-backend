const passport = require('passport');
const jwt = require('jsonwebtoken');
const DoubleTokenStrategy = require('passport-custom').Strategy;
const userCtrl = require('./controllers/users.controller');

/**
 * Strategy using 2 tokens:
 *  accessToken: token access to resources
 *  refresToken: token to refresh the accessToken
 * si verify no logra veridicar -> lanza un error
 */
passport.use(
  'dts',
  new DoubleTokenStrategy(async function (req, done) {
    try {
      // 0. obtenemos el token
      const headerAccessToken = req.headers['authorization'];
      if (!headerAccessToken) return done('no token provided', null);
      const accessToken = headerAccessToken.split(' ')[1];
      if (!accessToken) return done('no token provider', null);
      // 1. validamos el token
      const { id } = jwt.verify(accessToken, 'shhhhh', {
        ignoreExpiration: false,
      });
      const user = await userCtrl.findById({ id });
      if (!user) return done('user was not found', null);
      done(null, user);
    } catch (error) {
      done(error);
    }
  })
);
