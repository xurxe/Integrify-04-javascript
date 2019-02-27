/* CONDITIONALS ************************************************************************************************* */

/* Get user input using the prompt(“Enter your age:”).
If the user is 18 or older, give feedback: "You are old enough to drive"
If not 18 yet tell the user to wait for the years they are supposed to wait for. */
let yourAge = prompt('Enter your age:');

if (yourAge >= 18) {
    console.log('You are old enough to drive');
}

else if (yourAge = 17) {
    console.log('You need to wait 1 year or less until you can drive.');
}

else if (yourAge < 17){
    console.log(`You need to wait ${18 - yourAge} years before you can drive.`);
}

else {
    console.log(`Please enter a valid age.`)
}


/* Compare the values of myAge and yourAge using if … else.
Based on the comparison, log to console who is older (me or you).
Use prompt(“Enter your age:”) to get the age as input. */
let myAge = 29;

if (yourAge == myAge) {
    console.log(`We are the same age.`)
}

else if (yourAge > myAge && Math.abs(yourAge - myAge) <= 1) {
    console.log(`You are 1 year older than me.`);
}

else if (yourAge < myAge && Math.abs(yourAge - myAge) <= 1) {
    console.log(`You are 1 year younger than me.`);
}

else if (yourAge > myAge && Math.abs(yourAge - myAge) > 1) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
}

else if (yourAge < myAge && Math.abs(yourAge - myAge) > 1) {
    console.log(`You are ${yourAge - myAge} years younger than me.`);
}

else {
    console.log(`Please enter a valid age.`);
}



/* Using the ternary operator: if a is greater than b, return "a is greater than b"; otherwise return "a is less than b." */
let a = 4;
let b = 3;

let greaterOrLess = (a > b) ? 'a is greater than b' : 'a is less than b';

console.log(greaterOrLess);



/* Write code that gives students a letter grade according to theirs score.
80-100, A
70-89, B
60-69, C
50-59, D
0 -49, F */
let score = 90;

if (score >= 80) {
    console.log("You got an A.");
}

else if (score >= 70) {
    console.log("You got a B.");
}

else if (score >= 60) {
    console.log("You got a C.");
}

else if (score >= 50) {
    console.log("You got a D.");
}

else if (score >= 0) {
    console.log("You got an F.");
}

else {
    console.log("Please enter a valid score.")
}


/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
September, October or November: the season is Autumn.
December, January or February: the season is Winter.
March, April or May: the season is Spring
June, July or August: the season is Summer */

let userMonth = prompt('What month is it now?');

if (/[Ss]ep[tember]*/.test(userMonth) || /[Oo]ct[ober]*/.test(userMonth) || /[Nn]ov[ember]*/.test(userMonth)) {
    console.log('The current season in the Northern Hemisphere is fall.')
}

else if (/[Dd]ec[ember]*/.test(userMonth) || /[Jj]an[uary]*/.test(userMonth) || /[Ff]eb[ruary]*/.test(userMonth)) {
    console.log('The current season in the Northern Hemisphere is winter.')
}

else if (/[Mm]ar[ch]*/.test(userMonth) || /[Aa]pr[il]*/.test(userMonth) || /[Mm]ay/.test(userMonth)) {
    console.log('The current season in the Northern Hemisphere is spring.')
}

else if (/[Jj]un[e]*/.test(userMonth) || /[Jj]ul[y]*/.test(userMonth) || /[Aa]ug[ust]*/.test(userMonth)) {
    console.log('The current season in the Northern Hemisphere is summer.')
}

else {
    console.log('Please enter a valid month.')
}