/* Inicializa el comportamiento de passport y define callbacks de seguridad de login*/

var passport = require('passport');
var strategy = require("./login_strategy");

/* Passport initialization */
passport.serializeUser(function(user, done) {
  done(null, user.user_id);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(strategy);

var login_security = {

	login: passport.authenticate("local", {
	    successRedirect: "/loginSuccess",
	    failureRedirect: "/loginFailure"
	}),

	onlyAuthenticated: function(request, response, next) {
		if(request.isAuthenticated())
			return next();
		response.redirect("/error");
	},

	onlyNotAuthenticated: function(request, response, next) {
		if(request.isAuthenticated())
			response.redirect("/dashboard");
		else
			return next();
	}

};


module.exports = login_security;