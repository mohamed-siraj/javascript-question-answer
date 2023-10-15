/**
 * Explain Implicit Type Coercion in javascript.
 * 
 * coercion which mean javascript runtime automatically convert data type 
 */

//example 

const number1 = 5;
const number2 = '980';

console.log(number1+number2);
/**
 * result
 * 
 * this time javascript automatically convert to string 
 * 
 * 5980
 */

console.log(number2-number1);

/**
 * result
 * 
 * this time javascript automatically convert to number 
 * 
 * 975
 */