var expect = require('chai').expect;
var authenticateMW = require('../middlewares/authenticate');
describe('authenticate middleware ', function () {
    var fakeUserModel = {
        findOne: function (some, cb) {
            if (some && some.name === 'asd')
                cb(undefined, { password: 'asdpw', name: 'asd', _id: '123abc', favFood: 'cat' });
            else
                cb(undefined, null);
        }
    };
    it('should set session', function (done) {
        var req = { body: { user: 'asd', password: 'asdpw' }, session: {} }; var res = {
            tpl: { error: [] }, redirect: function () {
                expect(req.session.userid).to.eql('123abc');
                done();
            }
        };
        authenticateMW(fakeUserModel)(req, res, function (err) {
        });
    });
    it('should show not registered', function (done) {
        var req = { body: { user: 'a', password: 'asdpw' }, session: {} }; var res = { tpl: { error: [] } };
        authenticateMW(fakeUserModel)(req, res, function (err) {
            expect(res.tpl.error).to.contains('Felhasznalo nincs regisztrálva!');
            expect(err).to.eql(undefined);
            done();
        });
    });
    it('should show bad password', function (done) {
        var req = { body: { user: 'asd', password: 'a' }, session: {} }; var res = { tpl: { error: [] } };
        authenticateMW(fakeUserModel)(req, res, function (err) {
            expect(res.tpl.error).to.contains('Hibás jelszó!');
            expect(err).to.eql(undefined);
            done();
        });
    });
    it('should go on', function (done) {
        var req = { session: {} }; var res = { tpl: { error: [] } };
        authenticateMW(fakeUserModel)(req, res, function (err) {
            expect(err).to.eql(undefined);
            done();
        });
    });
});