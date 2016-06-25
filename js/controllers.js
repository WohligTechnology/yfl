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

  $scope.imageslider=[
    {
      img:"img/bg2.png",
    },
    {
      img:"img/bg2.png",
    },
    {
      img:"img/bg2.png",
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
      descp: "Sed ut perspiciatis unde omnis iste natus error sit."
    },
    {
        img:"img/s3.png",
      head: "yoga classes",
      descp: "Sed ut perspiciatis unde omnis iste natus error sit."
    },
    {
        img:"img/s3.png",
      head: "yoga classes",
      descp: "Sed ut perspiciatis unde omnis iste natus error sit."
    }
  ];

  $scope.teacher = [
    {
      descp: "Sed ut perspiciatis unde omnis iste natus error sit."
    },
    {
      descp: "Sed ut perspiciatis unde omnis iste natus error sit."
    },
    {
      descp: "Sed ut perspiciatis unde omnis iste natus error sit."
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
})
.controller('ArticleDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("article-detail");
  $scope.menutitle = NavigationService.makeactive("Article-Detail");
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
      img:"img/a2.jpg",
      title:"Conscious Eating - YourBody Knows Best",
      data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

    },
    {
      img:"img/a2.jpg",
      title:"Conscious Eating - YourBody Knows Best",
      data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

    },
    {
      img:"img/a2.jpg",
      title:"Conscious Eating - YourBody Knows Best",
      data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


    },
    {
      img:"img/a2.jpg",
      title:"Conscious Eating - YourBody Knows Best",
      data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


    }
  ];
  $scope.rate = 7;
   $scope.max = 10;
   $scope.isReadonly = false;

   $scope.hoveringOver = function(value) {
     $scope.overStar = value;
     $scope.percent = 100 * (value / $scope.max);
   };
})
.controller('RecipesDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("recipes-detail");
  $scope.menutitle = NavigationService.makeactive("Recipes-Detail");
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
      img:"img/a2.jpg",
      title:"Conscious Eating - YourBody Knows Best",
      data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

    },
    {
      img:"img/a2.jpg",
      title:"Conscious Eating - YourBody Knows Best",
      data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

    },
    {
      img:"img/a2.jpg",
      title:"Conscious Eating - YourBody Knows Best",
      data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


    },
    {
      img:"img/a2.jpg",
      title:"Conscious Eating - YourBody Knows Best",
      data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


    }
  ];
  $scope.rate = 7;
   $scope.max = 10;
   $scope.isReadonly = false;

   $scope.hoveringOver = function(value) {
     $scope.overStar = value;
     $scope.percent = 100 * (value / $scope.max);
   };
})
.controller('ArticleCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("article");
  $scope.menutitle = NavigationService.makeactive("Article");
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
      img:"img/a2.jpg",
      title:"Conscious Eating - YourBody Knows Best",
      data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

    },
    {
      img:"img/a2.jpg",
      title:"Conscious Eating - YourBody Knows Best",
      data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

    },
    {
      img:"img/a2.jpg",
      title:"Conscious Eating - YourBody Knows Best",
      data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


    },
    {
      img:"img/a2.jpg",
      title:"Conscious Eating - YourBody Knows Best",
      data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


    }
  ];
  $scope.rate = 7;
   $scope.max = 10;
   $scope.isReadonly = false;

   $scope.hoveringOver = function(value) {
     $scope.overStar = value;
     $scope.percent = 100 * (value / $scope.max);
   };

   $scope.tab = 'article';
$scope.classa = 'active';
$scope.classb = '';

$scope.tabchange = function(tab, a) {
    //        console.log(tab);
    $scope.tab = tab;
    if (a == 1) {

        $scope.classa = "active";
        $scope.classb = '';
    } else {

        $scope.classa = '';
        $scope.classb = "active";
    }
};
})
.controller('RestaurantDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("restaurant-detail");
  $scope.menutitle = NavigationService.makeactive("Restaurant-Detail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.loveSlider = [
    {
      img:"img/r1.jpg"

    },
    {
      img:"img/r2.jpg"

    },
    {
      img:"img/r1.jpg"

    },
    {
      img:"img/r2.jpg"

    }
  ];
  $scope.accordian = [];
  $scope.accordian.push({
    isFirstOpen: true,
    isFirstDisabled: false
  });
  $scope.accordian.push({
    isFirstOpen: true,
    isFirstDisabled: false
  });
  $scope.accordian.push({
    isFirstOpen: true,
    isFirstDisabled: false
  });
  $scope.accordian.push({
    isFirstOpen: true,
    isFirstDisabled: false
  });
  $scope.accordian.push({
    isFirstOpen: true,
    isFirstDisabled: false
  });
  $scope.accordian.push({
    isFirstOpen: true,
    isFirstDisabled: false
  });
  $scope.accordian.push({
    isFirstOpen: true,
    isFirstDisabled: false
  });
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
});
