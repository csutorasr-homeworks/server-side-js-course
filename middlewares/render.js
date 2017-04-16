module.exports = function (file) {
    return function (req, res, next) {
        res.render(file, {
            tpl: res.tpl
        });
    };
};