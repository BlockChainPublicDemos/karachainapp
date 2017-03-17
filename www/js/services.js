angular.module('starter.services', ['ngCookies'])
.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw, role) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var websocket = new WebSocket("ws://karachain-app-team2.mybluemix.net/");
            websocket.onopen = function(evt) {
                console.log("ws opened");
                //log user into ledger
              };
            if (name == 'user' && pw == 'secret') {
                deferred.resolve(role);
            } else {
                deferred.reject(role);
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
        registerUser: function(name, pw,role, data) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            /**
             * var msgCreate = {type : "create",name: "bobs-song4", color: "red", size: "35",user: "bob",v:1};
				var msgDelete = {type: 'remove',name: 'rejhp4s', v:1};
				var msgTransfer = {type: 'transfer',name: 'bobs-song3', user: 'leroy',v:1};
				var msgRead = {type: 'read', v:1};

             */
            var websocket = new WebSocket("ws://karachain-app-team2.mybluemix.net/");
            
            websocket.onopen = function(evt) {
            	var registertype = "create"+role;
            	var msgCreate = '{"type" : "'+registertype+'","name":"'+ data.firstname+'", "lastname":"'+ data.lastname+'","v":1}';
                console.log("ws opened - register new "+role);
                websocket.send(msgCreate);
              };
//            if (name == 'user' && pw == 'secret') {
//                deferred.resolve('Welcome ' + name + '!');
//            } else {
//                deferred.reject('Wrong credentials.');
//            }
            deferred.resolve(role);
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
}).service('SingerService', function($q) {
    return {
        registerSinger: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var websocket = new WebSocket("ws://karachain-app-team2.mybluemix.net/");
            websocket.onopen = function(evt) {
                console.log("ws opened");
              };
           
             deferred.resolve('Welcome ' + name + '!');
          
            //    deferred.reject('Wrong credentials.');
            
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
        registerPerformance: function(performancename, performancevenu, performancedate, data) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            this.data = data;
            var that = this;
          
            /**
             * var msgCreate = {type : "create",name: "bobs-song4", color: "red", size: "35",user: "bob",v:1};
				var msgDelete = {type: 'remove',name: 'rejhp4s', v:1};
				var msgTransfer = {type: 'transfer',name: 'bobs-song3', user: 'leroy',v:1};
				var msgRead = {type: 'read', v:1};

             */
            var websocket = new WebSocket("ws://karachain-app-team2.mybluemix.net/");
            
            websocket.onopen = function(evt) {
            	var pagedata = that.data;
            	var msgCreate = '{"type" : "createperformance","name":"'+ pagedata.performancename+'", "venue":"'+ pagedata.performancevenue+'", "date":"'+ pagedata.performancedate+'","singer": "bob","v":1}';
                console.log("ws opened "+msgCreate);
                websocket.send(msgCreate);
              };
              websocket.onmessage = function(evt) {
            	  console.log("ws message qr code: "+evt.data);
            	  qrpng = data.qr.data;
            	  //this should be a PNG QR file
              }
//            if (name == 'user' && pw == 'secret') {
//                deferred.resolve('Welcome ' + name + '!');
//            } else {
//                deferred.reject('Wrong credentials.');
//            }
            deferred.resolve('registering performance..');
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
        voteSong: function(data) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            this.data = data;
            var that = this;
          
            /**
             * var msgCreate = {type : "create",name: "bobs-song4", color: "red", size: "35",user: "bob",v:1};
				var msgDelete = {type: 'remove',name: 'rejhp4s', v:1};
				var msgTransfer = {type: 'transfer',name: 'bobs-song3', user: 'leroy',v:1};
				var msgRead = {type: 'read', v:1};

             */
            var websocket = new WebSocket("ws://karachain-app-team2.mybluemix.net/");
            
            websocket.onopen = function(evt) {
            	var pagedata = that.data;
            	var msgCreate = '{"type" : "voteperformance","songid":"'+ pagedata.songid+'", "rating":"'+ pagedata.rating+'","singer": "bob","v":1}';
                console.log("ws opened "+msgCreate);
                websocket.send(msgCreate);
              };
              websocket.onmessage = function(evt) {
            	  console.log("ws message qr code: "+evt.data);
              }
//            if (name == 'user' && pw == 'secret') {
//                deferred.resolve('Welcome ' + name + '!');
//            } else {
//                deferred.reject('Wrong credentials.');
//            }
            deferred.resolve('registering performance..');
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
        getPerformances: function(data) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            data.singerId = "kc0123456";
            this.data = data;
            var that = this;
          
            /**
             * var msgCreate = {type : "create",name: "bobs-song4", color: "red", size: "35",user: "bob",v:1};
				var msgDelete = {type: 'remove',name: 'rejhp4s', v:1};
				var msgTransfer = {type: 'transfer',name: 'bobs-song3', user: 'leroy',v:1};
				var msgRead = {type: 'read', v:1};

             */
            var websocket = new WebSocket("ws://karachain-app-team2.mybluemix.net/");
            
            websocket.onopen = function(evt) {
            	var pagedata = that.data;
            	var msgCreate = '{"type" : "viewmyperformances","singer":"' +pagedata.singerId+'","v":1}';
                console.log("ws opened "+msgCreate);
                websocket.send(msgCreate);
              };
              websocket.onmessage = function(evt) {
            	  console.log("ws message view performances: "+evt.data);
            	  that.songdata = evt.data;
              }
//            if (name == 'user' && pw == 'secret') {
//                deferred.resolve('Welcome ' + name + '!');
//            } else {
//                deferred.reject('Wrong credentials.');
//            }
            deferred.resolve(that.songdata);
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
}).service('SessionService', ['$cookies', function ($cookies) {
    var localStoreAvailable = typeof (Storage) !== "undefined";
    this.store = function (name, details) {
        if (localStoreAvailable) {
            if (angular.isUndefined(details)) {
                details = null;
            } else if (angular.isObject(details) || angular.isArray(details) || angular.isNumber(+details || details)) {
                details = angular.toJson(details);
            };
            sessionStorage.setItem(name, details);
        } else {
            $cookieStore.put(name, details);
        };
    };

    this.persist = function(name, details) {
        if (localStoreAvailable) {
            if (angular.isUndefined(details)) {
                details = null;
            } else if (angular.isObject(details) || angular.isArray(details) || angular.isNumber(+details || details)) {
                details = angular.toJson(details);
            };
            localStorage.setItem(name, details);
        } else {
            $cookieStore.put(name, details);
        }
    };

    this.get = function (name) {
        if (localStoreAvailable) {
            return getItem(name);
        } else {
            return $cookieStore.get(name);
        }
    };

    this.destroy = function (name) {
        if (localStoreAvailable) {
            localStorage.removeItem(name);
            sessionStorage.removeItem(name);
        } else {
            $cookieStore.remove(name);
        };
    };

    var getItem = function (name) {
        var data;
        var localData = localStorage.getItem(name);
        var sessionData = sessionStorage.getItem(name);

        if (sessionData) {
            data = sessionData;
        } else if (localData) {
            data = localData;
        } else {
            return null;
        }

        if (data === '[object Object]') { return null; };
        if (!data.length || data === 'null') { return null; };

        if (data.charAt(0) === "{" || data.charAt(0) === "[" || angular.isNumber(data)) {
            return angular.fromJson(data);
        };

        return data;
    };

    return this;
}])
.factory('Singers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
	//TODO: get from server via ws
  var singers = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'Vote for my songs!',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Vote for my songs!',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'Vote for my songs!',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Vote for my songs!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'Vote for my songs!',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return singers;
    },
    remove: function(singer) {
      singers.splice(singers.indexOf(singer), 1);
    },
    get: function(singerId) {
      for (var i = 0; i < singers.length; i++) {
        if (singers[i].id === parseInt(singerId)) {
          return singers[i];
        }
      }
      return null;
    }
  };
})
.factory('Songs', function() {
  // Might use a resource here that returns a JSON array
	//TODO: get from server via ws
 var optionitems = [{
    id: 0,
     item: 'Register a song'
  }, {
    id: 1,
     item: '..other'
  }];
  // Some fake testing data
 var kcsongs =[
 {id:0,"Song_ID":"SONG_ID_001","Date_created":"26.02.2017","Singer_Id":"Singer_ID_123","Singer_Name":"Singer_ANYBODY","Video_Id":"Video_ID_001","Owner":"","Video_Link":"http://123.de","Video_date_created":"26.02.2017","Video_QR_code_Id":"QR_STRING123","Venue_Id":"Venue_ID_001","Venue_Name":"Venue_Name_NY","User_rating":{},"Obsolete":false,"Status":"UNDEFINED","Song_Name":"Song_ANYONE","AVG_Rating":0},
 {id:1,"Song_ID":"kc6508151","Date_created":"01/01/2017","Singer_Id":"user_type1_1","Singer_Name":"Carsten","Video_Id":"vd2326197","Owner":"","Video_Link":"https://www.youtube.com/watch?v=Lsty-LgDNxc","Video_date_created":"01/01/2017","Video_QR_code_Id":"qr746245","Venue_Id":"vu5722680","Venue_Name":"lazy dog","User_rating":{"user_type2_0":5},"Obsolete":false,"Status":"UNDEFINED","Song_Name":"RockNRoll","AVG_Rating":5}
	 ];
  var songs = [{
    id: 0,
    name: 'Love Shack',
    bcId: 'kc846908',
    artist: 'Cosmic Thing',
    votes: '26',
    face: 'img/loveshack.jpeg'
  }, {
    id: 1,
    name: 'Sweet Caroline',
    bcId: "kc846908",
    artist: "Neil Diamond",
    votes: '45',
    face: 'img/sweetcaroline.jpeg'
  }];

  return {
    all: function() {
      return songs;
    },
    allkc: function() {
        return kcsongs;
      },
	ovlist: function(){
		return optionitems;
	},
    remove: function(song) {
      songs.splice(songs.indexOf(song), 1);
    },
    get: function(songId) {
      console.log("get song: "+songId);	
      for (var i = 0; i < songs.length; i++) {    	
        if (songs[i].id === parseInt(songId)) {
          return songs[i];
        }
      }
      return null;
    },
    set: function(data) {
      console.log("set song: "+songId);	
      return null;
    }
  };
});
