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

			XHRCall(playUrl, processResult);
		});
	}

	function processResult(response) {
		const set = new Set(response.numbers);
		win.textContent = winTextByEqualValues(set.size);
		let slotItems = slots.querySelectorAll('li img');
		const prefix = './images/';
		for (let i = 0; i < slotItems.length; i++) {
			slotItems[i].src = `${prefix}${slotImageByValue(response.numbers[i])}`;
			slotItems[i].alt = slotImageByValue(response.numbers[i]);
		}
		if (response.bonus) {
			play.disabled = true;
			play.style.opacity = 0.5;
			bonus.textContent = "Wow, You Won a Bonus Spin, Triggering...";
			setTimeout(() => {
				XHRCall(playUrl, processResult);
			}, 3000);
		} else {
			play.disabled = false;
			play.style.opacity = 1;
			bonus.textContent = '';
		}
	}

	function XHRCall(url, cb) {
		let request = new XMLHttpRequest();
		request.open('GET', url);
		request.responseType = 'json';
		request.onload = function() {
			if (request.status === 200) {
				cb(request.response);
			} else {
				console.log(request.status + ': ' + request.statusText);
			}
		};
		request.send();
	}

	function slotImageByValue(val) {
		return `Symbol_${val}.png`;
	}

	function winTextByEqualValues(val) {
		const winText = ['Big Win', 'Small Win', 'No Win'];
		return(winText[val - 1]);
	}

})();