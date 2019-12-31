 process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000');


//#=================================================
//# create by use connect
/*
curl -X POST -d '{\"firstName\": \"First\"}'  localhost:3000/user
curl -X POST -H "Content-Type: application/json" -d '{"firstName": "First", "lastName": "Last", "username": "myusername", "email": "test@test.com", "password": "password"}' localhost:3000/user

var connect = require('connect');
var app = connect();

var logger = function(req, res, next) {
	console.log(req.method, req.url);

	next();
}

var helloWorld = function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
}

var goodbyeWorld = function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Goodbye World');
}
// middleware
app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(3000);
console.log('Server running at http://localhost:3000');
*/

//#=================================================
//# create web service
/*
var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('Hello World');
}).listen(3000);

console.log('Server running at http://localhost:3000');
*/