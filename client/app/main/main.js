'use strict';


var mdApp = angular.module('mDesignApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
/*
  mdApp.controller('nav', function($scope, $timeout){
    $scope.class = [];
    console.log('---->');
    $scope.prepareAnimation = function(){
      var reset = function(){
        $scope.width = '0';
        $scope.height = '0';
        $scope.class_name = '';
      }
 
      $timeout(reset,450);
    }
    $scope.launchAnimation = function(event){
      $scope.left = event.offsetX - 50;
      $scope.top = event.offsetY - 50;
      $scope.width = '100';
      $scope.height = '100';
      $scope.class_name = 'animate';
    };
  });*/