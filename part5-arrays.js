/* ARRAYS ******************************************************************************************************* */ 

/* Declare an array variable, name it itCompanies, and assign initial values:
Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon. */
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];



/* Print the array using console.log() */
console.log(itCompanies);



/* Print the number of companies in the array */
console.log(itCompanies.length)



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
        array[5].toUpperCase();
        return array;
    }

    else {
        return 'Item not found';
    }
}

console.log(modifyArray(itCompanies));

var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(modifyArray(itCompanies));
