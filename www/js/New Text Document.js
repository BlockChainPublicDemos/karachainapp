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
	.controller('LoginCtrl', function($scope, EC2Faqs) {
		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//
		//$scope.$on('$ionicView.enter', function(e) {
		//});
		// alert("ec2 ctl");
		// $scope.ovitems = EC2Faqs.ovlist();
		$scope.faqs = EC2Faqs.all();
		$scope.remove = function(faq) {
			EC2Faqs.remove(faq);
		};
	})
	.controller('SongCtrl', function($scope, $stateParams, EC2Faqs) {
		//alert("faq detail ctl");
		$scope.faq = EC2Faqs.get($stateParams.faqId);
	})
	.controller('SongDetailCtrl', function($scope, $stateParams, Chats) {
		//alert("chat detail ctl");
		$scope.chat = Chats.get($stateParams.chatId);
	})
	.controller('AccountCtrl', function($scope) {
		$scope.settings = {
			enableFriends : true
		};
	})
	.controller('VisitorCtrl', function($scope, EC2Faqs) {
		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//
		//$scope.$on('$ionicView.enter', function(e) {
		//});
		// alert("ec2 ctl");
		// $scope.ovitems = EC2Faqs.ovlist();
		$scope.faqs = EC2Faqs.all();
		$scope.remove = function(faq) {
			EC2Faqs.remove(faq);
		};
	}).controller('VisitorDetailCtrl', function($scope, $stateParams, Chats) {
	//alert("chat detail ctl");
	$scope.chat = Chats.get($stateParams.chatId);
}).controller('EvtMgrCtrl', function($scope, EC2Faqs) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});
	// alert("ec2 ctl");
	// $scope.ovitems = EC2Faqs.ovlist();
	$scope.faqs = EC2Faqs.all();
	$scope.remove = function(faq) {
		EC2Faqs.remove(faq);
	};
}).controller('EvtMgrDetailCtrl', function($scope, $stateParams, Chats) {
	//alert("chat detail ctl");
	$scope.chat = Chats.get($stateParams.chatId);
});