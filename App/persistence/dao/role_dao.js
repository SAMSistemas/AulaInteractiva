var orm = require("../orm");

var model = orm.models.Role; // Modelo utilizado por este DAO

var RoleDAO = {

	addRole: function(roleName, permissions) {
		console.log("RoleDAO::addRole");
		model.create({name: roleName, permissions: permissions}).then(function(){
			console.log("RoleDAO::addRole -> role created correctly!");
		});
	},

	getRoleById: function(roleId) {
		console.log("RoleDAO::getRoleById -> "+ roleId);
		return model.findOne({where:{role_id:roleId}});
	},

	getRoleByName: function(name) {
		console.log("RoleDAO::getRoleByName -> "+ name);
		return model.findOne({where:{name:name}});
	},

	getRoles: function() {
		console.log("RoleDAO::getRoles");
		return model.findAll();
	}
};


module.exports = RoleDAO;