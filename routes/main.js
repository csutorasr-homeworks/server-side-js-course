var express = require('express');
var renderMW = require('../middlewares/render');
var loginMW = require('./login');

var mainMW = express.Router();

mainMW.use(loginMW);
mainMW.get("/index.html", renderMW('index.ejs'));
mainMW.get("/", renderMW('index.ejs'));

module.exports = mainMW;