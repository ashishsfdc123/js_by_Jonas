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

/**
 * Introduction to objects
 * Arrays can only be retrieved by index
 * We cannot use key value pairs in arrays
 * So we have object
 * each of key is also called property
 * 
 * Object are one of the fundamental concepts in js
 * There are multiple ways of creating objects
 * {} curly braces are called literal syntax for creating objects
 * The order of objects does not matter in objects
 * whereas in arrays to access elements the order is important
 * 
 * The member access has very high priority in expression(dot property)
 * The computed member access also has high priority([] notation for getting property)
 * 
 * 
 */
const ashishArray = ['Ashish', 'sharma', 2020-2018, 'teacher', ['Aman','Nitin']];
console.log(ashishArray);

const ashishObj = {
    firstName: "Ashish",
    lastName: 'Sharma',
    empNo: '123',
    company: 'Infosys Limited',
    joining_year: 2023
}
//{firstName: 'Ashish', lastName: 'Sharma', empNo: '123', company: 'Infosys Limited', joining_year: 2023}
console.log(ashishObj);

//Dot vs bracket notation
//we use bracket notation when key contains spaces
//we can pass any expression in bracket notation, even a function
console.log(ashishObj.firstName); //Ashish
console.log(ashishObj["firstName"]); //Ashish

//if we get any non existent property, we get undefined
console.log(ashishObj.newName);

//adding new property
ashishObj.location = 'Chandigarh';
console.log(ashishObj); //location will be added to the object

/**
 * Object Methods: adding functions to objects
 */
const ashishObj2 = {
    firstName: "Ashish",
    lastName: 'Sharma',
    empNo: '123',
    company: 'Infosys Limited',
    joining_year: 2023,
    birthYear: 1990,
    hasDriversLicense: true,
    profession: 'Consultant',
    calcAge: function(){
        //we can also use ashishObj2.birthYear
        //that is with name of object
        //but using this, simplifies the code if obj name changes
        //its good idea to reference the obj using this rather than hardcoding the name
        this.age = 2024-this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.profession} aged ${this.calcAge()}`;
    }
}
const ageAshish = ashishObj2.calcAge();
//using dot property
console.log(ageAshish); //34
//using [] notation
console.log(ashishObj2['calcAge']()); //34
console.log(ashishObj2.age); //34

//Ashish is a Consultant aged 34
console.log(ashishObj2.getSummary());

/**
 * Loops: Fundamental aspect of every language
 * Helps to perform repititive tasks
 * Lets take an example of Gym
 * You might take 10 reps of a particular exercise
 * Lifting Rep 1
 * Liftting Rep 2
 * --------
 * Liftfint Rep 10
 * 
 * Loops help to solve this issue just with 3 lines
 */
for(let i=1;i<=10;i++){
    console.log("Lifting Rep: "+i);
}

/**
 * Loop Through Arrays
 * Lets print the value of each element of the Array
 */
const ashishArr = [
    'Ashish',
    'Sharma',
    2024-1990,
    'Software Dev',
    ['Michael','Slater','Steven']
];
for(let i=0;i<ashishArr.length;i++){
    console.log(`The array element at index ${i} is ${ashishArr[i]}, ${typeof(ashishArr[i])}`);
}

//Lets create a new array from this array, which will contain type of each element
const typeArray = [];
for(let i=0;i<ashishArr.length;i++){
    typeArray.push(typeof(ashishArr[i]));
}
//Type Array is string,string,number,string,object
console.log(`Type Array is ${typeArray}`);

/**
 * continue and break statement
 * Continue: skip current iteration and move to next iteration
 * Break: break the loop and come out of this
 */

//lets use continue to log only string values in the array using continue
for(let i=0;i<ashishArr.length;i++){
    if(typeof(ashishArr[i])!=='string'){
        continue;
    }
    console.log(typeof(ashishArr[i])); 
}

//Break: completely terminate whole loop
//lets break loop after we found a number
for(let i=0;i<ashishArr.length;i++){
    console.log(ashishArr[i]);
    if(typeof(ashishArr[i])=='number'){
        console.log('Number found');
        break;
    }
}

//Looping arrays backwards
for(let i=ashishArr.length-1;i>=0;i--){
    console.log(ashishArr[i]);
}

//WHILE Loop
//used when we dont need to depend on counter
let i=0;
while(i<ashishArr.length){
    console.log(ashishArr[i]);
    i++;
}

let dice = Math.trunc(Math.random()*6)+1;
console.log('Dice is: '+dice);
while(dice!==6){
    console.log(dice);
    dice++;
}