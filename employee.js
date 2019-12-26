let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let EMP_RATE_PER_HOUR = 20;

let empHrs = 0;
let empWage = 0;

let employeeCheck = Math.floor(Math.random() * 10) % 3;

switch(employeeCheck) {
	case IS_PART_TIME:
		empHrs = 4;
		break;
	case IS_FULL_TIME:
		empHrs = 8;
		break;
	default:
		empHrs = 0;
}

empWage = empHrs * EMP_RATE_PER_HOUR;
