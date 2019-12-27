let read = require('readline-sync');
let num1 = read.question("Enter First Number :");
let num2 = read.question("Enter Second Number :");

let rem, temp, final = 0;
temp = num2;

while( num1 > 0 ) {
	rem = num1 % 10;
   num1 = parseInt(num1 / 10 );
   final = final * 10 + rem;
}
checkpalindrome(final)

function checkpalindrome(final) {
	if (final == temp)
       console.log("Number is Palindrome");
	else
       console.log("Number is not Palindrome")
}
