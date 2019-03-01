/* FUNCTIONS **************************************************************************************************** */



/* Declare a function named fullName that prints out your full name. */
let firstName, middleName, lastName;

function printFullName() {
    firstName = 'Xurxe';
    middleName = 'Toivo';
    lastName = 'Garcia';
    console.log(`${firstName} ${middleName} ${lastName}`);
}

printFullName();



/* Declare a function named fullName that takes firstName and lastName as parameters, and returns your full name. */
function fullName(firstName, middleName, lastName) {
    return `${firstName} ${middleName} ${lastName}`;
}

console.log(fullName('Xurxe', 'Toivo', 'Garcia'));



/* Declare a function named addNumbers that takes two two parameters and returns their sum. */
function addTwoNumbers (numOne, numTwo) {
    return(numOne + numTwo);
}

console.log(addTwoNumbers(7, 3));



/* The area of a rectangle is calculated as follows: area = lenght x width.
Write a function that calculates areaOfRectangle. */
let height, width;

function areaOfRectangle (height, width) {
    return(height * width);
}

console.log(areaOfRectangle(2, 3));



/* The perimeter of a rectangle is calculated as follows: perimeter= 2x(lenght + width).
Write a function that calculates perimeterOfRectangle. */
function perimeterOfRectangle(height, width) {
    return(2 * (height + width));
}

console.log(perimeterOfRectangle(2, 3));



/* The volume of a rectangular prism is calculated as follows: volume = lenght x width x height.
Write a function that calculates volumeOfRectPrism. */
let depth;

function volumeOrRectPrism(height, width, depth) {
    return(height * width * depth);
}

console.log(volumeOrRectPrism(2, 3, 4));



/* The area of a circle is calculated as follows: area = π x r x r.
Write a function that calculates areaOfCircle */
let radius;

function areaOfCircle(radius) {
    return(Math.PI * radius ** 2);
}

console.log(areaOfCircle(1));


/* The circumference of a circle is calculated as follows: circumference = 2πr.
Write a function that calculates circumOfCircle */
function circumference(radius) {
    return(Math.PI * 2 * radius)
}

console.log(circumference(1));



/* The density of a substance is calculated as follows: density = mass/volume.
Write a function that calculates density. */
let mass, volume;

function density(mass, volume) {
    return(mass / volume);
}

console.log(density(6, 3));



/* The speed of a moving object is calculated by calculating the total distance covered by the object
divided by the total amount of time elapsed.
Write a function speed that calculates the speed of a moving object. */
let distance, time;

function speed(distance, time) {
    return (distance / time);
}

console.log(speed(6, 3));



/* The weight of a substance is calculated as follows: weight = mass x gravity.
Write a function that calculates weight. */
let gravity;
function weight(mass, gravity) {
    return (mass * gravity);
}

console.log(weight(6, 9.8));


/* Temperature in ºC can be converted to  ºF using this formula: ºF = (ºC x 9/5) + 32.
Write a function that converts ºC to ºF, convertCelciusToFahrenheit. */
let celsius;
function convertCtoF(celcius) {
    return(32 + celcius * 9 / 5)
}

console.log(convertCtoF(100));



/* Write a function called checkSeason. It takes a month parameter and returns the season: Autumn, Winter, Spring or Summer. */
let month;
function checkMonth(month) {
    if (/[Ss]ep[tember]*/.test(month) || /[Oo]ct[ober]*/.test(month) || /[Nn]ov[ember]*/.test(month)) {
        return season = 'fall';
    }
    
    else if (/[Dd]ec[ember]*/.test(month) || /[Jj]an[uary]*/.test(month) || /[Ff]eb[ruary]*/.test(month)) {
        return season = 'winter';
    }
    
    else if (/[Mm]ar[ch]*/.test(month) || /[Aa]pr[il]*/.test(month) || /[Mm]ay/.test(month)) {
        return season = 'spring';
    }
    
    else if (/[Jj]un[e]*/.test(month) || /[Jj]ul[y]*/.test(month) || /[Aa]ug[ust]*/.test(month)) {
        return season = 'summer';
    }
    
    else {
        return season = null;
    }
}

console.log(checkMonth('jan'));



