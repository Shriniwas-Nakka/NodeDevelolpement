let read = require('readline-sync');

let value1 = 12;
let value2 = 3.281;

let feet = read.question("Enter feet : ");
let inch = read.question("Enter inch : ");
let metre = read.question("Enter meter : ");
let conversion;

console.log("\n1. Feet To Inch\n2. Inch To Feet\n3. Feet To Metre\n4. Metre to Feet");

let choise = read.question("Enter your choise : ");

switch(choise) {
	case '1':
		conversion = feet * value1;
		break;
	case '2':
		conversion = inch / value1;
		break;
	case '3':
		conversion = feet / value2;
		break;
	case '4':
		conversion = metre * value2;
		break;
	default:
		conversion = "Invalid Choise";
}

console.log(conversion);
