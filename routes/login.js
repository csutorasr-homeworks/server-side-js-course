var express = require('express');

var loginMW = express.Router();
var renderMW = require('../middlewares/render');
var authenticateMW = require('../middlewares/authenticate')();
var registerMW = require('../middlewares/register');
var forgotpassMW = require('../middlewares/forgotpass')();
var unauthenticateMW = require('../middlewares/unauthenticate');
var onlyauthMW = require('../middlewares/onlyauth');
var onlynotauthMW = require('../middlewares/onlynotauth');

loginMW.get("/belepes.html", onlynotauthMW, renderMW('belepes.ejs'));
loginMW.post("/belepes.html", onlynotauthMW, authenticateMW, renderMW('belepes.ejs'));
loginMW.get("/regisztracio.html", onlynotauthMW, renderMW('regisztracio.ejs'));
loginMW.post("/regisztracio.html", onlynotauthMW, registerMW, renderMW('regisztracio.ejs'));
loginMW.get("/emlekezteto.html", onlynotauthMW, renderMW('emlekezteto.ejs'));
loginMW.post("/emlekezteto.html", onlynotauthMW, forgotpassMW, renderMW('emlekezteto.ejs'));
loginMW.get("/kilep", onlyauthMW, unauthenticateMW);

module.exports = loginMW;