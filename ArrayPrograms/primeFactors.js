let read = require('readline-sync');
let number = read.question("Enter number : ");
var factors = new Array();

divisor = 2;
while(number > 2) {
	if(number % divisor == 0) {
		factors.push(divisor);
      number = number/divisor;
   } else {
      divisor++;
   }
}

console.log(factors);
