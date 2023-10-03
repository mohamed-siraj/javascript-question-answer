/**
 * QZ : Explain Hoisting in javascript.?
 */

//answer

/**
 * hoisting mean variable or function call before they initialization
 * 
 * NOTE : this is excepted normal function
 */

//example variable

console.log(v1);

const v1 = 5;

/**
 * we got error : ReferenceError: Cannot access 'v1' before initialization
 * 
 * this is wrong way to call variable
 */

//example function

func();

const func = () => {
    console.log('this is arrow function');
};

/**
 * we got error : Cannot access 'func' before initialization
 * 
 * this is wrong way to call function
 */

/**
 * but this is excepted normal function
 */

fn();

function fn(){
    console.log('This is normal / constructor function');
};

/**
 * this is working perfectly. 
 */

 /**
  * but when we declare an function that time this rule break
  * 
  * example
  */

 exFn();

 const exFn = function() {
    console.log('this is anonymous function');
 };

 /**
 * we got error : Cannot access 'exFn' before initialization
 */
