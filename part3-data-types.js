/* DATA TYPES *************************************************************************************************** */
/* The JavaScript typeof operator can be used to check different data types.
Check the data type of each variable from question number 1. */

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof maritalStatus);
console.log(typeof nation);
console.log(typeof age);
console.log(typeof myAge);
console.log(typeof yourAge);



/* STRINGS ****************************************************************************************************** */



/* Declare a variable named company and assign it to an initial value "Coding Academy”. */
var company = 'Coding Academy';



/* Print the string  on the browser console using console.log() */
console.log(company);



/* Print the length of the string  on the browser console using console.log() */
console.log(company.length);



/* Change the string to uppercase letters using toUpperCase() method */
upperCaseCompany = company.toUpperCase();
console.log(upperCaseCompany);



/* Change the string to lowercase letters using toLowerCase() method */
lowerCaseCompany = company.toLowerCase();
console.log(lowerCaseCompany);



/* Cut (slice) out the first word of the string using the slice, substr() or substring() method */
slicedCompany = company.slice(0, 10);
console.log(slicedCompany);

substrCompany = company.substr(0, 9);
console.log(substrCompany);

substringCompany = company.substring(0, 10);
console.log(substringCompany);



/* Use substr to slice out the words "because because because" in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */

sentence = 'You cannot end a sentence with because because because is a conjunction';
substr = 'because because because ';

substrSentence = sentence.substr(sentence.indexOf('because'), substr.length);
console.log(substrSentence);



/* Check if the string contains the word Academy using includes() method */
includesAcademy = company.includes('Academy');
console.log(includesAcademy);



/* Split the string into array using split() method */
splitCompany = company.split();
console.log(splitCompany);



/* Split the string 'Coding Academy' at the space using split() method */
splitSpaceCompany = company.split(' ');
console.log(splitSpaceCompany);



/* “Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon”.
Split that string at the comma and change it to an array. */
var companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
splitCompanies = companies.split(', ');
console.log(splitCompanies);



/* Change Coding Academy to Microsoft Academy using the replace() method. */
replacedCompany = company.replace('Coding', 'Microsoft');
console.log(replacedCompany);



/* What is the character at index 10 in Coding Academy’ string? User charAt() */
tenCompany = company.charAt(10);
console.log(tenCompany);



/* What is the character code of A in ‘Coding Academy’ string using charCodeAt() */
tenCodeCompany = company.charCodeAt(company.indexOf('A'));
console.log(tenCodeCompany);



/* Use indexOf() to determine the position of the first occurrence of c in Coding Academy */
indexOfeCompany = company.indexOf('c');
console.log(indexOfeCompany);



/* Use lastIndexOf() to determine the position of the last occurrence of e in Coding Academy */
lastIndexOfeCompany = company.lastIndexOf('c');
console.log(lastIndexOfeCompany);



/* Use indexOf() to find the position of the first occurrence of the word because in the following sentence;
'You cannot end a sentence with because because because is a conjunction' */
indexOfBecause = sentence.indexOf('because');
console.log(indexOfBecause);



/* Use lastIndexOf() to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
lastIndexOfBecause = sentence.lastIndexOf('because');
console.log(lastIndexOfBecause);



/* Use search to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
searchBecause = sentence.search('because');
console.log(searchBecause);



/* Use trim() to remove any trailing whitespace at the beginning and the end of a string. E.g “  Coding Academy   ”.  */
untrimmedCompany = '  Coding Academy   '
trimmedCompany = untrimmedCompany.trim();
console.log(trimmedCompany);



/* Use startsWith() with the string Coding Academy and make the result true */
startsWithCCompany = company.startsWith('C');
console.log(startsWithCCompany);



/* Use endsWith() with the string Coding Academy make the result true */
endsWithyCompany = company.endsWith('y');
console.log(endsWithyCompany);



/* Use  match() to find all the c’s in Coding Academy */
matchcCompany = company.match(/c/g); /* case-sensitive */
console.log(matchcCompany);

matchCcCompany = company.match(/c/ig); /* case-insensitive */
console.log(matchCcCompany);



/* Use match() to count the number of times the word because is in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
countBecause = sentence.match(/because/ig).length;
console.log(countBecause);



/* Use concat() and merge ‘Coding’ and ‘Academy’ to a single string, ‘Coding Academy’ */
concatCompany = 'Coding'.concat(' ', 'Academy');
console.log(concatCompany);



/* Use repeat() method to print Coding Academy 5 times */
repeatedFiveCompany = 'Coding Academy '.repeat(5);
console.log(repeatedFiveCompany);



/* Calculate the total annual income of the person by extracting the numbers from the following text.
'He earns 5000 euros as a salary per month, 10000 euros as an annual bonus,
and 15000 euros from his online courses per month.' */

incomeSentence = 'He earns 5000 euros as a salary per month, 10000 euros as an annual bonus, and 15000 euros from his online courses per month.'

var incomeNumbers = incomeSentence.match(/\d+/g);
console.log(incomeNumbers);

var salary = 12 * +incomeNumbers[0];
var bonus = +incomeNumbers[1];
var courses = 12 * +incomeNumbers[2];

var income = salary + bonus + courses;
console.log(income);



/* BOOLEANS ***************************************************************************************************** */



/*  Write three JavaScript statements that provide a truthy value. */
var happy = true;
var animal = 'cat';
var age = 29;



/* Write three JavaScript statements that provide a falsy value. */
var happy = false;
var animal = null;
var age = NaN;