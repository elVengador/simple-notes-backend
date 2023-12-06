const express = require("express");
const cors = require("cors")

require("dotenv").config();
require("./database");
require("./auth");

const PORT  = process.env.PORT ||  4000

const app = express();

app.use(cors());
app.use(express.json()); //h for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1/user", require("./routes/user.routes"));
app.use("/api/v1/tag", require("./routes/tag.routes"));
app.use("/api/v1/note", require("./routes/note.routes"));
app.use("/", (req, res) => res.send(ENDPOINT_TEMPLATE));

app.listen(PORT, () =>   console.log(`>. server listen on port ${PORT}`));

const ENDPOINT_TEMPLATE =  `
    <main 
        style="
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        "
    >
        <style> body { margin:0px } </style>
        <h1>Simple notes app api 🚀</h1>
    </main>
`;
