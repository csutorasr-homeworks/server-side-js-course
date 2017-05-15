var express = require('express');
var app = express();
var mainMW = require('./routes/main');
var session = require('express-session');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.use(session({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000
  },
  resave: true,
  saveUninitialized: false
}));

/**
 * Parse parameters in POST
 */
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
    res.tpl = { error: []};
    next();
});

app.use(mainMW);

app.use(function (err, req, res, next) {
    res.status(500).send("Hiba a rendszerben.");
    res.end();
    console.error(err.stack);
});

var server = app.listen(8080, function () {
    console.log("Listening on :8080.");
});