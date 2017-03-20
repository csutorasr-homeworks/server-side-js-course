/**
 * Deletes the recepie if needed. Redirects if deleted.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};