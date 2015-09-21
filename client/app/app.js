'use strict';

(function() {
  var app = angular.module('mDesignApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);
    });
  /***** NAV **************************************/
  app.controller('navController', function($scope, $timeout){
    this.options = options;

    this.prepareAnimation = function($event, $index){
      var self = $($('nav li')[$index]).find('div');
      $('nav li').removeClass('active');
      $($('nav li')[$index]).addClass('active');
      self.addClass('animate');
      self.attr("style","width: 140px; height: 140px; left: " + ($event.offsetX - 70) + "px; top: " + ($event.offsetY - 70) + "px");

      $('article').addClass('hide');
      $('#container'+$index).removeClass('hide');

      var reset = function(){
        self.attr("style","width: 0; height: 0");
        self.removeClass('animate');
      }
 
      $timeout(reset,450);
    };

    $scope.launchAnimation = function($event){
      console.log("--->");
      this.left = $event.offsetX - 50;
      this.top = $event.offsetY - 50;
      this.width = '140';
      this.height = '140';
      this.class_name = 'animate';
    };
  });
})();

/**/

var options = [
  {
    name: "¿Quién soy?"
  },
  {
    name: "Portfolio"
  },
  {
    name: "Contacta"
  },
  {
    name: "Blog?"
  },
]