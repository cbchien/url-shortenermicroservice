//model of document for shortURL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
  originalUul: String,
  shortUrl: String
}, {timestamps: true});

var ModelClass = mongoose.model('shortUrl', urlSchema);

module.exports = ModelClass;