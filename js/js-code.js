
let month = 0;
function getSeason(month){
    if(month >= 1 && month <= 3){
         console.log("WINTER");
    }else if(month >= 4 && month <= 6){
         console.log("SPRING");
    }else if(month >= 7 && month <= 9){
        console.log("SUMMER");
   }else if(month >= 10 && month <= 12){
    console.log("AUTUMN");
   }else{
    console.log(`Виберіть число від 1 до 12. Ви вибрали ${month}`)
   }
};



getSeason(2)

let price = 2500;
let discount = 5;
function calculateDiscountedPrice(price, discountPercent){
    if (discountPercent >= 0 && discountPercent <= 100) {
        let totalPrice = price - (price * discountPercent / 100);
        return totalPrice
    } 

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

calculateDiscount(66, "UA")
