const PHONE_PRICE = 100;
const ACCESSORY_PRICE = 10;
const TAX_RATE = 0.1;
const DAILY_SPENDING_MAX = 200;
var bankAccountBalance = 1000;
var shoppingCartAmount = 0;
var amountSpent = 0;


function formatDollars (number){
    number = number.toFixed(2);
    return `$${number}`;
}

function dailyPurchase (){
    shoppingCartAmount = 0;
    while ((shoppingCartAmount + PHONE_PRICE * (1 + TAX_RATE)) < DAILY_SPENDING_MAX ) {
        shoppingCartAmount += PHONE_PRICE * (1 + TAX_RATE);
        console.log(`You added a phone to your shopping cart. The total in your cart is ${formatDollars(shoppingCartAmount)}.`);
        while ((shoppingCartAmount + ACCESSORY_PRICE * (1 + TAX_RATE)) < DAILY_SPENDING_MAX) {
            shoppingCartAmount += ACCESSORY_PRICE * (1 + TAX_RATE);
            console.log(`You added an accessory to your shopping cart. The total in your cart is ${formatDollars(shoppingCartAmount)}.`);
        }
    }
    
    if (shoppingCartAmount < bankAccountBalance) {
        amountSpent +=shoppingCartAmount;
        console.log(`Thank you for your purchase of ${formatDollars(shoppingCartAmount)}.`);
        return amountSpent;
    }

    else {
        console.log(`You can't afford this purchase.`)
        return amountSpent;
    }
}

function totalPurchase(){
    while ((bankAccountBalance - shoppingCartAmount) > 0) {
        dailyPurchase();
        bankAccountBalance -= shoppingCartAmount;
        console.log(`Your bank account balance is ${formatDollars(bankAccountBalance)}.`);
    }
    return bankAccountBalance;
}

totalPurchase();
