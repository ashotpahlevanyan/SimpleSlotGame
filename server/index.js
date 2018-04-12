var express = require('express');
var join = require('path').join;
var cors = require('cors');

var port =  process.env.PORT || 3000;
var app = express();

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	next();
});

app.use('/images/', express.static(join(__dirname, '../client/images/')));
app.use('/css/', express.static(join(__dirname, '../client/css/')));
app.use('/js/', express.static(join(__dirname, '../client/js/')));

app.get("/", function(req, res) {
	res.sendFile(join(__dirname, '../client/index.html'));
});

app.get("/play", function(req, res) {
	const numbers = generateRandoms();
	const bonus = generateBonus(25);
	res.status(200).json({
		numbers, bonus
	});
});

function generateBonus(percent) {
	let val = 25;
	if(percent >= 0 && percent <= 100) {
		val = val;
	}
	const res = Math.floor(Math.random() * 100);
	return res <= val;
}

function generateRandoms() {
	const res = [];
	for( let i = 0; i < 3; i++ ) {
		res.push(Math.floor(Math.random() * 6));
	}
	return res;
}

app.listen(port, function () {
	console.log(`App is listening on Port: ${port}!`);
});

