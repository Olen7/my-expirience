function isPositive(number) {
    return number >= 0 ? "positive" : "negative";
}

function checkNumber() {
    const numberInput = parseFloat(document.getElementById("numberInput").value);
    
    if (isNaN(numberInput)) {
        alert("Please enter a valid number.");
        return;
    }

    const result = isPositive(numberInput);
    const outputElement = document.getElementById("numberOutput");
    outputElement.innerText = `The number is ${result}.`;
}
function getMax(a, b) {
    return a > b ? a : b;
}

function getAndDisplayMax() {
    const firstNumberInput = parseFloat(document.getElementById("firstNumberInput").value);
    const secondNumberInput = parseFloat(document.getElementById("secondNumberInput").value);
    
    if (isNaN(firstNumberInput) || isNaN(secondNumberInput)) {
        alert("Please enter valid numbers for both inputs.");
        return;
    }

    const maxNumber = getMax(firstNumberInput, secondNumberInput);
    const outputElement = document.getElementById("maxNumberOutput");
    outputElement.innerText = `The maximum number is: ${maxNumber}.`;
}
function getMaxValue(...args) {
    let maxValue = args[0]; 
    for (let i = 1; i < args.length; i++) {
        maxValue = args[i] > maxValue ? args[i] : maxValue; 
    }
    return maxValue;
}

function getAndDisplayMaxValue() {
    const numberInputs = document.getElementById("numberInputs").value;
    const numbers = numberInputs.split(',').map(Number);
    
    if (numbers.some(isNaN)) {
        alert("Please enter valid numbers separated by commas.");
        return;
    }

    const maxValue = getMaxValue(...numbers);
    const outputElement = document.getElementById("maxValueOutput");
    outputElement.innerText = `The maximum value is: ${maxValue}.`;
}

function isVowel(char) {
    return "aeiou".includes(char.toLowerCase());
}

function checkAndDisplayVowel() {
    const charInput = document.getElementById("charInput").value;
    
    if (!charInput) {
        alert("Please enter a character.");
        return;
    }

    if (charInput.length !== 1) {
        alert("Please enter only one character.");
        return;
    }

    const isVowelResult = isVowel(charInput);
    const outputElement = document.getElementById("vowelOutput");
    outputElement.innerText = `Is the character a vowel? ${isVowelResult ? 'Yes' : 'No'}.`;
}

function isVowel(char) {
    return "aeiou".includes(char.toLowerCase());
}

function checkAndDisplayVowelOne() {
    const textInput = document.getElementById("textInput").value;
    
    if (!textInput) {
        alert("Please enter some text.");
        return;
    }

    let containsVowel = false;
    for (let i = 0; i < textInput.length; i++) {
        if (isVowel(textInput[i])) {
            containsVowel = true;
            break;
        }
    }

    const resultElement = document.getElementById("vowelResult");
    resultElement.innerText = `Does the text contain a vowel? ${containsVowel ? 'Yes' : 'No'}.`;
}


function getMaxValue(...args) {
    let maxAgse = args[0];
    for (let i = 0; i < args.length; i++) {
        maxAgse = args[i] > maxAgse ? args[i] : maxAgse;
    }
    return maxAgse;
}

function getAndDisplayMaxValueTwo() {
    const numberInputsOne = document.getElementById("numberInputsOne").value;
    const numbers = numberInputsOne.split(',').map(Number);
    
    if (numbers.some(isNaN)) {
        alert("Please enter valid numbers separated by commas.");
        return;
    }

    const maxValue = getMaxValue(...numbers);
    const outputElement = document.getElementById("maxValueOutputOne");
    outputElement.innerText = `The maximum value is: ${maxValue}.`;
}

function getMinValue(...args){
    let minAgse = args[0]
     for (let i = 0; i < args.length; i++) {
        minAgse = args[i] < minAgse ? args[i] : minAgse;
        
     }
     return minAgse;
}

function getMinValue(...args) {
    let minAgse = args[0];
    for (let i = 0; i < args.length; i++) {
        // Перевірка, чи є елемент числом
        if (typeof args[i] === 'number') {
            minAgse = args[i] < minAgse ? args[i] : minAgse;
        }
    }
    return minAgse;
}

function getAndDisplayMinValue() {
    const numberInputs = document.getElementById("numberInputs").value;
    const numbers = numberInputs.split(',').map(Number);
    
    if (numbers.some(isNaN)) {
        alert("Please enter valid numbers separated by commas.");
        return;
    }

    const minValue = getMinValue(...numbers);
    const outputElement = document.getElementById("minValueOutput");
    outputElement.innerText = `The minimum value is: ${minValue}.`;
}



function deysWeek(day){
    switch (day) {
            case 1:
            return "Понеділок";
            case 2:
            return "Вівторок";
            case 3:
            return "Середа";
            case 4:
            return "Четвер";
            case 5:
            return "Пятниця";
            case 6:
            return "Субота";
            case 7:
            return "Неділя";
        default:
            return "Виберіть день неділі";
    }
}
function studentScils(reting){
    switch (reting) {
        case 1:
        return "Не здано";
        case 2:
        return "Не задовільно";
        case 3:
        return "Задовільно";
        case 4:
        return "Добре" ;
        case 5:
        return "Відміно";
        default:
            return "Вкажіть оцінку";
    }
}


// Приклад виклику функції
console.log(getQuarterName(5)); // Повинно вивести "2 квартал"

function getQuarterName(monthNumber){
    switch (Math.ceil(monthNumber / 3)) {
        case 1:
            return "1 квартал";
        case 2:
            return "2 квартал";
        case 3:
            return "3 квартал";
        case 4:
            return "4 квартал";
        default:
            return "Невідомий місяць"; 
    }
}


function getMonthAndQuarter(monthNumber){
    let monthName;
    let quarter;
    switch (Math.ceil(monthNumber / 3)) {
        case 1:
            quarter = "1 квартал";
            break;
            case 2:
                quarter = "2 квартал";
                break;
                case 3:
                quarter = "3 квартал";
                break;
                case 4:
                quarter = "4 квартал";
                break;
                default:
                    quarter = "Невідомий квартал";
                    break;
    }
    switch (monthNumber) {
        case 1:
            monthName = "Січень";
            break;
        case 2:
            monthName = "Лютий";
            break;
        case 3:
            monthName = "Березень";
            break;
        case 4:
            monthName = "Квітень";
            break;
        case 5:
            monthName = "Травень";
            break;
        case 6:
            monthName = "Червень";
            break;
        case 7:
            monthName = "Липень";
            break;
        case 8:
            monthName = "Серпень";
            break;
        case 9:
            monthName = "Вересень";
            break;
        case 10:
            monthName = "Жовтень";
            break;
        case 11:
            monthName = "Листопад";
            break;
        case 12:
            monthName = "Грудень";
            break;
        default:
            monthName = "Невідомий місяць";
            break;
    }
    return `${monthName}, ${quarter}`;
}

const str = 'absdt';
const value = str.replace('a', 'A');
console.log(value)