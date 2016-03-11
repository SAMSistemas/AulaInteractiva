module.exports = function(models){

    models.Notification.hasOne(models.User, {
        foreignKey: 'user_id',
        as: 'NotifiedUser'
    });

    models.User.hasOne(models.Role, {
        foreignKey: 'role_id',
        as: 'UserRole'
    });



}



