// create our controller module
angular.module('bandAppControllers', [])
	.controller('BandController', function ($scope) {
		// controller logic here
	})
	.controller('HomeController', function ($scope) {
		$scope.title = "Welcome To Our Site!";
	})
	.controller('itunesController', function ($scope, $http) {
		// variables 
		var onSearchComplete, onError;

		$scope.title = "Search the iTunes Store";
		$scope.albumart = "Album Art";
		$scope.track = "Track";
		$scope.preview = "Preview";
		$scope.trackCost = "Price";

		// create a function to search itunes
		$scope.searchiTunes = function (artist) {
			// to get around cross-domain scripting limitations use the json http scripting service
			$http.jsonp("http://itunes.apple.com/search?limit=5", {
				params: {
					callback: "JSON_CALLBACK",
					term: artist
				}
				// return a promise. when its returned .then we perform the action
			}).then(onSearchComplete, onError);
		};

		// fetch the data if the search succeeds.
		onSearchComplete = function (response) {
			// fetch the data
			$scope.data = response.data;

			// store the songs for the view to iterate over
			$scope.songs = response.data.results;
		};

		// if we catch an error store it for viewing
		onError = function (reason) {
			$scope.error = reason;
		};
	})
	// create our audio controller - ref: https://www.webcodegeeks.com/html5/html5-audio-player-example/
	.controller('AudioController', function ($scope) {
		// variables
		var nextButton, audioFiles, currentTrack, playPlaylist, playNext;

		// set the controller properties
		$scope.title = "Check out our Playlist";
		$scope.albumart = "Album Art";
		$scope.track = "Track";
		$scope.duration = "Duration";

		// set click events for the play and stop buttons
		nextButton = document.getElementById('next-button').addEventListener('click', function () {
			playNext();
		}, false);

		// create the playlist array
		audioFiles = [
			"../audio/Clarksville.mp3",
			"../audio/DaydreamBeliever.mp3",
			"../audio/ImABeliever.mp3",
			"../audio/SteppingStone.mp3",
			"../audio/tailtoddle_lo.mp3"
		];

		// set the current playlist index (starting point)
		currentTrack = 0;

		// fetch the <audio> element of the playlist
		playPlaylist = document.querySelector('#audio-player audio');

		// call this at the end of the previous track
		playNext = function () {
			// check for the last track in the playlist
			if (currentTrack === audioFiles.length - 1) {
				// set back to first track
				currentTrack = 0;
			} else {
				// otherwise increment through list
				currentTrack++;
			}

			// change the audio element src file
			playPlaylist.src = audioFiles[currentTrack];
		};

		// check if the player exists in the html dom
		if (playPlaylist === null) {
			// throw an error displaying the player does not exist
			var reason, throwError;
			reason = "The Audio Player does not exist";
			// if we catch an error store it for viewing
			throwError = function (reason) {
				$scope.error = reason;
			};
		} else {
			// then start the player
			playPlaylist.src = audioFiles[currentTrack];

			// listen for the playback end event then play next track
			playPlaylist.addEventListener('ended', playNext, false);
		}

	});

//----------------------------------------------------------------------------------------------//