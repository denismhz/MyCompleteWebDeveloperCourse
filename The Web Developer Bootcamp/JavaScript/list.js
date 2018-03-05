// var todos = [];

// var input = prompt("What would u like todo");

// while(input !== "quit"){
// 	if(input === "list"){
// 		listTodos();
// 	} else if(input === "new"){
// 		newTodo();
// 	} else if(input === "delete"){
// 		deleteTodo();
// 	}
// 	input = prompt("What would u like todo");	
// }
// console.log("Quit");

// function listTodos(){
// 	todos.forEach(function(todo, index){
// 		console.log("**********")
// 		console.log(index + ": " + todo);
// 		console.log("**********")
// 	});
// }

// function newTodo(){
// 	var newTodo = prompt("Enter new todo");
// 	todos.push(newTodo);
// }

// function deleteTodo(){
// 	var index = prompt("Enter index of todo to delete");
// 	console.log("deleted" + todos[index]);
// 	todos.splice(index, 1);
// }

var arr = [1,2,3, 4,5];

function printReverse(array){
	var reverseArray = [];
	var c = 0;
	for(var i = array.length; i >= 0 ; i--){
		reverseArray[c] = array[i];
		c++;
	}
	return console.log(reverseArray);
}

function sumArray(array){
	var sum = 0;
	array.forEach(function(num){
		sum+= num;
	});

	return sum;
}

function isUniform(array){
	for(var i = 1; i < array.length; i++){
		if(array[i]!==array[0]){
			return false;
		}
		else{
			return true;
		} 
	}
}