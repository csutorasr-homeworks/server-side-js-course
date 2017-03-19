var express = require('express');
var renderMW = require('render');
var loginMW = require('login');

var mainMW = express.Router();

mainMW.use(loginMW);
mainMW.get("/index.html",renderMW('/index.html'));
mainMW.get("/",renderMW('/index.html'));

module.exports = mainMW;