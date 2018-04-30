
function getMostFollowers(...args){
	var userPromiseArr = [];
	for(let i = 0; i < arguments.length; i++){
		userPromiseArr[i] = $.getJSON(`https://api.github.com/users/${arguments[i]}`);
	}
	return Promise.all(userPromiseArr).then(function(data){
		let max = data.sort((a,b) => a.followers < b.followers)[0];
		return `${max.login} has the most followers with ${max.followers}`;
	}).catch(function(err){
		console.log(err.message);
	})
}
console.log(getMostFollowers("denismhz", "colt"));

function starWarsString(num){
	var str = "";
	var data = $.getJSON(`https://swapi.co/api/people/${num}`);
	return Promise.resolve(data).then(function(name){
		
		str += `${name.name} is featured in ${str}`;
		return $.getJSON(name.films[0]);
	}).then(function(film){
		str += `${film.title}, directed by ${film.director}`;
		return $.getJSON(film.planets[0]);
	}).then(function(planet){
		return str += `and it takes place on ${planet.name}.`;
	}).then(function(str){
		return str;
	});
		
}

starWarsString(1).then(function(data){
	console.log(data);
});
