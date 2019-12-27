var read = require('readline-sync');
var size = read.question("Enter size of an array : ");
var arr = new Array();
var found = true;


for(let i=0; i<size; i++) {
	arr[i] = read.question("Enter elements : ");
}
console.log("Entered Array is: " + arr);

for(let i=0; i<arr.length-2; i++) {
	for(let j=i+1; j<arr.length-1; j++) {
		for(let k=j+1; k<arr.length; k++) {
			if(parseInt(arr[i]) + parseInt(arr[j]) + parseInt(arr[k]) == 0) {
				console.log("Distinct elements : " + arr[i] + " " +arr[j] + " " + arr[k]);
				found = true;
			}
		}
	}
}

if(found == false) {
	console.log("Not Exists!");
}
