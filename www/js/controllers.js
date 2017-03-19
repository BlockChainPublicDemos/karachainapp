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
.controller('SingerCtrl', function($scope,$ionicPopup,  $state,$stateParams,Songs,SingerService,SessionService) {
	$scope.data = {};
	$scope.songs = Songs.all();
	$scope.registerSinger = function() {
	}
	$scope.registerPerformance = function(){
		//SessionService.store("role",$scope.data.role);
		SingerService.registerPerformance($scope.data).success(function(data) {
			$state.go('singer.songs');
		}).error(function(data) {
			var alertPopup = $ionicPopup.alert({
				title: 'Register Performance failed!',
				template: 'Please check your credentials!'
			});
		});

	}
	$scope.getPerformances=function(){
		SingerService.getPerformances($scope.data).success(function(data) {
			//  $scope.songs =  angular.toJson(data);  
			$scope.songs =  JSON.parse(data);  
			SessionService.store("songs",$scope.songs);
			console.log("[visitor ctlr] getperformances: "+data)
		}).error(function(data) {
			var alertPopup = $ionicPopup.alert({
				title: 'Get performances failed!',
				template: 'Please try again!'
			});
		});
	};
	$scope.remove = function(song) {
		Songs.remove(song);
	};
	$scope.getPerformances();
})
.controller('SongDetailCtrl', function($scope, $ionicPopup, $stateParams,$state, Songs,SingerService,SessionService) {
	$scope.data = {};
	$scope.songs = SessionService.get("songs");
	$scope.song = $scope.songs[$stateParams.songId];
	$scope.data.songid = $stateParams.songId;
	$scope.data.bcsongid = $scope.songs[$stateParams.songId].Song_ID;
	$scope.data.bcsingerid = $scope.songs[$stateParams.songId].Singer_Id; //use this for visitor
})
.controller('AccountCtrl', function($scope,$state,SingerService,SessionService) {
	$scope.data = {};
	$scope.settings = {
			enableFriends : true
	};
})
.controller('VisitorCtrl', function($scope, $ionicPopup, $state,Songs,SingerService,SessionService) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});
	$scope.data = {};
	//$scope.data.singerId = "kc0123456";
	$scope.songs = {};
	$scope.getPerformances=function(){
		SingerService.getPerformances($scope.data).success(function(data) {
			//  $scope.songs =  angular.toJson(data);  
			$scope.songs =  JSON.parse(data);  
			SessionService.store("songs",$scope.songs);
			console.log("[visitor ctlr] getperformances: "+data)
		}).error(function(data) {
			var alertPopup = $ionicPopup.alert({
				title: 'Get performances failed!',
				template: 'Please try again!'
			});
		});
	};
	$scope.registerVisitor = function() {
	}

	$scope.getPerformanceByQR = function(){

	}
	$scope.getPerformances();

})
.controller('VisitorDetailCtrl', function($scope, $state,$stateParams, Songs,SingerService,SessionService) {
	$scope.data = {};
	$scope.songs = SessionService.get("songs");
	$scope.song = $scope.songs[$stateParams.songId];
	$scope.data.songid = $stateParams.songId;
	$scope.data.bcsongid = $scope.songs[$stateParams.songId].Song_ID;
	$scope.data.bcsingerid = $scope.songs[$stateParams.songId].Singer_Id; //use this for visitor
	
	$scope.votePerformance = function(data){
//		var songs = SessionService.get("songs");
//		var seletedsong = songs[$stateParams.songId];
		console.log("vote song ",data,$scope.data.songid);
//		$scope.song = $stateParams.songId;
		SingerService.voteSong(data).success(function(data) {
			//  $scope.songs =  angular.toJson(data);  
			console.log("[visitor detail ctlr] vote performance: OK")
		}).error(function(data) {
			var alertPopup = $ionicPopup.alert({
				title: 'Vote performances failed!',
				template: 'Please try again!'
			});
		});
	};
	$scope.refreshPerformances = function(){
		//
	}
})
.controller('EvtMgrCtrl', function($scope, $state, Songs,SingerService,SessionService) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});
	$scope.data = {};
	//$scope.data.singerId = "kc0123456";
	$scope.songs = {};
	$scope.getPerformances=function(){
		SingerService.getPerformances($scope.data).success(function(data) {
			//  $scope.songs =  angular.toJson(data);  
			$scope.songs =  JSON.parse(data);  
			SessionService.store("songs",$scope.songs);
			console.log("[visitor ctlr] getperformances: "+data)
		}).error(function(data) {
			var alertPopup = $ionicPopup.alert({
				title: 'Get performances failed!',
				template: 'Please try again!'
			});
		});
	};

	$scope.registerEvtMgr = function() {
	}

	$scope.getPerformanceByQR = function(){

	}
	$scope.getPerformances();
})
.controller('EvtMgrDetailCtrl', function($scope, $state, $stateParams, Songs,SingerService,SessionService) {
	$scope.data = {};
	$scope.songs = SessionService.get("songs");
	$scope.song = $scope.songs[$stateParams.songId];
	$scope.data.songid = $stateParams.songId;
	$scope.data.bcsongid = $scope.songs[$stateParams.songId].Song_ID;
	$scope.data.bcsingerid = $scope.songs[$stateParams.songId].Singer_Id; //use this for visitor
	$scope.submitoffer = function(data){
//		var songs = SessionService.get("songs");
//		var seletedsong = songs[$stateParams.songId];
		console.log("EvtMgr detail ctlr] submit offer ",data,$scope.data.songid);
//		$scope.song = $stateParams.songId;
		SingerService.submitOffer(data).success(function(data) {
			//  $scope.songs =  angular.toJson(data);  
			console.log("[EvtMgr detail ctlr] submit offer: OK")
		}).error(function(data) {
			var alertPopup = $ionicPopup.alert({
				title: 'submit offer failed!',
				template: 'Please try again!'
			});
		});
	};
});