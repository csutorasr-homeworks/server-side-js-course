module.exports = function (req, res, next) {
    if (typeof res.tpl.recipe === 'undefined') {
        return res.redirect('/');
    } else if (!res.tpl.isOwner) {
        return res.redirect('/recept/' + res.tpl.recipe._id);
    }
    res.tpl.modifiable = {
        name: res.tpl.recipe.name,
        ingredients: res.tpl.recipe.ingredients.join('\n'),
        steps: res.tpl.recipe.steps.join('\n')
    };
    next();
}