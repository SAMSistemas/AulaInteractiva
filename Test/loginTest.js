var assert = require('assert');

var encrypt = require('../App/security/encryption_util');


describe("Login Functionality Test ", function(){
    describe("Password encryption test", function(){
        var targetUser;

        before(function() {
            targetUser = {username: 'Test', password:'1234'};

        });
        it("Target user -> Test/1234, input password is correct, password compare must match", function(){

            var inputUser = {username: 'Test', password:'1234'};
            var dbUser = {username: 'Test', password:encrypt.cryptPassword(targetUser.password)};

            assert.equal(true, encrypt.comparePassword(inputUser.password, dbUser.password));

        });

        it("Target user -> Test/1234, input password is not correct, password compare must not match", function(){

            var inputUser = {username: 'Test', password:'124'};
            var dbUser = {username: 'Test', password:encrypt.cryptPassword(targetUser.password)};

            assert.equal(false, encrypt.comparePassword(inputUser.password, dbUser.password));

        });
    });

    describe("Routes access policy test",function(){



        before(function(){


        });

        it("User is authenticated, access to authUrls must be allowed",function(){



        });


        it("User is authenticated, access to noAuthUrls must redirect to /dashboard",function(){

        });

        it("User is not authenticated, access to noAuthUrls must be allowed",function(){

        });

        it("User is not authenticated, access to authUrls must redirect to /error",function(){

        });

    })

});
