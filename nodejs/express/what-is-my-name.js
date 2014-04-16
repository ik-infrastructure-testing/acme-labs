var express = require('express');
var app = express();

// ---

app.get('/', function(req, res){
	res.send('Hello ' + req.query.name);
});

// ---

var server = app.listen(3000, function() {
	console.log('listening on port %d', server.address().port);
});

// ---
