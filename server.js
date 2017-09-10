var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('dist'))

// viewed at http://localhost:9000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
    res.sendFile(path.join(__dirname + '/dist/bundle.js'));
});

app.listen(9000);
