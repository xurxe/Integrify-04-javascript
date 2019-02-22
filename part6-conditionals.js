/* CONDITIONALS ************************************************************************************************* */

/* Get user input using the prompt(“Enter your age:”).
If the user is 18 or older, give feedback: "You are old enough to drive"
If not 18 yet tell the user to wait for the years they are supposed to wait for. */

var yourAge = prompt('Enter your age:');

if (yourAge >= 18) {
    console.log('You are old enough to drive');
}

else if (yourAge = 17) {
    console.log('You need to wait 1 year or less until you can drive.');
}

else {
    console.log(`You need to wait ${18 - yourAge} years before you can drive.`);
}



/* Compare the values of myAge and yourAge using if … else.
Based on the comparison, log to console who is older (me or you).
Use prompt(“Enter your age:”) to get the age as input. */

myAge = 29;

if (yourAge > myAge && Math.abs(yourAge - myAge) > 1) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
}

else if (yourAge > myAge && Math.abs(yourAge - myAge) <= 1) {
    console.log(`You are 1 year older than me.`);
}

else if (myAge > yourAge && Math.abs(yourAge - myAge) <= 1) {
    console.log(`You are 1 year younger than me.`);
}

else {
    console.log(`You are ${myAge - yourAge} years younger than me.`);
}



/* Using the ternary operator: if a is greater than b return "a is greater than b", else "a is less than b." */

let a = 4;
let b = 3;

var greaterOrLess = (a > b) ? 'a is greater than b' : 'a is less than b';

console.log(greaterOrLess);