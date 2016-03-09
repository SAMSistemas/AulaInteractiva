module.exports = function(server, session){
    var notificationDao = require('../persistence/dao/notification_dao');
    var ios = require('express-socket.io-session');
    var eventLoop;

    /* Initialize Websocket attached to server */

    var push_server = require("socket.io")(server);
    push_server.use(ios(session));

    push_server.on("connection", function(socket){
        console.log("Websocket connection open");

        var currentUser = socket.handshake.session.passport.user;
        eventLoop = setInterval(function(){
            notificationDao.getNotificationByUserId(currentUser).then(function(notificationList){
                notificationList.forEach(function(notification){
                    /*notification.getNotifiedUser().then(function(user){
                        console.log(user);
                    })*/
                    socket.emit("notify", notification);
                })
            });

        }, 60000);

        socket.on("disconnect", function(){
            console.log("Websocket connection closed");
            clearInterval(eventLoop);
        });
    });

    return push_server;

}


