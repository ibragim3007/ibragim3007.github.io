var images = ["first_work.jpg" , "second_work.jpg", "thirs_work.jpg", "four_work.jpg"];
var num = 0;

function next(){
	var sliders = document.getElementById('slider');
	num++;
	if(num >= images.length){
		num = 0;
	}
	slider.src = images[num];
}
function prev (){
	var slider = document.getElementById('slider');
	num--;
	if(num < 0){
		num = images.length-1;
	}
	slider.src = images[num];
}