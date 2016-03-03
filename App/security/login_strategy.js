var LocalStrategy = require('passport-local').Strategy;
var userDAO = require('../persistence/dao/user_dao');
var encryption = require("./encryption_util");

var strategy = new LocalStrategy(function(username, password, done) {
	process.nextTick(function(){
		userDAO.getUserByName(username).then(function(user) {

			if(!user){
				console.log("LocalStrategy -> User " + user + " not found");
				return done(null,false); //Indico que falló la autenticación
			}
			if(!encryption.comparePassword(password, user.password)) {
				console.log("LocalStrategy -> Password " + password + " is incorrect");
				return done(null, false);
			}

			return done(null, user);
		});
 	
	});
});

module.exports = strategy;