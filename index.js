var express = require('express');
var app = express();

app.use(express.static('static'));

var server = app.listen(8080, function () {
    console.log("Listening on :8080.");
});