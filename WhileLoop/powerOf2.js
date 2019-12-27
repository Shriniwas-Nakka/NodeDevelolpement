let number = process.argv[2];
let power = 1;
let i = 0;

while(i <= number) {
	console.log("2^" + i + " = " + power);
	power = power * 2;
	i++;
}
