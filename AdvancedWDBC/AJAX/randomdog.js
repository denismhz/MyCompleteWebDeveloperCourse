var button = document.querySelector("#btn");
var img = document.querySelector("#photo");
var btnbutton = document.querySelector("#asd");
var pricespan = document.querySelector("#price");
var euro = document.querySelector("#euro");
var dollar = document.querySelector("#dollar");
var pounds = document.querySelector("#pounds");
var currency = "EUR";
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
	if(XHR.readyState == 4 && XHR.status == 200){
		var price = JSON.parse(XHR.responseText).bpi[currency].rate;
		var description = JSON.parse(XHR.responseText).bpi[currency].description;
		pricespan.innerHTML = price + " " + description;
	}
}

XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
XHR.send();


button.addEventListener("click", function(){
	var XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function(){
		if(XHR.readyState == 4 && XHR.status == 200){
			var url = JSON.parse(XHR.responseText).message;
			img.src = url;
		}
	}

	XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
	XHR.send();
});

btnbutton.addEventListener("click", function(){
	var XHR = new XMLHttpRequest();
	if(euro.checked){
		currency = "EUR";
	} else if(dollar.checked){
		currency = "USD";
	} else if(pounds.checked){
		currency = "GBP";
	}

	XHR.onreadystatechange = function(){
		if(XHR.readyState == 4 && XHR.status == 200){
			var price = JSON.parse(XHR.responseText).bpi[currency].rate;
			var description = JSON.parse(XHR.responseText).bpi[currency].description;
			pricespan.innerHTML = price + " " + description;
		}
	}

	XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
	XHR.send();
});