/* Initialize ORM  */

var path = require("path");
var Sequelize = require("sequelize");
var env = "development";
var config = require(path.join(__dirname,"config", "sequelize_config.json"))[env];

console.log("ORM@ " + JSON.stringify(config));

var sequelize = new Sequelize(config.database, config.username, config.password, config);

var models = [
  'User',
  'Notification'
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/models/' + model);
});

module.exports.sequelize = sequelize;
