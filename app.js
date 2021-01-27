const express = require('express');
var cors = require('cors');

require('dotenv').config();
require('./auth');

// initializarion
const app = express();

app.use(cors());
app.use(express.json()); //h for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// globals
app.set('PORT', 4000 || process.env.PORT);

// routes
app.use('/api/v1/auth', require('./routes/auth.routes'));
app.use('/api/v1/user', require('./routes/user.routes'));
app.use('/api/v1/tag', require('./routes/tag.routes'));
app.use('/api/v1/note', require('./routes/note.routes'));

// midlewares
module.exports = app;
