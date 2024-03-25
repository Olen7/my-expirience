"use strict";

const b = 20;
const a = b * 15;

console.log("const b = 20; const a = b * 15;", a);

const property = "JavaScript is awesome".length;
const method = "JavaScript is awesome".toUpperCase();
console.log(property);
console.log(method);

const namber = 1.25;
const aBA = 86;
const value = aBA * namber;
console.log(value);

const string = "Mango";
console.log(string)
console.log('User name is', string)

// const alerts = "JavaScript is awesome!"
// alert(alerts)

let booleangTrue = true;
let booleangFalse = false;

let selectedProduct = null;
console.log(selectedProduct);

let userName;
console.log(userName);

// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const isPrompt = prompt("Please enter desired hotel name");
// console.log(isPrompt);

// const isPromptNam = prompt("Please enter desired hotel name");
// console.log(parseInt(isPromptNam));


console.log(typeof string);
console.log(typeof value);
console.log(typeof userName);
console.log(typeof selectedProduct);
console.log(typeof booleangTrue);

const c = 20;
const d = 18;
const e = 25;
const f = 14;

console.log("c < d:", c < d);
console.log("c === d:", c === d);

const pars = '25.5Welcome';
console.log(pars);
console.log(Number.parseInt(pars));
console.log(Number.parseFloat(pars));

console.log("0.1 + 0.2 === 0.3:",0.1 + 0.2 === 0.3);
console.log("1 + 2 === 3:",1 + 2 === 3);
console.log("(0.1 + 0.2 * 100 === 0.3 * 100) / 100:",(0.1 + 0.2 * 100 === 0.3 * 100) / 100);
console.log("(0.1 + 0.2).toFixed(10)  === (0.3).toFixed(10) :",(0.1 + 0.2).toFixed(10)  === (0.3).toFixed(10));
console.log("(0.1 + 0.2 === 0.3 )* 100 / 100:",(0.1 + 0.2  === 0.3) * 100 / 100);
console.log("0.2 + 0.7 * 100 / 100:", 0.2 + 0.7 * 100 / 100);
console.log("(0.2 + 0.7).toFixed(2):", (0.2 + 0.7).toFixed(2));
console.log((0.17 + 0.24).toFixed(2)); // 0.41
console.log(c * 1.15);

const num0 = 1;
const num1 = 1.2;
const num2 = 5;
const num3 = 20;
const num4 = 40;
const num5 = 1.7;
const num6 = 1.5;
const num7 = 1.4;
const num8 = 0.8;
const num9 = 1.256
const minNum = Math.min(num0,num1,num2,num3,num4,num5,num6,num7,num8)
console.log("Найменше число  minNum:", minNum)
console.log("Math.max:", Math.max(num0,num1,num2,num3,num4,num5,num6,num7,num8));
console.log("Math.min:", Math.min(num0,num1,num2,num3,num4,num5,num6,num7,num8));
console.log("Math.floor:", Math.floor(num1,num5,num8));
console.log("Math.ceil:", Math.ceil(num0,num1,num2,num3,num4,num5,num6,num7,num8, num9));
console.log("Math.round(num1,num5,num6,num7,num8, num9):",Math.round(num1,num5,num6,num7,num8, num9));
console.log("Math.round(num1):",Math.round(num1));
const numbers = [num0,num1,num2,num3,num4,num5,num6,num7,num8, num9];
const roundedNum = numbers.map(num => Math.round(num));
console.log("Масив в map(Округлені числа):", roundedNum);
console.log("Math.pow:",Math.pow(num2,num3));
console.log("Math.pow:",Math.pow(2,10));
console.log("Math.random* (num4 - num0) + 1:",Math.random() * (num4 - num0) + 1);
console.log("Math.random * (10 - 1) + 1:",Math.random() * (10 - 1) + 1);

const massage1 = "Mango ";
const massage2 = "is";
const massage3 = " happy";
const massage = massage1 + massage2 + massage3;
console.log("massage = massage1 + massage2 + massage3:", massage);

const name1 = "Mango";
const rom0 = 207;
const user0 = `Welcon ${name1}, your rom ${rom0}`;
console.log("Welcon ${name1}, your rom ${rom0} :", user0);
console.log("user0.length :", user0.length);

const meassage4 = "There is nothing impossible to him who will try";
console.log("meassage4.length :", meassage4.length);
console.log("Welcome to Bahamas".length);

const meassage5 = "Welcome to Bahamas";
console.log("meassage5.toUpperCase() :", meassage5.toUpperCase());
console.log("meassage5.toLowerCase() :", meassage5.toLowerCase());

const name2 = "BAHAMAS";
console.log(`BAHAMAS === Bahamas :`, "BAHAMAS" === "Bahamas");
console.log(`BAHAMAS.toLowerCase() === Bahamas.toLowerCase() :`, name2.toLowerCase() === "Bahamas".toLocaleLowerCase());
console.log(`BAHAMAS.indexOf("HA")`, name2.indexOf("HA"));
console.log(`BAHAMAS.indexOf("B")`, name2.indexOf("B"));


