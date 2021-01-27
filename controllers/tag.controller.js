const Tag = require('../models/Tag');
const tagCtrl = {};

tagCtrl.create = async (body) => {
  const { name, user } = body;
  const newTag = new Tag({ name, user });
  await newTag.save();
  return newTag;
};
tagCtrl.findByUser = async (params) => {
  const { user } = params;
  return await Tag.find({ user });
};

tagCtrl.findById = async (params) => {
  const { id } = params;
  return await Tag.findById(id);
};

tagCtrl.update = async (params, body) => {
  const { id } = params;
  const { name, user } = body;
  return await Tag.findByIdAndUpdate(id, { name, user });
};

tagCtrl.remove = async (params) => {
  const { id } = params;
  return await Tag.findByIdAndRemove(id);
};

module.exports = tagCtrl;
