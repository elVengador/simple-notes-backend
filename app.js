const express = require("express");
var cors = require("cors");

require("dotenv").config();
require("./auth");

// initializarion
const app = express();

app.use(cors({
    // origin: process.env.ALLOW_ORIGIN
    origin: true, // Enable CORS for all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 204, // Respond with a 204 status for OPTIONS requests
}));
app.use(express.json()); //h for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Handle CORS preflight requests
app.options('/api/*', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.send();
});


console.log({tt:process.env.ALLOW_ORIGIN})
// globals
app.set("PORT",process.env.PORT ||  4000 );

// routes
app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1/user", require("./routes/user.routes"));
app.use("/api/v1/tag", require("./routes/tag.routes"));
app.use("/api/v1/note", require("./routes/note.routes"));
app.use("/", (req, res) => res.send(ENDPOINT_TEMPLATE));

app.listen(port=>console.log(`server running on: ${port}`))

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
