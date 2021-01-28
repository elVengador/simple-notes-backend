const passport = require('passport');
const auth = (req, res, next) => {
  passport.authenticate('dts', { session: false }, function (err, user) {
    if (err) return res.status(401).json({ message: err });
    if (!user) return res.status(401).json({ message: err });
    next();
  })(req, res, next);
};

module.exports = auth;
