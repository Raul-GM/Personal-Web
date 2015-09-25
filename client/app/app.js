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

  app.controller('pfController', function($scope, $window){
    this.portfolio = portfolio;

    this.goToWeb = function($index){
      $window.open(this.portfolio[$index].url, '_blank');
    };
    this.openEtc = function($index){
      var etc = $($('article .card.small .etc')[$index]);
      (etc.hasClass('up')) ? etc.removeClass("up") : etc.addClass("up");
    };
    /*$.each($('#cardEtc'), function(){
      var self = $(this);
      self.click(function(){
        (self.parent().parent().hasClass('up')) ? self.parent().parent().removeClass('up') : self.parent().parent().addClass('up');
      });
    });*/

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
];

var portfolio = [
  {
    title:                  "RaulGM-Quiz!'", 
    image:                  "../../assets/images/webPhotographyExample.png", 
    text:                   "Proyecto full-stack de final de curso realizado en 2015 de node.js a través del portal MiriadaX. En él, se podrán crear, borrar, comentar y contestar preguntas. Dispone de un login y de un autologout.", 
    url:                    "https://raulgmquiz.herokuapp.com/"
  },
  {
    title:                  "De Moratalaz al 'Zielo'", 
    image:                  "../../assets/images/webPhotographyExample.png", 
    text:                   "Web que habla de la historia, lugares y comercios del barrio madrileño de Moratalaz. Esta web ha sido desarrollada con WordPress, con la peculiaridad de que los estilos, el tema, las páginas han sido desarrollados desde cero por mí. No me he basado en ningún tema en particular, ya que este ha sido mi proyecto personal para aplicar todo lo aprendido con WordPress en estos últimos meses. Como se puede apreciar la web es totalmente responsive", 
    url:                    "http://dmaz.raul-gm.com/"
  },
  {
    title:                  "Rock this concert", 
    image:                  "../../assets/images/webPhotographyExample.png", 
    text:                   "App de Android que muestra todos los conciertos de Rock y Heavy que se dan en España. En una pestaña se visualizarán de manera sencilla y directa los conciertos que se celebrarán en dicha semana. En la siguiente pestaña se tendrá al alcance de la mano todos los conciertos que se celebrarán, pudiendo filtrar por ciudad, grupo y/o fecha. Por último, se mostrarán tus conciertos favoritos. Estos serán añadidos por el usuario en las opciones del propio concierto. Además se podrán añadir a tu calendario de Google Maps, e incluso acceder a la información detallada de la sala donde se celebrará el show.", 
    url:                    "https://play.google.com/store/apps/details?id=es.raulgm.rockthisconcert"
  },
  {
    title:                  "Demo: Web de un fotógrafo", 
    image:                  "../../assets/images/webPhotographyExample.png", 
    text:                   "Se trata de una demo de una web orientada a un posible fotógrafo. Este proyecto lo inicié por cuenta propia para poder ir añadiendo webs a mi portfolio. Al ser una demo no tiene todas sus opciones habilitadas, simplemente es una pequeña muestra de lo que puedo llegar a hacer.", 
    url:                    "http://raul-gm.com/demoPhotography/index.html"
  },
]