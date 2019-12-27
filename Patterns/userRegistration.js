let read = require('readline-sync');

console.log("******************** Welcome To User Registration Form ********************");

function firstName() {
	let firstName = read.question("Enter valid first name : ");
	let f_Name = new RegExp("^[A-Z]([a-zA-Z]{2,})$");
	if(f_Name.test(firstName))
		console.log("Valid");
	else
		console.log("Invalid");
}

firstName();
