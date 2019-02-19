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



/* 5. Booleans ************************************************************************************************** */
/* A Boolean value is either true or false.  */



/* 5a. Write three JavaScript statements that provide a truthy value. */



/* 5b. Write three JavaScript statements that provide a falsy value. */
