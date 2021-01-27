const { Schema, model } = require('mongoose');

const NoteSchema = new Schema(
  {
    name: { type: String, required: true },
    tag: { type: String, required: true },
    user: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model('Note', NoteSchema);
