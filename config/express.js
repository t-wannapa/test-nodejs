var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var validator = require('express-validator');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require("passport");
//var config = require('./config');

module.exports = function() {
	var app = express();
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else {
		app.use(compression);
	}

	app.use(session({
		secret: 'secret_key',
		resave: false,
		saveUninitialized: true
	}));

	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());
	app.use(validator());  // ใส่ต่อจาก bodyParser ทันที

	app.set('views', ['./app/views', './public']);
	app.set('view engine', 'jade');

	require('../app/routes/index.server.routes')(app);
	require('../app/routes/user.server.routes')(app)
	require('../app/routes/partial.server.routes')(app);

	app.use(sass({
		src: './sass',
		dest: './public/css',
		outputStyle: 'compressed',
		prefix: '/css'
	}));

	app.use(express.static('./public')); // ไว้หลัง rount จะดี
	return app;
}