'use strict';

var _util = require('./util.js');

var utils = _interopRequireWildcard(_util);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

var express = require('express');
var join = require('path').join;
var helmet = require('helmet');

var port = process.env.PORT || 3000;
var app = express();

app.use(helmet());

app.use('/images/', express.static(join(__dirname, '../client/images/')));
app.use('/css/', express.static(join(__dirname, '../client/css/')));
app.use('/js/', express.static(join(__dirname, '../client/js/')));

app.get('/', function (req, res) {
	res.sendFile(join(__dirname, '../client/index.html'));
});

app.get('/play', (0, _cors2.default)(), function (req, res) {
	var numbers = utils.generateRandoms();
	var bonus = utils.generateBonus(15);
	res.status(200).json({
		numbers: numbers, bonus: bonus
	});
});

app.listen(port, function () {
	console.log('App is listening on Port: ' + port + '!');
});

//# sourceMappingURL=index-compiled.js.map