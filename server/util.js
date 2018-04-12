const MIN = 0;
const MAX = 6;
const PERCENT = 25;

function generateBonus(percent) {
	let val = PERCENT;
	if(percent >= 0 && percent <= 100) {
		val = percent;
	}
	const res = Math.floor(Math.random() * 100);
	return res <= val;
}

function generateRandoms() {
	const res = [];
	for( let i = 0; i < 3; i++ ) {
		res.push(Math.floor(Math.random() * MAX) + MIN);
	}
	return res;
}

module.exports = {
	generateBonus,
	generateRandoms
};