console.log(`name2.includes("B"):`,name2.includes("B"));
console.log("name2:", name2);
const random1 = "b";
const random2 = "ba";
const random3 = "bas";
console.log("random1:",random1);
console.log("random2:",random2);
console.log("random3:",random3);
console.log(`name2.includes(random1.toUpperCase())):`, name2.includes(random1.toUpperCase()));
console.log(`name2.includes(random2.toUpperCase())):`, name2.includes(random2.toUpperCase()));
console.log(`name2.includes(random3.toUpperCase())):`, name2.includes(random3.toUpperCase()));


const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
const miniFileCssFileNames = jsFileName.replaceAll(".js", ".min.js");
console.log("script.js:", jsFileName);
console.log(`jsFileName.replace(".js", ".min.js"):`, minifiedJsFileName);
console.log(`miniFileCssFileNames = script.js.replaceAll(".js", ".min.js"):`,miniFileCssFileNames);

const productName = "Repair droid";
console.log("Repair droid.slice(2, 5):",productName.slice(2,5));
console.log("Repair droid.slice(0, -1):",productName.slice(0, -1));
console.log("Repair droid.slice(0):",productName.slice(0));
console.log("Repair droid.slice():",productName.slice());
console.log("Repair droid.slice(-1):", productName.slice(-1));
console.log("Repair droid.slice(3, 8):", productName.slice(3, 8));
console.log("Repair droid.slice(4,productName.length):", productName.slice(4,productName.length));
console.log("productName.length:", productName.length);
console.log("Repair droid.slice(0, productName.length):", productName.slice(0, productName.length));
console.log("Repair droid.slice(productName.length):", productName.slice( productName.length));



const age1 = 28;
const age2 = 17;
const age3 = 18;
console.log("28 > 18 && 28 < 80:",age1 > 18 && age1 < 80);
console.log("18 >= 18 && 18 < 80:", age3 >= 18 && age3 < 80);
console.log("18 > 18 && 18 < 80:", age3 > 18 && age3 < 80);
console.log("18 > 17 && 18 < 80:", age2 > 17 && age2 < 80);
console.log("1 && 5:", 1 && 5);
console.log("5 && 1:", 5 && 1);
console.log("0 && 5:", 0 && 5);
console.log("5 && 0:", 5 && 0);
console.log(`"" && 0:`, "" && 0);
console.log(`0 && "":`, 0 && "");
console.log(`0 && "Mango":`, 0 && "Mango");
console.log(`"Polly" && "Mango":`, "Polly" && "Mango");

console.log("age1 = 28")
console.log("age1 > 5 || age1 < 30",age1 > 5 || age1 < 30);
console.log("age1 > 5 || age1 < 27",age1 > 5 || age1 < 27);
console.log("age1 > 27 || age1 < 29",age1 > 29 || age1 < 27);

console.log("!true:", !true)
console.log("!0:", !0)
const isOnline = true;
const isNotOnline = !isOnline;
console.log("isOnline",isOnline);
console.log("!isOnline",isNotOnline);

let cost = 0;
const subscription = "pro"
const subscriptionFree = "free"
if(subscription === "pro"){
    cost = 100;
};
console.log(`let cost = 0;
if(subscription === "pro"){
    cost = 100;
}`, cost);



if(subscriptionFree === "pro"){
    cost = 100;
}else{
    cost = 0;
};

console.log(`if(subscriptionFree === "pro"){
    cost = 100;
}else{
    cost = 0;
}`,
cost
);

if(subscription === "free"){
   cost = 500;
}else if(subscription === "pro"){
   cost = 1000;
}else if(subscription === "premium"){
   cost = 2500;
}else{
   cost = 0;
};

console.log(`if(subscription === "free"){
    cost = 500;
 }else if(subscription === "pro"){
    cost = 1000;
 }else if(subscription === "premium"){
    cost = 2500;
 }else{
    cost = 0;
 };`, cost);

 const type = age1 >= 18 ? "open" : "close";
 console.log(`const type = 28 >= 18 ? "open" : "close":`,type);


 const biggerNumber = age1 > age2 ? age1 : age2;
 console.log(`const biggerNumber = 28 > 17 ? 28 : 17:`, biggerNumber);

 switch (subscription){
    case "free":
        cost = 5;
        break;
    case "pro":
        cost = 10;
        break;
    case "premium":
        cost = 20;
        break;
    default : console.log("Invalid subscription type");
 };
 console.log(`switch (subscription){
    case "free":
        cost = 5;
        break;
    case "pro":
        cost = 10;
        break;
    case "premium":
        cost = 20;
        break;
    default : console.log("Invalid subscription type");
 }`, cost);

 const global = "global";
 if(true){
    const blockA = 5;
    console.log(global);
    console.log(blockA);

    // console.log(blockB);
    // console.log(blockC);
       
    if(true){
        const blockB = 12;
        console.log(global);
        console.log(blockA);
        console.log(blockB);

    }
 }
 if(true){
    const blockC = 17;
    console.log(global);
    // console.log(blockA);
    // console.log(blockB);
    console.log(blockC);

 }
 console.log(`const global = "global";
 if(true){
    const blockA = 5;
    console.log(global);
    console.log(blockA);

    // console.log(blockB);
    // console.log(blockC);
       
    if(true){
        const blockB = 12;
        console.log(global);
        console.log(blockA);
        console.log(blockB);

    }
 }
 if(true){
    const blockC = 17;
    console.log(global);
    // console.log(blockA);
    // console.log(blockB);
    console.log(blockC);

 }
`);

