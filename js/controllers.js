angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file , 'duScroll'

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.yoga = [
    {
      img:"img/slide-yoga.jpg",
      name: "yoga",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    },
    {
        img:"img/slide-yoga1.jpg",
      name: "yoga",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    },
    {
        img:"img/slide-yoga.jpg",
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
      img:"img/slide-food.jpg",
      name: "food",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    },
    {
      img:"img/slide-food.jpg",
      name: "food",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    },
    {
      img:"img/slide-food.jpg",
      name: "food",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    }
  ];
  $scope.love = [
    {
      img:"img/slide-love.jpg",
      name: "love",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    },
    {
      img:"img/slide-love.jpg",
      name: "love",
      descp: "aperiam, eaque ipsa quae ab illo inventore veritatis et."
    },
    {
      img:"img/slide-love.jpg",
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
      img:"img/yoga-classes.jpg",
      head: "yoga classes",
      descp: "Sed ut perspiciatis unde omnis iste natus error sit."
    },
    {
        img:"img/yoga-classes.jpg",
      head: "yoga classes",
      descp: "Sed ut perspiciatis unde omnis iste natus error sit."
    },
    {
        img:"img/yoga-classes.jpg",
      head: "yoga classes",
      descp: "Sed ut perspiciatis unde omnis iste natus error sit."
    }
  ];

  $scope.teacher = [
    {
      descp: "Sed ut perspiciatis unde omnis iste natexplicab."
    },
    {
      descp: "Sed ut perspiciatis unde omnis iste natexplicab."
    },
    {
      descp: "Sed ut perspiciatis unde omnis iste natexplicab."
    }

  ];

$scope.bookShow=[
  {
    img:"img/slider.png"

  },
  {
    img:"img/slider.png"

  },
  {
    img:"img/slider.png"

  }
];

$scope.healthSlider = [
  {
    head: "HEALTHY FOOD FACTS",
    descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat.Sed ut perspiciatis unde omnis iste natus error sit voluptat."
  },
  {
    head: "HEALTHY FOOD FACTS",
    descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat.Sed ut perspiciatis unde omnis iste natus error sit voluptat."
  },
  {
    head: "HEALTHY FOOD FACTS",
    descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat.Sed ut perspiciatis unde omnis iste natus error sit voluptat."
  }
];

  $scope.foodSlider = [
    {
      img:"img/r6.jpg",
      head: "Food",
      descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."
    },
    {
      img:"img/r6.jpg",
      head: "Food",
      descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."
    },
    {
      img:"img/r6.jpg",
      head: "Food",
      descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."
    }
  ];
  $scope.$on('$viewContentLoaded', function() {
      $('body').addClass('fp-viewing-0');
      $(window).scroll(function() {
        var scroller = $(document).scrollTop();
        var height = $(window).height();
        if (height <= scroller) {
          $('body').removeClass('fp-viewing-0');
        } else {
          $('body').addClass('fp-viewing-0');
        }
      });
    });

    function makeAnimation(id) {
      if (_.isEmpty(id)) {
        id = "home";
      }
      var someElement = angular.element(document.getElementById(id));
      $document.scrollToElement(someElement, 0, 1400);
    }

    $scope.$on('$viewContentLoaded', function(event) {
      setTimeout(function() {
        makeAnimation($stateParams.id);
      }, 1000);
    });
})

.controller('headerctrl', function($scope, TemplateService, $state) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    // $scope.goToLogin = function() {
    //     console.log("login");
    //     $state.go('memberlogin');
    // }
    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        $(".side-menu").addClass("menu-in");
        $(".side-menu").removeClass("menu-out");
    };
    $scope.closeMenu = function() {
        $(".side-menu").removeClass("menu-in");
        $(".side-menu").addClass("menu-out");
    };
    $(".template.content").click(function() {
        $(".side-menu").removeClass("menu-in");
        $(".side-menu").addClass("menu-out");
    });
})

