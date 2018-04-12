"use strict";

var MIN = 0;
var MAX = 6;
var PERCENT = 25;

function generateBonus(percent) {
	var val = PERCENT;
	if (percent >= 0 && percent <= 100) {
		val = percent;
	}
	var res = Math.floor(Math.random() * 100);
	return res <= val;
}

function generateRandoms() {
	var res = [];
	for (var i = 0; i < 3; i++) {
		res.push(Math.floor(Math.random() * MAX) + MIN);
	}
	return res;
}

module.exports = {
	generateBonus: generateBonus,
	generateRandoms: generateRandoms
};

//# sourceMappingURL=util-compiled.js.map