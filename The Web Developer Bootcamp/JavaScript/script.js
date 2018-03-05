// var firstName = prompt("What is your firstName??");
// var lastName = prompt("What is your lastName???");
// var age = prompt("What is your age??");
// var days = age * 365.25;
// alert("Nice to meet you " + firstName + " " + lastName +"!");
// alert("you are " + age + " years olld muhahaha you lived for " + days);

// var secretNumber = 4;

// var guess = Number(prompt("Guess a numher"));

// if(Number(guess)===secretNumber){
// 	alert("you got it right");
// } else if(guess > secretNumber){
// 	alert("too high guess again");
// } else {
// 	alert("too low guess again");
// }

// var c1 = -10;

// while(c1 < 20){
// 	console.log(c1);
// 	c1++;
// }

// var c2 = 10;

// while(c2 <= 40){
// 	if(c2%2===0)
// 		console.log(c2);
// 	c2++;
// }

// var c3 = 300;

// while(c3 < 334){
// 	if(c3 % 2 !== 0)
// 		console.log(c3)
// 	c3++;
// }

// c3 = 5;

// while(c3 <= 50){
// 	if(c3%5 === 0 && c3%3 === 0)
// 		console.log(c3);
// 	c3++;
// }

// for(var i = 5; i<=50; i++){
// 	if(i%5 === 0 && i%3 === 0){
// 		console.log(i);
// 	}
// }

function isEven(ddd){
	return ddd%2 === 0;
}

function factorial(numbe){
	var fac = numbe;
	for(var i = numbe-1; i >= 1; i--){
		fac *= i;
	}
	return fac;
}

function kebabToSnake(kebabcase){
	newStr = kebabcase.replace(/-/g , "_");
	return newStr; 
}

function sing (){
	console.log("twinkle twinkle");
	console.log("how i wonder")
}

var handler = setInterval(sing, 1000);