'use strict';

var expect = require('chai').expect;
var assert = require('assert');
var util = require('../server/util.js');

describe('Utility Functions: util.js', function () {
	describe('generateRandoms()', function () {
		it('should be an array', function () {
			var result = util.generateRandoms();
			expect(result).to.be.a('array');
		});

		it('should be an array of length 3', function () {
			var result = util.generateRandoms();
			assert.equal(result.length, 3);
		});

		it('should not contain number 7', function () {
			var result = util.generateRandoms();
			assert.equal(result.indexOf(7), -1);
		});

		it('should be an array of elements from 0 to 5', function () {
			var result = util.generateRandoms();
			for (let i = 0; i < result.length; i++) {
				expect([0, 1, 2, 3, 4, 5]).to.include(result[i]);
			}
		});

	});

	describe('generateBonus()', function () {
		it('should be a boolean value', function () {
			var result = util.generateBonus(25);
			expect(result).to.be.a('boolean');
		});

		it('should have around 25 percentage of true values', function () {
			let result = [];
			for (let i = 0; i < 200; i++) {
				result.push(util.generateBonus(25));
			}
			expect(result.filter((val) => val).length).to.be.at.least(40);
		});
	});
});