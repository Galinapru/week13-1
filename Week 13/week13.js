//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
let currentYear = currentDate.getFullYear();
console.log(currentYear);
//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = currentDate.getMonth();
console.log(currentMonth);
//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = currentDate.getDate();
console.log(currentDay);
//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date(2023, 1, 1);
console.log(birthday);
//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let futureDate = new Date(2023, 7, 25);
console.log(futureDate);
//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
console.log(futureDate - currentDate);
//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
let pastDate = new Date(2023, 6, 16);
console.log(pastDate);
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
console.log(currentDate - pastDate);
//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
let nextWeek = new Date(2023, 6, 28);
console.log(nextWeek);
//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());
//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
let futureYear = new Date(2028, 0, 1);
console.log(futureYear);
//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
let futureDateInFutureYear = new Date(2028, 1, 1);
console.log(futureDateInFutureYear);
//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log();
//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.


const newDate = new Date(Date.parse('2023-06-15T08:30:00.000Z'));
console.log(newDate);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const strDate = Date.parse('2023-06-15T08:30:00.000Z');
console.log(strDate);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = '2023/06/15';

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
/*const number = 231;

if (number > 0) {
    console.log('Число положительное');
} else { console.log('Число отрицательное');
}*/

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
/*let number = 231;

if (number % 2 == 0) {
    console.log('Число четное');
} else {
    console.log('Число нечетное');
}*/

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
/*let number = 231;

if (number % 3 == 0) {
    console.log('Число кратное 3');
} else {
    console.log('Число не кратное 3');
}*/

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
/*let number = 231;

if (number <= 9) {
    console.log('Число однозначное');
} else {
    console.log('Число не однозначное');
}*/
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
/*let number = 231;

if (number <= 99 && number > 9) {
    console.log('Число двузначное');
} else {
    console.log('Число не двузначное');
}*/
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
/*let number = 231;

if (number > 0) {
    console.log('Это число положительное');
} else if (number == 0){ 
    console.log('Это число равно 0');
} else {
    console.log('Это число отрицательное');
}*/
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
/*let number = 231;

if (number % 5 == 0) {
    console.log('Число кратное 5');
} else if (number % 7 === 0){
    console.log('Число кратное 7');
} else {
    console.log('Число не кртное 5 или 7');
}*/
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
/*let number = 231;

if (number < 0) {
    console.log('Число отрицательное');
} else if (number == 0) {
    console.log('Число равно0');
} else {
    console.log('Число положительное');
}*/
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
/*let number = 231;

if (number >= 100 && number < 1000) {
    console.log('Число трехзначное');
} else {
    console.log('Число не трехзначное');
}*/
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let dayName = '2';
let result = dayName;
switch (result) {
    case '1':
        console.log('Понедельник');
        break;
    case '2':
        console.log('Вторник');
        break;
    case '3':
        console.log('Среда');
        break;
    case '4':
        console.log('Четверг');
        break;
    case '5':
        console.log('Пятница');
        break;
    case '6':
        console.log("Суббота");
        break;
    case '7':
        console.log('Воскресенье');
        break;                     
    default: 
    console.log('Неизвестный день недели');
        break;
}

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
    case 'N':
        fullName = 'Север';
        break;
    case 'S':
        fullName = 'Юг';
        break;
    case 'E':
        fullName = 'Восток';
        break;
    case 'W':
        fullName = 'Запад';
        break;     
    default:
        fullName = 'Неизвестное направление';
        break;      
}

console.log(fullName);