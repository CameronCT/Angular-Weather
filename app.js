console.log("Starting Node & Express!");

/* Dependancies */
var express         = require('express');
var app             = express();
var port  	        = process.env.PORT || 3000;

/* Configuration */
app.use(express.static(__dirname + '/public'));

/* Initialize */
app.listen(port);
console.log("Server started on port " + port + "!");
