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
  app.controller('btnController', function($scope, $timeout){
    this.prepareAnimation = function($event, $index){
      var ink = $($event.currentTarget.parentElement).find('.ink');
      ink.addClass('animate');
      ink.attr("style","width: 140px; height: 140px; left: " + ($event.offsetX - 70) + "px; top: " + ($event.offsetY - 70) + "px");
      var reset = function(){
        ink.attr("style","width: 0; height: 0");
        ink.removeClass('animate');
      }
 
      $timeout(reset,450);
    }
    this.launchAnimation = function($event){
      this.left = $event.offsetX - 50;
      this.top = $event.offsetY - 50;
      this.width = '140';
      this.height = '140';
      this.class_name = 'animate';
    }
    this.sendForm = function(){
      console.log('----->');
      // var nombre = $("#ContactName").val();
      var nombre = 'yomismo';
      // var email = $("#ContactEmail").val();
      var email = 'raulgm83@gmail.com';
      var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
      // var mensaje = $("#ContactText").val();
      var mensaje = 'ola k ase';
      
      if (nombre == "") {
          $("#ContactName").focus();
          return false;
      }else if(email == "" || !validacion_email.test(email)){
          $("#ContactEmail").focus(); 
          return false;
      }else if(mensaje == ""){
          $("#ContactText").focus();
          return false;
      }else{
        var datos = 'nombre='+ nombre + 
              '&email=' + email + 
              '&mensaje=' + mensaje;
        $.ajax({
            type: "POST",
            url: "/../../proccess.php",
            data: datos,
            success: function() {
              alert(VAR_Contact_Result_Ok);
            },
          error: function() {
            alert(VAR_Contact_Result_Ko);
          }
        });
        return false; 
      }
    }
  });
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
  /*{
    name: "Blog?"
  },*/
];

var portfolio = [
  {
    title:                  "RaulGM-Quiz!'", 
    image:                  "../../assets/images/RGMQ.png", 
    text:                   "Proyecto full-stack de final de curso realizado en 2015 de node.js a través del portal MiriadaX. En él, se podrán crear, borrar, comentar y contestar preguntas. Dispone de un login y de un autologout.", 
    url:                    "https://raulgmquiz.herokuapp.com/"
  },
  {
    title:                  "De Moratalaz al 'Zielo'", 
    image:                  "../../assets/images/DMAZ.png", 
    text:                   "Blog que habla de la historia, lugares y comercios del barrio de Moratalaz. Desarrollada con WordPress con los estilos, el tema y las páginas desde cero por mí.", 
    url:                    "http://dmaz.raul-gm.com/"
  },
  {
    title:                  "Rock this concert", 
    image:                  "../../assets/images/AppRtC.png", 
    text:                   "App de Android que muestra todos los conciertos de Rock y Heavy que se dan en España. Todos los conciertos  del año al alcance de tu mano. Acceso directo a los que se van a celebrar en dicha semana. Guarda tus conciertos en fávoritos. Consulta los datos del concierto y ubica la sala donde se va a celebrar.", 
    url:                    "https://play.google.com/store/apps/details?id=es.raulgm.rockthisconcert"
  },
  {
    title:                  "Demo: Web de un fotógrafo", 
    image:                  "../../assets/images/webPhotographyExample.png", 
    text:                   "Se trata de una demo de una web orientada a un posible fotógrafo. Este proyecto lo inicié por cuenta propia para poder ir añadiendo webs a mi portfolio. Al ser una demo no tiene todas sus opciones habilitadas, simplemente es una pequeña muestra de lo que puedo llegar a hacer.", 
    url:                    "http://raul-gm.com/demoPhotography/index.html"
  },
]