/* A linear equation is described as follows: ax + b = c.
Write a function which calculates value of a linear equation, solvLinEquation. */

/* solve for x given parameters a, b and c: x = (b - c ) / a */
let a, b, c;

function solveLinEquation (a, b, c){
    return((b - c) / a);
}

console.log(solveLinEquation(1, 2, 3));



/* A quadratic equation is described as follows: ax2 + bx + c = 0.
Write a function that calculates the value or values of a quadratic equation, solvQuadEquation. */

/* solve for x given parameters a, b and c: x = (-b ± (b^2 - 4ac)^1/2) / 2a */
function solveQuadEquation (a, b, c) {
    var xOne = (-b + (b**2 - 4*a*c)**0.5) / 2*a;
    var xTwo = (-b - (b**2 - 4*a*c)**0.5) / 2*a;
    return [xOne, xTwo];
}

console.log(solveQuadEquation(1, 2, 1));

function printSolutionsQuadEquation (a, b, c) {
    let xOne = (-b + (b**2 - 4*a*c)**0.5) / 2*a;
    let xTwo = (-b - (b**2 - 4*a*c)**0.5) / 2*a;
    if (xOne !== xOne && xTwo !== xTwo) { /* this checks if xOne o xTwo are NaN, since NaN is the only number not equal to itself */
        console.log(`This quadratic equation has no real solutions.`)
    }

    else if (xOne === xOne && xTwo !== xTwo) { 
        console.log(`This quadratic equation has one real solution: x = ${xOne}; and one imaginary solution.`)
    }

    else if (xOne !== xOne && xTwo === xTwo) {
        console.log(`This quadratic equation has one real solution: x = ${xTwo}; and one imaginary solution.`)
    }

    else if (xOne === xTwo) {
        console.log(`This quadratic equation has two identical real solutions: x = ${xOne}.`)
    }

    else if (xOne !== xTwo) {
        console.log(`This quadratic equation has two real solutions: x = ${xOne} and x = ${xTwo}.`)
    }

    else {
        console.log('Error.')
    }
}

printSolutionsQuadEquation(2, 4, 1);



/* Declare a function named printArray. It takes array as a parameter and it prints out each value of the array. */
function printArray (array) {
    let i = 0;
    while (i < array.length) {
        console.log(array[i]);
        i++;
    }
}

var fruits = ['apple', 'banana', 'clementine'];
printArray(fruits);



/* Declare a function named reverseArray. It takes array as a parameter and it returns the reverse of the array (dont’ use a method). */
function reverseArray(array) {
    let i = array.length - 1;
    while (i >= 0) {
        console.log(array[i]);
        i--;
    }
}

reverseArray(fruits);



/* Declare a function named capitalizeArray. It takes array as a parameter and it returns the capitalized array. */ 
function capitalizeArray(array) {
    let i = 0;
    while (i < array.length) {
        console.log(array[i].toUpperCase());
        i++;
    }
}

capitalizeArray(fruits);



/* Declare a function named addItem. It returns the array after adding an item. */
function addItem(array, item) {
    array.push(item);
    console.log(array);
}

addItem(fruits, 'durian');



/* Declare a function named removeItem. It returns array after removing an item */
function removeItem(array) {
    array.splice(Math.floor(Math.random()*array.length), 1);
    console.log(array);
}

fruits = ['apple', 'banana', 'clementine', 'durian', 'elderberry', 'fig', 'grapes', 'honeydew']
removeItem(fruits);



/* Declare a function named sumOfNumbers. It takes a number parameter and it adds all the numbers in that range. */

/* renamed function as sumNumbers (verb) and variable as sumOfNumbers (noun) */
function sumNumbers(numOne, numTwo) {
    let sumOfNumbers = 0;

    for (let i = numOne; i <= numTwo; i++) {
        sumOfNumbers += i;
    }
    console.log(sumOfNumbers);
}

sumNumbers(1, 4);



/* Declare a function named sumOfOdds. It takes a number parameter and it adds all the odd numbers in that range. */

