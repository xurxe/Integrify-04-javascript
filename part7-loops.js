/* LOOPS ******************************************************************************************************** */
let i;
/* Iterate 0 to 10 using the for-loop, and then do the same using the while- and do while-loops. */
for (i = 0; i <= 10; i++) {
    console.log (i);
}

i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

i = 0; 
do {
console.log(i);
i++
} while (i <= 10);



/* Iterate 10 to 0 using the for-loop, and then do the same using the while- and do while-loops. */
for (i = 10; i >= 0; i--) {
    console.log (i);
}

i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

i = 10; 
do {
console.log(i);
i--
} while (i >= 0);



/* Iterate the itCompanies array from earlier using a for-loop and print out the items. */
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
for (i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}



/* Use a for-loop to iterate from 0 to 100 and print only even numbers */
for (i = 0; i <= 100; i += 2) {
    console.log(i);
}



/* Use a for-loop to iterate from 0 to 100 and print only odd numbers */
for (i = 1; i <= 100; i += 2) {
    console.log(i);
}



/* Use the for-loop to iterate from 0 to 100 and print all the numbers as well as their sum. */
/* The sum all numbers is 5050. */
let sum = 0;
for (i = 0; i <= 100; i++) {
    console.log(i);
    sum += i;
}
console.log(`The sum of all numbers is ${sum}`);



/* Use the for-loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. */
/* The sum of all evens is 2550. And the sum of all odds is 2500. */
let sumEvens = 0;
let sumOdds = 0;

for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvens += i;
    }

    else {
        sumOdds += i;
    }

}
console.log(`The sum of all evens is ${sumEvens}. The sum of all odds is ${sumOdds}`);