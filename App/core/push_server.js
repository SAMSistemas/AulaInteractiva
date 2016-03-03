module.exports = function(server){
    var notificationDao = require('../persistence/dao/notification_dao');

    /* Initialize Websocket attached to server */

    var push_server = require("socket.io")(server);

    push_server.on("connection", function(socket){
        console.log("Websocket connection open");
        setInterval(function(){

            notificationDao.getNotificationByUserId("1").then(function(notificationList){
                notificationList.forEach(function(notification){
                    socket.emit("notify", notification);
                })
            });

        }, 60000);

        socket.on("disconnect", function(){
            console.log("Websocket connection closed");
        });
    });

    return push_server;

}


