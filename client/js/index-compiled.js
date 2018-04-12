'use strict';

;(function () {

	'use strict';

	var wSize = void 0;
	var form = void 0;
	var slots = void 0;
	var win = void 0;
	var bonus = void 0;
	var play = void 0;
	var playUrl = "http://localhost:3000/play";

	document.onreadystatechange = function () {
		if (document.readyState === 'interactive') {
			domContentLoaded();
		} else if (document.readyState === 'complete') {
			domReady();
		}
	};

	function domContentLoaded() {
		wSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	}

	function domReady() {
		form = document.querySelector('.form');
		slots = document.querySelector('.slots');
		play = document.querySelector('.play');
		win = document.querySelector('.win');
		bonus = document.querySelector('.bonus');

		form.addEventListener('submit', function (e) {
			e.preventDefault();

			XHRCall(playUrl, processResult);
		});
	}

	function XHRCall(url, cb) {
		var request = new XMLHttpRequest();
		request.open('GET', url);
		request.responseType = 'json';
		request.onload = function () {
			if (request.status === 200) {
				cb(request.response);
			} else {
				console.log(request.status + ': ' + request.statusText);
			}
		};
		request.send();
	}

	function processResult(response) {
		var set = new Set(response.numbers);
		win.textContent = winTextByEqualValues(set.size);
		var slotItems = slots.querySelectorAll('li img');
		var prefix = './images/';
		for (var i = 0; i < slotItems.length; i++) {
			slotItems[i].src = '' + prefix + slotImageByValue(response.numbers[i]);
			slotItems[i].alt = slotImageByValue(response.numbers[i]);
		}
		if (response.bonus) {
			play.disabled = true;
			play.style.opacity = 0.5;
			bonus.textContent = "Wow, you won a bonus spin, triggering.";
			setTimeout(function () {
				XHRCall(playUrl, processResult);
			}, 6000);
		} else {
			play.disabled = false;
			play.style.opacity = 1;
			bonus.textContent = '';
		}
	}

	function slotImageByValue(val) {
		return 'Symbol_' + val + '.png';
	}

	function winTextByEqualValues(val) {
		var winText = ['Big Win', 'Small Win', 'No Win'];
		return winText[val - 1];
	}
})();

//# sourceMappingURL=index-compiled.js.map