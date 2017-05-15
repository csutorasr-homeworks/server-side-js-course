module.exports = function (req, res, next) {
    if (typeof req.session.userid === 'undefined') {
        return res.redirect('/belepes.html');
    }
    return next();
};