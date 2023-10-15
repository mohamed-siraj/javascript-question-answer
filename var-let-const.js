/**
 * Difference between var and let keyword in javascript.
 * 
 */

/**
 * answer
 * 
 * // VAR
 * - var keyword is an function of global scop
 * - while use var keyword variable can several time re declaration & initialization 
 */
//example 
function testVar(){

    var number1 = 5;
    console.log(number1);

    var number1 = 'mohamed siraj';
    console.log(number1);

    /**
     * answer
     * 
     * - var keyword is an function of global scop
     * - while use var keyword variable can several time re declaration & initialization 
     * 
     */
};

testVar();

/**
 * answer 
 * // LET
 * - let keyword is an block scop
 * - while use let keyword we can declare the variable limited to the block & we can sever time re initialize
 */

function testLet(){

    let number1 = 5;
    let number2 = 10;

    if(true){
        let number1 = 'mohamed siraj';
        console.log(`inside block --- ${number1}`);
        
    }

    number2 = 20

    console.log(`outside block number 1--- ${number1}`);
    console.log(`outside block number 2--- ${number2}`);

}

testLet();

/**
 * //COST
 * - const also bock scop
 * - while use const keyword we can declare the variable limited to the block & we can initialize one time
 */

function testConst(){

    const number1 = 5;

    if(true){
        const number1 = 10;
        
        console.log(number1);
    }

    console.log(number1);

}

testConst();