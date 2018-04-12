'use strict';

var expect = require('chai').expect;
var assert = require('assert');
var util = require('../client/js/util.js');

function cb(response) {
	return response;
}

describe('Client functions:', function () {
	describe('XHRCall(playUrl,cb)', function () {
		it('assertion success', async function () {
			var result = await util.utils.XHRCall("http://localhost:3000/play", cb);
			expect(result).to.be.a('object');
		});
	});
});

//# sourceMappingURL=client.spec-compiled.js.map