let EMP_RATE_PER_HOUR = 20;

let empHrs = 0;
let empWage = 0;
let isPresent = 1;

let employeeCheck = Math.floor(Math.random() * 10) % 2;

if (isPresent == employeeCheck)
	empHrs =  8;
else
	empHrs = 0;

empWage = empHrs * EMP_RATE_PER_HOUR;
