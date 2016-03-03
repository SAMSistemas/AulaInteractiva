module.exports = function(sequelize, DataTypes) {
  var Notification = sequelize.define("Notification", {
    user_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    action: DataTypes.STRING,
    viewed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Notification;
};

// {type:'redirect', parameter:'/login'}