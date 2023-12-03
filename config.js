require("dotenv").config();
const USER_DB =  process.env.USER_DB;
const PASSWORD_DB =  process.env.PASSWORD_DB;
const NAME_DB =  process.env.NAME_DB;

exports.USER_DB = USER_DB;
exports.PASSWORD_DB = PASSWORD_DB;
exports.NAME_DB = NAME_DB;
