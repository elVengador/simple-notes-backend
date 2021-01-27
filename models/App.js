const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    config: { type: Object, required: false },
  },
  { timestamps: true }
);

UserSchema.pre("encrypt password", async function (this) {
  const salt = await bcrypt.genSalt(11);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(11);
  return await bcrypt.hash(password, salt);
};
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
module.exports = model("User", UserSchema);
