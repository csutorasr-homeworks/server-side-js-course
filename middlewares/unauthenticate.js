var userModel = require('../models/user');
module.exports = function (req, res, next) {
    req.session.destroy(function (err) {
        return res.redirect('/belepes.html');
    });
};