let counter = 0;
while(counter < 10){
    console.log("counter:", counter)
    counter += 1;
};
 console.log(
    `let counter = 0;
    while(counter < 10){
        console.log("counter:", counter)
        counter += 1;
    }`
    );
let clientCounter = 16;
const maxClients = 20;
while (clientCounter <= maxClients){
    console.log(clientCounter)
    clientCounter += 1;
};
console.log(
    `let clientCounter = 16;
    const maxClients = 20;
    while (clientCounter <= maxClients){
        console.log(clientCounter)
        clientCounter += 1;
    };`
);

// let password = "";
// console.log(`do {
//     password = prompt("Введіть пароль довший 4-х символів", )
// } while (password < 5);`);
// do {
//     password = prompt("Введіть пароль довший 4-х символів", "")
// } while (password > 5);

// console.log("Ввели пароль: ", password);

const target = 20;
let sum = 0;
for(let i = 0; i < target; i += 1){
    sum += 1;
};
console.log(`const target = 20;
let sum = 0;
for(let i = 0; i < target; i += 1){
    sum += 1;
}`,sum);

const max1 = 10;
for (let i = 0; i < max1; i += 1) {
  console.log(`${max1} % ${i} = `, max1 % i);
};

for(let i = 0; i < max1; i += 1){
    if(i % 2 === 0){
        continue;
    }
    console.log("Непарне i:", i)
}

const clients = ["Mango", "Poly", "Ajax"];
console.log("clients :", clients);
console.log("clients[0] :", clients[0]);
console.log("clients[1] :", clients[1]);
console.log("clients[2] :", clients[2]);
console.log("clients.length :", clients.length);
const lastElementIndex = clients.length -1;
console.log("const lastElementIndex = clients.length -1; clients[lastElementIndex] :", clients[lastElementIndex]);

for(let i = 0; i < clients.length; i += 1){
    console.log(clients[i]);
};
console.log("for(let i = 0; i < clients.length; i += 1){console.log(clients[i]);};")

for(const client of clients){
    console.log(client)
};
console.log("for(const client of clients){ console.log(client)};")

const string1 = "javascript";
for(const character of string1){
    console.log(character)
};
console.log(`const string1 = "javascript"; for(const character of string1){console.log(character)};`)

const clientNameToFing = "Poly";
let massage6;
for (const client of clients){
    if(client === clientNameToFing){
        massage6 = "Клієнт з таким ім'ям є в базі даних!";
        break;
    }
    massage6 = "Клієнт з таким ім'ям відсутній в базі даних!";
};
console.log(massage6);

console.log(`const clientNameToFing = "Poly"; let massage6;for (const client of clients){ if(client === clientNameToFing){ massage6 = "Клієнт з таким ім'ям є в базі даних!"; break;} massage6 = "Клієнт з таким ім'ям відсутній в базі даних!";};console.log(massage6);`)

let massage7 = "Клієнт з таким ім'ям відсутній в базі даних!";
for (const client1 of clients){
    if(client1 === clientNameToFing){
        massage7 = "Клієнт з таким ім'ям є в базі даних!";
        break;
    } 
};
console.log(massage7);

console.log(`let massage7 = "Клієнт з таким ім'ям відсутній в базі даних!"; for (const client1 of clients){ if(client1 === clientNameToFing){ massage7 = "Клієнт з таким ім'ям є в базі даних!"; break; } }; console.log(massage7);`)


const numbers1 = [1, 2, 5, 7, 9, 12, 28, 17, 14, 30];
const threshold = 15;
for (let i = 0; i < numbers1.length; i+= 1){
    if(numbers1[i] < threshold){
        continue;
    };
    console.log(`Число більше за ${threshold}: ${numbers1[i]}`)
};

console.log('const numbers1 = [1, 2, 5, 7, 9, 12, 28, 17, 14, 30]; const threshold = 15; for (let i = 0; i < numbers1.length; i+= 1){ if(numbers1[i] < threshold){ continue; }; console.log(`Число більше за ${threshold}: ${numbers1[i]}`)};')

let a1 = 5;
const b1 = a1;
a1 = 10;
console.log( `let a1 = 5;
const b1 = a1:`,b1, ", a1 = 10:", a1);


const a2 = ["Mango"];
const b2 = a2;
console.log(`const a2 = ["Mango"]:`, a2);
console.log("const b2 = a2: ",b2);

