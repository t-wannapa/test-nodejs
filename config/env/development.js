module.exports = {
	debug: true,
	mongoUri: 'mongodb://localhost/test',
	sessionSecret: 'dev_secret_key',
	facebook: {
		clientID: '602099527023689',
		clienSecret: '3b88e6a609ceccc046fc6d12e562992e',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	google: {
		clientID: '137999462647-17sdvbun30hdjn8pgjuuk351u8e9lq4j.apps.googleusercontent.com',
		clienSecret: 'mAM9vBAmVnCJlZhQTMb7rJ_H',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
}