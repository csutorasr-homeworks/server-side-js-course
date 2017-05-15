var defaultUserModel = require('../models/user');
module.exports = function (userModel) {
    userModel = userModel || defaultUserModel;
    return function (req, res, next) {
        //not enough parameter
        if ((typeof req.body === 'undefined') || (typeof req.body.name === 'undefined') ||
            (typeof req.body.favFood === 'undefined')) {
            return next();
        }
        //lets find the user
        userModel.findOne({
            name: req.body.name
        }, function (err, result) {
            if ((err) || (!result)) {
                res.tpl.error.push('Felhasznalo nincs regisztrálva!');
                return next();
            }

            //check favFood
            if (result.favFood !== req.body.favFood) {
                res.tpl.error.push('Hibás kedvenc étel!');
                return next();
            }
            res.tpl.password = result.password;
            return next();
        });
    };
};