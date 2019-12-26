let count = 0;
let sum = 0;

for(let i=0; i<5; i++){
	let randomNumber = Math.floor(Math.random() * 90 + 10 );
	sum = sum + randomNumber;
	count = count + 1;
}
console.log("Addition : ", sum);
console.log("Average : ", sum / count );


