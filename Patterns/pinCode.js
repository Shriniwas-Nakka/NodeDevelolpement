let read = require('readline-sync');

function pinCode() {
	let pinCode = read.question("Enter pin code : ");
   let p_Code = new RegExp("^[1-9][0-9]{5}$");
   if(p_Code.test(pinCode))
   	console.log("Valid");
   else
      console.log("Invalid");
}

pinCode();

