const { Schema, model } = require('mongoose');

const TokenSchema = new Schema(
  {
    token: { type: String, required: true },
    user: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model('Token', TokenSchema);
