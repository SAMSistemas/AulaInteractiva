var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller("ListPeopleController",function PeopleCtrl($scope, $http) {
    $scope.people = [];

    $scope.loadPeople = function() {
        var httpRequest = $http({
            method: 'GET',
            url: '/getUsers'
            
        }).success(function(data, status) {
            console.log(JSON.stringify(data));
            $scope.people = data;
        });
    };
    $scope.loadPeople();
});


/*--------PeoplerSignInController----------
PATH: /addPerson
VIEW: peoplerSignIn.html
-----------------------------------------*/
myAppControllers.controller("AddPeopleController", function PeoplerSignInController($scope,$http){
    $scope.sendData = function() {
        var user = JSON.stringify($scope.user);

        $http.post("/addUser",user).success(function (data,status,headers){
            window.location = "#/viewPeople";
        })
    };
});