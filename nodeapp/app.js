var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();

// Logger
app.use(morgan('combined'));

// View Engine
app.set('view engine', 'jade');
app.set('views', './views');

// Static Directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic Route
app.get('/', function(req, res) {
	res.render('index', {});
});

// Start Server on Port 3000
app.listen(3000, function() {
	console.log("Listening on port 3000!");
});
