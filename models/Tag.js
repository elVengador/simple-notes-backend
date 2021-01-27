const { Schema, model } = require('mongoose');

const TagSchema = new Schema(
  {
    name: { type: String, required: true },
    user: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model('Tag', TagSchema);
