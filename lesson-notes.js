/* MONDAY 18.FEB.2019 ****************************************************************************************** */



/*  write on the document */
document.write('Let us learn some JavaScript');

/* write on the console */
console.log ('I am running on the console');



/* PRIMITIVE DATA TYPES: **************************************************************************************** */

/*
- undefined: a variable that has been declared but not assigned a value.
- string: textual data
- number: number data (including Infinity and NaN)
- boolean: true or false
- null: a single null value (not in an array, etc)
- symbol: (not sure what this means yet, seems complicated)


FALSY AND TRUTHY
In addition to having a data type, every value has an inherent boolean value.

FALSY values:
- false (boolean)
- 0 (number)
- '' or "" (empty string)
- null
- undefined
- NaN

Everything else is TRUTHY, including:
- '0' (string)
- 'false' (string)
- [] (empty array)
- {} (empty object)
- function(){} ("empty" function)
*/



/* STRING VARIABLES ********************************************************************************************* */

/* declare some string variables */
var firstName = 'Xurxe Toivo';
var lastName = 'Garcia';



/* concatenate string variables */
var fullName = firstName + ' ' + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);



/* concatenate string and number variables */
var age = 29;
var country = 'Galicia';
var personalInfo = 'My name is ' + fullName + '. I am ' + age + 'and I am from ' + country + '.'
console.log(personalInfo);



/* or, using string interpolation... */
var personalInfo = `My name is ${fullName}. I am ${age} years old and I am from ${country}.`;
console.log (personalInfo);



/* NUMBER VARIABLES ********************************************************************************************* */



/* declare number variables */
var numOne = 10;
var numTwo = 20;



/* use arithmetic operations */
var addition = numOne + numTwo; /* returns: 30 */
var subtraction = numOne - numTwo /* returns: -10 */
var multiplication= numOne * numTwo /* returns: 200 */
var division = numOne / numTwo /* returns: 0.5 */
var remainder = numOne % numTwo; /* returns: 10 */
var exponentation = numOne ** numTwo /* returns: 10^20 */
var increment = numOne++ /* returns: 11 */
var decrement = numOne-- /* returns: 9 */
var unaryNegation = -numOne /* returns: -10 */
var unaryPlus = -'3' /* returns: 3 as a number variable */



/* BOOLEAN VARIABLES ******************************************************************************************** */



/* declare boolean variable */
var isRaining = true;



/* use if/else statements */
if (isRaining === true) {
    console.log ('It is raining. You need a raincoat.');  
}

else {
    console.log ('It is not raining. No need for a raincoat.');
}



/* if you only have one line of code, you can write it without braces (but it's not recommended) */
if (isRaining === true) console.log ('It is raining. You need a raincoat.');  

else console.log ('It is not raining. No need for a raincoat.');



/* use if/elseif/else statements */
var weather = 'rainy';

if (weather === 'rainy') {
    console.log ('It is raining. Bring a raincoat.');
}

else if (weather === 'cloudy') {
    console.log ('It might be cold. Bring a jacket.');
}  

else if (weather === 'sunny') {
    console.log ('It is sunny. No need for a raincoat.');
}  

else {
    console.log ('I have not seen the outside world in 20 years.');
}


/* use a switch statement */
switch (weather) {
    case 'rainy':
    console.log ('It is raining. Bring a raincoat.');
    break;

    case 'cloudy':
    console.log ('It might be cold. Bring a jacket.');
    break;

    case 'sunny':
    console.log ('It is sunny. No need for a raincoat.');
    break;

    default:
    console.log ('I have not seen the outside world in 20 years.');
    break;
}



/* use comparison operators */
var x;

if (x == 5) {
    console.log('That is either a number or a string that equals 5.');
}

else if (x === 5) {
    console.log('That is definitely a number that equals 5.');
}

else if (x != 5) {
    console.log('That is either a number that does not equal 5, or literally anything else.');
}

else if (x !== 5) {
    console.log('That is a number that is not 5, or 5 as a string, or literally anything else.')
}

else if (x < 5) {
    console.log('That is a number less than 5.')
}

else if (x <= 5) {
    console.log('That is a number less than or equal to 5.')
}

else if (x > 5) {
    console.log('That is a number more than 5.')
}

else if (x >= 5) {
    console.log('That is a number more than or equal to 5.')
}

else {
    console.log('Boo.')
}



/* define some variables to use with logical operators */
var a = 2;
var b = 3;
var c = 4;
var d = 'cat';



/*
logical AND looks for the first FALSY value, or the last value if no falsy values were found:
- evaluates operads from left to right.
- converts first operand into a boolean.
    · if the result if false, it stops and returns the original value of that operand.
    · if the result is true, it moves on to the next operand.
- if no falsy values are found, it returns the original value of the last operand.
*/
var logicalAND = (a > 1) && (b > 1) && (c > 1); /* finds no falsy values, returns last value (true) */
var logicalAND = (a > 1) && (b > 1) && d; /* finds no falsy values, returns last value ('cat') */
var logicalAND = (a > 2) && (b > 2) && (c > 2); /* finds a falsy value, returns that one (false) */



