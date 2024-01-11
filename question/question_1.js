/**
 * Task 1. Phrase reverse.
   This is a simple task, the main idea is to create logic that will reverse words in the target phrase. 
   For example, we have this sentence: This is an example!. 
   Reversed variant will be sihT si na !elpmaxe. 
   Here we can check how the candidate knows arrays, and arrays methods. 
   One of the ways how we can implement this:
 */

   let text = `This is an example!`;
console.log(`----- ${text} ----- \n\n`);

const splitText = text.split(' ');
console.log(`----- ${splitText} ----- \n\n`);

const reverse = splitText.map((text) => {
    return text.split('').reverse().join('');
}).join(' ');

console.log(`${reverse}\n\n`);