var userModel = require('../models/user');
module.exports = function (req, res, next) {
    //not enough parameter
    if ((typeof req.body === 'undefined') || (typeof req.body.name === 'undefined') ||
      (typeof req.body.password === 'undefined') || (typeof req.body.favFood === 'undefined')) {
      return next();
    }

    //lets find the user
    userModel.findOne({
      name: req.body.name
    }, function (err, result) {

      if ((err) || (result !== null)) {
        res.tpl.error.push('Felhasznalo hasznalatban!');
        return next();
      }

      if (req.body.name.length < 3) {
        res.tpl.error.push('Felhasznalonev legalabb 3 karakter hosszu legyen!');
        return next();
      }

      //create user
      var newUser = new userModel();
      newUser.name = req.body.name;
      newUser.password = req.body.password;
      newUser.favFood = req.body.favFood;
      newUser.save(function (err) {
        return res.redirect('/belepes.html');
      });
    });
};