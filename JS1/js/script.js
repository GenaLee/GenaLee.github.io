(function(){
	var yourChoice = prompt('1. Возведение числа в степень \n2. Работа с массивом');


if (yourChoice == 1){ 
	makePow();} 
	else if (yourChoice == 2){
		login();
	}
else{
	alert('Для выбранного варианта нет действий');
}


function makePow(){
var myNum = prompt('Введите целое число');
var myPow = prompt('Введите степень числа (целое число)');

if (checkNum(myNum) & checkNum(myPow)){
		console.log('Число '+ myNum + ' в степени ' + myPow +
	  ' равно ' + myPowFunction(myNum, myPow));
 } 

function checkNum(numberForCheck){

if (isNaN(numberForCheck)) {
	console.log('Вы ввели не число!');
	return false;} else{

  if (isInteger(numberForCheck) == false){
	 console.log('Вы ввели не целое число!');
	 return false;} else {return true;}
}

function isInteger(num) {
	return (Math.ceil(num) - num == 0) 
}

}

function myPowFunction(num, pow){

	var n;
	if (pow == 0){
		n = 1;
	} else{
	n = num;
	var i = 1;
	while (i < pow){
		n *= num;
		i++;
	} 
}
 if (pow < 0){
 	n = 1 / n;
 }
return n;
}

}


function login(){

var nameStr = prompt('Введите пять любых имен через запятую');
var nameArr = new Array(5);
var myArr = new Array(5);

nameArr = nameStr.split(',');

while (nameArr.length < 5){
	nameArr.push(prompt('Недостаточно элементов. Введите еще!'));
}

for (var i=0; i < 5; i++){
	myArr[i] = nameArr[i].trim().toUpperCase();
}

var nameToFind = prompt('Введите имя пользователя:');

var msg = 'Ошибка! Такого пользователя не существует!';
for (var i = 0; i < myArr.length; i++){
	if (myArr[i] == nameToFind.toUpperCase()){
		msg = nameToFind + ', Вы успешно вошли!';
		break;
	}
}

	alert(msg);
}





})();