function sum() {

    var yest_1 = document.getElementById('yest_1').value;
    var yest_2 = document.getElementById('yest_2').value;
    var yest_3 = document.getElementById('yest_3').value;


    var today_1 = document.getElementById('today_1').value;
    var today_2 = document.getElementById('today_2').value;
    var today_3 = document.getElementById('today_3').value;

    yest_1 = parseInt(yest_1);
    yest_2 = parseInt(yest_2);
    yest_3 = parseInt(yest_3);

    today_1 = parseInt(today_1);
    today_2 = parseInt(today_2);
    today_3 = parseInt(today_3);

    var sum_first_day = yest_1 + yest_2 + yest_3;
    var sum_secon_day = today_1 + today_2 + today_3;
    var main_answer = sum_secon_day - sum_first_day;

    var answer = document.getElementById('answer').innerHTML = main_answer;


}
function money() {

   var yest_1 = document.getElementById('yest_1').value;
    var yest_2 = document.getElementById('yest_2').value;
    var yest_3 = document.getElementById('yest_3').value;


    var today_1 = document.getElementById('today_1').value;
    var today_2 = document.getElementById('today_2').value;
    var today_3 = document.getElementById('today_3').value;

    yest_1 = parseInt(yest_1);
    yest_2 = parseInt(yest_2);
    yest_3 = parseInt(yest_3);

    today_1 = parseInt(today_1);
    today_2 = parseInt(today_2);
    today_3 = parseInt(today_3);

    var sum_first_day = yest_1 + yest_2 + yest_3;
    var sum_secon_day = today_1 + today_2 + today_3;
    var main_answer = sum_secon_day - sum_first_day;



	var kup_div = document.getElementById('kup').value;
	kup_div = parseInt(kup_div);
	var mon_div = document.getElementById('monet');
	var monet = main_answer - kup_div;

	var proc_monet = monet / main_answer * 100;
	proc_monet = Math.floor(proc_monet);

	mon_div.innerHTML = (monet + "(" + proc_monet + "% от общей суммы)");
}

