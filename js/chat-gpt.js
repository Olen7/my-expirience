
// Перевірка правдивості
// Дано дві змінні a та b. Використовуючи логічний оператор &&, 
// виведіть true, якщо обидві змінні правдиві, інакше - false.
const a = 5;
const b = 0;
const result = !!(a && b);
const result1 = Boolean(a && b);
console.log(result);
console.log(result1);

// Логічне АБО
// Дано дві змінні a та b. Використовуючи логічний оператор ||, 
// виведіть true, якщо хоча б одна зі змінних правдива, інакше - false.
const result2 = !!(a || b);
const result3 = Boolean(a || b);
console.log(result2);
console.log(result3);

// Логічне НЕ
// Дано змінну a. Використовуючи логічний оператор !, виведіть протилежне значення змінної.

const result4 = !(b);
const result5 = Boolean(!b);
console.log(result4, result5);

// Порівняння та логіка
// Дано дві змінні a і b. Перевірте, чи більше a за b, і виведіть true або false відповідно.
const result6 = a > b 
console.log(result6);

// Змішування логічних операторів
// Дано три змінні a, b і c. Використовуючи комбінацію && та ||, перевірте, 
// чи a більше за b, і b менше за c.

const c = 5;
const result7 = Boolean(a > b &&  b < c );

// Логічна умова зі строками
// Дано змінну str. Перевірте, чи є довжина строки більшою за 5.
//  Якщо так, виведіть true, інакше - false.

const str = "Long day, porfect";
const srtLength = str.length > 5;
console.log(srtLength);

// Перевірка на діапазон
// Дано число num. Використовуючи логічні оператори, перевірте, 
// чи належить число до діапазону від 10 до 20 включно.

const num = 11;
const result8 = num >= 10 && num <= 20;
console.log(result8);

// Заперечення діапазону
// Дано число num. Перевірте, чи не належить воно до діапазону від 10 до 20 включно.

const result9 = num < 10 || num > 20;
console.log(result9);


// Логічна умова з масивами
// Дано масив arr. Перевірте, чи є довжина масиву більшою за 3. 
// Якщо так, виведіть true, інакше - false.

const art = [];
const result10 = art.length > 3;

console.log(result10);

// Комплексна умова
// Дано три числа a, b, c. Перевірте, чи a менше за b і одночасно c більше за a.
//  Якщо умова виконується, виведіть true, інакше - false

const result11 = a < b && c > a;
console.log(result11);

// Перевірка на непарність
// Дано число num. Використовуючи оператор % та логічні оператори, перевірте, чи є число непарним.

const result12 = num % 2 !== 0;
console.log(result12);
// const result13 = num % 2 === 0;
// console.log(result13);

// Логічна умова з null
// Дано змінну value, яка може бути null або числом. 
// Перевірте, чи не є вона null, і якщо так, виведіть true.

const value = 0;
const result14 = value === null || typeof value === "number";
console.log(result14);


// Перевірка багатьох умов
// Дано чотири змінні. Перевірте, чи є хоча б одна з них правдивою.

const true1 = true;
const false1 = false;
const false2 = false;
const false3 = false;
const result15 = true1 === true || false1 === true && false2 === true || false3 === true;
console.log(result15);

// Строге порівняння
// Дано дві змінні a та b. 
// Перевірте, чи вони рівні за допомогою строгого порівняння.

const result16 = a === b;
console.log(result16);

// Логічне порівняння з null та undefined
// Дано змінну value, яка може мати будь-яке значення.
//  Перевірте, чи є це значення або null, або undefined.

const null1 = null;
const undefined1 = undefined;
const result17 = null1 == undefined1;
console.log('Логічне порівняння з null та undefined: ',result17);

// Виключення значень
// Дано змінну str. Використовуючи логічні оператори, перевірте, 
// чи не є str пустою строкою або null.
const result18 = str !== "" || str !== null;
const result19 = !!str;
console.log(`Виключення значень: const result18 = str !== "" || str !== null `,result18);
console.log(`Виключення значень: const result19 = !!str `,result19);

// Перевірка на мінімальне значення
// Дано число num. Перевірте, чи є воно більшим або рівним 18.

const result20 = num >= 18;
console.log(`Перевірка на мінімальне значення: const result20 = num >= 18 `,result20);

// Комбінована умова зі строками і числами
// Дано змінну str і змінну num. Перевірте, чи довжина str 
// більша за 5, і водночас num менше за 10.

const result21 = str.length > 5 && num < 10;
console.log(`Комбінована умова зі строками і числами: const result21 = str.length > 5 && num < 10;`,result21);

// Перевірка на присутність у масиві
// Дано масив arr та елемент elem. Використовуючи метод includes() 
// масиву і логічні оператори, перевірте, чи присутній elem у масиві.

const arr1 = ["elem"]
const result22 = arr1.includes("elem") === true;
const result23 = arr1.includes("elem");
console.log(result22);
console.log(result23);



//         РОЗГАЛУЖЕННЯ


// Просте розгалуження
// Дано змінну num. Якщо num більше за 0, виведіть "Число позитивне", 
// інакше виведіть "Число негативне або нуль".
const num1 = 5;
let message = "";
if (num > 0) {
    message = "Число позитивне" 
}else{
    message = "Число негативне або нуль" 
}
console.log(message);

