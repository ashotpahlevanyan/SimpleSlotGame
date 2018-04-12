'use strict';

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

function slotImageByValue(val) {
	return 'Symbol_' + val + '.png';
}

function winTextByEqualValues(val) {
	var winText = ['Big Win', 'Small Win', 'No Win'];
	return winText[val - 1];
}

module.exports = {
	XHRCall: XHRCall,
	slotImageByValue: slotImageByValue,
	winTextByEqualValues: winTextByEqualValues
};

//# sourceMappingURL=util-compiled.js.map