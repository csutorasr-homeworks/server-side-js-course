/**
 * Check if the user can set new password.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};