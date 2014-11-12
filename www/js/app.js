// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('lookats', ['ionic', 'lookats.controllers', 'lookats.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/auth/welcome')

   $stateProvider
    /*.state('home', {
      url: '/',
      templateUrl: "templates/welcome.html"
    })*/
    .state('auth', {      
      abstract: true,
      url: '/auth',
      templateUrl: 'templates/auth/layout.html'
    })        
    .state('auth.welcome', {
      url:'/welcome',
      templateUrl: "templates/welcome.html"
    })
    .state('auth.login', {
      url: '/login',
      templateUrl: "templates/auth/login.html"
    })
    .state('auth.register', {
      url: '/register',
      templateUrl: "templates/auth/register.html",
      controller:"authCtrl"
    })
    .state('auth.forgot-password', {
      url: '/forgot-password',
      templateUrl: "templates/auth/forgot-password.html"
    })
    .state('interest', {
      url:'/interest',
      templateUrl: "templates/profile/interest.html",
      controller:"profileCtrl"
    })
    .state('recommended-user', {
      url:'/recommended-user',
      templateUrl: "templates/profile/recommended-user.html",
      controller:"profileCtrl"
    })
    .state('profile', {
      url:'/profile',
      templateUrl: "templates/profile/index.html",
      controller:"profileCtrl"
    })
    .state('home', {      
      abstract: true,
      url: '/home',
      templateUrl: 'templates/home/layout.html'
    })
     .state('home.timeline', {            
      url: '/timeline',
      templateUrl: 'templates/home/timeline.html',
      controller:"homeCtrl"
    })  

   


    

    /*.state('site', {
      abstract: true,
      url:"/site",      
      templateUrl: "templates/site/layout.html",
    })
    .state('site.login', {
      url: '/login',
      views: {
        'login' :{
          templateUrl: "templates/site/login.html"
        }
      }
    })
    .state('site.register', {
      url: '/register',
      views: {
        'register' :{
          templateUrl: "templates/site/register.html"
        }
      }
    })

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });*/
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/playlists');
  //$urlRouterProvider.otherwise('auth/login');
});

