var read = require('readline-sync');
var number = read.questionInt("Enter Number : ");
var flag = 0;
var m=number/2;


if(number == 0 && number == 1) {
	console.log("Invalid Number!");
} else {
	for(var i=2; i<=m; i++)	{
 		if(number%i==0){
     		console.log(number+" is not prime number");
     		flag=1;
     		break;
    	}
	}
	if (flag == 0) {
		console.log(number+" is prime number!");
	}
}
