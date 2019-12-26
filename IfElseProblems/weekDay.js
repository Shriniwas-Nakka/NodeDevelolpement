let read = require('readline-sync');

let number = read.questionInt("Enter day : ");

if (number == 1)
	day="SUNDAY";
else if (number == 2)
	day="MONDAY";
else if (number == 3)
	day="TUESDAY";
else if (number == 4)
	day="WEDENSDAY";
else if (number == 5)
	day="THURSDAY";
else if (number == 6)
	day="FRIDAY";
else if (number == 7)
	day="SATURDAY";
else
	day="Invalid Number";


console.log(day);
