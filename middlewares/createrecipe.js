var recipeModel = require('../models/recipe');
module.exports = function (req, res, next) {
    //not enough parameter
    if ((typeof req.body === 'undefined') || (typeof req.body.name === 'undefined') ||
        (typeof req.body.ingredients === 'undefined') || (typeof req.body.steps === 'undefined')) {
        return next();
    }

    //lets find the user
    recipeModel.findOne({
        name: req.body.name
    }, function (err, result) {

        if ((err) || (result !== null)) {
            res.tpl.error.push('Recept mar hasznalatban!');
            return next();
        }

        if (req.body.name.length < 3) {
            res.tpl.error.push('Recept legalabb 3 karakter hosszu legyen!');
            return next();
        }

        //create recipe
        var newRecipe = new recipeModel();
        newRecipe.name = req.body.name;
        newRecipe.ingredients = req.body.ingredients.split('\n');
        newRecipe.steps = req.body.steps.split("\n");
        newRecipe._assignedto = req.session.userid;
        newRecipe.save(function (err) {
            return res.redirect('/');
        });
    });
};