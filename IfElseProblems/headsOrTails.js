let HEAD = 1;

let randomCoin = Math.floor(Math.random() * 10) % 2;

if (randomCoin == HEAD)
	console.log("Heads");
else
	console.log("Tails");
