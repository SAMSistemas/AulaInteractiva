
var Permission = function(permissionId, allowedModule, allowedUrls) {
    this.id = permissionId;
    this.allowedModules = allowedModule;
    this.allowedUrls = allowedUrls;

};

module.exports.Permission = Permission;