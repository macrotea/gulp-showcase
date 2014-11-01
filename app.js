var express = require('express');
var path = require('path');
var c = require('child_process')
var port = process.env.PORT || 3000;

var app = express();
app.use(express.static(path.resolve('.')));

app.get('/', function(req, res) {
  res.redirect('/index.html');
});

app.listen(port);

console.log('The nodejs app demo is running on port : ' + port);

c.exec("C:\\Users\\Lenovo\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe http://localhost:" + port + "/");