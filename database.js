const mongoose = require("mongoose");
const { USER_DB, PASSWORD_DB, NAME_DB } = require("./config");

const URI = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@cluster0.dhhde.mongodb.net/${NAME_DB}?retryWrites=true&w=majority`;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(">. DB conected");
  })
  .catch((err) => {
    console.log(err);
  });
