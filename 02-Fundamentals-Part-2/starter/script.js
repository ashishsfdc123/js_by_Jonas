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

/**
 * Intro to Arrays
 * Arrays in js are data structures
 * A big container into which we can save values
 * and later on retrieve the values
 * Arrays and Objects are two important data structures
 * Array can hold values of multiple types like Strings and numbers
 * []: this is called literal syntax
 * we can also create arrays using new Keyword
 * const myArr = new Array(1,2,'Test')
 * Arrays are indexed based data structures
 */
const friend1 = 'friend1';
const friend2 = 'friend2';
const friend3 = 'friend3';
const friends = [friend1, friend2, friend3];
//Friends array is: friend1,friend2,friend3
console.log('Friends array is: '+friends);
//To fetch first elements
console.log('First Element is: '+friends[0]);

//Get count of elements in array
//Length of array is: 3
console.log('Length of array is: '+friends.length);

//while retrieving we can use any expression inside square brackets
//fetch the last element of array using the length property
console.log(friends[friends.length-1]);
function myIndex(){
    return 1;
}

//we can even pass a method inside the square bracket
//which returns a value
// ****** any expression that returns a value can be used
//return friend2
console.log(friends[myIndex()]);

//the square bracket is not just for retrieving the elements
//we can even change or mutate the array using []
friends[2] = 'Value Changed';
console.log(friends[2]); //Value Changed

//Though array was declared as const
//its values can be changed
//the const rule applies only to primitives
//but array essentially is an object in js
//and its values are properties and can be changed
//what we cannot do is replace entire array
//friends = [1,2,,3]; Assignment to constant variable error will come

//Array with values of different types
const myDetailsArray = ['Ashish', 'Infy', 2023, 12345, true];
//['Ashish', 'Infy', 2023, 12345, true]
console.log(myDetailsArray);

//we can put one array into another
const arr1 = [friends, myDetailsArray];
console.log(arr1);

/**
 * Basic Array Operations
 */

//push: add element to end of array
//push returns the length of the array
const myArr1 = [1,2,3];
myArr1.push(4);
console.log(myArr1); //[1, 2, 3, 4]

const newLength = myArr1.push(5);
console.log(newLength); //output is 5


//adding element to the beginning of array
//unshift method
//also returns the length of new array
myArr1.unshift('First');
console.log(myArr1); //['First', 1, 2, 3, 4, 5]

//remove elements from array
//pop method: removes the last element of the array
//returns the removed element
myArr1.pop(); //will remove 5 from array
console.log(myArr1);//['First', 1, 2, 3, 4]

//shift: removes first element from array
//returns the f(irst value) removed from the array
const shiftedVal = myArr1.shift();
console.log(myArr1); //[1, 2, 3, 4]
console.log(shiftedVal); //First

//index of: returns the index of the first matching element
console.log(myArr1.indexOf(1)); //0
console.log(myArr1.indexOf('test')); //-1 for non existing array element

//includes: more modern way of checking if an element exists
console.log(myArr1.includes(2)); //true
console.log(myArr1.includes('test')); //false

console.log('Hi');

