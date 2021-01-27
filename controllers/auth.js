const jwt = require('jsonwebtoken');

const auth = {};
auth.getAccessToken = (payload) =>
  jwt.sign({ id: payload }, 'shhhhh', {
    expiresIn: '5h',
  });

auth.getRefreshToken = (payload) => {
  const newRefreshToken = jwt.sign({ id: payload }, 'shhhhh', {
    expiresIn: '6h',
  });
  return newRefreshToken;
};

module.exports = auth;
