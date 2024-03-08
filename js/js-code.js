
let month = 0;
function getSeason(month) {
    if (month >= 1 && month <= 3) {
        return "WINTER";
    } else if (month >= 4 && month <= 6) {
        return "SPRING";
    } else if (month >= 7 && month <= 9) {
        return "SUMMER";
    } else if (month >= 10 && month <= 12) {
        return "AUTUMN";
    } else {
        return `Choose a number from 1 to 12. You chose ${month}`;
    }
}

function getAndDisplaySeason() {
    var monthInput = document.getElementById("monthInput").value;
    
    if (!monthInput) {
        alert("Please enter a month number.");
        return;
    }

    if (isNaN(monthInput) || monthInput < 1 || monthInput > 12) {
        alert("Please enter a valid month number between 1 and 12.");
        return;
    }

    let month = parseInt(monthInput);
    let season = getSeason(month);
    let outputElement = document.getElementById("seasonOutput");
    outputElement.innerText = "The season is: " + season;
}


let price = 2500;
let discount = 5;

function calculateDiscountedPrice(price, discountPercent) {
    if (discountPercent >= 0 && discountPercent <= 100) {
        let totalPrice = price - (price * discountPercent / 100);
        return totalPrice;
    } else {
        return "Invalid discount percentage. Please enter a value between 0 and 100.";
    }
}

function calculateAndDisplayDiscountedPrice() {
    let priceInput = document.getElementById("priceInput").value;
    let discountInput = document.getElementById("discountInput").value;
    
    if (!priceInput || !discountInput) {
        alert("Please enter both price and discount percentage.");
        return;
    }

    if (isNaN(priceInput) || isNaN(discountInput)) {
        alert("Please enter valid numbers for both price and discount percentage.");
        return;
    }

    let price = parseFloat(priceInput);
    let discount = parseFloat(discountInput);
    let discountedPrice = calculateDiscountedPrice(price, discount);
    let outputElement = document.getElementById("discountedPriceOutput");
    outputElement.innerText = "The discounted price is: " + discountedPrice;
}


let finalPrice = calculateDiscountedPrice(price, discount)
if(finalPrice !== null){
    console.log("Кінцева вартість товару після застосування знижки:", finalPrice)
}
function calculateDiscount(ageUser, country){
    const withoutVAT = "USA";
    const withVAT = "UA";
    if (ageUser < 18) {
        console.log("Знижка становить 10%")
        return 10;
       
        
    } else if(ageUser >= 18 && ageUser <= 65){
        if(country === withVAT){
            console.log("Знижка становить 15%")
            return 15;
            
        }else if(country === withoutVAT){
            console.log("Знижка становить 25%")
            return 25;
        }
    }else{
        console.log("Знижка становить 35%")
        return 35;
    }
}


function calculateAndDisplayDiscount() {
    let ageInput = document.getElementById("ageInput").value;
    let countryInput = document.getElementById("countryInput").value;
    
    // Перевірка чи обидва поля введені
    if (!ageInput || !countryInput) {
        alert("Please enter both age and country.");
        return;
    }

    // Перевірка чи введений вік є числом
    if (isNaN(ageInput)) {
        alert("Please enter a valid age.");
        return;
    }

    let age = parseInt(ageInput);
    let discount = calculateDiscount(age, countryInput);
    let outputElement = document.getElementById("discountOutput");
    outputElement.innerText = "Your discount is " + discount + "%";
}



function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseAndDisplay() {
    var input = document.getElementById("inputString").value;
    var reversed = reverseString(input);
    document.getElementById("output").innerText = reversed;
}


function isPalindrome(str){
    const cleanStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reverseStr = cleanStr.split('').reverse().join('');
    if (cleanStr === reverseStr) {
        return true
    } else {
        return false
    }
}
function checkAndDisplayPalindrome() {
    let stringInput = document.getElementById("stringInput").value;
    
    if (!stringInput) {
        alert("Please enter a string.");
        return;
    }

    let isPalindromic = isPalindrome(stringInput);
    let outputElement = document.getElementById("palindromeOutput");
    if (isPalindromic) {
        outputElement.innerText = "The string is a palindrome.";
    } else {
        outputElement.innerText = "The string is not a palindrome.";
    }
}

function hasPermission(role){
    if (role === "admin" || role === "moderator") {
        return true;
    } else {
       return false;
    }
}

function checkPermission() {
    const roleInput = document.getElementById("roleInput").value;
    
    if (!roleInput) {
        alert("Please enter a role.");
        return;
    }

    const hasPermissionResult = hasPermission(roleInput);
    const outputElement = document.getElementById("permissionOutput");
    outputElement.innerText = `Does the user have permission? ${hasPermissionResult}`;
}

function canVote(userAge, citizenships){
    if (userAge >= 18 || citizenships === "citizen") {
        return true;
    } else {
        return false;
    }
}

function checkVotingEligibility() {
    const userAgeInputs = parseInt(document.getElementById("ageInputs").value);
    const citizenshipInputs = document.getElementById("citizenshipInputs").value.toLowerCase();
    
    if (isNaN(userAgeInputs) || userAgeInputs <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    if (!citizenshipInputs) {
        alert("Please enter your citizenship.");
        return;
    }

    const isEligible = canVote(userAgeInputs, citizenshipInputs);
    const outputElement = document.getElementById("votingEligibilityOutput");
    outputElement.innerText = `Are you eligible to vote? ${isEligible}`;
}

