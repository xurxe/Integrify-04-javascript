/* DATA TYPES ************************************************************* */

/* Declare variables and assign string, boolean, undefined and null data types */
let firstName = 'Xurxe Toivo';
let lastName = 'Garcia';
let maritalStatus = 'solo';
let nation = 'Galicia';
let age = 29;
let myAge = 29
let yourAge = 30;
let favoriteFood = 'chocolate'; 
let likesChocolate = true;
let dislikesChocolate;
let hatesChocolate = null;



/* STRINGS **************************************************************** */

/* Declare a variable named company and assign it to an initial value "Coding Academy”. */
let company = 'Coding Academy';



/* Print the string  on the browser console using console.log() */
console.log(company);



/* Print the length of the string  on the browser console using console.log() */
console.log(company.length);



/* Change the string to uppercase letters using the toUpperCase() method */
let upperCaseCompany = company.toUpperCase();
console.log(upperCaseCompany);



/* Change the string to lowercase letters using the toLowerCase() method */
let lowerCaseCompany = company.toLowerCase();
console.log(lowerCaseCompany);



/* Cut (slice) out the first word of the string using the slice, substr() or substring() method */
let slicedCompany = company.slice(0, 10);
console.log(slicedCompany);

let substrCompany = company.substr(0, 9);
console.log(substrCompany);

let substringCompany = company.substring(0, 10);
console.log(substringCompany);



/* Use substr to slice out the words "because because because" in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
let becauseSubstr = 'because because because ';

let substrSentence = becauseSentence.substr(becauseSentence.indexOf('because'), becauseSubstr.length);
console.log(substrSentence);



/* Check if the string contains the word Academy using includes() method */
let includesAcademy = company.includes('Academy');
console.log(includesAcademy);



/* Split the string into an array using split() method */
let splitCompany = company.split();
console.log(splitCompany);



/* Split the string 'Coding Academy' at the space using split() method */
let splitSpaceCompany = company.split(' ');
console.log(splitSpaceCompany);



/* “Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon”.
Split that string at the comma and change it to an array. */
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let splitCompanies = companies.split(', ');
console.log(splitCompanies);



/* Change Coding Academy to Microsoft Academy using the replace() method. */
let replacedCompany = company.replace('Coding', 'Microsoft');
console.log(replacedCompany);



/* What is the character at index 10 in Coding Academy’ string? Use charAt() */
let tenCompany = company.charAt(10);
console.log(tenCompany);



/* What is the character code of A in ‘Coding Academy’? Use charCodeAt() */
let tenCodeCompany = company.charCodeAt(company.indexOf('A'));
console.log(tenCodeCompany);



/* Use indexOf() to determine the position of the first occurrence of c in Coding Academy */
let indexOfcCompany = company.indexOf('c');
console.log(indexOfcCompany);



/* Use lastIndexOf() to determine the position of the last occurrence of e in Coding Academy */
let lastIndexOfcCompany = company.lastIndexOf('c');
console.log(lastIndexOfcCompany);



/* Use indexOf() to find the position of the first occurrence of the word because in the following sentence;
'You cannot end a sentence with because because because is a conjunction' */
let indexOfBecause = becauseSentence.indexOf('because');
console.log(indexOfBecause);



/* Use lastIndexOf() to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
let lastIndexOfBecause = becauseSentence.lastIndexOf('because');
console.log(lastIndexOfBecause);



/* Use search to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
let searchBecause = becauseSentence.search('because');
console.log(searchBecause);



/* Use trim() to remove any trailing whitespace at the beginning and the end of a string. E.g “  Coding Academy   ”.  */
let untrimmedCompany = '  Coding Academy   '
let trimmedCompany = untrimmedCompany.trim();
console.log(trimmedCompany);



/* Use startsWith() with the string Coding Academy and make the result true */
let startsWithCCompany = company.startsWith('C');
console.log(startsWithCCompany);



/* Use endsWith() with the string Coding Academy make the result true */
let endsWithyCompany = company.endsWith('y');
console.log(endsWithyCompany);



/* Use match() to find all the c’s in Coding Academy */
let matchcCompany = company.match(/c/g); /* case-sensitive */
console.log(matchcCompany);

let matchCcCompany = company.match(/c/ig); /* case-insensitive */
console.log(matchCcCompany);



/* Use match() to count the number of times the word "because" is in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
let countBecause = becauseSentence.match(/because/ig).length;
console.log(countBecause);



/* Use concat() and merge ‘Coding’ and ‘Academy’ to a single string, ‘Coding Academy’ */
let concatCompany = 'Coding'.concat(' ', 'Academy');
console.log(concatCompany);



/* Use the repeat() method to print Coding Academy 5 times */
let repeatedFiveCompany = 'Coding Academy '.repeat(5);
console.log(repeatedFiveCompany);



/* Calculate the total annual income of the person by extracting the numbers from the following text.
'He earns 5000 euros as a salary per month, 10000 euros as an annual bonus,
and 15000 euros from his online courses per month.' */
let incomeSentence = 'He earns 5000 euros as a salary per month, 10000 euros as an annual bonus, and 15000 euros from his online courses per month.'

let incomeNumbers = incomeSentence.match(/\d+/g);
console.log(incomeNumbers);

let salary = 12 * +incomeNumbers[0];
let bonus = +incomeNumbers[1];
let courses = 12 * +incomeNumbers[2];

let income = salary + bonus + courses;
console.log(income);



/* BOOLEANS ***************************************************************** */

/*  Write three JavaScript statements that provide a truthy value. */
let happy = true;
let animal = 'cat';
let streetNumber = 29;



/* Write three JavaScript statements that provide a falsy value. */
let happy = false;
let animal = null;
let postCode = NaN;



/* 	Use the following comparison operators to compare the values below: >, < >=, <=, !=, !==,===. 
Which are true and which are false ? */
console.log(4 > 3); /* true */
console.log(4 >= 3); /* true */
console.log(4 < 3); /* false */
console.log(4 <=3); /* false */
console.log(4 == 4); /* true */
console.log(4 === 4); /* true */
console.log(4 != 4); /* false */
console.log(4 !== 4); /* false */
console.log(4 != '4'); /* false */
console.log(4 == '4'); /* true */
console.log(4 === '4'); /* false */



/* TYPEOF OPERATOR ********************************************************* */

/* The JavaScript typeof operator can be used to check different data types.
Check the data type of each variable from question number 1. */
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof maritalStatus);
console.log(typeof nation);
console.log(typeof age);
console.log(typeof myAge);
console.log(typeof yourAge);
console.log(typeof favoriteFood);
console.log(typeof likesChocolate);
console.log(typeof dislikesChocolate);
console.log(typeof hatesChocolate);