var max_bg = 29;  //написать количество фонов в папке
var timer = setInterval(changeBg, 5000); //вместо 30000 нужно написать интервал смены фона в миллисикундах
var numberBg = randomBg(1,max_bg);
var lineBg = randomBg(1,2);
document.body.style.backgroundImage = "url(img/bg" + numberBg + ".jpg)";
//функция пролистывания фона в устоновленное время
function changeBg(){
	if(lineBg == 2){
		if(numberBg >= max_bg){
			numberBg = 1;
		}
		else{
			numberBg++;
		}
	}
	else{
		if(numberBg ==  1){
			numberBg = max_bg + 1; 
		}
		{
			numberBg--;
		}
	}
	document.body.style.backgroundImage = "url(img/bg" + numberBg + ".jpg)";
}
//функция создает рандомное число для выборки фона
function randomBg(min, max){
	var min = 1;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
