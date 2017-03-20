var express = require('express');
var outsideMW = require('./outside');
var recepieMW = require('./recepie');

var mainMW = express.Router();

mainMW.use(outsideMW);
mainMW.use(recepieMW);

module.exports = mainMW;