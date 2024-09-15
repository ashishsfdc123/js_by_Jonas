/**
 * Activating Strict Mode
 * use statement 'use strict'
 * This should always be the first statement in file
 * Then only strict mode will work
 * Comments are allowed before strict mode
 * We can also implement strict mode for a particular function
 * Makes it easier for developers to avoid accidental errors
 * This forbids to do certain things
 * Enables visible errors in dev console where simple js will fail silentl 
 **/
'use strict'

let hasDriversLicense = false;
const passTest = true;
if(passTest){
    //this will return error when we use strict mode
    //reason is hasDriverLicense is undefined
    //the correct name is hasDriversLicense
    //if we remove the strict mode, we dont see the error in console
    
    //below line is commented since this will give error
    //and we will not be able to continue
    //hasDriverLicense = true;
}

//another strict mode use
//it avoids using keywords which are reserved
//or maybe reserved in future
//const interface = 'Audio';
//const private = 'This is private';


/**
 * Functions: One of the most essential part of JS
 * Function is piece of code that can be re-used
 * Its a little bit like variable
 * but instead of storing value, it stores code
 * functions are declared using function keyword
 */

function logger(){
    console.log('This is logger function');
}

//this is called
//invoke function, //call function, //run function
logger(); //This is logger function

//another example of function
//this takes two numbers named apples and oranges
//apples and oranges are called arguments
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice With ${apples} apples and ${oranges} oranges`;
    //this is result of executing this function
    return juice;
}

//lets invoke our function
console.log(fruitProcessor(5,2)); //Juice With 5 apples and 2 oranges
let returnedJuice = fruitProcessor(5,2);
console.log('Juice Returned is: '+returnedJuice);


//function declarations
//param is like a local variable, available only inside of the function
//birthYear is parameter
function calcAge1(birthYear){
    return 2024 - birthYear;
}

//this is argument(when calling function)
const age1 = calcAge1(1989);
console.log('Age 1 is: '+age1); //35 = 2024-1989

//function expression
//assigning function to a variable is called function expression
//this function is expression
var calcAge2 = function(birthYear){
    return 2024-birthYear;
}
const age2 = calcAge2(1989);
console.log('Age 2 is '+age2); //35 = 2024-1989

//we can call function declaration before the line they are defined
//function hoisting works and the functions are moved to top of the code
//thats why it works
//but same is not true with function expressions
//using function expressions before declaring them causes run time issues
//Mostly its a personal preference to use declaration or expression


/**
 * Arrow functions
 * another form of declaring functions: shorter and concise code
 * For single line functions return is implicit
 * for single param, round brackets are optional
 */
const calcAge3 = (birthYear) => 2024-birthYear;
console.log(calcAge3(1989));

//how many years left for retirement
const yearsUntilRetirement = (birthYear) =>{
    const age = 2024-birthYear;
    const retirement = 60-age;
    return retirement;
}
const yearsLeftRetirement = yearsUntilRetirement(1989);
console.log('years left for retirement: '+yearsLeftRetirement); //25


//functions calling other functions
//cuts fruits into multiple pieces

function cutFruitPieces(fruit){
    return fruit*4;
}
function newFruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}
const newJuiceReturned = newFruitProcessor(2,2);
//new Juice returned is: Juice with 8 pieces of apple and 8 orange pieces
console.log('new Juice returned is: '+newJuiceReturned);

