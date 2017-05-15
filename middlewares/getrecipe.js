var recipeModel = require('../models/recipe');
module.exports = function (req, res, next) {
    recipeModel.findOne({
        _id: req.params.id
    }).populate('_assignedto').exec(function (err, result) {
        if ((err) || (!result)) {
            return res.redirect('/');
        }
        res.tpl.recipe = result;
        res.tpl.isOwner = (result._assignedto.id === req.session.userid);
        return next();
    });
}