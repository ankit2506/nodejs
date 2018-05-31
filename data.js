var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var ankitSchema = new Schema({
  	name: String,
  	value: String
  });

var Ankit = mongoose.model('Ankit', ankitSchema);
module.exports=Ankit;
