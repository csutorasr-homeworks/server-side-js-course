var express = require('express');
var inverseAuthMW = require('./../middleware/generic/inverseAuth');
var checkUserLoginMW = require('../middleware/user/checkUserLogin');
var checkUserRegistrationMW = require('../middleware/user/checkUserRegistration');
var checkUserForgetPasswordMW = require('../middleware/user/checkUserForgetPassword');
var renderMW = require('../middleware/generic/render');
var authMW = require('../middleware/generic/auth');
var logoutMW = require('../middleware/generic/logout');
var getRecepieListMW = require('../middleware/recepie/getRecepieList');
var getRecepieMW = require('../middleware/recepie/getRecepie');

var loginMW = express.Router();

var objectRepository = {
};

/**
 * Main page (Recepie list)
 */
loginMW.get('/',
    getRecepieListMW(objectRepository),
    renderMW("index"));

/**
 * Recepie page
 */
loginMW.get('/recepie/:recepieid',
    getRecepieMW(objectRepository),
    renderMW("recepie"));

/**
 * Login page
 */
loginMW.use("/belepes.html",
    inverseAuthMW(objectRepository),
    checkUserLoginMW(objectRepository),
    renderMW('login'));

/**
* Logout page
*/
loginMW.get('/logout',
    logoutMW(objectRepository),
    function (req, res, next) {
        res.redirect('/');
    }
);

/**
 * Registration
 */
loginMW.use('/register',
    inverseAuthMW(objectRepository),
    checkUserRegistrationMW(objectRepository),
    renderMW(objectRepository, 'register'));

/**
 * Forget Password
 */
loginMW.use('/forget',
    inverseAuthMW(objectRepository),
    checkUserForgetPasswordMW(objectRepository),
    renderMW(objectRepository, 'forget'));

module.exports = loginMW;