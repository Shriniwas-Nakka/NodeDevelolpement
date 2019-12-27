var read = require('readline-sync');
var number = read.question("Enter number : ");
var i , rs = 0 , flag = 0;

let primeNumber = primeCheck(number);

if (primeNumber == true) {
	let palindromeNumber = palindromeCheck(number);
	let primeNumber1 = primeCheck(palindromeNumber);

	if (primeNumber1 == true) {
		console.log(number + " is prime as well as palindrome!")
	} else {
		console.log(number + " is not prime as well as palindrome!")
	}
}

function primeCheck(number) {
	rs = number / 2;
	if(number == 0 && number == 1) {
		console.log(number+" is not Prime number!");
	} else {
		for(i=2; i<=rs; i++) {
			if(number % i == 0) {
				console.log(number+" is not Prime number!");
				flag = 1;
				break;
			}
		}
		if(flag == 0) {
			console.log(number+ " is Prime number!")
			return true;
		}
	}
}

function palindromeCheck(number) {
	let rem, temp, final = 0;

	while( number > 0 ) {
		rem = number % 10;
		number = parseInt(number / 10 );
		final = final * 10 + rem;
	}
	return final;
}



