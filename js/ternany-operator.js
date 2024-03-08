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