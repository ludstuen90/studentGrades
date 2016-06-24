var express = require('express');
var app= express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var Student = require('../models/assignments');


app.use( bodyParser.json() );


var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

app.listen(8080, 'localhost', function(req, res){
  console.log("Server is listening on port 8080, thank you very much!");
});
app.get('/', function(req,res){
  console.log("In the base url, and it's so nice");
  res.sendFile(path.resolve('views/index.html'));
});

app.post('/newStudentPost', function(req, res){

var studentAdded = new Student({
  assignment_number: req.body.assignment_number,
  first_name: req.body.first_name,
  last_name: req.body.last_name,
  score: req.body.score,
  date_completed: req.body.date_completed,
  completed: req.body.completed
});


studentAdded.save(function(err){
  if (err){
    console.log("whoops, got an error of " + err);
    res.sendStatus(500);
  }else {
    console.log("Student saved successfully!");
    res.sendStatus(200);
  }
});


console.log("The studenta added is: " + studentAdded);

  console.log("Made it to student post");
  console.log("We have a new student named " +req.body.first_name+ " " + req.body.last_name);
  console.log("With a score of " + req.body.score);
  console.log("Assignment No. " + req.body.assignment_number);
  console.log("Completed on " + req.body.date_completed);
  console.log("But did they actually do it? " + req.body.completed);
});

app.use(express.static( 'public'));

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});
