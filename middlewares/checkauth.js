module.exports = function (req, res, next) {
    if (req.session.userid) {
        res.tpl.loggedin = true;
    }
    else {
        res.tpl.loggedin = false;
    }
    next();
};