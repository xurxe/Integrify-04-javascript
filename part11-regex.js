/* Calculate the total annual income of a person from the following text.
'He earns 4000 euros as a salary per month, 10000 euros as an annual bonus,
and 5500 euros from his online courses per month.' */

incomeSentence = 'He earns 4000 euros as a salary per month, 10000 euros as an annual bonus, and 5500 euros from his online courses per month.'

var incomeNumbers = incomeSentence.match(/\d+/g);
console.log(incomeNumbers);

var salary = 12 * +incomeNumbers[0];
var bonus = +incomeNumbers[1];
var courses = 12 * +incomeNumbers[2];

var income = salary + bonus + courses;
console.log(income);