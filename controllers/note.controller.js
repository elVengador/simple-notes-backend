const Note = require('../models/Note');
const noteCtrl = {};

noteCtrl.create = async (body) => {
  const { name, tag, user } = body;
  const newNote = new Note({ name, tag, user });
  await newNote.save();
  return newNote;
};
noteCtrl.findByUser = async (params) => {
  const { user } = params;
  return await Note.find({ user });
};

noteCtrl.findById = async (params) => {
  const { id } = params;
  return await Note.findById(id);
};

noteCtrl.update = async (params, body) => {
  const { id } = params;
  const { name, tag } = body;
  return await Note.findByIdAndUpdate(id, { name, tag });
};

noteCtrl.remove = async (params) => {
  const { id } = params;
  return await Note.findByIdAndRemove(id);
};

noteCtrl.removeByTag = async (params) => {
  const { id } = params;
  return await Note.deleteMany({ tag: id });
};

module.exports = noteCtrl;
