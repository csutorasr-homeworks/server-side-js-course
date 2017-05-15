module.exports = function (req, res, next) {
    if (typeof res.tpl.recipe === 'undefined') {
        return res.redirect('/');
    } else if (!res.tpl.isOwner) {
        return res.redirect('/recept/' + res.tpl.recipe._id);
    }
    //not enough parameter
    if ((typeof req.body === 'undefined') || (typeof req.body.name === 'undefined') ||
        (typeof req.body.ingredients === 'undefined') || (typeof req.body.steps === 'undefined')) {
        return next();
    }

    res.tpl.recipe.name = req.body.name;
    res.tpl.recipe.ingredients = req.body.ingredients.split('\n');
    res.tpl.recipe.steps = req.body.steps.split("\n");
    res.tpl.recipe.save(function (err) {
        if (err) {
            return next(err);
        }
        return res.redirect('/recept/' + res.tpl.recipe._id);
    });
}