/* 
logical OR looks looks for the first TRUTHY value, or the last value if no truthy values were found:
- evaluates operands from left to right.
- converts first operand info a boolean.
    · if the result is true, it stops and returns the original value of tha operand.
    · of the result is false, it moves on to the next operand.
- if no truthy values are found, it returns the original value of the last operand.
*/
var logicalAND = (a > 5) || (b > 5) || (c > 5); /* finds no truthy values, returns last value (false) */
var logicalAND = (a > 5) || (b > 5) || undefined; /* finds no truthy values, returns last value (undefined) */
var logicalAND = d || (a > 1) || (b > 1); /* finds a truthy value, returns that value ('Cat') */



/* logical NOT converts ONE value to a boolean, and returns the opposite of that boolean. */
var logicalNOT = !true; /* returns false */
var logicalNOT = !false; 
var logicalNOT = !0; /* 0 is falsy, so it returns true */
var logicalNOT = !'cat'; /* 'cat' is truthy, so it returns false */



/* LOOPS ******************************************************************************************************** */

/* BRÖTHER MÅY I HAV SOME LÖÖPS */

/* loops are used to execute a block of code a number of times */



/* FOR-LOOP

for (initialization; condition; change) { block } 
- initialization: executed one time before the execution of the block
- condition: defines a condition for executing the block (i.e. the code is only executed if the condition is met)
- change: changes the initialization value in some way
*/



/* print the numbers from 1 to 10 */
for (var i = 1; i <= 10; i++) {
    console.log (i);
}



/* print the numbers from 0 to 100 in incremets of ten */
for (var i = 0; i <= 100; i = i + 10) {
    console.log (i);
}



/* print the squares of the numbers from 1-10 */
for (var i = 1; i <= 10; i++) {
    console.log (i * i)
}



/* print the 1 multiplication table */
for (var i = 1; i <=10; i++) {
console.log(`${i}x${i}=${i * i}`);
}



/* 
WHILE-LOOP

initialization;
while (condition) {
    block;
    change;
}

like the for-loop, but written differently. 
*/



/* print the numbers from 1 to 10 */
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}



/* print the numbers from 0 to 100 in incremets of ten */
var i = 0;
while (i <= 100) {
    console.log(i);
    i = i + 10;
}



/* 
DO-LOOP

initialization;
do {
    block;
    change;
}
while (condition);

Unlike the for- and while-loops, the do loop runs at least once, regardless of whether the condition is met.
*/

/* print the numbers from 1 to 10 */
var i = 1; 
do {
console.log(i);
i++
} while (i <= 10);



/* FUNCTIONS **************************************************************************************************** */

/* A function is a block of code designed to perform a particular task */



/* define a function */
function printFullName() {
var firstName = 'Xurxe Toivo';
var lastName = 'Garcia';
console.log(`${firstName} ${lastName}`);
}

printFullName();



/* parameterize a function */
function pringFullName(firstName, lastName) {
console.log(`${firstName} ${lastName}`);
}

printFullName('Xurxe Toivo', 'Garcia');



/* we've been using the console.log statement so we can see what we're doing.
BUT! Normally we use the return statement, which does two things:
- stop the execution of the function
- return the value to the function caller
*/



/* define a function that takes parameters, and then returns the result to a variable */
function returnFullName(firstName, lastName) {
return(`${firstName} ${lastName}`);
}
var fullName = returnFullName('Xurxe Toivo', 'Garcia');


function returnSquare(number) {
return number * number;
}
var squared = returnSquare(10);

function multiplyThreeNumbers(numOne, numTwo, numThree) {
return numOne * numTwo * numThree;
}
multiplyThreeNumbers(7, 4, 2);



/* ARRAYS ******************************************************************************************************* */

/* An array is a special type of variable that can hold more than one value at the same time. */
var shoppingCart = ["clementines", "broccoli", "chocolate"]
console.log(shoppingCart);



/* We can access individual items in an array by their index numbers, which start from 0 */
console.log(shoppingCart[0]); /* clementines */
console.log(shoppingCart[1]); /* broccoli */
console.log(shoppingCart[2]); /* chocolate */
console.log(`I went to the store and bought ${shoppingCart[0]}, ${shoppingCart[1]}, and ${shoppingCart[2]}.`);



/* The length is the number of items in an array */
console.log(shoppingCart.length);



/*  We can use the length in a loop.
IMPORTANT: the length in shoppingCart is 3, but the last item has an index number of 2
(because index numbers start at 0). So make sure your loop uses <, not <=
*/
var i = 0;
while (i < 3) {
console.log(shoppingCart[i]);
i++;
}



