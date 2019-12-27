let numbers = new Array();

for(let i=0; i<10; i++) {
	let randomNumber = Math.floor(Math.random() * 899) + 100;
	numbers[i] = randomNumber;
}

let sortedArray = numbers.sort()
let arraySize = sortedArray.length;
console.log("Sorted Array : " + sortedArray);

function findSecondLargestNumber() {
	console.log("Second Largest Number : " + sortedArray[arraySize - 2]);
}

function findSecondSmallestNumber() {
	console.log("Second Smallest Number : " + sortedArray[1]);
}

findSecondLargestNumber();
findSecondSmallestNumber();
