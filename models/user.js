var Schema = require('mongoose').Schema;
var db = require('../config/db');

var User = db.model('User', {
  name: String,
  password: String,
  favFood: String
});

module.exports = User;