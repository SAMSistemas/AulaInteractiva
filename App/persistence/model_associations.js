module.exports = function(models){

    models.Notification.hasOne(models.User, {
        foreignKey: 'user_id',
        as: 'NotifiedUser'
    });
}



