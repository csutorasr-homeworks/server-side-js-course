module.exports = function (req, res, next) {
    if (typeof res.tpl.recipe === 'undefined' || !res.tpl.isOwner) {
        return next();
    }

    res.tpl.recipe.remove(function (err) {
        if (err) {
            return next(err);
        }
        //redirect
        res.redirect('/');
    });
}