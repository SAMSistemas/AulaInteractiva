var orm = require("../orm");
var encryption = require("../../security/encryption_util");

var model = orm.models.User; // Modelo utilizado por este DAO

var UserDAO = {

	addUser: function(username, password) {
		console.log("UserDAO::addUser -> " + username);
		var hashedPassword = encryption.cryptPassword(password);
		model.create({username: username, password: hashedPassword}).then(function(){
			console.log("UserDAO::addUser -> User created correctly!");
		});
	},
	getUserByName: function(username) {
		console.log("UserDAO::getUserByName -> " + username);
		return model.findOne({where: {username: username}});
	},

	getUsers: function() {
		console.log("UserDAO::getUsers");
		return model.findAll();
	}


};


module.exports = UserDAO;