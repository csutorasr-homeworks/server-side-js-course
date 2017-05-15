var recipeModel = require('../models/recipe');
module.exports = function (req, res, next) {
    res.tpl.recipes = [];
    recipeModel.find({

    }).populate('_assignedto').exec(function (err, results) {
        if (err) {
            return next(new Error('Error getting recipes'));
        }

        res.tpl.recipes = results;
        return next();
    });
}