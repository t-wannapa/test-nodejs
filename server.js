process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var app = express();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000');


//#=================================================
//# create by use connect
/*
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