/* 1. Variables ************************************************************************************************* */

/* 1a. Declare variables to store your first name, last name,  marital status, country and age in multiple lines */
var firstName = 'Xurxe Toivo';
var lastName = 'Garcia';
var maritalStatus = 'solo';
var nation = 'Galicia';
var age = 29;



/* 1b. Declare variables to store your first name, last name,  marital status, country and age in a single line */
var firstName = 'Xurxe Toivo', lastName = 'Garcia', maritalStatus = 'solo', nation = 'Galicia', age = 29;



/* 1c. Declare two variables myAge and yourAge and assign them initial values and log to browser console. */
var myAge = 29, yourAge = 30;
console.log(`I am ${myAge} years old and you are ${yourAge} years old.`)



/* 2. Data types ************************************************************************************************ */

/* 2a. String, number, boolean, null, undefined and symbol(ES6) are JavaScript primitive data types.
The JavaScript typeof operator uses to check different data types.
Check the data type of each variable from question number 1. */

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof maritalStatus);
console.log(typeof nation);
console.log(typeof age);
console.log(typeof myAge);
console.log(typeof yourAge);



/* 3. Strings *************************************************************************************************** */

/* Declare a variable name company and assign it to an initial value “Integrify Academy”. */
var company = 'Integrify Academy';



/* 3a. Print the string  on the browser console using console.log() */
console.log(company);



/* 3b. Print the length of the string  on the browser console using console.log() */
console.log(company.length);



/* 3c. Change all the string to capital letters using toUpperCase() method */
upperCaseCompany = company.toUpperCase();
console.log(upperCaseCompany);



/* 3d. Change all the string to small letters using toLowerCase() method */
lowerCaseCompany = company.toLowerCase();
console.log(lowerCaseCompany);



/* 3e. Cut(slice) out the first word of the string using slice, substr() or substring() method */
slicedCompany = company.slice(0, 10);
console.log(slicedCompany);

substrCompany = company.substr(0, 9);
console.log(substrCompany);

substringCompany = company.substring(0, 10);
console.log(substringCompany);



/* 3f. Check if the string contains the word Academy using includes() method */
includesAcademy = company.includes('Academy');
console.log(includesAcademy);



/* 3g. Split the string into array using split() method */
splitCompany = company.split();
console.log(splitCompany);



/* 3h. Split the string Integrify Academy at the space using split() method */
splitSpaceCompany = company.split(' ');
console.log(splitSpaceCompany);



/* 3i. “Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon” split at the string at the comma  and change it to an array. */
var companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
splitCompanies = companies.split(', ');
console.log(splitCompanies);



/* 3j. Change Integrify Academy  to Microsoft Academy using replace() method. */
replacedCompany = company.replace('Integrify', 'Microsoft');
console.log(replacedCompany);



/* 3k. What is the character at index 10  in ‘Integrify Academy’ string? User charAt() */
tenCompany = company.charAt(10);
console.log(tenCompany);



/* 3l. What is the character code of A in ‘Integrify Academy’ string using charCodeAt() */
tenCodeCompany = company.charCodeAt(10);
console.log(tenCodeCompany);



/* 3m. Use indexOf to determine the position of the first occurrence of e in Integrify Academy */
indexOfeCompany = company.indexOf('e');
console.log(indexOfeCompany);



/* 3n. Use lastIndexOf to determine the position of the last occurrence of e in Integrify Academy */
lastIndexOfeCompany = company.lastIndexOf('e');
console.log(lastIndexOfeCompany);



/* 3o. Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g “  Integrify Academy   ”.  */
untrimmedCompany = '  Integrify Academy   '
trimmedCompany = untrimmedCompany.trim();
console.log(trimmedCompany);



/* 3p. Use startsWith() method with the string Integrify Academy and make the result true */
startsWithICompany = company.startsWith('I');
console.log(startsWithICompany);



/* 3q. Use endsWith() method with the string Integrify Academy make the result true */
endsWithyCompany = company.endsWith('y');
console.log(endsWithyCompany);



/* 3r. Use  match() method to find all the a’s in Integrify Academy */
matchaCompany = company.match(/a/g); /* case-sensitive */
console.log(matchaCompany);

matchAaCompany = company.match(/a/ig); /* case-insensitive */
console.log(matchAaCompany);



/* 3s. Use concat() and merge ‘Integrify’ and ‘Academy’ to a single string, ‘Integrify Academy’ */
concatCompany = 'Integrify'.concat(' ', 'Academy');
console.log(concatCompany);



/* 3t. Use repeat() method to print Integrify Academy 5 times */
repeatedFiveCompany = 'Integrify Academy '.repeat(5);
console.log(repeatedFiveCompany);



