document.addEventListener("DOMContentLoaded", function(){
	// var input = document.querySelectorAll('input');
	// var len = input.length;
	// var calculator = document.getElementsByClassName('equ');
	// console.log(calculator)
	// for(var i = 1;i<len; i++){
	// 	console.log(input[i].value);
	// 	var button = input[i].value;
	// 	// console.log(button)
	// 	button.addEventListener('click', function(){
	// 	calculator.answer.value = this.button.value;
	// 	})
	// }

	var calculator = document.getElementById('c');
	var clear = document.querySelectorAll('input')[1];
	var one = document.querySelectorAll('input')[2];
	var two = document.querySelectorAll('input')[3];
	var three = document.querySelectorAll('input')[4];
	var plus = document.querySelectorAll('input')[5];
	var four = document.querySelectorAll('input')[6];
	var five = document.querySelectorAll('input')[7];
	var six = document.querySelectorAll('input')[8];
	var minus = document.querySelectorAll('input')[9];
	var seven = document.querySelectorAll('input')[10];
	var eight = document.querySelectorAll('input')[11];
	var nine = document.querySelectorAll('input')[12];
	var multiply = document.querySelectorAll('input')[13];
	var zero = document.querySelectorAll('input')[14];
	var modulo = document.querySelectorAll('input')[15];
	var equal = document.querySelectorAll('input')[16];
	var divide = document.querySelectorAll('input')[17];
	var backspace = document.querySelectorAll('input')[18];
	var dot = document.querySelectorAll('input')[19];
	var pow = document.querySelectorAll('input')[20];
	var squarrot = document.querySelectorAll('input')[21];
	
	
	// console.log(one);
	// console.log(two);
	// console.log(three);
	// console.log(plus);
	// console.log(four);
	// console.log(five);
	// console.log(six);
	// console.log(minus);
	// console.log(seven);
	// console.log(eight);
	// console.log(nine);
	// console.log(multiply);
	// console.log(clear);
	// console.log(zero);
	// console.log(equal);
	// console.log(divide);
	
	function back(){
		var calc = document.getElementById('c').value;
		document.getElementById('c').value = calc.slice(0, calc.length - 1);
	}
	
	one.addEventListener('click', function(){
		calculator.value += 1;
	});
	two.addEventListener('click', function(){
		calculator.value += 2;
	});
	three.addEventListener('click', function(){
		calculator.value += 3;
	});
	four.addEventListener('click', function(){
		calculator.value += 4;
	});
	five.addEventListener('click', function(){
		calculator.value += 5;
	});
	six.addEventListener('click', function(){
		calculator.value += 6;
	});
	seven.addEventListener('click', function(){
		calculator.value += 7;
	});
	eight.addEventListener('click', function(){
		calculator.value += 8;
	});
	nine.addEventListener('click', function(){
		calculator.value += 9;
	});
	zero.addEventListener('click', function(){
		 calculator.value += 0;
	});
	plus.addEventListener('click', function(){
		calculator.value += '+';
	});
	minus.addEventListener('click', function(){
		calculator.value += '-';
	});
	multiply.addEventListener('click', function(){
		calculator.value += '*';
	});
	divide.addEventListener('click', function(){
		calculator.value += '/';
	});
	modulo.addEventListener('click', function(){
		var result = (calculator.value/100) * 100+ '%';
		calculator.value = result;
		console.log(calculator.value)
	});
	equal.addEventListener('click', function(){
		if(calculator.value === ''){
			calculator.value = '';
		}
		calculator.value = eval(calculator.value);
	});
	clear.addEventListener('click', function(){
		calculator.value = '';
	});

	backspace.addEventListener('click', function(){
		back();
	});
	dot.addEventListener('click', function(){
		calculator.value += '.';
	});
	pow.addEventListener('click', function(){
		calculator.value = Math.pow(calculator.value, 2);
	});
	squarrot.addEventListener('click', function(){
		calculator.value = Math.sqrt(calculator.value)
	})

});