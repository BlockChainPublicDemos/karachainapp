// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','monospaced.qrcode'])

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

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
	

	  // Each tab has its own nav history stack:	
	
 $stateProvider

  // setup an abstract state for the tabs directive
.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
.state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash-karachain.html',
        controller: 'DashCtrl'
      }
    }
  })
.state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
.state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
.state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  }) 
.state('login', {
	     url: '/login',
	     templateUrl: 'templates/login.html',
	     controller: 'LoginCtrl'
	 })
.state('register', {
	     url: '/register',
	     templateUrl: 'templates/register.html',
	     controller: 'LoginCtrl'
	 })
.state('singer', {
  url: '/singer',
  abstract: true,
  templateUrl: 'templates/singer/singer.html',    
})
.state('singer.profile', {
  url: '/profile',
  views: {
    'singer-profile': {
      templateUrl: 'templates/singer/singer-profile.html',
      controller: 'DashCtrl'
    }
  }
}) 
.state('singer.songs', {
    url: '/songs',
    views: {
      'singer-songs': {
        templateUrl: 'templates/singer/singer-songs.html',
        controller: 'SingerCtrl'
      }
    }
  })
 .state('singer.song-detail', {
      url: '/songs/:songId',
      views: {
        'singer-songs': {
          templateUrl: 'templates/singer/song-detail.html',
          controller: 'SongDetailCtrl'
        }
      }
    })
 .state('singer.singer-performance', {
      url: '/performance',
      views: {
        'singer-performance': {
          templateUrl: 'templates/singer/singer-performance.html',
          controller: 'SingerCtrl'
        }
      }
    })
 .state('singer.myaccount', {
        url: '/myaccount',
        views: {
          'singer-myaccount': {
            templateUrl: 'templates/singer/singer-account.html',
            controller: 'AccountCtrl'
          }
        }
}).state('singer.account-detail', {
          url: '/myaccount/:contractId',
          views: {
            'singer-myaccount': {
              templateUrl: 'templates/singer/account-detail.html',
              controller: 'AccountDetailCtrl'
            }
          }
})
.state('visitor', {
  url: '/visitor',
  abstract: true,
  templateUrl: 'templates/visitor/visitor.html',    
})
.state('visitor.profile', {
  url: '/profile',
  views: {
    'visitor-profile': {
      templateUrl: 'templates/visitor/visitor-profile.html',
      controller: 'DashCtrl'
    }
  }
}) 
.state('visitor.singerperformances', {
    url: '/singerperformances',
    views: {
      'visitor-singerperformances': {
        templateUrl: 'templates/visitor/visitor-singer-songs.html',
        controller: 'VisitorCtrl'
      }
    }
  })
 .state('visitor.singerperformances-detail', {
      url: '/singerperformances/:songId',
      views: {
        'visitor-singerperformances': {
          templateUrl: 'templates/visitor/visitor-singer-song-detail.html',
          controller: 'VisitorDetailCtrl'
        }
      }
    })
.state('evtmgr', {
  url: '/evtmgr',
  abstract: true,
  templateUrl: 'templates/evtmgr/evtmgr.html',    
})
.state('evtmgr.profile', {
    	  url: '/evtmgr',
    	  views: {
    	    'evtmgr-profile': {
    	      templateUrl: 'templates/evtmgr/evtmgr-profile.html',
    	      controller: 'DashCtrl'
    	    }
    	  }
  	}) 
.state('evtmgr.singerperformances', {
    	    url: '/singerperformances',
    	    views: {
    	      'evtmgr-singerperformances': {
    	        templateUrl: 'templates/evtmgr/evtmgr-singer-songs.html',
    	        controller: 'EvtMgrCtrl'
    	      }
    	    }
  })  
 .state('evtmgr.singerperformances-detail', {
      url: '/singerperformances/:songId',
      views: {
        'evtmgr-singerperformances': {
          templateUrl: 'templates/evtmgr/evtmgr-singer-song-detail.html',
          controller: 'EvtMgrDetailCtrl'
        }
      }
    })      
      ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