/* renamed function as sumOdds (verb) and variable as sumOfOdds (noun) */
function sumOdds(numOne, numTwo) {
    let sumOfOdds = 0;

    if (numOne % 2 === 1) {
        for (let i = numOne; i <=numTwo; i += 2) {
            sumOfOdds += i;
        }
    }

    else {
        for (var i = numOne + 1; i <= numTwo; i += 2) {
            sumOfOdds += i;
        }
    }
    return sumOfOdds;
}

console.log(sumOdds (1, 4));



/* Declare a function named sumOfEven. It takes a number parameter and it adds all the even numbers in that range. */
/* renamed function as sumEvens (verb) and variable as sumOfEvens (noun) */
function sumEvens(numOne, numTwo) {
    let sumOfEvens = 0;

    if (numOne % 2 === 0) {
        for (let i = numOne; i <=numTwo; i += 2) {
            sumOfEvens += i;
        }
    }

    else {
        for (let i = numOne + 1; i <= numTwo; i += 2) {
            sumOfEvens += i;
        }
    }
    console.log(sumOfEvens);
}

sumEvens(1, 4);



/* Declare a function named evensAndOdds.
It takes a number parameter and it counts number of evens and odds in the number. */
function evensAndOdds(number) {

    if (Math.abs(number) > 3) {
        if (number % 2 === 0) {
            console.log(`There are ${Math.abs(number) / 2} odd numbers and ${Math.abs(number) / 2} even numbers between 0 and ${number} (both included).`)
        }
    
        else {
            console.log(`There are ${(Math.abs(number) + 1) / 2} odd numbers and ${(Math.abs(number) - 1) / 2} even numbers between 0 and ${number} (both included).`)
        }
    }

    else {
        if (number % 2 === 0) {
            console.log(`There is 1 odd number and 1 even number between 0 and ${number} (both included).`)
        }
    
        else {
            console.log(`There are ${(Math.abs(number) + 1) / 2} odd numbers and 1 even number between 0 and ${number} (both included).`)
        }
    }
}

evensAndOdds(-4);



/* Write a function that takes any number of arguments and returns the sum of the arguments */
function sumAnyNumbers() {
    let sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumAnyNumbers(2, 3, 4));



/* Declare a function named randomHexaNumberGenerator.
When this function is called it generates and returns a random hexadecimal number.
output:
console.log(randomHexaNumberGenerator());
 '#ee33df'
console.log(randomHexaNumberGenerator());
'#28def10'
console.log(randomHexaNumberGenerator());
'#38eeda' */

function randomHexNumberGenerator() {
    randomHex = '#' + Math.random().toString(16).substr(2, 6).toUpperCase();
    return randomHex;
}

console.log(randomHexNumberGenerator());



/* Declare a function named userIdGenerator.
When this function is called it generates and returns a seven-character id.
Output:
console.log(userIdGenerator());
41XTDbE */

let charset = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function userIdGenerator(){
    let userIdArray = [];
    for (i = 0; i < 8; i++) {
        let index = Math.floor(Math.random() * charset.length);
        userIdArray.push(charset[index]);
    }
    let userId = userIdArray.join('');
    return userId;
}

console.log(userIdGenerator());



/* Modify your answer to the previous section. Declare a function name userIdGeneratedByUser.
It doesn’t take any parameter but it takes two inputs using prompt().
One of the input is the number of characters
and the second input is the number of ids which are supposed to be generated. 

userIdGeneratedByUser()
"kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
"
userIdGeneratedByUser()
"3RexwUqvqe
rVUY6dC1il
YCf88ZHuAf
7JhI6Mn063
mo3GYyH26O
"
userIdGeneratedByUser()
"1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
" */

let idLength = prompt('How many characters long should your ID be?');
let idAmount = prompt('How many IDs do you want to generate?');

function userIdGeneratedByUser(){
    let userIdArray = [];
    for (i = 0; i < idLength; i++) {
        let index = Math.floor(Math.random() * charset.length);
        userIdArray.push(charset[index]);
    }
    let userId = userIdArray.join('');
    return userId;
}

function userIdsGeneratedByUser() {
    let userIdsArray = [];
    for (let j = 0; j < idAmount; j++) {
        userIdsArray.push(userIdGeneratedByUser());
    }
    return userIdsArray;
}

console.log(userIdsGeneratedByUser());



