var express = require('express');

var loginMW = express.Router();
var renderMW = require('../middlewares/render');

loginMW.get("/belepes.html", renderMW('belepes.ejs'));
loginMW.post("/belepes.html", renderMW('belepes.ejs'));

module.exports = loginMW;