a2.push("Poly");
console.log("a2.push('Poly'):", a2);

b2.push("Ajax", "Rob");
console.log('b2.push("Ajax", "Rob"):', b2);

const name3 = "Ajax";
console.log(`name3.split(""):`, name3.split(""));
console.log(`name3.split(" "):`, name3.split(" "));

const name4 = ["Java", "Script","це", "круто"];
console.log('name4.join(""):', name4.join(""));
console.log('name4.join(" "):', name4.join(" "));
console.log('name4.join("-"):', name4.join("-"));

console.log(`a2.indexOf("Poly")`,a2.indexOf("Poly"))
console.log(`a2.indexOf("Rob")`,a2.indexOf("Rob"))
console.log(`a2.indexOf("Monkong"):`,a2.indexOf("Monkong"))

console.log(`a2.includes("Poly")`,a2.includes("Poly"))
console.log(`a2.includes("Rob")`,a2.includes("Rob"))
console.log(`a2.includes("Monkong")`,a2.includes("Monkong"))

const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
const hasFruit = redFruits.includes(fruit);

console.log('const redFruits = ["apple", "strawberry", "cherry", "cranberries"];  const fruit = "cherry";  const hasFruit = redFruits.includes(fruit);  if (hasFruit){ console.log(`${fruit} is a red fruit!`)};');
if (hasFruit){
    console.log(`${fruit} is a red fruit!`);
};
console.log(`hasFruit:`, hasFruit);

const numbers2 = [];
console.log('numbers2: ', numbers2);
numbers2.push(1);
console.log('numbers2.push(1): ', numbers2);
numbers2.push(3);
console.log('numbers2.push(3): ', numbers2);
numbers2.push(5);
console.log('numbers2.push(5): ', numbers2);

numbers2.pop(5);
console.log('numbers2.pop(5): ', numbers2);
numbers2.pop();
console.log('numbers2.pop(): ', numbers2);

const numbers3 = [2, 5, 8, 9, 10, 13, 15, 14, 6, 1,];
console.log("const numbers3 = [2, 5, 8, 9, 10, 13, 15, 14, 6, 1,];");
console.log('numbers3.slice(0, 4): ', numbers3.slice(0, 4));
console.log('numbers3.slice(-5): ', numbers3.slice(-5));
console.log('numbers3.slice(4): ', numbers3.slice(4));

const deleteScores = numbers3.splice(0,3);
const deleteScores1 = numbers3.splice(0, 6);
console.log('const deleteScores = numbers3.splice(0,3): ', deleteScores);
console.log('const deleteScores1 = numbers3.splice(0,6): ', deleteScores1);

const colors = ["red", "green",  "blue"];
console.log('const colors = ["red", "green",  "blue"]: ', colors);
colors.splice(2,0, "purple");
console.log('colors.splice(2,0, "purple"): ', colors);
colors.splice(1,0, "yellow", "pink");
console.log('colors.splice(1,0, "purple"): ', colors);

colors.splice(1,1,  "orange");
console.log('colors.splice(1,1,  "orange"): ', colors);

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log('const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"]: ',oldClients);
const newClients = ["Monkong", "Singu"];
console.log('const newClients = ["Monkong", "Singu"];', newClients);
const allClients = oldClients.concat(newClients);
console.log('const allClients = oldClients.concat(newClients): ',allClients);

console.log('function multiply(){ console.log("Це лог на момент виклику функції multiply")};         multiply()');

function multiply(){
    console.log("Це лог на момент виклику функції multiply")
};
multiply();
const x = 5;
const y = 13;
const z = 8;
console.log("const x = 5: ", x);
console.log("const y = 13: ", y);
console.log("const z = 8: ", z);
console.log('function multiply(x, y, z){ console.log(`Результат множення дорівнює ${x * y * z}`)};    multiply(x, y, z)');

function multiply1(x, y, z){
     console.log(`Результат множення дорівнює ${x * y * z}`);
};
multiply1(x, y, z);
multiply1(20, 15, 6);

function multiply2(x,y,z){
    return x * y * z;
};
console.log("function multiply2(x,y,z) { return x * y * z;}");
let result = multiply2(25, 5, 2);
console.log("let result = multiply2(25, 5, 2): ",result);

function count(countForm = 0, countTo = 10, step = 1){
    console.log(`countForm = ${countForm}, countTo = ${countTo}, step = ${step}`)
    
    for(let i = countForm; i < countTo; i+=step){
        console.log(i)
    }
}
count()
count(0,50,10);
count(1,10);

function multiply3(){
    
    let total = 1;
    for(const argument of arguments){
        total *= argument;
    }
    return total;
};

console.log(multiply3(1, 2, 3,));

function fn(){
    const args = Array.from(arguments);
};
console.log("function fn(){   const args = Array.from(arguments);};");

