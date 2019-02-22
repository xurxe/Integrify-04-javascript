/* FUNCTIONS **************************************************************************************************** */



/* Declare a function named fullName that prints out your full name. */
function printFullName() {
    var firstName = 'Xurxe';
    var middleName = 'Toivo';
    var lastName = 'Garcia';
    console.log(`${firstName} ${middleName} ${lastName}`);
}

printFullName();



/* Declare a function named fullName that takes firstName and lastName as parameters, and returns your full name. */
function fullName(firstName, middleName, lastName) {
    return `${firstName} ${middleName} ${lastName}`;
}

console.log(fullName('Xurxe', 'Toivo', 'Garcia'));



/* Declare a function named addNumbers that takes two two parameters and returns sum. */
function addNumbers (numOne, numTwo) {
    return(numOne + numTwo);
}

console.log(addNumbers(7, 3));



/* The area of a rectangle is calculated as follows: area = lenght x width.
Write a function that calculates areaOfRectangle. */
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
function volumeOrRectPrism(height, width, depth) {
    return(height * width * depth);
}

console.log(volumeOrRectPrism(2, 3, 4));



/* The rea of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle */
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



/* The density of a substance is calculated as follows:density= mass/volume.
Write a function that calculates density. */
function density(mass, volume) {
    return(mass / volume);
}

console.log(density(6, 3));



/* Speed is calculated by dividing the total distance covered by a moving object
divided by the total amount of time taken.
Write a function speed that calculates the speed of a moving object. */
function speed(distance, time) {
    return (distance / time);
}

console.log(speed(6, 3));



/* The weight of a substance is calculated as follows: weight = mass x gravity.
Write a function that calculates weight. */
function weight(mass, gravity) {
    return (mass * gravity);
}

console.log(weight(6, 9));


/* Temperature in ºC can be converted to  ºF using this formula: ºF = (ºC x 9/5) + 32.
Write a function that converts ºC to ºF, convertCelciusToFahrenheit. */
function convertCtoF(celcius) {
    return(32 + celcius * 9 / 5)
}

console.log(convertCtoF(100));



/* A linear equation is described as follows: ax + b = c.
Write a function which calculates value of a linear equation, solvLinEquation. */

/* solve for x given parameters a, b and c: x = (b - c ) / a */

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
    var xOne = (-b + (b**2 - 4*a*c)**0.5) / 2*a;
    var xTwo = (-b - (b**2 - 4*a*c)**0.5) / 2*a;
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
    var i = 0;
    while (i < array.length) {
        console.log(array[i]);
        i++;
    }
}

var fruits = ['apple', 'banana', 'clementine'];
printArray(fruits);



/* Declare a function named reverseArray. It takes array as a parameter and it returns the reverse of the array (dont’ use a method). */
function reverseArray(array) {
    var i = array.length - 1;
    while (i >= 0) {
        console.log(array[i]);
        i--;
    }
}

reverseArray(fruits);



/* Declare a function named capitalizeArray. It takes array as a parameter and it returns the capitalized array. */ 
function capitalizeArray(array) {
    var i = 0;
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
    array.splice(Math.random(0, array.length), 1);
    console.log(array);
}

removeItem(fruits);



/* Declare a function named sumOfNumbers. It takes a number parameter and it adds all the numbers in that range. */
/* renamed function as sumNumbers (verb) and variable as sumOfNumbers (noun) */
var sumOfNumbers = 0;
function sumNumbers(numOne, numTwo) {
    for (var i = numOne; i <= numTwo; i++) {
        sumOfNumbers += i;
    }
    console.log(sumOfNumbers);
}

sumNumbers(1, 4);



/* Declare a function named sumOfOdds. It takes a number parameter and it adds all the odd numbers in that range. */
/* renamed function as sumOdds (verb) and variable as sumOfOdds (noun) */
var sumOfOdds = 0;
function sumOdds(numOne, numTwo) {
    if (numOne % 2 === 1) {
        for (var i = numOne; i <=numTwo; i += 2) {
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
var sumEvens = 0;
function sumOfEvens(numOne, numTwo) {
    if (numOne % 2 === 0) {
        for (var i = numOne; i <=numTwo; i += 2) {
            sumEvens += i;
        }
    }

    else {
        for (var i = numOne + 1; i <= numTwo; i += 2) {
            sumEvens += i;
        }
    }
    console.log(sumEvens);
}

sumOfEvens(1, 4);



/* Declare a function named evensAndOdds. It takes a number parameter and it counts number of evens and odds in the number. */

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
var sum = 0;
function sumAnyNumbers() {
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
    return '#' + Math.random().toString(16).substr(2, 6).toUpperCase();
}

console.log(randomHexNumberGenerator());



/* Declare a function named userIdGenerator.
When this function is called it generates and returns a seven-character id.
Output:
console.log(userIdGenerator());
41XTDbE */

var charset = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

function userIdGenerator(){
    var userIdArray = [];
    for (var i = 0; i < 7; i++) {
        var index = Math.floor(Math.random() * charset.length);
        userIdArray.push(charset[index]);
    }
    var userId = userIdArray.join('');
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

var idLength = prompt('How many characters long should your ID be?');
var idAmount = prompt('How many IDs do you want to generate?');

function userIdGenerator(){
    var userIdArray = [];
    for (var i = 0; i < idLength; i++) {
        var index = Math.floor(Math.random() * charset.length);
        userIdArray.push(charset[index]);
    }
    var userId = userIdArray.join('');
    return userId;
}

function userIdsGeneratedByUser() {
    var userIdsArray = [];
    for (var j = 0; j < idAmount; j++) {
        userIdsArray.push(userIdGenerator());
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
    day = day.substr(-2);
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




