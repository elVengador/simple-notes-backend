const express = require("express");
var cors = require("cors");

require("dotenv").config();
require("./auth");

// initializarion
const app = express();

app.use(cors({origin: process.env.ALLOW_ORIGIN}));
app.use(express.json()); //h for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// globals
app.set("PORT", 4000 || process.env.PORT);

// routes
app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1/user", require("./routes/user.routes"));
app.use("/api/v1/tag", require("./routes/tag.routes"));
app.use("/api/v1/note", require("./routes/note.routes"));
app.use("/", (req, res) => res.send(ENDPOINT_TEMPLATE));

// middlewares
module.exports = app;

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
