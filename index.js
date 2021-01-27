const app = require("./app");
require("./database");

app.listen(app.get("PORT"), () => {
  console.log(`>. server listen on port ${app.get("PORT")}`);
});
