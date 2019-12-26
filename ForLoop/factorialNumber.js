var read = require('readline-sync');
var inputNumber = read.question('Please enter an integer : ');
var total = 1;

for (i = 0; i < inputNumber; i++){
    total = total * (inputNumber - i);
}

console.log(inputNumber + '! = ' + total);
