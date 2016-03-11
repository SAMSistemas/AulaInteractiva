module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
    },
    role_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING

  });

  return User;
};

