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
			$state.go(data+'.profile');
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
.controller('SingerCtrl', function($scope, $state,$stateParams, Songs,SingerService,SessionService) {
	$scope.data = {};
	$scope.songs = Songs.all();
	$scope.registerSinger = function() {
	}
	$scope.registerPerformance = function(){
		//SessionService.store("role",$scope.data.role);
		SingerService.registerPerformance($scope.data.performancename, $scope.data.performancevenue,$scope.data.performancedate,$scope.data).success(function(data) {
			$state.go('singer.songs');
		}).error(function(data) {
			var alertPopup = $ionicPopup.alert({
				title: 'Register Performance failed!',
				template: 'Please check your credentials!'
			});
		});

	}
	$scope.getPerformances = function(){

	}
	$scope.remove = function(song) {
		Songs.remove(song);
	};
})
.controller('SongDetailCtrl', function($scope, $stateParams,$state, Songs,SingerService,SessionService) {
	$scope.data = {};
	$scope.song = Songs.get($stateParams.songId);
})
.controller('AccountCtrl', function($scope,$state,SingerService,SessionService) {
	$scope.data = {};
	$scope.settings = {
			enableFriends : true
	};
})
.controller('VisitorCtrl', function($scope, $state,Songs,SingerService,SessionService) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});
	$scope.data = {};
	$scope.data.singerId = "kc0123456";
	$scope.songs = Songs.allkc();
	SingerService.getPerformances($scope.data).then(function(data) {
      //  $scope.songs =  angular.toJson(data);  
       // $scope.songs =  data;  
        console.log("[visitor ctlr] getperformances: "+$scope.songs)
    });
	$scope.registerVisitor = function() {
	}

	$scope.getPerformanceByQR = function(){

	}

})
.controller('VisitorDetailCtrl', function($scope, $state,$stateParams, Songs,SingerService) {
	$scope.data = {};
	$scope.song = Songs.get($stateParams.songId);
	$scope.votePerformance = function(){
		SingerService.voteSong($scope.data);
		$state.go('visitor.profile');

	}
	$scope.getPerformances = function(){
		SingerService.voteSong($scope.data);

	}
})
.controller('EvtMgrCtrl', function($scope, $state, Songs,SessionService) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});
	$scope.data = {};
	$scope.songs = Songs.all();
	$scope.votePerformance = function(){
		SingerService.VoteSong($scope.data);

	}
})
.controller('EvtMgrDetailCtrl', function($scope, $state, $stateParams, Songs,SessionService) {
	$scope.data = {};
	$scope.song = Songs.get($stateParams.songId);
});