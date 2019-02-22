/* ARRAYS ******************************************************************************************************* */ 



/* Declare an *empty* array; */

var fruits = [];



/* Declare an array with more than 5 number of items */
var fruits = ['apple', 'banana', 'clementine', 'durian', 'elderberry', 'fig', 'grapes']


/* Find the length of your array */

console.log(fruits.length);



/* Get the first item, the middle item and the last item of the array */
var firstFruit = fruits.slice(0, 1);

var middleFruit = fruits.slice(Math.floor((fruits.length - 1) / 2),
    Math.ceil((fruits.length + 1) / 2))

var lastFruit = fruits.slice(-1);

console.log(firstFruit);
console.log(middleFruit);
console.log(lastFruit);



/* Declare an array called *mixedDataTypes*, and put different data types in your array. The array size should be greater than 5 */
var mixedDataTypes = [1, 'two', true, undefined, null];
console.log(mixedDataTypes);



/* Declare an array variable, name it itCompanies, and assign initial values:
Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon. */
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];



/* Print the array using console.log() */
console.log(itCompanies);



/* Print the number of companies in the array */
console.log(itCompanies.length)



/* Print the first company, middle and last company */
var firstCompany = itCompanies.slice(0, 1);

var middleCompany = itCompanies.slice(Math.floor((fruits.length - 1) / 2),
    Math.ceil((itCompanies.length + 1) / 2))

var lastCompany = itCompanies.slice(-1);

console.log(firstCompany);
console.log(middleCompany);
console.log(lastCompany);



/* Print out each company */
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);



/* Change every company to uppercase and print them out */
for (i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}



/* Print the array like a sentence: "Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies." */
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, 
${itCompanies[4]}, ${itCompanies[5]}, and ${itCompanies[6]} are big IT companies.`);



/* Check if a certain company exists in the itCompanies array.
If it exist return the company else return a company is not found. */
var company = 'Google';

if (itCompanies.includes(company)) {
    console.log(`${company} is a large IT company.`)
}

else {
    console.log('Company not found.')
}



/* Filter out companies which have more than two ‘o’ without the filter method */

maxOCount = 1; /* made it one so it makes more sense with the list of companies */

for (var i = 0; i < itCompanies.length; i++) {
    var oCount = (itCompanies[i].match(/o/ig)||[]).length;
    if (oCount > maxOCount) {
        itCompanies.splice(i, 1);
        i--; /* if you don't add this, it skips one when two adjacent array items violate the maxOCount rule*/
    }
}

console.log(itCompanies);



/* Sort the array using sort() method */
console.log(itCompanies.sort());



/* Reverse the array using reverse() method */
console.log(itCompanies.reverse());



/* Slice out the first 3 companies from the array */
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var firstThree = itCompanies.slice(0, 3);
console.log(firstThree);



/* Slice out the last 3 companies from the array */
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var lastThree = itCompanies.slice(-3);
console.log(lastThree);



/* Slice out the middle IT company or companies from the array */
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var middleCompany = itCompanies.slice(Math.floor((itCompanies.length - 1) / 2),
    Math.ceil((itCompanies.length + 1) / 2)); /* this works on any array length */
console.log(middleCompany);



/* Remove the first IT company from the array */
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var splicedFirst = itCompanies.splice(0, 1);
console.log(itCompanies);



/* Remove the middle IT company or companies from the array */
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var splicedMiddle = itCompanies.splice(Math.floor((itCompanies.length - 1) / 2),
    Math.abs((itCompanies.length % 2) - 2)); /* this works on any array length */
console.log(itCompanies);



/* Remove the last IT company from the array */
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var splicedLast = itCompanies.splice(-1, 1);
console.log(itCompanies);



/* Remove all IT companies */
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var splicedAll = itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