/* 4. Booleans ************************************************************************************************** */
/* A Boolean value is either true or false.  */



/* 4a. Write three JavaScript statements that provide a truthy value. */
var happy = true;
var animal = 'cat';
var age = 29;



/* 4b. Write three JavaScript statements that provide a falsy value. */
var happy = false;
var animal = null;
var age = NaN;



/* 5. Arithmetic Operators ************************************************************************************** */
/* JavaScript arithmetic operators are:
addition(+), subtraction(-), multiplication(*), division(/), modulus(%), increment(++) and decrement(--). */
let operandOne = 4;
let operandTwo = 3;

/* Using the above operands apply different JavaScript arithmetic operators. */
var added = operandOne + operandTwo;
console.log(added);

var subtracted = operandOne - operandTwo;
console.log(subtracted);

var multiplied = operandOne * operandTwo;
console.log(multiplied);

var divided = operandOne / operandTwo;
console.log(divided);

var remainder = operandOne % operandTwo;
console.log(remainder);

var incremented = ++operandOne;
console.log(incremented);

var decremented = --operandTwo;
console.log(decremented);



/* 6. Comparison Operators ************************************************************************************** */
/* 	A Boolean value is either true or false. Any comparison returns a boolean, either true or false. 
Use all the following comparison operators to compare the following values: >, < >=, <=, !=, !==,===. 
Which are true or which are false ? */
4 > 3; /* true */
4 >= 3; /* true */
4 < 3; /* false */
4 <=3; /* false */
4 == 4; /* true */
4 === 4; /* true */
4 != 4; /* false */
4 !== 4; /* true */
4 != '4'; /* false */
4 == '4'; /* true */
4 === '4'; /* false */



/* 7. Logical Operators ***************************************************************************************** */
/* &&, || and ! are JavaScript logical operators. Which are true or which are false ? */
4 > 3 && 10 < 12; /* true */
4 > 3 && 10 > 12; /* true */
4 > 3 || 10 < 12; /* true */
4 > 3 || 10 > 12; /* true */
!(4 > 3); /* false */
!(4 < 3); /* true */
!(false); /* true */
!(4 > 3 && 10 < 12); /* false */
!(4 > 3 && 10 > 12); /* true */
!(4 === '4'); /* true */



/* 8. Conditional statements ************************************************************************************ */



/* 8a. Get user input using prompt(“Enter your age:”).
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



/* 8b. Compare the values of myAge and yourAge using if … else.
Based on the comparison, log to console who is older (me or you).
Use prompt(“Enter your age:”) to get the age as input. */

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



/* 9. Ternary Operator ***************************************************************************************** */
let a = 4;
let b = 3;

/* If a is greater than b return "a is greater than b", else "a is less than b." */











/* 10. Arrays *************************************************************************************************** */ 
/* Declare an array variable, name itCompanies, and assign initial values:
Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon. */
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];



/* 10a. Print the array using console.log() */
console.log(itCompanies);



/* 10b. Print the number of companies in the array */
console.log(itCompanies.length)



/* 10c. Print out each company */
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
console.log(itCompanies[7]);



/* 10d. Change every company to uppercase and print them out */
var i = 0;
while (i < itCompanies.length) {
console.log(itCompanies[i].toUpperCase());
i++;
}



/* 10e. Print the array like a sentence: "Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies." */
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, 
${itCompanies[4]}, ${itCompanies[5]}, and ${itCompanies[6]} are big IT companies.`);



/* 10f. Sort the array using sort() method */
console.log(itCompanies.sort());


/* 10g. Reverse the array using reverse() method */
console.log(itCompanies.reverse());



/* 11. Loops **************************************************************************************************** */

/* 11a. Iterate 0 to 10 using for loop, do the same using while and do while loop. */
for (var i = 0; i <= 10; i++) {
    console.log (i);
}

var i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

var i = 0; 
do {
console.log(i);
i++
} while (i <= 10);



/* 11b. Iterate 10 to 0 using for loop, do the same using while and do while loop. */
for (var i = 10; i >= 0; i--) {
    console.log (i);
}

var i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

var i = 10; 
do {
console.log(i);
i--
} while (i >= 0);


/* 11c. Iterate the array in question number 10 using a for loop and print out the items. */
var i = 0;
while (i < itCompanies.length) {
console.log(itCompanies[i]);
i++;
}



/* 11d. Check if a certain company exists in the itCompanies array.
If it exist return the company else return a company is not found. */
var company = 'Google';

if (itCompanies.includes(company)) {
    console.log(`${company} is a large IT company.`)
}

else {
    console.log('Company not found.')
}



/* 11e. Filter out companies which have more than two ‘o’ without the filter method */



