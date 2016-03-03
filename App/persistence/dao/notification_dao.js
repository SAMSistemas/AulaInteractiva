var orm = require("../orm");

var model = orm.Notification; // Modelo utilizado por este DAO

var NotificationDAO = {

	createNotification: function(notificationData) {
		model.create(notificationData).then(function(){
			console.log("NotificationDAO::createNotification -> notification created correctly!");
		});
	},
	getNotificationByUserId: function(userId) {
		console.log("NotificationDAO::getNotificationByUserId -> " + userId);
		return model.findAll({where: {user_id: userId}});
	}
};


module.exports = NotificationDAO;