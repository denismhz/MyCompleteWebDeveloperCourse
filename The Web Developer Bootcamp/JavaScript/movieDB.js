var arr = [];

for(var i = 0; i < 4; i++){
	arr[i] = new Object();
}

arr[0].name = "Spiderman 3";
arr[0].seen = true;
arr[0].stars = 4.0;

arr[1].name = "Spiderman 2";
arr[1].seen = true;
arr[1].stars = 4.5;

arr[2].name = "Spiderman 1";
arr[2].seen = true;
arr[2].stars = 4.0;

arr[3].name = "r3000";
arr[3].seen = false;
arr[3].stars = 0.0;



for(var i = 0; i < arr.length; i++){
	if(arr[i].seen){
		console.log("you have seen " + 
			arr[i].name + " - " + arr[i].stars + " stars");
	} else {
		console.log("you have NOT seen " + 
			arr[i].name + " - " + arr[i].stars + " stars");
	}
}