function withdraw (amount, balance){
    if(amount === 0){
        console.log("Для проведення операції введіть суму більшу за нуль");
    return; 
    };
    if(amount > balance){
        console.log("Недостатньо коштів на рахунку");
        return;
    }
    console.log("Операція зняття коштів проведена");
}

withdraw(5, 800)
console.log(`function withdraw (amount, balance){
    if(amount === 0){
        console.log("Для проведення операції введіть суму більшу за нуль");
    return; 
    };
    if(amount > balance){
        console.log("Недостатньо коштів на рахунку");
        return;
    }
    console.log("Операція зняття коштів проведена");
}`)

const multiply4 = function(x, y, z){
    console.log(`Результат множення дорівнює ${x * y * z}`);
}
multiply4(2, 5, 8)
console.log(`const multiply4 = function(x, y, z){
    console.log('Результат множення дорівнює ${2 * 5 * 8}');
}
multiply4(2, 5, 8)`)

const user = {
    name: "Misha",
    lastName: "Bartov",
    languages: ["ENG", "CZ", "UA"],
    rating: 8.4,
    location:{
        country: "Czech Republic",
        city: "Praha",
    }
};

console.log(user);

console.log(`const user = {
    name: "Misha",
    lastName: "Bartov",
    languages: ["ENG", "CZ", "UA"],
    rating: 8.4,
    location:{
        country: "Czech Republic",
        city: "Praha",
    }
}`, user);

console.log(` user.location:`, user.location);

const locations = user.location;
console.log(`const locations = user.location:`, locations);

const locationCountry = user.location.country;
console.log(`const locationCountry = user.location.country:`, locationCountry);

const languagesIndex = user.languages[1];
console.log(`const languagesIndex = user.languages[1]:`, languagesIndex);

const languagesIndexLength = user.languages.length;
console.log(`const languagesIndexLength = user.languages.length:`, languagesIndexLength);

const proKey = "rating";
const userRating = user[proKey];
console.log(`const proKey = "rating";
const userRating = user[proKey];`, userRating);

user.rating = 9.1;
console.log(`user.rating = 9.1:`,user.rating);

user.languages.push("USA") ;
console.log(`user.languages.push("USA"):`, user.languages)

user.pageCount = 85;
console.log(`user.pageCount = 85:`, user)

const name5 = "Bob Milson";
const age = 28;

const user1 ={
    name5,
    age,
  
    
};

console.log(`const name5 = "Bob Milson";
const age = 28;

const user1 ={
    name5,
    age,
}`, user1);


const hobby = "hobby";
user1[hobby] = "BOX";
console.log(user1.hobby);



const bookShelf = {
    books: ["The Last Kingdom"],
    getBooks() {
      console.log(this);
    },
  };
  
  bookShelf.getBooks(); 


  const bookShelf1 = {
    books: ["The Last Kingdom"],
    getBooks() {
      return this.books;
    },
    addBook(bookName) {
      this.books.push(bookName);
    },
    removeBook(bookName) {
      const bookIndex = this.books.indexOf(bookName);
      this.books.splice(bookIndex, 1);
    },
  };
  
  console.log(bookShelf1.getBooks()); // ["The Last Kingdom"]
  bookShelf1.addBook("The Mist");
  bookShelf1.addBook("Dream Guardian");
  console.log(bookShelf1.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
  bookShelf1.removeBook("The Mist");
  console.log(bookShelf1.getBooks()); // ['The Last Kingdom', 'Dream Guardian']


const bookShelf2 = {
    books1: ["The Last Kingdom"],
    getBooks(){
        console.log(this);
    },
} ;
bookShelf2.getBooks();


const book2 = {
    title: "The Last Kingdom",
    autor: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating : 7.3,
} ;

for(const key in book2){
    console.log(key);
    console.log(book2[key]);
}
book2.likes = 521;
console.log(`const book2 = {
    title: "The Last Kingdom",
    autor: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating : 7.3,
} ;

for(const key in book2){
    console.log(key);
    console.log(book2[key]);
}
book2.likes = 521;`);

const animal = {
    legs:4,
};
const dog = Object.create(animal);
dog.name1 = "Mango";
console.log(dog);
console.log(dog.name1);
console.log(dog.legs);
console.log(`const animal = {
    legs:4,
};
const dog = Object.create(animal);
dog.name1 = "Mango";
console.log(dog);
console.log(dog.name1);
console.log(dog.legs);`)
console.log(`dog.hasOwnProperty("name1"):`, dog.hasOwnProperty("name1"))
console.log(`dog.hasOwnProperty("legs")`,dog.hasOwnProperty("legs"))

for(const key1 in book2){
    if(book2.hasOwnProperty(key1)){
        console.log(key1);
        console.log(book2[key1]);
    };
};

const key2 = Object.keys(book2);
console.log(key2);
const values = Object.values(book2);
console.log(values);
console.log(`const key2 = Object.keys(book2);
console.log(key2);
const values = Object.values(book2);
console.log(values);`);

const goods = {
    apples: 6,
    grapes: 8,
    bread: 5,
    cheese: 2,
};
const values2 = Object.values(goods);
let total1 = 0;
for(const value of values2){
    total1 += value;
} 
console.log(`const goods = {
    apples: 6,
    grapes: 8,
    bread: 5,
    cheese: 2,
};
const values2 = Object.values(goods);
let total = 0;
for(const value of values){
    total += value;
} : `, total1);


const entries = Object.entries(book2);
console.log(`const entries = Object.entries(book2)`, entries);

const books3 = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "На березі спокійних вод",
        author: "Роберт Шеклі",
        rating: 8.51, 
    },
    {
        title: "Вино з троянд",
        author: "Симоненко Василь",
        rating: 9.5,
      },
];
for (const book3  of books3 ) {
    console.log(book3);
    console.log(book3.title);
    console.log(book3.author);
    console.log(book3.rating);
};

