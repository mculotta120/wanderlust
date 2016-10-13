console.log("client.js is sourced");

var myApp = angular.module('myApp', [ 'ngRoute'] );

console.log("is there a problem here?");

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
      when("/home", {
          templateUrl: "/views/routes/home.html",
          controller: "homeController"
      }).
      when("/who", {
        templateUrl: "/views/routes/who.html",
        controller: "homeController"
      }).
      when("/free-america", {
        templateUrl: "/views/routes/free-america.html",
        controller: "homeController"
      }).
      when("/glossary", {
        templateUrl: "/views/routes/glossary.html",
        controller: "homeController"
      }).
      when("/characters", {
        templateUrl: "/views/routes/characters.html",
        controller: "homeController"
      }).
      when("/content", {
        templateUrl: "/views/routes/content.html",
        controller: "homeController"
      }).
      when("/art", {
        templateUrl: "/views/routes/art.html",
        controller: "homeController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
