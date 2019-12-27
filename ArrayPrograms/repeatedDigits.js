let repeatedDigits = new Array();

for(let i=0; i<100; i++) {

	let a = parseInt(i / 10);
	let b = i % 10;

	if(a == b && a != 0 && b != 0)
		repeatedDigits.push(i);

}

console.log("Repeated Twice Number are:", repeatedDigits);
