var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var assignments = new Schema ({
  assignment_number: Number,
  first_name: String,
  last_name: String,
  score: Number,
  date_completed: {type: Date, default: Date.now},
  completed: Boolean
});


var Student = mongoose.model('studentscollections', assignments);

module.exports=Student;
