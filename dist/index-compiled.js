'use strict';

var _util = require('./util.js');

var utils = _interopRequireWildcard(_util);

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

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	next();
});

app.use('/images/', express.static(join(__dirname, '../client/images/')));
app.use('/css/', express.static(join(__dirname, '../client/css/')));
app.use('/js/', express.static(join(__dirname, '../client/js/')));

app.get('/', function (req, res) {
	res.sendFile(join(__dirname, '../client/index.html'));
});

app.get('/play', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
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