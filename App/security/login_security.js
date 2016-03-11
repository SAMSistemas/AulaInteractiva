/* Inicializa el comportamiento de passport y define callbacks de seguridad de login*/

var passport = require('passport');
var strategy = require("./login_strategy");
var permissionFactory = require('./factory/permission_factory');

/* Passport initialization */
// Callback llamado cuando se crea la sesión
passport.serializeUser(function(user, done) {
  var currentUser = user.user_id;

  user.getUserRole().then(function(role){
      var permissionCsv = role.dataValues.permissions;
      done(null, {user_id: currentUser, permission: permissionFactory.createPermissionGroup(permissionCsv)});

  });

});

// Callback llamado en cada request
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