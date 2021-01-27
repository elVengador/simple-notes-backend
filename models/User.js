const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    config: { type: Object, required: false },
    tokens: { type: Array, default: [] },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(11);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
module.exports = model('User', UserSchema);
