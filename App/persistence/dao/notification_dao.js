var orm = require("../orm");

var model = orm.Notification; // Modelo utilizado por este DAO

var NotificationDAO = {

	createNotification: function(userId, description, action) {
		model.create({user_id: userId, description: description, action: action}).then(function(){
			console.log("NotificationDAO::createNotification -> notification created correctly!");
		});
	},
	getNotificationByUserId: function(userId) {
		console.log("NotificationDAO::getNotificationByUserId -> " + userId);
		return model.findAll({where: {user_id: userId}});
	}
};


module.exports = NotificationDAO;