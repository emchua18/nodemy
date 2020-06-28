 // server.js
 var express = require('express');
 var app = express();
 var path = require('path');

 var port = 3000;

 
 // start the server
 app.listen(port, function() {
   console.log('app started');
 });
 
app.use(express.static('public'));

 
// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});
app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/register.html'));
});
app.get('/reset', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/reset.html'));
});
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/home.html'));
});