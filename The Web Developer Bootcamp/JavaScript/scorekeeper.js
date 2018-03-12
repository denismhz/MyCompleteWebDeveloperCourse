var score1 = 0;
var score2 = 0;

var playingTo = 5;

var buttonP1 = document.getElementById("playerOne");
var buttonP2 = document.getElementById("playerTwo");
var buttonR = document.getElementById("reset");

var input = document.getElementsByTagName("input")[0];



buttonP1.addEventListener("click", function(){
	score1++;
	if(score1 <= playingTo && score2 < playingTo){
		if(score1 === playingTo){
			document.getElementById("p1score").style.color = "green";	
		}
		document.getElementById("p1score").textContent = score1;
	}
});

buttonP2.addEventListener("click", function(){
	score2++;
	if(score2 <= playingTo && score1 < playingTo){
		if(score2 === playingTo){
			document.getElementById("p2score").style.color = "green";	
		}
		document.getElementById("p2score").textContent = score2;
	}
});

buttonR.addEventListener("click", function(){
	Reset();
});

input.addEventListener("change", function() {
	document.getElementById("playingTo").textContent = input.value;
	Reset();
	//console.log(input.value);
	playingTo = Number(input.value);
});

function Reset(){
	score1 = 0;
	score2 = 0;
	if(score1 <= playingTo){
		document.getElementById("p1score").textContent = score1;
		document.getElementById("p2score").textContent = score2;
		document.getElementById("p1score").style.color = "black";
		document.getElementById("p2score").style.color = "black";
	}
}