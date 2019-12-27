let dieResult = new Map();
let counter = 1;
let flag = false;
let max = 0;

for(let i=1; i<=6; i++) {
	dieResult.set(i, 0);
}

while(flag == false) {

	let rollADie = Math.floor(Math.random() * 10) %6 + 1;
	dieResult.set(rollADie, dieResult.get(rollADie)+1);

	if (dieResult.get(rollADie) > max) {
		max = dieResult.get(rollADie);
	}

	if (max == 10) {
		flag = true;
	}

}

console.log(dieResult);

function maxTimes() {
	for(let roll of dieResult.entries()) {
		if(roll[1] == 10) {
			var key = roll[0], value = roll[1];
			console.log(key, value)
		}
	}
}

maxTimes();
