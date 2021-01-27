require("dotenv").config();
const USER_DB = "el_vengador_test" || process.env.USER_DB;
const PASSWORD_DB = "AKVqv8B9mskdW0MR" || process.env.PASSWORD_DB;
const NAME_DB = "notes-app-dev" || process.env.NAME_DB;

exports.USER_DB = USER_DB;
exports.PASSWORD_DB = PASSWORD_DB;
exports.NAME_DB = NAME_DB;
