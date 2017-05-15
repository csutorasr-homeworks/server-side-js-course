var defaultUserModel = require('../models/user');
module.exports = function (userModel) {
    userModel = userModel || defaultUserModel;
    return function (req, res, next) {
        //not enough parameter
        if ((typeof req.body === 'undefined') || (typeof req.body.user === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            return next();
        }
        //lets find the user
        userModel.findOne({
            name: req.body.user
        }, function (err, result) {
            if ((err) || (!result)) {
                res.tpl.error.push('Felhasznalo nincs regisztrálva!');
                return next();
            }

            //check password
            if (result.password !== req.body.password) {
                res.tpl.error.push('Hibás jelszó!');
                return next();
            }

            //login is ok, save id to session
            req.session.userid = result._id;

            //redirect to / so the app can decide where to go next
            return res.redirect('/');
        });
    };
};