angular.module('starter.controllers', [])

	.controller('DashCtrl', function($scope) {})

	.controller('ChatsCtrl', function($scope, Chats) {
		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//
		//$scope.$on('$ionicView.enter', function(e) {
		//});

		$scope.chats = Chats.all();
		$scope.remove = function(chat) {
			Chats.remove(chat);
		};
	})
	.controller('LoginCtrl', function($scope, $ionicPopup, $state,LoginService, SessionService) {
		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//
		//$scope.$on('$ionicView.enter', function(e) {
		//});
		
		$scope.data = {};
		
		 
		$scope.login = function() {
			    SessionService.store("role",$scope.data.role);
		        LoginService.loginUser($scope.data.username, $scope.data.password,$scope.data.role).success(function(data) {
		            $state.go(role+'.profile');
		        }).error(function(data) {
		            var alertPopup = $ionicPopup.alert({
		                title: 'Login failed!',
		                template: 'Please check your credentials!'
		            });
		        });
		    }
		$scope.goregister= function(){
			SessionService.store("role",$scope.data.role);
			$state.go('register');
		}
		$scope.register = function() {
			var role = SessionService.get("role");
	        LoginService.registerUser($scope.data.username, $scope.data.password,role,$scope.data).success(function(data) {
	            $state.go(data+'.profile');
	        }).error(function(data) {
	            var alertPopup = $ionicPopup.alert({
	                title: 'registration failed!',
	                template: 'Please check your credentials!'
	            });
	        });
	    }
	})
	.controller('SongCtrl', function($scope, $stateParams, Songs) {
		
		$scope.songs = Songs.all();
	})
	.controller('SongDetailCtrl', function($scope, $stateParams, Songs) {
		
		$scope.song = Songs.get($stateParams.songId);
	})
	.controller('AccountCtrl', function($scope) {
		$scope.settings = {
			enableFriends : true
		};
	})
	.controller('VisitorCtrl', function($scope, Songs) {
		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//
		//$scope.$on('$ionicView.enter', function(e) {
		//});
		$scope.songs = Songs.all();
		$scope.remove = function(song) {
			Songs.remove(song);
		};
	}).controller('VisitorDetailCtrl', function($scope, $stateParams, Songs) {
	$scope.song = Songs.get($stateParams.songId);
}).controller('EvtMgrCtrl', function($scope, Songs) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});
	$scope.songs = Songs.all();
	$scope.remove = function(song) {
		Songs.remove(song);
	};
}).controller('EvtMgrDetailCtrl', function($scope, $stateParams, Songs) {
	$scope.song = Songs.get($stateParams.songId);
});