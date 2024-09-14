let js="amazing";
console.log(48+8+23-10);

//values: anything assigned to variables is value(literals)
//value is the smalles unit of information in javascript
//values are stored in variables
console.log('Jonas');
console.log(23);
console.log(true);

//variables: box that contains the value
//variables are holders for the values
//variables help in code re-usage
let firstName = 'Ashish'; //declaring a variable
console.log(firstName);

let newName = "Bob";
console.log(newName);

/**
 * Naming Conventions for variables:
 * 1. Camel Case: firstName, lastName, first word smaller, remaining words are capitalized
 * 2. Cannot start with number: let 3years = 3
 * 3. Names can only contains letters numbers _ and $ sign
 * 4. Reserved keywords cannot be used: let new =27 //(new is reserved keyword)
 * 5. name as variable name should not be used: reserved keyword but sometimes legal to use
 * 6. Should not start the var name with uppercase letter(convention only, error will not be thrown)
 *      let Firstname = 'FirstName' this is legal but not as per convention
 * 7. Constants should be written in all UpperCase like value of PI
 *      const PI = 3.1415
 * 8. Variable names should be descriptive
 *      let oldJob = 'Programmer'
 *      let newJob = 'Teacher'
 */



/**
 * data types
 * Every value in js is either an object or primitive. What is not object is primitive.
    Javascript has dynamic typing. We do not have to manually define type of the value stored in a variable. Instead data types are determined automatically based on the literal value assigned to variable. Value has type but not variable. Same variable can hold number and later on we can assign string to the same variable.
    Lets first focus on primitives:
    Number(floating point numbers, always have numbers even if we dont give decimal). All numbers are of type number
    String: sequence of characters always in quotes
    Boolean: either true or false, no other value, used for decision making
    Undefined: value taken by variable thats yet not defined or a variable that is yet not assigned any value
    Null: also means empty value but is different from undefined
    Symbol: simply defines value which is unique and cannot be changed
    Bigint: ES2020: number too long to be contained in number datatype
 */
let num;
console.log(num); //gives undefined
console.log(typeof(num)); //undefined
num = 23; 
console.log(num);// this time num is 23
console.log(typeof(num)); //number
num = true; 
console.log(num); //now num is boolean
console.log(typeof(num)); //boolean
num = 'Hello There';
console.log(num) //Hello There, this time its a string
console.log(typeof(num)); //string

//lets check type of null
console.log(typeof null); //the result is not null but object

/**
 * Declaring variables
 * var is old way old way of declaring variables
 * let and const are the new ways of declaring variables
 * let is used for variables whose values can change later in program
 *    let age=30;
 *    age=31; //mutated the age variable
 * const: used for variables whose values do not change
 *    const creates immutable variables
 *    we cannot declare emtpy const variables
 * var: should be completely avoided
 *    
 */
var job = 'Programmer';
console.log(job);
job = 'Teacher';
console.log(job); //re-assignment done successfully


/**
 * Operators
 */
//Mathematical Operator
//Sub Operator
const yearNow = 2024;
const ageJonas = yearNow-1991;
console.log('ageJonas is: '+ ageJonas);
const ageSarah = yearNow-1995;
console.log('ageSarah is: '+ageSarah);
console.log(ageJonas*2);//multiplication
console.log(ageJonas/2);//division
console.log(ageJonas+2);//addition
console.log(ageJonas**2);//exponential : 33*33

//Assignment Operator
let x = 12+5; //equal is assignment operator
console.log('value of x is: '+x); //17
x+=10; //this will do x=x+10; //27
console.log(x); //27

x-=20;
console.log(x); //7

//increment
x++;
console.log(x); //8

x--; //8
x--; //7
console.log(x); //6

//Comparison Operator
//Greater
console.log(ageJonas > ageSarah); //true
//Less than
console.log(ageJonas < ageSarah); //false
//There are other operators as well >= <=
console.log(ageSarah >=18); //true


/**
 * Operator Precedence
 * Javacript has a well defined operator precedence
 * Mathematical Operators takes precedence over comparison operators
 * Exponential, Assignment operators works from right to left
 * Grouping () gets highest priority
 */
let a, b;
a=b=25-10-5; //10
console.log(a);//10
console.log(b);//10

const averageAge = (ageJonas+ageSarah)/2;
console.log(averageAge); //33+29/2


/**
 * String and template literals
 * also supports multiple line strings
 */
const nameAshish = 'Ashish';
const ageAshish = 30;
const hobbyAshish = 'Cricket';
const templateLiteral = `I am ${nameAshish} and I am ${ageAshish} old`;
console.log(templateLiteral);

/**
 * Decision Elements
 */
const ageDecision = 20;
const isOldEnough = ageDecision>=18;
if(isOldEnough){
   console.log("age greater than 18");
}
else{
   console.log("Age is less than 18");
}

const ashishBirthYear = 1990;
let century;
if(ashishBirthYear < 2000){
   century  = 20;
}
else{
   century = 21;
}
console.log("Century is: "+century);

/**
 * Type Conversion and Type Coercion
 * Conversion: manual
 * Coercion: Automatic Conversion
 */
const anYear = '2020';
//since anYear is a string, the output will be weird
console.log(anYear+20); //"2020"+20
//lets convert to number
const anYearNumber = Number(anYear);
console.log(anYearNumber+20); //2020+20=2040

//convert string to number will result in Not a Number(NaN)
const aString = 'Jonas';
console.log(Number(aString)); //NaN
console.log(typeof(NaN)); //*******type of NaN is number

//convert to String from Number
const aNum = 2020;
const bString = String(aNum);
console.log(bString); //2020
console.log(typeof(bString)); //string

//we cannot convert to undefined or null

//Type Coercion
//happens when operator deals with two values of different types
//like concat number to string
//concat string to number
//+ operator converts numbers to strings
console.log("I am a Jonas: "+23+" years old"); //I am a Jonas: 23 years old
//- operator converts strings to number:
console.log('23'-'10'-'3'); //10
//* also converts strings to numbers
// same is true for divide

//guess the output
let n = '1'+1; //11
n = n-1; //10
console.log(n); //10

/**
 * Truthy and Falsy values
 * 
 */
//5 falsy values are: 0, undefined, null, ''(empty string), NaN
//of course false is always false
//all other values are truthy values
//all non null and true values are truthy values be default
//In code, the conversion automatically happens behind the scenes
//when using logical operators
//Or when using if else statements
//can be used to check if variable is having any value or not
console.log('Boolean value for 0 : '+Boolean(0)); //false
console.log('Boolean value for undefine: '+Boolean('')); //false
console.log('Boolean value for a string with value: '+Boolean('ashish')); //false


let money=0;
//In if statement, type coercion will happen
//0 will become falsy value and hence
//else statement will get executed
if(money){
   console.log('True:: Money is present');
}
else{
   console.log('Money is not present as 0 is a falsy value');
}

/**
 * Equality Operators
 * == vs ===(double vs triple equals)
 * == loose equality operator: performs type coercion and then check equality
 * === strict equality operator: does not performs implicit type coercion
 */

let a1=2;
let b1='2';
//this will return true since the value of a1 and b1 is equal
//double == will not consider type of values

if(a1==b1){
   console.log('a1=b2');
}
//this will be false because this will also check type
if(a1===b1){
   console.log('a1===b1');
}

