/**
 * Check if the user can be registered. Redirects to login.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};