/*let number = 5;
alert(5);
[].push('a');*/

/*let number = 5;
console.log(number);*/

/*alert("Вход воспрещен!");*/

/*let answer = confirm("Есть ли вам 18 лет?");
console.log(answer);*/

/*let answer = prompt("Есть ли вам 18 лет?");
console.log(answer);*/

/*let answers = [];

answers[0] = prompt("Как вас зовут?", "");
answers[1] = prompt("Какая у вас фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

document.write(answers);*/


/*let answers = [],
	questions = [
	"Как вас зовут?",
	"Какая у вас фамилия?",
	"Сколько вам лет?"
	];


	for(let i = 0; i < questions.length; i++) {
		answers[i] = prompt(questions[i])
	}

document.write(answers);*/

/*for (let i = 0; i < 10; i++) {
	document.write(i + '<br>')
}*/

/*let age = prompt("How old are you?");

if (age > 18) {
	alert("You can pass!")
} else {
	alert(" go fuck yourself!")fsdf
}*/

/*function humanSayHello(obj) {
	document.write("Hello " + obj +"!")
}

humanSayHello("Egor");*/

/*function calc(a,b) {
	console.log(a * b)
};

calc(9,9);*/









/*Домашнее задание*/

function myFirstApp(name, age) {	
	let answer = prompt ("name?");
	alert("Привет, меня зовут " + answer + " и это моя первая программа!");

	function showSkills() {
		let skills = ["html", "css", "sass", "bootstrap", "jQuery", "BEM", "Less", "Gulp", "Alphabet"];

		for(let i = 0; i < skills.length; i++) {			
			document.write("Я владею " + skills[i] + '<br>' )
			
		};
	};
	showSkills();

	 function checkAge() {
	 	let age = prompt("How old are you?")
	 	if (age > 18) {
	 		alert("Проходи")
	 	} else {
	 		alert("Иди своей дорогой сталкер.")
	 	}
	};
	checkAge();

	function calcPow(num) {
		alert(num * num)
	};
calcPow(4)

};

myFirstApp(name);
