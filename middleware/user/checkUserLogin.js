/**
 * Check if the user can be logged in. Redirects to restricted area if the given credentials matches any user.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};