var expect = require('chai').expect;
var forgotpassMW = require('../middlewares/forgotpass');
describe('forgotpass middleware ', function () {
    var fakeUserModel = {
        findOne: function (some, cb) {
            if (some && some.name === 'asd')
                cb(undefined, { password: 'asdpw', name: 'asd', _id: '123abc', favFood: 'cat' });
            else
                cb(undefined, null);
        }
    };
    it('should set session', function (done) {
        var req = { body: { name: 'asd', favFood: 'cat' }, session: {} }; var res = { tpl: { error: [] } };
        forgotpassMW(fakeUserModel)(req, res, function (err) {
            expect(res.tpl.password).to.eql('asdpw');
            expect(err).to.eql(undefined);
            done();
        });
    });
    it('should show not registered', function (done) {
        var req = { body: { name: 'a', favFood: 'cat' }, session: {} }; var res = { tpl: { error: [] } };
        forgotpassMW(fakeUserModel)(req, res, function (err) {
            expect(res.tpl.error).to.contains('Felhasznalo nincs regisztrálva!');
            expect(err).to.eql(undefined);
            done();
        });
    });
    it('should show bad password', function (done) {
        var req = { body: { name: 'asd', favFood: 'a' }, session: {} }; var res = { tpl: { error: [] } };
        forgotpassMW(fakeUserModel)(req, res, function (err) {
            expect(res.tpl.error).to.contains('Hibás kedvenc étel!');
            expect(err).to.eql(undefined);
            done();
        });
    });
    it('should go on', function (done) {
        var req = { session: {} }; var res = { tpl: { error: [] } };
        forgotpassMW(fakeUserModel)(req, res, function (err) {
            expect(err).to.eql(undefined);
            done();
        });
    });
});