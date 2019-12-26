let read = require('readline-sync');
let number = read.questionInt("Enter single digit number : ");

if (number == 0)
	text = "ZERO";
else if (number == 1)
	text = "ONE";
else if (number == 2)
	text = "TWO";
else if (number == 3)
	text = "THREE";
else if (number == 4)
	text = "FOUR";
else if (number == 5)
	text = "FIVE";
else if (number == 6)
	text = "SIX";
else if (number == 7)
	text = "SEVEn";
else if (number == 8)
	text = "EIGHT";
else if (number == 9)
	text = "NINE";
else
	text = "Invalid Number";

console.log(text);
