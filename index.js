var express = require('express');
var app = express();
var mainMW = require('./routes/main');


app.set('view engine', 'ejs');
app.use(express.static('static'));

app.use(function (req, res, next) {
    res.tpl = {};
    res.error = [];
    next();
})

app.use(mainMW);

app.use(function (err, req, res, next) {
    res.status(500).send("Hiba a rendszerben.");
    res.end();
    console.error(err.stack);
});

var server = app.listen(8080, function () {
    console.log("Listening on :8080.");
});