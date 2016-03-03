module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  });

  return Person;
};

