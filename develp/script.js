function slowScroll (id){
	var offset = 130;
	$('html, body').animate({
		scrollTop: $(id).offset ().top - offset
	}, 750);
	return false
}
//первый блок
$("#items_1").mousemove(function(){	
	$("#img_1").show();
	$("#img_2").hide();
	$("#items_1")
	.css("background", "#00897b")
	.css("color", "white")
	$("#button_1")
	.css("border", "2px solid white")
	.css("color", "white")
});



$("#items_1").mouseleave(function(){
	$("#img_1").hide();
	$("#img_2").show();
	$("#items_1")
	.css("background", "white")
	.css("color", "#000")
	$("#button_1")
	.css("border", "2px solid black")
	.css("color", "black")
});

//второй блок
$("#items_2").mousemove(function(){	
	$("#img_3").show();
	$("#img_4").hide();
	$("#items_2")
	.css("background", "#00897b")
	.css("color", "white")
	$("#button_2")
	.css("border", "2px solid white")
	.css("color", "white")
});



$("#items_2").mouseleave(function(){
	$("#img_3").hide();
	$("#img_4").show();
	$("#items_2")
	.css("background", "white")
	.css("color", "#000")
	$("#button_2")
	.css("border", "2px solid black")
	.css("color", "black")
});

//третий блок
$("#items_3").mousemove(function(){	
	$("#img_5").show();
	$("#img_6").hide();
	$("#items_3")
	.css("background", "#00897b")
	.css("color", "white")
	$("#button_3")
	.css("border", "2px solid white")
	.css("color", "white")
});



$("#items_3").mouseleave(function(){
	$("#img_5").hide();
	$("#img_6").show();
	$("#items_3")
	.css("background", "white")
	.css("color", "#000")
	$("#button_3")
	.css("border", "2px solid black")
	.css("color", "black")
});

//четвертый блок
$("#items_4").mousemove(function(){	
	$("#img_7").show();
	$("#img_8").hide();
	$("#items_4")
	.css("background", "#00897b")
	.css("color", "white")
	$("#button_4")
	.css("border", "2px solid white")
	.css("color", "white")
});



$("#items_4").mouseleave(function(){
	$("#img_7").hide();
	$("#img_8").show();
	$("#items_4")
	.css("background", "white")
	.css("color", "#000")
	$("#button_4")
	.css("border", "2px solid black")
	.css("color", "black")
});

//пятый блок
$("#items_5").mousemove(function(){	
	$("#img_9").show();
	$("#img_10").hide();
	$("#items_5")
	.css("background", "#00897b")
	.css("color", "white")
	$("#button_5")
	.css("border", "2px solid white")
	.css("color", "white")
});



$("#items_5").mouseleave(function(){
	$("#img_9").hide();
	$("#img_10").show();
	$("#items_5")
	.css("background", "white")
	.css("color", "#000")
	$("#button_5")
	.css("border", "2px solid black")
	.css("color", "black")
});


//шестой блок
$("#items_6").mousemove(function(){	
	$("#img_11").show();
	$("#img_12").hide();
	$("#items_6")
	.css("background", "#00897b")
	.css("color", "white")
	$("#button_6")
	.css("border", "2px solid white")
	.css("color", "white")
});



$("#items_6").mouseleave(function(){
	$("#img_11").hide();
	$("#img_12").show();
	$("#items_6")
	.css("background", "white")
	.css("color", "#000")
	$("#button_6")
	.css("border", "2px solid black")
	.css("color", "black")
});