var about = document.getElementById('drop_about');
var drop = document.getElementById('drop');


about.onmouseenter = function (){
	drop.style.height = "auto";
	drop.style.opacity = "1";
	drop.style.overflow = "visible"
	drop.style.background = "rgba(181, 184, 177, 0.85)";
	
}
about.onmouseleave = function(){
	drop.style.height = "0";
	drop.style.opacity = "0";
	drop.style.overflow = "hidden"
	drop.style.background = "rgba(181, 184, 177, 0)";
}