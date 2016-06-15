angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap','ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.yoga = [
    {
      img:"img/s1.png",
      name: "yoga",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    },
    {
        img:"img/s1.png",
      name: "yoga",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    },
    {
        img:"img/s1.png",
      name: "yoga",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    }
  ];
  $scope.food = [
    {
      img:"img/s2.png",
      name: "food",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    },
    {
      img:"img/s2.png",
      name: "food",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    },
    {
      img:"img/s2.png",
      name: "food",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    }
  ];
  $scope.love = [
    {
      img:"img/s1.png",
      name: "love",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    },
    {
      img:"img/s1.png",
      name: "love",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    },
    {
      img:"img/s1.png",
      name: "love",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    }
  ];
  $scope.loveSlider = [
    {
      img:"img/bg3.png"

    },
    {
      img:"img/bg3.png"

    },
    {
      img:"img/bg3.png"

    }
  ];

  $scope.yogaclasses = [
    {
      img:"img/s3.png",
      head: "yoga classes",
      descp: "Sed ut perspiciatis unde omnisiste natus error sit."
    },
    {
        img:"img/s3.png",
      head: "yoga classes",
      descp: "Sed ut perspiciatis unde omnisiste natus error sit."
    },
    {
        img:"img/s3.png",
      head: "yoga classes",
      descp: "Sed ut perspiciatis unde omnisiste natus error sit."
    }
  ];

  $scope.foodSection = [
    {
      img:"img/s4.png",
      head: "Food",
      descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."
    },
    {
      img:"img/s4.png",
      head: "Food",
      descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."
    },
    {
      img:"img/s4.png",
      head: "Food",
      descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."
    }
  ];
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

.controller('RestaurantCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("restaurant");
  $scope.menutitle = NavigationService.makeactive("Restaurant");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.loveSlider = [
    {
      img:"img/b1.jpg"

    },
    {
      img:"img/b1.jpg"

    },
    {
      img:"img/b1.jpg"

    }
  ];
  $scope.rowdata = [
    {
      img:"img/m1.jpg",
      title:"Lorem Ipsum Dolor Sit Amet Consectetuer",
      data:"Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"

    },
    {
      img:"img/m1.jpg",
      title:"Lorem Ipsum Dolor Sit Amet Consectetuer",
      data:"Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"
    },
    {
      img:"img/m1.jpg",
      title:"Lorem Ipsum Dolor Sit Amet Consectetuer",
      data:"Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"


    },
    {
      img:"img/m1.jpg",
      title:"Lorem Ipsum Dolor Sit Amet Consectetuer",
      data:"Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"


    },
    {
      img:"img/m1.jpg",
      title:"Lorem Ipsum Dolor Sit Amet Consectetuer",
      data:"Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"


    },
    {
      img:"img/m1.jpg",
      title:"Lorem Ipsum Dolor Sit Amet Consectetuer",
      data:"Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"

    }
  ];
  $scope.rate = 7;
   $scope.max = 10;
   $scope.isReadonly = false;

   $scope.hoveringOver = function(value) {
     $scope.overStar = value;
     $scope.percent = 100 * (value / $scope.max);
   };
});
