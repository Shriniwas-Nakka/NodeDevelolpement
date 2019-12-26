let values = new Array();
let maxValue;
let minValue;

for(let i=0; i<5; i++){
	let randomNumber = Math.floor(Math.random() * 899) + 100;
	values[i] = randomNumber;
}

console.log(values)

if (values[0] > values[1] && values[0] > values[2] && values[0] > values[3] && values[0] > values[4]) maxValue = values[0];
else if (values[1] > values[0] && values[1] > values[2] && values[1] > values[3] && values[1] > values[4]) maxValue = values[1];
else if (values[2] > values[0] && values[2] > values[1] && values[2] > values[3] && values[2] > values[4]) maxValue = values[2];
else if (values[3] > values[0] && values[3] > values[1] && values[3] > values[2] && values[3] > values[4]) maxValue = values[3];
else if (values[4] > values[0] && values[4] > values[1] && values[4] > values[2] && values[4] > values[3]) maxValue = values[4];
console.log(maxValue);


if (values[0] < values[1] && values[0] < values[2] && values[0] < values[3] && values[0] < values[4]) minValue = values[0];
else if (values[1] < values[0] && values[1] < values[2] && values[1] < values[3] && values[1] < values[4]) minValue = values[1];
else if (values[2] < values[0] && values[2] < values[1] && values[2] < values[3] && values[2] < values[4]) minValue = values[2];
else if (values[3] < values[0] && values[3] < values[1] && values[3] < values[2] && values[3] < values[4]) minValue = values[3];
else if (values[4] < values[0] && values[4] < values[1] && values[4] < values[2] && values[4] < values[3]) minValue = values[4];
console.log(minValue);
