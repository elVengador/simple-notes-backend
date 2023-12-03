const app = require("./app");
const cors = require("cors")
require("./database");

app.use(cors());

app.listen(app.get("PORT"), () => {
  console.log(`>. server listen on port ${app.get("PORT")}`);
});
