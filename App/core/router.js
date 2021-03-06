var express = require("express");
var bodyParser = require('body-parser');

var server_config = require("./server_config");
var userDAO = require('../persistence/dao/user_dao');
var notificationDao = require('../persistence/dao/notification_dao');
var roleDAO = require('../persistence/dao/role_dao');

var login_security = require("../security/login_security");
var permission_security = require("../security/permission_security");
var services = require("../domain/services"); 


/* Router Initialization*/
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


/* Interception Filters */
roleDAO.addRole("ADMIN","1");
roleDAO.addRole("HOST","0");

userDAO.addUser("Test", "1234","1");
userDAO.addUser("Test2", "4321","0");


/* Backend Mappings */

router.get("/", function(request, response){
	response.redirect("/index");
});

router.get("/index", login_security.onlyNotAuthenticated, function(request, response){

	response.sendFile("login.html", {root: server_config.STATIC_CONTENT_DIR});
});

router.post("/login", login_security.onlyNotAuthenticated, login_security.login);

router.get("/loginSuccess", login_security.onlyAuthenticated, function(request, response){
	console.log("Login Succeeded!");
	console.log(request.session);
	response.json({redirect: "/dashboard"});
});

router.get("/loginFailure", function(request, response){
	console.log("Login Failed...");
	console.log(request.session);
	response.end();
});

router.get("/dashboard", login_security.onlyAuthenticated, function(request, response){
	response.sendFile("home.html", {root: server_config.STATIC_CONTENT_DIR});
});

router.get("/logout", login_security.onlyAuthenticated, function(request, response){
	request.logout();
	response.redirect("/index");
});

router.get("/error", function(request, response){
	response.write("Unauthorized...");
	response.end();
});

// SOLO DISPONIBLE PARA EL ROL ADMIN, MOVER LOGICA A DOMAIN
router.get("/getUsers", login_security.onlyAuthenticated, permission_security.validateRoleAuthorization, function( request,response){
	userDAO.getUsers().then(function(users){
		console.log(users);
		response.json(users);
	})
});

router.post("/addUser", login_security.onlyAuthenticated, permission_security.validateRoleAuthorization, function (request,response) {
	var user = request.body;
	userDAO.addUser(user.username, user.password);
	userDAO.getUserByName(user.username).then(function(userData){
		var userId = userData.dataValues.user_id;
		notificationDao.addNotification(userId, "Welcome!!", "");
	});

	response.end();
});




module.exports = router;