const mongoose = require("mongoose");
const { USER_DB, PASSWORD_DB, NAME_DB } = require("./config");

const URI = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@cluster0.dqvwhpr.mongodb.net/?retryWrites=true&w=majority`
console.log({URI})
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(">. DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