/* Write a function named rgbColorGenerator and it generates rgb colors.
Output:
rgb(125,244,255) */
function rgbValue() { 
    return Math.floor(Math.random() * 256);
}

function rgbColorGenerator() {
    return 'rgb(' + rgbValue() + ', ' + rgbValue() + ', ' + rgbValue() + ')';
}

console.log(rgbColorGenerator());



/* Write a function named displayDateTime that display the date in this format: 28/08/2018 04:08 */
function displayDateTime(day, month, year, hour, minute) {
    day = "00" + day;
    day = day.substr(-2); /* this ensures that leading zeroes are not removed */
    month = "00" + month;
    month = month.substr(-2);
    year = "0000" + year;
    year = year.substr(-4);
    hour = "00" + hour;
    hour = hour.substr(-2);
    minute = "00" + minute;
    minute = minute.substr(-2);
    console.log(`${day}/${month}/${year} ${hour}:${minute}`)
}

displayDateTime(18, 1, 1990, 18, 00);



/* Use the new Date() object to get month, date, year, hour and minute. Output:
28/08/2018 04:08 */

function displayCurrentDateTime() {
    var currentDate = new Date();
    day = "00" + currentDate.getDate();
    day = day.substr(-2);
    month = "00" + currentDate.getMonth();
    month = month.substr(-2);
    year = "0000" + currentDate.getFullYear();
    year = year.substr(-4);
    hour = "00" + currentDate.getHours();
    hour = hour.substr(-2);
    minute = "00" + currentDate.getMinutes();
    minute = minute.substr(-2);
    console.log(`${day}/${month}/${year} ${hour}:${minute}`)
}

displayCurrentDateTime();



/* Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var fruits = ['apple', 'banana', 'clementine', 'durian', 'elderberry', 'fig', 'grapes', 'honeydew']
shuffleArray(fruits);
console.log(fruits);



/* Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number */
function factorial(number) {
    let factor = 1;

    for (var i = number; i > 0; i--) {
        factor *= i;
    }
    return factor;
}

console.log(factorial(5));



/* Call your function isEmpty, it takes a parameter and it checks if it is empty or not. */
function isEmpty(value) {
    if (value === undefined || value === null) {
        return true;
    }

    else {
        return false;
    }
}

console.log(isEmpty());



/* Call your function sum, it takes any number of arguments and it returns the sum. */
function sumNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumNumbers(2, 3, 4));



/* Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items.
Check if all the array items are number types. If not give return reasonable feedback. */
function sumOfArrayItems (array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            console.log("Your array can only contain number values.");
            return sum = null;
        }

        else {
            sum += array[i];
        }
    }
    console.log(`The sum of the items in your array is ${sum}.`)
    return sum;
}

numberArray = [1, 2, 3, 4, 5, 6];
sumOfArrayItems(numberArray);



/* Write a function called average, it takes an array parameter and returns the average the items.
Check if all the array items are number types. If not give return reasonable feedback. */
function meanOfArrayItems (array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            console.log("Your array can only contain number values.");
            return mean = null;
        }

        else {
            sum += array[i];
        }
    }
    console.log(`The mean of the items in your array is ${sum / array.length}.`);
    return mean = sum / array.length;
}

numberArray = [1, 2, 3, 4, 5, 'cat'];
meanOfArrayItems(numberArray);



/* Write a function called modifyArray takes array as parameter,
modifies the fifth item of the array and returns the array.
If the array length is less than five it return ‘item not found’. */

/* console.log(modifyArray(["Avocado", "Tomato", "Potato","Mango", "Lemon","Carrot"]);
// →["Avocado", "Tomato", "Potato","Mango", "LEMON", "Carrot"]
console.log(modifyArray(["Google", "Facebook","Apple", "Amazon","Microsoft",  "IBM"]);
// →["Google", "Facebook","Apple", "Amazon","MICROSOFT",  "IBM"]
console.log(modifyArray(["Google", "Facebook","Apple", "Amazon"]);
// →"Not Found" */
function modifyArray (array) {
    if (array.length >= 5) {
        array[4] = array[4].toUpperCase();
        return array;
    }

    else {
        return 'Item not found';
    }
}

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'IBM', 'Apple', 'Oracle', 'Amazon'];

console.log(modifyArray(itCompanies));