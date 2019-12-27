let read = require('readline-sync');

console.log("1: Celsius to Fahrenheit\n2: Fahrenheit to Celsius");
let choise = read.questionInt("Enter your choise (1 or 2) : ");

function temp()
{
    if(choise == 1)
    {
        let cel = read.question("Enter Temperature : ")
        let fah = (cel * (9 / 5)) + 32;
        console.log("Fahrenheit : "+fah)
    }

    if(choise == 2)
    {
        let fah = read.question("Enter Temperature : ")
        let cel = (fah - 32) * 5 / 9;
        console.log("Celsius : "+cel)
    }
}

temp()
