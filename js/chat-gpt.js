
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
