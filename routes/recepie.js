var express = require('express');
var renderMW = require('../middleware/generic/render');
var authMW = require('../middleware/generic/auth');
var logoutMW = require('../middleware/generic/logout');
var getRecepieMW = require('../middleware/recepie/getRecepie');
var updateRecepieMW = require('../middleware/recepie/updateRecepie');
var deleteRecepieMW = require('../middleware/recepie/deleteRecepie');
var newRecepieMW = require('../middleware/recepie/newRecepie');

var loginMW = express.Router();

var objectRepository = {
};

/**
 * New recepie page
 */
loginMW.get('/recepie/:recepieid/edit',
    authMW(objectRepository),
    newRecepieMW(objectRepository),
    renderMW("newrecepie"));


/**
 * Edit recepie page
 */
loginMW.get('/recepie/:recepieid/edit',
    authMW(objectRepository),
    getRecepieMW(objectRepository),
    updateRecepieMW(objectRepository),
    renderMW("updaterecepie"));

/**
 * Delete recepie page
 */
loginMW.get('/recepie/:recepieid/delete',
    authMW(objectRepository),
    getRecepieMW(objectRepository),
    deleteRecepieMW(objectRepository),
    renderMW("deleterecepie"));

module.exports = loginMW;