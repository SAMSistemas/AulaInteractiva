var app = angular.module('myApp', ['ngRoute',
                                    'myAppControllers']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/viewPeople', {
                templateUrl: 'views/peopleList.html',
                controller: 'ListPeopleController'
            }).
            when('/addPerson',
            {
                templateUrl:'views/peoplerSignIn.html',
                controller:'AddPeopleController'
            }).
            otherwise({
                redirectTo: '/viewPeople'
            }
        );
    }
]);