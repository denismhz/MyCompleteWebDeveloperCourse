

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$("ul").append("<li><span class='delete-button'><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});	

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	event.stopPropagation();
});

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("h1 span").click(function(){
	console.log("asd");
	$("input[type='text']").fadeToggle();
});
