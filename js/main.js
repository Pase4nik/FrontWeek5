function task1() {
	var browserName  = navigator.appName;
	var nameOffset,verOffset,ix;
	var nAgt = navigator.userAgent;


	if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
		browserName = "Microsoft Internet Explorer";
		fullVersion = nAgt.substring(verOffset+5);
		alert('О, да у вас IE!');
	}
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
		browserName = "Chrome";
		fullVersion = nAgt.substring(verOffset+7);
		alert('Да, и эти браузеры мы поддерживаем');
	}
	else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
		browserName = "Firefox";
		fullVersion = nAgt.substring(verOffset+8);
		alert('Да, и эти браузеры мы поддерживаем');
	}
	else if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
 		browserName = "Opera";
 		fullVersion = nAgt.substring(verOffset+4);
		alert('Да, и эти браузеры мы поддерживаем');
	}
	else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
          (verOffset=nAgt.lastIndexOf('/')) ) {
		browserName = nAgt.substring(nameOffset,verOffset);
		fullVersion = nAgt.substring(verOffset+1);
		alert('Мы надеемся, что и в вашем браузере все ок!');
	}



	document.write('Browser name  = ' + browserName + '<br>')
	
}





function task2() {
	var a = +prompt('a? ' + ' Выберите 0, 1, 2 или 3', '');
	switch (a) {
  case 0:
    alert('ответ' + 0);
    break;
  case 1:
    alert('ответ' +  1 );
    break;
  case 2:
  case 3:
    alert( 'ответ 2,3' );
    break;
}
		}


function task3() {
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	document.write("Current time: " + hour + ":" + minutes + ":" + seconds)
}


function task4() {
	var day_now = new Date();
	var milliNow = day_now.getTime();
	var months = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
	var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"];
	

	function now_date(N) {
		var day_after_N = new Date(1000 * 60 * 60 * 24 * N);
		var milliN = day_after_N.getTime();
		var milliNowPlusN = new Date(milliNow + milliN);

	document.write(N + " - after this number of days will be the next DATE: <p>" + 
					"Year: " + milliNowPlusN.getFullYear() + "<br>" + 
					"Month: " + months[milliNowPlusN.getMonth()] + "<br>" + 
					"Day of week: " + days[milliNowPlusN.getDay()] + "<br>" + 
					"Number: " + milliNowPlusN.getDate() + "<br>");
	}


	var user = prompt("Через какое количество дней Вам интересно знать Дату?");
	var n = Math.round(user);

	if (n >= 1 && n <= 1000) 
	{
	now_date(n);
	} 
	else
	{
	document.write("Please specify a number within the range of 1 to 1000") ;
	alert("Пожалуйста, укажите число в пределах диапазона от 1 до 1000") 
	}
}







//Task 5//


	var forTesting = "8 pinguins и 9 carp fishes";
	function task5() {
		var regular = /\d/;
		var result = forTesting.search(regular);
		if (result == 0) {
			document.write("The line starts with a number.");
		}
		else {
			document.write("There is no numbers at the beginning of the line");
		}
	}

		





function task6() {
	var card = '"Иван вчера потерял свою кредитку, ее номер 1178-9087-2384-8787. Поэтому он пошел в банк и описал ситуацию. Там пошли ему навстречу и выдали новую кредитку под номером: 1103-8899-0811-1722"';
	var regular_select = /[0-3]{4}[0-9-]{15}/g; 
	var result = card.match(regular_select);
	document.write("текст - " + card + "<p>" + result + " - Номер кредитной карты в соответствии с условием, в котором первые 4 цифры содержат только 0, или 1, или 2, или 3");
}





function task7() {
	var tel = "8/927/31/10/765";
	var sign = "-";
	function dash(tel,sign) {
		var regular = /\//g;
		var result = tel.replace(regular,sign); 
		document.write(result);
	}
	dash(tel,sign);
		}









function task8() {
	var any = prompt("Введите любое слово...", '');
	var k = line(any); 


		function line(s) {
			if (s.length > 10) {
				var result = "This word is where are more than 10 symbols";
			}
			else 
				if(s.length < 10) {
					var result = "This word is where are less than 10 symbols";
				}
				else {
					var result = "This word is where are 10 symbols";
				}
			return result; 
		}
	
	document.write(any + "<p>" + k); 
}










function task9() {
	for (var i = 1; i < 8; i++) {
		document.write("Square " + i + " = " + i*i + "<br />");
	}
}




function task9a() {
	var a = +prompt("Введите первое число", "");
	var b = +prompt("Введите второе число", "");
	alert( a + b );
}






function task9b() {
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	var c = a + b;
	
	alert( c );
	
}







function task10() {
	var i = 0;
	while (i < 3) {
		alert( "номер " + i + "!" );
		i++;
	}
}