console.log(`const books3 = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "На березі спокійних вод",
        author: "Роберт Шеклі",
        rating: 8.51, 
    },
    {
        title: "Вино з троянд",
        author: "Симоненко Василь",
        rating: 9.5,
      },
];
for (const book3  of books3 ) {
    console.log(book3);
    console.log(book3.title);
    console.log(book3.author);
    console.log(book3.rating);
};
`);
const books3Names = [];
for (const book3  of books3 ) {
    books3Names.push(book3.title);
};
console.log(`const books3Names = [];
for (const book3  of books3 ) {
    books3Names.push(book3.title);

}`, books3Names);

let totalRating = 0;
for (const book3 of books3) {
    totalRating += book3.rating;
};
const averageRating = (totalRating / books3.length).toFixed(1);
console.log( `let totalRating = 0;
for (const book3 of books3) {
    totalRating += books3.rating;
};
const averageRating = (totalRating / books3.length).toFixed(1);`,averageRating);

const temps = [14,5,45,87,3,13,63];
const mathMax = Math.max(...temps);
console.log(`const temps = [14,5,45,87,3,13,63];
const mathMax = Math.max(...temps);`,mathMax);

const copyOfTemps = [...temps];
console.log(`const copyOfTemps = [...temps]`, copyOfTemps);

const currentWeekTemps = [23, 17, 18, 22, 21];
const allTemps = [...temps, ...currentWeekTemps];
console.log(`const currentWeekTemps = [23, 17, 18, 22, 21];
const allTemps = [...temps, ...currentWeekTemps];`,allTemps)

const first = { propA: 10, propB:20, propC: 30 };
const second = { propC: 35.8, propD: 50 };

const third = { ...first, ...second };
console.log(third); 
const fourth = { ...second, ...first };
console.log(fourth); 
const fifth = { ...first, ...second, propD: 50.7 };
console.log(fifth); 
const fifth1 = {propD: 50.2,  ...first, ...second };
console.log(fifth); 
console.log(`const first = { propA: 10, propB:20, propC: 30 };
const second = { propC: 35.8, propD: 50 };
const third = { ...first, ...second };
console.log(third); 
const fourth = { ...second, ...first };
console.log(fourth); 
const fifth = { ...first, ...second, propD: 50.7 };
console.log(fifth); 
const fifth1 = {propD: 50.2,  ...first, ...second };
console.log(fifth); `);

function multiply5(...args1){
    console.log(args1)
}
multiply5(2, 6);
multiply5(2, 6, 8, 9);
multiply5(2, 6, 5, 12, 14, 55);
console.log(`function multiply5(...args1){
    console.log(args1)
}
multiply5(2, 6);
multiply5(2, 6, 8, 9);
multiply5(2, 6, 5, 12, 14, 55);`)



function multiply6(firstNumber, secondNumber, ...args2){
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(args2)
}
multiply6(2, 6);
multiply6(2, 6, 8, 9);
multiply6(2, 6, 5, 12, 14, 55);
console.log(`const firstNumber = 15;
const secondNumber = 33;
function multiply6(firstNumber, secondNumber, ...args2){
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(args2)
}
multiply6(2, 6);
multiply6(2, 6, 8, 9);
multiply6(2, 6, 5, 12, 14, 55);`);

