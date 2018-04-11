var express = require('express');
var join = require('path').join;

var port =  process.env.PORT || 3000;
var app = express();

app.get("/", function(req, res) {
	res.sendFile(join(__dirname, '../client/index.html'));
});

app.get("/play", function(req, res) {
	res.status(200).json(generateRandoms());
});

app.get("/bonus", function(req, res) {
	res.status(200).json(generateBonus(25));
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

app.use('/images/', express.static(join(__dirname, '../client/images/')));
app.use('/css/', express.static(join(__dirname, '../client/css/')));
app.use('/js/', express.static(join(__dirname, '../client/js/')));

app.listen(port, function () {
	console.log('App is listening on Port: ' + port + '!');
});

