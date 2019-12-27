let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let MAX_HRS_IN_MONTH = 10;
let EMP_RATE_PER_HOUR = 20;
let NUM_OF_WORKING_DAYS = 20;

let empHrs = 0;
let totalEmpHrs = 0;
let totalEmpWage = 0;
let totalWorkingDays = 0;
let empDailyWage = new Array();

function getWorkingHours(employeeCheck) {
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
	return empHrs;
}

function calcDailyWage(empHrs) {
	return empHrs * EMP_RATE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays <= NUM_OF_WORKING_DAYS) {
	totalWorkingDays++;
	let employeeCheck = Math.floor(Math.random() * 10) % 3;
	empHrs = getWorkingHours(employeeCheck);
	totalEmpWage += empHrs;
	empDailyWage.push(calcDailyWage(empHrs));
}

totalEmpWage = calcDailyWage(totalEmpHrs);