/* or, more generally: */
var i = 0;
while (i < shoppingCart.length) {
console.log(shoppingCart[i]);
i++;
}



/* we can use a loop to sum all the numbers in an array */
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
sum = sum + numbers[i];
console.log(sum);
}



/* by the way, strings have lengths too */
console.log(firstName.length);



/* STRING METHODS: ********************************************************************************************** */
/* here's a few just to get us started */



/* toUpperCase() converts to upper case and returns it */
var name = 'Xurxe';
var upperCaseName = name.toUpperCase();
console.log(upperCaseName); /* XURXE */



/* toLowerCase() converts to lower case and returns it*/
var lowerCaseName = name.toLowerCase();
console.log(lowerCaseName); /* xurxe */



/* slice() extracts a part of a string and returns a new string */
var firstLetter = name.slice(0, 1); /* this goes up to index 1, without including it, which means that it only takes index 0*/
var remainingLetters = name.slice(1, name.length); /* from 1 to the length */
var remaininLetters = name.slice(1); /* from 1 until the end; so same as the line before, but less writing */
var capitalizedName = firstLetter.toUpperCase() + remainingLetters.toLowerCase();
console.log(capitalizedName);



/* split() separates a string into an array of strings */
var school = 'Integrify Academy';
var splitSchool = school.split(' '); /* this splits into words*/
console.log(splitSchool);

var spelledSchool = school.split(''); /* this splits into letters */
console.log(spelledSchool);



/* indexOf() returns the position of the first occurence of the specified value in a string:
- it is case-sensitive
- if the value is a string of more than one character, then it tells the starting position
- if the value is not found, it returns -1 */
var schoolA = school.indexOf('A'); 
console.log(schoolA);

var schoola = school.indexOf('a');
console.log(schoola);

var schoolAc = school.indexOf('Ac'); 
console.log(schoolAc);

var schoolZ = school.indexOf('Z');
console.log(schoolZ);



/* lastIndexOf() returns the position of the last occurence of the specified value in a string:
- it is case-sensitive
- if the value is a string of more than one character, then it tells the starting position
- if the value is not found, it returns -1 */
var schoola = school.indexOf('a');
console.log(schoola);

var schoolZ = school.indexOf('Z');
console.log(schoolZ);



/* includes() checks whether a string contains the specified value, and returns a boolean:
- it is case-sensitive */
var schoolY = school.includes('Y');
console.log(schoolY);

var schoolZ = school.includes('Z');
console.log(schoolZ);



/* startsWith() checks whether a string starts with the specified value, and returns a boolean:
- it is case-sensitive */
var schoolIntegrify = school.startsWith('Integrify');
console.log(schoolIntegrify);

var schoolAcademy = school.startsWith('Academy');
console.log(schoolAcademy);









/* MONDAY 25.FEB.2019 ****************************************************************************************** */



/* Math methods ************************************************************************ */

var PI = Math.PI; // customary to use capitals for constants
console.log(PI);
console.log(Math.round(PI)); // round closest
console.log(Math.floor(PI)); // round up
console.log(Math.ceil(PI)); // round down
console.log(Math.sqrt(PI)); // square root
console.log(Math.abs(-PI)); // absolute

function areaOfCircle(radius) {
    var area = Math.PI * radius ** 2 // PI * r^2
    return area; 
}

console.log(areaOfCircle(10));
console.log(areaOfCircle(10).toFixed(2)); // returns result as a string, with two decimal figures
console.log(Number(areaOfCircle(10).toFixed(2))) // same as previous, but changes back into a number

console.log(Math.random()); // returns a random decimal number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()*11); // returns a random decimal number between 0 (inc) and 11 (exc)
console.log(Math.floor(Math.random()*11)); // returns a random integer between 9 (inc) and 11 (exc). So, from 1 to 10.

function rgbColorGenerator() {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}

 console.log(rgbColorGenerator());



/* Scope ******************************************************************************* */

