// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
    url: "/home",
    templateUrl: "views/template.html",
    controller: 'HomeCtrl'
  })
    .state('article', {
    url: "/article",
    templateUrl: "views/template.html",
    controller: 'ArticleCtrl'
  })
    .state('recipes-detail', {
    url: "/recipes-detail",
    templateUrl: "views/template.html",
    controller: 'RecipesDetailCtrl'
  })
    .state('article-detail', {
    url: "/article-detail",
    templateUrl: "views/template.html",
    controller: 'ArticleDetailCtrl'
  })
    .state('restaurant-detail', {
    url: "/restaurant-detail",
    templateUrl: "views/template.html",
    controller: 'RestaurantDetailCtrl'
  })
    .state('restaurant', {
    url: "/restaurant",
    templateUrl: "views/template.html",
    controller: 'RestaurantCtrl'
  })

  .state('studio-detail', {
  url: "/studio-detail",
  templateUrl: "views/template.html",
  controller: 'StudioDetailCtrl'
})

.state('teacher-listing', {
url: "/teacher-listing",
templateUrl: "views/template.html",
controller: 'TeacherCtrl'
})

.state('teacher-profile', {
url: "/teacher-profile",
templateUrl: "views/template.html",
controller: 'TeachProfileCtrl'
})


.state('studio-list', {
url: "/studio-list",
templateUrl: "views/template.html",
controller: 'StudioListCtrl'
})
  $urlRouterProvider.otherwise("/home");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
               target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

//
// firstapp.config(function ($translateProvider) {
//   $translateProvider.translations('en', LanguageEnglish);
//   $translateProvider.translations('hi', LanguageHindi);
//   $translateProvider.preferredLanguage('en');
// });
