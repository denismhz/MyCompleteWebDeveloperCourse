var btn = document.querySelector("#btn");
var fullnamed = document.querySelector("#fullname");
var username = document.querySelector("#username");
var avatar = document.querySelector("#avatar");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
// https://randomuser.me/api/
function newUser(){
	fetch("https://randomuser.me/api/")
		.then(handleErrors)
		.then(parseJSON)
		.then(updateProfile)
		.catch(printError);
}

function handleErrors(res){
	if(!res.ok){
		throw Error(res.status);
	}
	return res;
}

function parseJSON(data){
	return data.json();
}

function updateProfile(data){
	var fullname = data.results[0].name.first + " " + data.results[0].name.last;
	console.log(data);
	fullnamed.innerText = fullname.toString();
	username.innerText = data.results[0].login.username;
	email.innerText = data.results[0].email;
	city.innerText = data.results[0].location.city;
	avatar.src = data.results[0].picture.medium;
}

function printError(err){
	console.log(err);
}

btn.addEventListener("click", newUser);