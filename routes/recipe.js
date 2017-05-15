var express = require('express');

var loginMW = express.Router();
var renderMW = require('../middlewares/render');
var onlyauthMW = require('../middlewares/onlyauth');
var onlynotauthMW = require('../middlewares/onlynotauth');
var createrecipeMW = require('../middlewares/createrecipe');
var listrecipeMW = require('../middlewares/listrecipe');
var getrecipeMW = require('../middlewares/getrecipe');
var deleterecipeMW = require('../middlewares/deleterecipe');
var loadtomodifyrecipeMW = require('../middlewares/loadtomodifyrecipe');
var modifyrecipeMW = require('../middlewares/modifyrecipe');

loginMW.get("/ujrecept.html", onlyauthMW, renderMW('ujrecept.ejs'));
loginMW.post("/ujrecept.html", onlyauthMW, createrecipeMW, renderMW('ujrecept.ejs'));
loginMW.get("/", listrecipeMW, renderMW('index.ejs'));
loginMW.get("/recept/:id", getrecipeMW, renderMW('recept.ejs'));
loginMW.get("/recept/:id/delete", onlyauthMW, getrecipeMW, deleterecipeMW, renderMW('recept.ejs'));
loginMW.get("/recept/:id/modify", onlyauthMW, getrecipeMW, loadtomodifyrecipeMW, renderMW('modositrecept.ejs'));
loginMW.post("/recept/:id/modify", onlyauthMW, getrecipeMW, modifyrecipeMW, loadtomodifyrecipeMW, renderMW('modositrecept.ejs'));

module.exports = loginMW;