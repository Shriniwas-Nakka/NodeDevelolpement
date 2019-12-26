let read = require('readline-sync');
let number = read.question("Enter number : ");

let sum = 0.0;

if(number!=0) {
	for(var i=1; i<=number; i++) {
   	sum = sum + (1.0 / i);
      console.log("The harmonic value for the number is : "+sum);
   }
} else {
	console.log(number +" is Invalid Number!")
}
