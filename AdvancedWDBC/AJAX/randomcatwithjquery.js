
var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var cstrjq = 
"$(\"#jquery\").click(function(){\n"+
"	$.getJSON(url)\n" +
"	.done(function(data){\n" +
"		$(\"#quote\").text(data.toString());\n" +
"	})\n" +
"	.fail(function(){\n" +
"		console.log(\"Error\");\n" +
"	});\n" +
"});"

var cstrft = 
"document.querySelector(\"#fetch\").addEventListener(\"click\", function(){\n" +
"	fetch(url)\n"+
"	.then(function(response){\n"+
"		if(response.ok){\n"+
"			return response;\n"+
"		}\n"+
"		throw new Error(\"Network response was not ok\");\n"+
"	})\n"+
"	.then(function(data){\n"+
"		return data.json();\n"+
"	})\n"+
"	.then(function(quote){\n"+
"		document.querySelector(\"#quote\").innerText = quote[0];\n"+
"	})\n"+
"	.catch(function(err){\n"+
"		console.log(err.message);\n"+
"	})\n"+
"});\n"

var cstrxhr = 
"document.querySelector(\"#xhr\").addEventListener(\"click\", function(){\n"+
"	var XHR = new XMLHttpRequest();\n"+
"\n"+
"	XHR.onreadystatechange = function(){\n"+
"		if(XHR.readyState == 4 && XHR.status == 200){\n"+
"			document.querySelector(\"#quote\").innerText = JSON.parse(XHR.responseText)[0];\n"+			
"		}\n"+
"	}\n"+
"	XHR.open(\"GET\", url);\n"+
"	XHR.send();\n"+
"});"

var cstrax =
"document.querySelector(\"#axios\").addEventListener(\"click\", function(){\n"+
"	axios.get(url)\n"+
"	.then(function(response){\n"+
"		$(\'#quote\').text(response.data);\n"+
"	})\n"+
"	.catch(function(error){\n"+
"		console.log(error);\n"+
"	});\n"+
"});"


$("#jquery").click(function(){
	$("code").text(cstrjq);
	$.getJSON(url)
	.done(function(data){
		$("#quote").text(data.toString());
	})
	.fail(function(){
		console.log("Error");
	});
});

document.querySelector("#fetch").addEventListener("click", function(){
	$("code").text(cstrft);
	fetch(url)
	.then(function(response){
		if(response.ok){
			return response;
		}
		throw new Error("Network response was not ok");
	})
	.then(function(data){
		return data.json();
	})
	.then(function(quote){
		document.querySelector("#quote").innerText = quote[0];
	})
	.catch(function(err){
		console.log(err.message);
	})
});

document.querySelector("#xhr").addEventListener("click", function(){
	$("code").text(cstrxhr);
	var XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function(){
		if(XHR.readyState == 4 && XHR.status == 200){
			document.querySelector("#quote").innerText = JSON.parse(XHR.responseText)[0];			
		}
	}

	XHR.open("GET", url);
	XHR.send();
});

document.querySelector("#axios").addEventListener("click", function(){
	$("code").text(cstrax);
	axios.get(url)
	.then(function(response){
		$('#quote').text(response.data);
	})
	.catch(function(error){
		console.log(error);
	});
});