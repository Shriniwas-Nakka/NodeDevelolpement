let numbers = new Array();
var first, second;

for(let i=0; i<10; i++) {
	let randomNumber = Math.floor(Math.random() * 899) + 100;
	numbers[i] = randomNumber;
}

console.log(numbers);

function findSecondLargestNumber() {
	first = second = 0;
	for(let i=0; i<numbers.length; i++) {
		if (numbers[i] > first) {
			second = first;
			first = numbers[i];
		} else if (numbers[i] > second && numbers[i] != first) {
			second = numbers[i];
		}
	}
	console.log("Second Largest Number : " + second);
}

function findSecondSmallestNumber() {
	first = second = 999;
	for(let i=0; i<numbers.length; i++) {
		if (numbers[i] < first) {
			second = first;
			first = numbers[i];
		} else if (numbers[i] < second && numbers[i] != first) {
			second = numbers[i];
		}
	}
	console.log("Second Smallest Number : " + second);
}

findSecondLargestNumber();
findSecondSmallestNumber();
