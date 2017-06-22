var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));


//creates the database
app.get('new/:urlToShorten(*)', function(req, res, next){
  var urlToShorten = req.params.urlToShorten;
  
  return res.json(urlToShorten);
});






var listener = app.listen(process.env.PORT || 1337, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});