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
const DB = require('./config/keys').mongoURI;
// DB Conncetion
mongoose
    .connect(DB)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use route index
const routesIndex = require('./routes/index');
routesIndex(app);

// Passport Middleware
require('./config/passport')(passport);
app.use(passport.initialize());

app.get('/', (req, res) => {
    res.send('Bonjour world');
});

module.exports = app;