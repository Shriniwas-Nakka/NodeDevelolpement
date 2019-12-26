var number = process.argv[2];

if(number >= 0 && number < 31) {
	for(var i=0; i<=number; i++) {
		console.log("2^:"+i+" is : "+Math.pow(2,i));
	}
} else {
	console.log("Number Out Of Range Or Invalid Number !");
}
