var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
var shortUrl = require('./models/shortUrl'); 
app.use(bodyParser.json());
app.use(cors());

//connect to database
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shortUrls');
mongoose.connect('mongodb://localhost/shortUrls');

//use local files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/js'));




//creates the database
app.get('/new/:urlToShorten(*)', function(req, res, next){
  var urlToShorten = req.params.urlToShorten;
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = expression;
  if(regex.text(urlToShorten)===true){
    return res.json(urlToShorten);
  } else {
    return res.json({urlToShorten: 'Failed'});
  }
  
  
  // return res.json(urlToShorten);
});






var listener = app.listen(process.env.PORT || 1337, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});