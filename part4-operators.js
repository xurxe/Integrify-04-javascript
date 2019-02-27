/* ARITHMETIC OPERATORS ***************************************************************************************** */



/* JavaScript arithmetic operators are:
addition(+), subtraction(-), multiplication(*), division(/), modulus(%), increment(++) and decrement(--). */
let operandOne = 4;
let operandTwo = 3;



/* Using the above operands, apply different JavaScript arithmetic operators. */
let added = operandOne + operandTwo;
console.log(added);

let subtracted = operandOne - operandTwo;
console.log(subtracted);

let multiplied = operandOne * operandTwo;
console.log(multiplied);

let divided = operandOne / operandTwo;
console.log(divided);

let remainder = operandOne % operandTwo;
console.log(remainder);

let incremented = ++operandOne;
console.log(incremented);

let decremented = --operandTwo;
console.log(decremented);



/* And also */

let raised = operandOne ** operandTwo
console.log(raised);

let unaryMinus = -operandOne;
console.log(unaryMinus);

let unaryPlus = +operandOne;
console.log(unaryPlus);



/* LOGICAL OPERATORS ******************************************************************************************** */
/* &&, || and ! are JavaScript logical operators. Of the statements below, which are true and which are false ? */
console.log(4 > 3 && 10 < 12); /* true */
console.log(4 > 3 && 10 > 12); /* false */
console.log(4 > 3 || 10 < 12); /* true */
console.log(4 > 3 || 10 > 12); /* true */
console.log(!(4 > 3)); /* false */
console.log(!(4 < 3)); /* true */
console.log(!(false)); /* true */
console.log(!(4 > 3 && 10 < 12)); /* false */
console.log(!(4 > 3 && 10 > 12)); /* true */
console.log(!(4 === '4')); /* true */



/* COMPARISON OPERATORS ***************************************************************************************** */
/* 	Use all the following comparison operators to compare the following values: >, < >=, <=, !=, !==,===. 
Which are true or which are false ? */
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