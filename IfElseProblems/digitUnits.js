let read = require('readline-sync');

let number = read.questionInt("Enter number : ");

if (number == 1)
	unit="UNIT";
else if (number == 10)
   unit="TEN";
else if (number == 100)
   unit="HUNDRED";
else if (number == 1000)
   unit="THOUSAND";
else if (number == 10000)
   unit="TEN THOUSAND";
else if (number == 100000)
   unit="ONE LAKH";
else if (number == 1000000)
   unit="TEN LAKH";
else
   unit="Invalid Number";

console.log(unit);




