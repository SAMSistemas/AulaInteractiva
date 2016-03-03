var orm = require("../orm");
var encryption = require("../../security/encryption_util");
var notificationDao = require('./notification_dao');

var model = orm.Person; // Modelo utilizado por este DAO

var PersonDAO = {

    /* TEST */
    addPerson: function(personData){
        model.create(personData).then(function(person){
            console.log("Persona Agregada!");
            notificationDao.createNotification({user_id:"1", description: JSON.stringify(person), action:""});
        })
    },

    getPersons: function() {
        return model.findAll();

    }
    /* TEST */

};


module.exports = PersonDAO;