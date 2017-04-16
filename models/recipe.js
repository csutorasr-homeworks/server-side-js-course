var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Recipe = db.model('Recipe', {
  name: String,
  _assignedto: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  ingredients: [ String ],
  steps: [ String ]
});

module.exports = Recipe;