const books2 = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };
  const {title, author, isPublic, rating, coverImage} = books2;
  const accessType = isPublic ? "публічному" : "закритому";
  const message6 = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
  console.log(`const books2 = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };
  const {title, author, isPublic, rating, coverImage} = books2;
  const accessType = isPublic ? "публічному" : "закритому";
  const message6 = 'Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.';`,books2);

  const books4 = {
    title1: "The Last Kingdom",
    author1: "Bernard Cornwell",
    genres1: ["historical prose", "adventure"],
    isPublic1: true,
    rating1: 8.38,
  };

  const {
       title1,
       author1,
       genres1,
       coverImage1 = "https://via.placeholder.com/640/480",
       isPublic1,
       rating1,

  } = books4;

  console.log(title1)
  console.log(coverImage1)
  console.log(genres1)
  console.log(`  const books4 = {
    title1: "The Last Kingdom",
    author1: "Bernard Cornwell",
    genres1: ["historical prose", "adventure"],
    isPublic1: true,
    rating1: 8.38,
  };

  const {
       title1,
       author1,
       genres1,
       coverImage1 = "https://via.placeholder.com/640/480",
       isPublic1,
       rating1,

  } = books4;

  console.log(title1)
  console.log(coverImage1)
  console.log(genres1)`);

  const firstBook = {
    title2: "The Last Kingdom",
    coverImage2:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
  };

  const {
    title2: firstTitle2,
     coverImage2: firstCoverImage2 = "https://via.placeholder.com/640/480",
  } = firstBook;
  console.log(`const firstBook = {
    title2: "The Last Kingdom",
    coverImage2:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
  };

  const {
    title2: firstTitle2,
     coverImage2: firstCoverImage2 = "https://via.placeholder.com/640/480",
  } = firstBook:   `,firstTitle2, firstCoverImage2);



  const books8 = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "На березі спокійних вод",
      author: "Роберт Шеклі",
      rating: 8.51,
    },
  ];
  for (const book of books8) {
    const { title, author, rating } = book;
  
    console.log(title);
    console.log(author);
    console.log(rating);
  }

  console.log(`  const books8 = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "На березі спокійних вод",
      author: "Роберт Шеклі",
      rating: 8.51,
    },
  ];
  for (const book of books8) {
    const { title, author, rating } = book;
  
    console.log(title);
    console.log(author);
    console.log(rating);
  }`)
  for (const { title, author, rating } of books8) {
    console.log(title);
    console.log(author);
    console.log(rating);
  }
  console.log(`  for (const { title, author, rating } of books8) {
    console.log(title);
    console.log(author);
    console.log(rating);
  }`);

  const user5 = {
    nameT: "Jacques Gluke",
    tag: "jgluke",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  const {
    nameT,
    tag,
    stats: { followers, views: userViews, likes: userLikes = 0 },
  } = user5;

console.log(nameT);
console.log(tag); 
console.log(followers); 
console.log(userViews); 
console.log(userLikes);
console.log(` const user5 = {
    nameT: "Jacques Gluke",
    tag: "jgluke",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  const {
    nameT,
    tag,
    stats: { followers, views: userViews, likes: userLikes = 0 },
  } = user5;

console.log(nameT);
console.log(tag); 
console.log(followers); 
console.log(userViews); 
console.log(userLikes);`);

const rgb = [200, 255, 100];
const [red, green, blue] = rgb;
console.log('const rgb = [200, 255, 100]; const [red, green, blue] = rgb;',`R:${red},G:${green},B:${blue}`);

const rgb1 = [200, 255, 100];
const [red1, green1, blue1, alfa = 0.2] = rgb1;
console.log('const rgb1 = [200, 255, 100]; const [red1, green1, blue1, alfa = 0.2] = rgb1: ', ` R:${red},G:${green},B:${blue},Alfa:${alfa}`)

const rgb2 = [200, 255, 100];
const [red2, ...color] = rgb2;
console.log(red);
console.log(color);
console.log(`const rgb2 = [200, 255, 100];
const [red2, ...colors1] = rgb;
console.log(red);
console.log(colors);`)


const rgb3 = [200, 100, 255];
const [, , bluer] = rgb3;
console.log('const rgb3 = [200, 100, 255]; const [, , bluer] = rgb3;  ',`  Blue:${blue}`)


const apartment = {
    imgUrl:"https://via.placeholder.com/640x480",
    descr:"Spacious apartment in the city center",
    rating:4,
    price: 2153,
    tags:["premium", "promoted", "top"],
    };

    
function greet(name){
    console.log(`Ласкаво просимо ${name}.`)
};
function registerGuest(name, callback){
    console.log(`Реєструємо гостя ${name}.`);
    callback(name)
}

registerGuest('Mango',greet)
console.log(`function greet(name){
    console.log('Ласкаво просимо ${name}.')
};
function registerGuest(name, callback){
    console.log('Реєструємо гостя ${name}.');
    callback(name)
}

registerGuest('Mango',greet)`);

registerGuest("Polly", function notify(name){
    console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`)
});
console.log(`registerGuest("Polly", function notify(name){
    console.log('Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.')
});`)


function processCall(recipient){
    const isRecipientAvailable = Math.random() > 0.5;
    if(!isRecipientAvailable){
        console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
    }else{
        console.log(`З'єднуємо з ${recipient}, очікуйте...`);
    }
}

processCall("Jake");

console.log(`function processCall(recipient){
    const isRecipientAvailable = Math.random() > 0.5;
    if(!isRecipientAvailable){
        console.log('Абонент  недоступний, залиште повідомлення.');
    }else{
        console.log('З'єднуємо з , очікуйте...');
    }
}`)

function processCall1(recipient1, onAvailable, onNotAvailable) {
    const isRecipientAvailable = Math.random() > 0.5;
  
    if (!isRecipientAvailable) {
      onNotAvailable(recipient1);
      return;
    }
  
    onAvailable(recipient1);
  }
  
  function takeCall(name) {
    console.log(`З'єднуємо з ${name}, очікуйте...`);
  }
  
  function activateAnsweringMachine(name) {
    console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  }
  
  function leaveHoloMessage(name) {
    console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  }
  
  processCall1("Манго", takeCall, activateAnsweringMachine);
  processCall1("Полі", takeCall, leaveHoloMessage);
  
  console.log(`function processCall1(recipient1, onAvailable, onNotAvailable) {
    const isRecipientAvailable = Math.random() > 0.5;
  
    if (!isRecipientAvailable) {
      onNotAvailable(recipient1);
      return;
    }
  
    onAvailable(recipient1);
  }
  
  function takeCall(name) {
    console.log('З'єднуємо з ${name}, очікуйте...');
  }
  
  function activateAnsweringMachine(name) {
    console.log('Абонент ${name} недоступний, залиште повідомлення.');
  }
  
  function leaveHoloMessage(name) {
    console.log('Абонент ${name} недоступний, записуємо голограму.');
  }
  
  processCall1("Манго", takeCall, activateAnsweringMachine);
  processCall1("Полі", takeCall, leaveHoloMessage);`)

  function repeatLog(n){
    for (let i = 0; i < n; i+=5) {
        console.log(i)
        
    }
  };
  repeatLog(51);

  console.log(`function repeatLog(n){
    for (let i = 0; i < n; i+=5) {
        console.log(i)
        
    }
  };
  repeatLog(51);`)


  function printValue(value) {
    console.log(value);
  }
  
  function prettyPrint(value) {
    console.log("Logging value: ", value);
  }
  
  function repeat(n, action) {
    for (let i = 0; i < n; i += 1) {
      action(i);
    }
  }
  

  repeat(3, printValue);

  repeat(3, prettyPrint);

  console.log(`  function printValue(value) {
    console.log(value);
  }
  
  function prettyPrint(value) {
    console.log("Logging value: ", value);
  }
  
  function repeat(n, action) {
    for (let i = 0; i < n; i += 1) {
      action(i);
    }
  }
  

  repeat(3, printValue);

  repeat(3, prettyPrint);`)
  


  const number7 = [1,5,6,12,51,25,58,];
  number7.forEach(function(number, index){
    console.log(`Індекс ${index}, значення ${number}`)
  });

  console.log()
  console.log(` const number7 = [1,5,6,12,51,25,58,];
  number7.forEach(function(number, index){
    console.log('Індекс , значення ')
  });`);


  function classicAdd(a, b, c) {
    console.log(a, b, c);
    return a + b + c;
  };

  const arrowAdd = (a, b, c) => {
    console.log(a, b, c);
    return a + b + c;
  };
  classicAdd(7, 5, 9);
  arrowAdd(7, 5, 9);


  const add = a => {
    return a + 5;
  };

  add(8)

  const arrowAdd1 = (a, b, c) => a + b + c;

 
  // function greet2(name7) {
  //   return `Ласкаво просимо ${name7}.`;
  // } 
  
  // console.log(`function greet(name7) {
  //   return 'Ласкаво просимо Kolia.';
  // } : `,greet2("Kolia"));
  // console.log(`function greet(name7) {
  //   return 'Ласкаво просимо Манго.';
  // } : `,greet2("Манго"));
  // console.log(`greet() : `,greet2());

  // function registerGuest2(name, callback2){
  //   console.log(`Реєструємо гостя ${name7}.`);
  //   callback(name7);
  // }
  // registerGuest("Mykola Olen", greet2)
const add2 = (...args3) => {
  console.log(args3)
};
console.log(`const add2 = (...args3) => {
  console.log(args3)
};
add2(1,3,5);` )
add2(1,3,5);

const number8 = [1,5,6,12,51,25,58, 20, 45, -18];
number8.forEach(function(number, index){
  console.log(`Індекс ${index}, значення ${number}`)
});
console.log("number8.forEach(function(number, index){console.log(`Індекс ${index}, значення ${number}`)});");
number8.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`)
});
console.log("number8.forEach((number, index) => { console.log(`Індекс ${index}, значення ${number}`)});");

const logMassage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`)
}
number8.forEach(logMassage);
console.log("const logMassage = (number, index) => {   console.log(`Індекс ${index}, значення ${number}`)} number8.forEach(logMassage);")

const filteredNumbers = [];
for (let i = 0; i < number8.length; i+= 1) {
  if (number8[i] > 15) {
    filteredNumbers.push(number8[i]);
  }
  
}
console.log(`for (let i = 0; i < number8.length; i+= 1) {
  if (number8[i] > 15) {
    filteredNumbers.push(number8[i]);
  }
  
}`, filteredNumbers);

const filteredNumbers2 = number8.filter(value => value > 25);
console.log(`const filteredNumbers2 = number8.filter(value => value > 25);`, filteredNumbers2);


























































































































































