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

			utils.XHRCall(playUrl, processResult);
		});
	}

	function processResult(response) {
		var set = new Set(response.numbers);
		win.textContent = utils.winTextByEqualValues(set.size);
		var slotItems = slots.querySelectorAll('li img');
		var prefix = './images/';
		for (var i = 0; i < slotItems.length; i++) {
			var imgName = utils.slotImageByValue(response.numbers[i]);
			slotItems[i].src = '' + prefix + imgName;
			slotItems[i].alt = imgName.toLowerCase();
		}

		if (response.bonus) {
			play.disabled = true;
			play.style.opacity = 0.5;
			bonus.textContent = "Wow, You Won a Bonus Spin, Triggering...";
			setTimeout(function () {
				utils.XHRCall(playUrl, processResult);
			}, 3000);
		} else {
			play.disabled = false;
			play.style.opacity = 1;
			bonus.textContent = '';
		}
	}
})();

//# sourceMappingURL=index-compiled.js.map