
var Permission = require('./permission').Permission;

/* Define los permisos que pueden ser asignados a un Rol*/

var module_names = {
    0: "nothing",
    1: "userAdministration"
}

var module_urls = {
  0: [],
  1: [
      "/addUser",
      "/getUsers"
  ]

};


var PermissionFactory = {
   createPermission: function(permissionId) {
        return new Permission(permissionId, module_names[permissionId], module_urls[permissionId]);
    },
    createPermissionGroup: function(permissionCsvList) {
        var permissionArray = permissionCsvList.split(",");

        var permission = new Permission("GROUP", [], []);
        permissionArray.forEach(function(permissionId){
            permission.allowedModules = permission.allowedModules.concat(module_names[permissionId]);
            permission.allowedUrls = permission.allowedUrls.concat(module_urls[permissionId]);
        });

        return permission;
    }
};


module.exports = PermissionFactory;
