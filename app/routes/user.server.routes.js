var user = require('../controllers/user.server.controller');
var passport = require('passport');

module.exports = function(app) {
	
	app.route('/login')
		.get(user.renderLogin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/login',
			failureFlash: true
		}));

	app.post('/logout', user.logout);

	app.route('/signup')
		.get(user.renderSignup)
		.post(user.signup);
	
	app.route('/user')
		.post(user.create)
		.get(user.list);

	app.get('/oauth/facebook', passport.authenticate('facebook', {
			failureRedirect: '/login',
			scope: 'email' 
		}
	));

	app.get('/oauth/facebook/callback', 
		passport.authenticate('facebook', { 
			successRedirect: '/'
		}
	));

	app.get('/oauth/google', passport.authenticate('google', {
		scope: [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email'
		],
		failureRedirect: '/login'
	}));
	app.get('/oauth/google/callback', passport.authenticate('google', {
		failureRedirect: '/login',
		successRedirect: '/'
	}))
};