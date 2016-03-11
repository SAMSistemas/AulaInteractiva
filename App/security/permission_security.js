
var permission_security = {

    validateRoleAuthorization: function(request, response, next) {

        var userPermission = request.session.passport.user.permission;
        var allowedUrls = userPermission.allowedUrls;
        var requestedRoute = request.route.path;

        console.log("PermissionSecurity::ValidateRoleAuthorization ->"+ requestedRoute + ":" + allowedUrls);

        var isUrlAllowed = false;

        isUrlAllowed = allowedUrls.some(function(url) {
            if(url == requestedRoute)
                return true;

        });

        if(isUrlAllowed) {
            console.log("PermissionSecurity::ValidateRoleAuthorization -> Url is allowed")
            next();
        }
        else {
            console.log("PermissionSecurity::ValidateRoleAuthorization -> Url is not allowed")
            response.redirect("/error");

        }
    }
}

module.exports = permission_security;