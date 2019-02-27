/* Calculate the total annual income of a person from the following text.
'He earns 4000 euros as a salary per month, 10000 euros as an annual bonus,
and 5500 euros from his online courses per month.' */

incomeSentence = 'He earns 4000 euros as a salary per month, 10000 euros as an annual bonus, and 5500 euros from his online courses per month.'

let incomeNumbers = incomeSentence.match(/\d+/g);
console.log(incomeNumbers);

let salary = 12 * +incomeNumbers[0];
let bonus = +incomeNumbers[1];
let courses = 12 * +incomeNumbers[2];

let income = salary + bonus + courses;
console.log(income);