// Розгалуження з декількома умовами
// Дано змінну score, що представляє бал. Якщо бал більше або дорівнює 90, 
// виведіть "Відмінно", якщо від 70 до 89 - "Добре", якщо від 50 до 69 - "Задовільно",
//  інакше - "Потрібно підтягнутися".
let score = 95;
let message1 = "";
if (score >= 90) {
     message1 =  "Відмінно";
} else if(score >= 70 && score <= 89) {
    message1 =  "Добре";
}else if(score >= 50 && score <= 69){
    message1 =   "Задовільно";
}else{
    message1 =   "Потрібно підтягнутися";
};
console.log(message1);


// Вкладені розгалуження
// Дано дві змінні age і hasPermission. Якщо age більше або дорівнює 18,
// перевірте hasPermission. Якщо hasPermission є true, виведіть "Доступ дозволено", 
// інакше "Доступ заборонено". Якщо age менше 18, також виведіть "Доступ заборонено".

const age = 18;
const hasPermission = true;
let message2;
if (age >= 18) {
    if (hasPermission) {
        message2 = "Доступ дозволено";
    }else{
        message2 = "Доступ заборонено";
    }
} else {
    message2 = "Доступ заборонено"
}
console.log(message2);

// Розгалуження з логічними операторами
// Дано три змінні a, b і c. Якщо a більше b і одночасно b більше c, 
// виведіть "a найбільше", інакше виведіть "a не найбільше".
const a1 = 20;
const b1 = 17;
const c1 =18;
if (a1 > b1 && b1 > c1) {
    message3 = "a найбільше";
}else{
    message3 = "a не найбільше";
}
console.log(message3);


// Розгалуження за допомогою switch
// Дано змінну color. Використовуючи конструкцію switch, виведіть "Це червоний", 
// якщо color дорівнює "red", "Це зелений", якщо color дорівнює "green", 
// і "Колір невідомий", якщо жодна з умов не виконана.
let color = "red";
let message4 
switch (color) {
    case "red":
        message4 ="Це червоний";
        break;
    case "green":
        message4 = "Це зелений";
        break;
    default:
        message4 = "Колір невідомий";
        break;
}

console.log(message4);

// Перевірка на парність
// Дано змінну num. Використовуючи if-else, визначте,
//  чи є число парним або непарним. Виведіть відповідне повідомлення.
const num2 = 4;
let message5;
if (num2 % 2 === 0) {
    message5 = "число парне"
} else {
    message5 = "число не парне"
}
console.log(message5);

// Розгалуження зі строками
// Дано строкову змінну day. Якщо day дорівнює "Saturday" або "Sunday", 
// виведіть "Вихідний день", інакше виведіть "Робочий день".
let day = "Saturday";
let message6;
if (day === "Saturday" || day === "Sunday") {
    message6 = "Вихідний день"
} else {
    message6 = "Робочий день"
}
console.log(message6);

// Розгалуження з використанням тернарного оператора
// Дано змінну age. Використовуйте тернарний оператор для виведення "Повнолітній", 
// якщо age більше або дорівнює 18, інакше "Неповнолітній".
const age1 = 20;
const userAge = age1 >= 18 ? "Повнолітній" : "Неповнолітній";
console.log(userAge);


// Перевірка на високосний рік

// Дано змінну year. Використовуючи розгалуження, визначте, 
// чи є рік високосним. Рік є високосним, якщо він ділиться на 4, але не ділиться на 100, 
// або ділиться на 400. Виведіть відповідне повідомлення.

const year = 2025;
let message7;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    message7 = "Рік є високосним";
} else {
    message7 = "Рік не є високосним"; 
}
console.log(message7);


// Розгалуження для оцінювання діапазону
// Дано число temperature. Якщо температура менше 0, виведіть "Морозно", 
// якщо від 0 до 15 - "Прохолодно", якщо від 16 до 25 - "Тепло", інакше - "Гаряче".
const temperature = 30;
let message8;
if (temperature < 0) {
    message8 = "Морозно";
}else if(temperature >= 0 && temperature < 15){
    message8 = "Прохолодно";
}else if(temperature >= 16 && temperature < 25){
    message8 = "Тепло";
}else {
    message8 = "Гаряче"
}

console.log(message8);


//        Інструкція switch


// Завдання 1: День тижня
// Напишіть програму, що приймає число від 1 до 7 та виводить день тижня відповідно до числа 
// (1 — Понеділок, 7 — Неділя) за допомогою switch.
const day1 = 1;
let message9;
switch (day1) {
        case 1:
        message9 = "Понеділок"
        break;
        case 2:
        message9 = "Вівторок"
        break;
        case 3:
        message9 = "Середа"
        break;
        case 4:
        message9 = "Четверг"
        break;
        case 5:
        message9 = "Пятниця"
        break;
        case 6:
        message9 = "Субота"
        break;
        case 7:
        message9 = "Неділя"
        break;

    default:
        message9 = "Виберіть день"
        break;
}
console.log(message9);

// Завдання 2: Оцінювання
// Напишіть програму, що конвертує числову оцінку (від 1 до 5) у словесний еквівалент 
// (1 — "Погано", 5 — "Відмінно") за допомогою switch.
const rating = 5;
let message10;
switch (rating) {
    case 1:
        message10 = "Погано";
        break;
    case 2:
        message10 = "Задовільно"
        break;
    case 3:
        message10 = "Добре"
        break;
    case 4:
        message10 = "Дуже добре"
        break;
    case 5:
        message10 = "Відмінно"
        break;
    default:
        message10 = "Виберіть оцінку"
        break;
}
console.log(message10);