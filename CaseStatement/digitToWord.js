let read = require('readline-sync');
let number = read.question("Enter single digit number : ");

switch(number){
	case '0':
		text = "ZERO";
		break;
	case '1':
		text = "ONE";
		break;
	case '2':
		text = "TWO";
		break;
	case '3':
		text = "THREE";
		break;
	case '4':
		text = "FOUR";
		break;
	case '5':
		text = "FIVE";
		break;
	case '6':
		text = "SIX";
		break;
	case '7':
		text = "SEVEN";
		break;
	case '8':
		text = "EIGHT";
		break;
	case '9':
		text = "NINE";
		break;
	default:
		text = "Invalid Number";
		break;
}

console.log(text);
