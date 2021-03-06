// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
// ui-router
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $ionicConfigProvider.platform.ios.tabs.position('top');
  $ionicConfigProvider.platform.android.tabs.position('top');



  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  // Each tab has its own nav history stack:
  .state('tab.recommend', {
    url: '/recommend',
    views: {
      'tab-recommend': {
        templateUrl: 'templates/tab-recommend.html',
        controller: 'RecommendCtrl'
      }
    }
  })

  .state('tab.my', {
      url: '/my',
      views: {
        'tab-my': {
          templateUrl: 'templates/tab-my.html',
          controller: 'MyCtrl'
        }
      }
    })

  //  /tab/detail
  /*.state('tab.detail', {
    cache:false,
      url: '/detail',
      views: {
        'tab-my': {
          templateUrl: 'templates/my-detail.html',
          controller: 'MyDetailCtrl'
        }
      }
    })*/

    .state('tab.find', {
    url: '/find',
    views: {
      'tab-find': {
        templateUrl: 'templates/tab-find.html',
        controller: 'FindCtrl'
      }
    }
  })
    .state('tab.story', {
      url: '/story',
      views: {
        'tab-story': {
          templateUrl: 'templates/tab-story.html',
          controller: 'StoryCtrl'
        }
      }
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/recommend');

});
