var app = angular.module("routerProgram", ['ui.router']);
app.config(function($stateProvider) {
    var homeState = {
        name: "home",
        url: "/home",
        templateUrl: "home.html",
        controller: "homeCtrl"
    };
    var contactState = {
        name: "contact",
        url: "/contact",
        templateUrl: "contact.html",
        controller: "contactCtrl"
    };
    var emailState = {
        name: "email",
        url: "/email",
        templateUrl: "email.html",
        controller: "emailCtrl"
    };
    var addressState = {
        name: "address",
        url: "/address",
        templateUrl: "address.html",
        controller: "addressCtrl"
    };
    $stateProvider.state(homeState);
    $stateProvider.state(contactState);
    $stateProvider.state(emailState);
    $stateProvider.state(addressState);
});