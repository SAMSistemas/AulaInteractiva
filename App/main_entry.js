/* App Initialization Main File */

//Inicializo la DB y el ORM
var orm = require("./persistence/orm");

//Sincroniza los modelos asociados al ORM (persitence/models) y crea las tablas faltantes
orm.sequelize.sync({force: true}).then(function(){ 
	require("./core/server");
});