.controller('RestaurantCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("restaurant");
  $scope.menutitle = NavigationService.makeactive("Restaurant");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.accordian = [];
  $scope.accordian.push({
    isFirstOpen: true,
    isFirstDisabled: false
  });



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

.controller('StyleListCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("style-listing");
  $scope.menutitle = NavigationService.makeactive("Style Listing");
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


.controller('StyleDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("style-detail");
  $scope.menutitle = NavigationService.makeactive("Style Detail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  // $scope.accordian = [];
  // $scope.accordian.push({
  //   isFirstOpen: true,
  //   isFirstDisabled: false
  // });

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
      img:"img/mom.jpg",
      title:"Lorem ipsum dolor sit amet",
      location: "Colaba, Mumbai",
      style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
      timing: "9am - 6pm"
    },
    {
      img:"img/mom.jpg",
      title:"Lorem ipsum dolor sit amet",
      location: "Colaba, Mumbai",
      style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
      timing: "9am - 6pm"
    },
    {
      img:"img/mom.jpg",
      title:"Lorem ipsum dolor sit amet",
      location: "Colaba, Mumbai",
      style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
      timing: "9am - 6pm"
    }
  ];
  // $scope.rate = 7;
  //  $scope.max = 10;
  //  $scope.isReadonly = false;
  //
  //  $scope.hoveringOver = function(value) {
  //    $scope.overStar = value;
  //    $scope.percent = 100 * (value / $scope.max);
  //  };
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


.controller('TeacherCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("teacher-listing");
  $scope.menutitle = NavigationService.makeactive("Teacher Listing");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
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

.controller('TeachProfileCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("teacher-profile");
  $scope.menutitle = NavigationService.makeactive("Teacher Profile");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.rowdata = [
    {
      img:"img/mom.jpg",
      title:"Lorem ipsum dolor sit amet",
      location: "Colaba, Mumbai",
      style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
      timing: "9am - 6pm"
    },
    {
      img:"img/mom.jpg",
      title:"Lorem ipsum dolor sit amet",
      location: "Colaba, Mumbai",
      style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
      timing: "9am - 6pm"
    },
    {
      img:"img/mom.jpg",
      title:"Lorem ipsum dolor sit amet",
      location: "Colaba, Mumbai",
      style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
      timing: "9am - 6pm"
    }
  ];
  $scope.rate = 2;
  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  }
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



.controller('StudioDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("studio-detail");
  $scope.menutitle = NavigationService.makeactive("Studio Detail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.loveSlider = [
    {
      img:"img/r2.jpg"

    },
    {
      img:"img/r3.jpg"

    },
    {
      img:"img/r4.jpg"

    }
  ];
  $scope.rowdata = [
    {
      img:"img/mom.jpg",
      title:"Lorem ipsum dolor sit amet",
      location: "Colaba, Mumbai",
      style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
      timing: "9am - 6pm"
    },
    {
      img:"img/mom.jpg",
      title:"Lorem ipsum dolor sit amet",
      location: "Colaba, Mumbai",
      style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
      timing: "9am - 6pm"
    },
    {
      img:"img/mom.jpg",
      title:"Lorem ipsum dolor sit amet",
      location: "Colaba, Mumbai",
      style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
      timing: "9am - 6pm"
    }
  ];
  $scope.rowdata2 = [
    {
      img:"img/re1.jpg",
      title:"Lorem Ipsum Dolor Sit Amet Consectetuer",
      location: "Colaba, Mumbai",
      cuisine: "Italian, Continental",
      costForTwo: " ₹ 500 -  ₹ 1000",
      timing: "9am - 6pm"
    },
    {
      img:"img/re1.jpg",
      title:"Lorem Ipsum Dolor Sit Amet Consectetuer",
      location: "Colaba, Mumbai",
      cuisine: "Italian, Continental",
      costForTwo: " ₹ 500 -  ₹ 1000",
      timing: "9am - 6pm"
    },
    {
      img:"img/re1.jpg",
      title:"Lorem Ipsum Dolor Sit Amet Consectetuer",
      location: "Colaba, Mumbai",
      cuisine: "Italian, Continental",
      costForTwo: " ₹ 500 -  ₹ 1000",
      timing: "9am - 6pm"
    }
  ];

  $scope.rate = 2;
  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
}
})

.controller('StudioListCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("studio-list");
  $scope.menutitle = NavigationService.makeactive("Studio List");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.check={};
  $scope.check.map=true;
  $scope.loveSlider = [
    {
      img:"img/r2.jpg"

    },
    {
      img:"img/r3.jpg"

    },
    {
      img:"img/r4.jpg"

    }
  ];
  $scope.rowdata = [
    {
      img:"img/mom.jpg",
      title:"Lorem ipsum dolor sit amet",
      data:"Colaba, Mumbai |Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow| 9am - 6pm"

    },
    {
      img:"img/mom.jpg",
      title:"Lorem ipsum dolor sit amet",
      data:"Colaba, Mumbai | Hatha Yoga | 9am - 6pm"


    },

    {
      img:"img/mom.jpg",
      title:"Lorem ipsum dolor sit amet",
      data:"Colaba, Mumbai | Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow | 9am - 6pm"


    },

  ];
    $scope.rowdata1 = [
    {
      img:"img/mom.jpg",
      title:" ipsum dolor sit amet",
      data:"Colaba, Mumbai |Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow| 9am - 6pm"

    },
    {
      img:"img/mom.jpg",
      title:" ipsum dolor sit amet",
      data:"Colaba, Mumbai | Hatha Yoga | 9am - 6pm"


    },

    {
      img:"img/mom.jpg",
      title:" ipsum dolor sit amet",
      data:"Colaba, Mumbai | Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow | 9am - 6pm"


    },

  ];

  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
}
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
