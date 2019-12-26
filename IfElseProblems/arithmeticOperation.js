let read = require('readline-sync');

let a = read.questionInt("Enter first number : ");
let b = read.questionInt("Enter second number : ");
let c = read.questionInt("Enter third number : ");

let maxNumber;
let minNumber;

let result1 = a + b * c;
console.log("Result 1 :"+ result1);
let result2 = a % b + c;
console.log("Result 2 :"+ result2);
let result3 = c + a / b;
console.log("Result 3 :"+ result3);
let result4 = a * b + c;
console.log("Result 4 :"+ result4);

if(result1 > result2 && result1 > result3 && result1 > result4)
	maxNumber=result1;
else if(result2 > result1 && result2 > result3 && result2 > result4)
	maxNumber=result2;
else if(result3 > result1 && result3 > result2 && result3 > result4)
	maxNumber=result3;
else if(result4 > result1 && result4 > result2 && result4 > result3)
	maxNumber=result4;

console.log("Max Number: ", maxNumber);


if(result1 < result2 && result1 < result3 && result1 < result4)
	minNumber=result1;
else if(result2 < result1 && result2 < result3 && result2 < result4)
	minNumber=result2;
else if(result3 < result1 && result3 < result2 && result3 < result4)
	minNumber=result3;
else if(result4 < result1 && result4 < result2 && result4 < result3)
	minNumber=result4;

console.log("Max Number: ", minNumber);

