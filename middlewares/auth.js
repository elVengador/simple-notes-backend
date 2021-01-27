const passport = require('passport');
const auth = (req, res, next) => {
  passport.authenticate('dts', { session: false }, function (err, user) {
    if (err) return res.status(401).send(err);
    if (!user) return res.status(401).send(err);
    next();
  })(req, res, next);
};

module.exports = auth;
