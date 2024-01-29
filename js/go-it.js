"use strict";

const b = 20;
const a = b * 15;

console.log(a);

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

console.log("BAHAMAS.indexOf("S")", name2.includes("S"));





