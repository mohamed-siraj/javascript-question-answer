/**
 * Difference between “ == “ and “ === “ operators.
 * 
 * major different 
 * == operator check only equal value 
 * but
 * === operator check value & type 
 */

//example 1 - we have two type of variable 

const number1 = 5;
const number2 = '5'

// check using == operator
console.log(number1 == number2);
/**
 * answer
 * 
 * == this operator check only value so if we check that both value its return true
 */

// check using === operator
console.log(number1 === number2);

/**
 * answer
 * 
 * === this operator check value and data type so if we check that both value its return false because 
 * number1 is a integer number2 is a string variable
 */
