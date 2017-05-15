var express = require('express');
var renderMW = require('../middlewares/render');
var loginMW = require('./login');
var recipeMW = require('./recipe');
var checkauthMW = require('../middlewares/checkauth');

var mainMW = express.Router();

mainMW.use(checkauthMW);
mainMW.use(loginMW);
mainMW.use(recipeMW);

module.exports = mainMW;