let read = require('readline-sync');

let flag = 0;
let min = 0;
let max = 100;

let mid = Math.round(min + max / 2);

while ( flag == 0 ){
	console.log("Is Magic Number is Less or Greater or Same ",mid);
	console.log("1.Greater\n2.Less\n3.MagicNum");
	let num = read.questionInt("Enter Your Choice: ");

	switch(num) {
		case 1:
      	min = mid;
       	max = 100;
       	mid = Math.round(min + max / 2);
       	break;
		case 2:
       	max = mid;
       	min = 0;
       	mid = Math.round(min + max /2);
       	break;
		case 3:
       	console.log("Magic Num is :",mid);
       	flag = 1;
       	break;
	}
}
