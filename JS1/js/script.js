var yourChoice = prompt('1. Возведение числа в степень \n2. Работа с массивом');

if (yourChoice == 1){
var myNum = prompt('Введите число');
var myPow = prompt('Введите степень числа');

if (isInteger(myNum) == false){
	console.log('Вы ввели не целое число. Программа округлила '+myNum +
		' до '+ Math.round(myNum));
	 myNum = Math.round(myNum);
} 

if (isInteger(myPow) == false){
	console.log('Вы ввели не целое число для степени. Программа округлила '+myPow +
		' до '+ Math.round(myPow));
	 myPow = Math.round(myPow);
} 

console.log('Число '+ myNum + ' в степени ' + myPow +
	' равно ' + myPowFunction(myNum, myPow));
} else {

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



function isInteger(num) {
  return (Math.ceil(num) - num == 0) 
}

function myPowFunction(num, pow){
	var n;
	if (pow == 0){
		n = 1;
	} else {
	n = num;
	var i = 1;

	while (i < pow){
		n *= num;
		i++;
	}
}
return n;
}