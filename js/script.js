/**
 * Created by gopesh on 23/10/13.
 */
var myApp = angular.module('projectManagementApp',[]);
myApp.factory('greeting',function(){
    return {
        sayHi: function(name){
            alert("Hiii"+name);
        },
        sayBy:function(name){
            alert("Bye"+name);
        }
    }
});
myApp.controller('LoginCtrl',function($scope,greeting){
    $scope.welcome = "Welcome to Angular js";
    //greeting.sayHi("Gopesh");
   // greeting.sayBy("Gopesh");
});