var orm = require("../orm");

var model = orm.models.Notification; // Modelo utilizado por este DAO

var NotificationDAO = {

	addNotification: function(userId, description, action) {
		model.create({user_id: userId, description: description, action: action}).then(function(){
			console.log("NotificationDAO::addNotification -> notification created correctly!");
		});
	},

	getNotificationByUserId: function(userId) {
		console.log("NotificationDAO::getNotificationByUserId -> " + userId);
		return model.findAll({where: {user_id: userId}});
	}
};


module.exports = NotificationDAO;