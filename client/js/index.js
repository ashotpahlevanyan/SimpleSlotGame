
;(function() {

	'use strict';

	let wSize;
	let form;
	let slots;
	let win;
	let bonus;
	let play;
	const playUrl = "http://localhost:3000/play";

	document.onreadystatechange = function() {
		if(document.readyState === 'interactive') {
			domContentLoaded();
		} else if(document.readyState === 'complete') {
				domReady();
		}
	};

	function domContentLoaded() {
		wSize = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
	}

	function domReady() {
		form = document.querySelector('.form');
		slots = document.querySelector('.slots');
		play = document.querySelector('.play');
		win = document.querySelector('.win');
		bonus = document.querySelector('.bonus');

		form.addEventListener('submit', function(e) {
			e.preventDefault();

			utils.XHRCall(playUrl, processResult);
		});
	}

	function processResult(response) {
		const set = new Set(response.numbers);
		win.textContent = utils.winTextByEqualValues(set.size);
		let slotItems = slots.querySelectorAll('li img');
		const prefix = './images/';
		for (let i = 0; i < slotItems.length; i++) {
			const imgName = utils.slotImageByValue(response.numbers[i]);
			slotItems[i].src = `${prefix}${imgName}`;
			slotItems[i].alt = imgName.toLowerCase();
		}

		if (response.bonus) {
			play.disabled = true;
			play.style.opacity = 0.5;
			bonus.textContent = "Wow, You Won a Bonus Spin, Triggering...";
			setTimeout(() => {
				utils.XHRCall(playUrl, processResult);
			}, 3000);
		} else {
			play.disabled = false;
			play.style.opacity = 1;
			bonus.textContent = '';
		}
	}

})();