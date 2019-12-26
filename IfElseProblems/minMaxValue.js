let values = new Array();

for(let i=0; i<5; i++){
	let randomNumber = Math.floor(Math.random() * 899) + 100;
	values[i] = randomNumber;
}

console.log(values)

if (values[0] > values[1] && values[0] > values[2] && values[0] > values[3] && values[0] > values[4]) console.log("Max : "+ values[0]);
else if (values[1] > values[0] && values[1] > values[2] && values[1] > values[3] && values[1] > values[4]) console.log("Max : "+ values[1]);
else if (values[2] > values[0] && values[2] > values[1] && values[2] > values[3] && values[2] > values[4]) console.log("Max : "+ values[2]);
else if (values[3] > values[0] && values[3] > values[1] && values[3] > values[2] && values[3] > values[4]) console.log("Max : "+ values[3]);
else if (values[4] > values[0] && values[4] > values[1] && values[4] > values[2] && values[4] > values[3]) console.log("Max : "+ values[4]);


if (values[0] < values[1] && values[0] < values[2] && values[0] < values[3] && values[0] < values[4]) console.log("Min : "+ values[0]);
else if (values[1] < values[0] && values[1] < values[2] && values[1] < values[3] && values[1] < values[4]) console.log("Min : "+ values[1]);
else if (values[2] < values[0] && values[2] < values[1] && values[2] < values[3] && values[2] < values[4]) console.log("Min : "+ values[2]);
else if (values[3] < values[0] && values[3] < values[1] && values[3] < values[2] && values[3] < values[4]) console.log("Min : "+ values[3]);
else if (values[4] < values[0] && values[4] < values[1] && values[4] < values[2] && values[4] < values[3]) console.log("Min : "+ values[4]);
