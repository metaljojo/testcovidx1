const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const logger = require('morgan');
const cors = require('cors');

// support parsing of application/json type post data
app.use(bodyParser.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(logger('dev'));

// MongoDB config

app.locals.config = require(`./config/${process.env.NODE_ENV}`);
const dbname = app.locals.config.mongodb.database;
// DB Conncetion
mongoose
    .connect(dbname)
    .then(() => console.log(`NODE_ENV=${process.env.NODE_ENV}, connecting to ${dbname}`))
    .catch(err => console.log(err));

// Use route index
const routesIndex = require('./routes/index');
routesIndex(app);

// Passport Middleware
require('./config/passport')(passport);
app.use(passport.initialize());

app.get('/', (req, res) => {
    res.send('Hello world.');
});

module.exports = app;