function varTest() {
    var x = 1;
    console.log(x);
    if (true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}
varTest();

function letTest() {
    let x = 1;
    console.log(x);
    if (true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

letTest();

for(var i = 0; i < 6; i++) {
    console.log(i);
}

console.log(i); // this returns 6, because var has a global scope

for(let j = 0; j < 6; j++) {
    console.log(j);
}

/* console.log(j); // this returns undefined, because let has a local scope */

/* impure function: one that uses global variables declared outside itself */
/* pure function: one that uses only local variables declared inside itself */

const GRAVITY = 9.8;
/* GRAVITY = 10; */ // it doesn't let you do this, because you can't reassign a constant
console.log(GRAVITY); 

const order = [1, 2, 3, 4, 5];
var countries = ['Albania', 'Bolivia', 'Canada'];
countries.push('Denmark'); /* you can, however, push items to a constant array */
console.log(countries);



/* Array methods ************************************************************************ */

function zeroToTen() {
    var array = [];
    for (let i = 0; i < 10; i++) {
        array.push(i);
    }
    return array;
}

console.log(zeroToTen());


function randomArray() {
    var array = [];
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random()*11);
        array.push(randomNumber);
    }
    return array;
}

console.log(randomArray());


var countries = ['Albania', 'Bolivia', 'Canada'];

countries.push('Denmark'); // adds at the end
console.log(countries);

countries.pop(); // removes one from the end
console.log(countries);

countries.unshift('Denmark'); // adds in the beginning
console.log(countries);

countries.shift(); // removes one from the beginning
console.log(countries);



/* Functions ***************************************************************************** */

function nameOfFunction() {
    console.log('I am a function.')
}
nameOfFunction();



/* declaration function */
function square (n) {
    return n ** 2;
}
console.log(square(10));



/* expression function or anonymous function */
const squareOne = function (n) {
    return n ** 2;
}
console.log(squareOne(10));



/* Arrow function */
const squareTwo = (n) => {
    return n ** 2;
}
console.log(squareTwo(10));

const squareThree = (n) => n ** 2;
console.log(squareThree(10));



/* Objects ****************************************************************************** */

const person = {
    firstName: 'Xurxe',
    lastName: 'Garcia',
    age: 29,
    job: 'Junior web developer',
    skills: ['HTML', 'CSS', 'JavaScript'],
    isMarried: false,
    getPersonName() {
        return this.firstName + ' ' + this.lastName;
    },

    getPersonIntro() {
        return `My name is ${this.firstName} ${this.lastName}. I am a ${this.job}.`
    }
};

console.log(person);
console.log(person.getPersonName());
console.log(person.getPersonIntro());

const rectangle = {
    width: 100,
    height: 200,
    getAreaOfRectangle() {
        return this.width * this.height;
    },
    getPerimeterOfRectangle() {
        return (this.width + this.height) * 2; 
    }
}

console.log(rectangle);
console.log(rectangle.getAreaOfRectangle());
console.log(rectangle.getPerimeterOfRectangle());






/* TUESDAY 05.MAR.2019 ****************************************************************************************** */
/* More about loops and array methods: */



/* LOOP BREAK ************************************************************* */
/* The break statement stops the execution of a loop when a condition is met. */

for (let i = 0; i < 6; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}



/* LOOP CONTINUE ************************************************************* */
/* The continue statement skips over an iteration of a loop when a condition is met. */
for (let i = 0; i < 6; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}



/* FOR-IN LOOPS ******************************************************************** */
/* Loops through the properties of an object, executing a block of code once for each of them. */

const person1 = {
    name: 'Pekka',
    age: 200,
    country: 'Finland',
};

for (let key in person1) {
    console.log(key);
}



const names = ['Hari', 'Koray', 'Alba'];

for (let i in names) {
    console.log(names[i]);
}



/* FOR-OF LOOPS ******************************************************************** */
/* Loops through iterable objects, such as string, array, map, set, etc */

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

for (let num of nums) {
    if (num % 2 === 0) {
        console.log(num);
    }
}



/* FOREACH() METHOD ******************************************************************** */
/* Executes a provided function once for each array element. */

names.forEach(function(name) {
    console.log(name);
});



names.forEach(function(name, i) {
    console.log(i + 1, name.toUpperCase());
});



names.forEach((name, i) => console.log(i + 1, name.toUpperCase()));


/* MAP() METHOD ******************************************************************** */
/* Executes a provided function once for each array element, and returns results in new array */
const newNames1 = names.map(function(name) {
    return name.toUpperCase();
});

console.log(newNames1);



const newNames2 = names.map(function(name) {
    if (name === 'Koray') {
        return name;
    }
    return name.toUpperCase();
});

console.log(newNames2);



const numSquare = nums.map(function(num){
    return num * num;
} );

console.log(numSquare);



/* FILTER() METHOD ******************************************************************** */
/* Check if each array element passes a test (provided as a function), and returns the items that passed the test in a new array */

const numsOverTwo = nums.filter(function(num) {
    return num > 2;
});

console.log(numsOverTwo);



const countries1 = ['Finland', 'Sweden', 'Iceland', 'Norway', 'Scotland', 'Netherlands'];



const countryContainsLand = countries1.filter(function(country) {
    return country.includes('land');
});

console.log(countryContainsLand);



const countryContainsLand2 = countries1.filter(country => country.includes('land'));

console.log(countryContainsLand2);



const countryHasSixLetters = countries1.filter(function(country) {
    return country.length === 6;
});

console.log(countryHasSixLetters);



const countryHasSixLetters2 = countries1.filter(country => country.length === 6);

console.log(countryHasSixLetters2);








