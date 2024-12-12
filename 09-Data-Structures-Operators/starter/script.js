'use strict';

// Data needed for a later exercise
const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	order: function (startIndex, mainIndex) {
		return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
	},
	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta: ${ing1} ${ing2} ${ing3}`);
	},
};

/**
 * Descructuring: is the process of breaking large object into smaller objects
 * like taking elements of arrays and assigning directly to variables
 * For array descructuring we use [] brackets
 * for object descructuring we use {} braces
 *
 * Nothing happens to the original array
 */
const arr1 = [2, 3, 4];
const [a, b, c] = arr1;
console.table(a, b, c);

//lets descructure the restaurant object
const [first, second] = restaurant.categories;
console.log('the categories at line 45 are: ' + first + ' ' + second);

const [firstVal, secondVal] = restaurant.order(1, 2);
console.log(firstVal, secondVal); //Bruschetta Risotto

const nested = [2, 3, 4, [5, 6]];
const [i, , , j] = nested;
console.log(i, j); //2, [5,6]
const [a1, , , [b1, b2]] = nested;
console.log(b1, b2); //5,6

//setting default values for non existing values:
const [a3 = 1, b3 = 1, c3 = 1] = [8];
//Notice in array above only a3 can be assigned a value since there is only one value in the array
//however we have given default values of 1 to b3 and c3 and hence they will be be 1 when we print them to console.
console.log(a3, b3, c3); //8,1,1

/**
 * Destructuring Objects: Similar to arrays we can also destructure the objects
 * To destructure objects we use curly braces: {}
 * For objects, since it contains named properties, order does not matter
 *
 * for having variable names different from property names:
 * {property: newName}
 */
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
	name: restaurantname,
	openingHours: hours,
	categories: tags,
} = restaurant;
console.log(restaurantname, hours, tags);

/**
 * mutating object values
 * When we start anything with curly brace
 * js expects a code block
 */
let aa = 2;
let bb = 33;
let obj = {
	aa: 1,
	bb: 2,
};
//we have to use parenthesis because we are starting with {}
({ aa, bb } = obj);
console.log(aa, bb); //values are updated in variables to aa:1, bb:2

/**
 * The spread operator
 * used to expand/unpack array/objects
 *
 * Use Cases: Create Shallow copy of arrays
 * Merge two arrays together
 *
 * The spread operator works on all iterables
 * Iterables are things like strings, maps and sets, arrays
 * after ES 2018, the spread operator also started working with objects
 *
 * Objects are not iterables
 *
 * We can only use spread operator when we are building an array
 * Or we are passing value to any function
 * Even though objects are not iterables, the spread operator works with that as well
 */
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1]];
console.log(badNewArr); //[1, 2, 7, 8]

//ES6 way is:
const badNewArr1 = [a, 2, ...arr];
//we use the spread operator ...
//this will take out all the elements out of array
//and spread them in new array individually
console.log(badNewArr1); //[2, 2, 7, 8, 9]

//creating shallow copy of array
const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...mainMenuCopy, ...restaurant.starterMenu];
//Merged array is: Pizza,Pasta,Risotto,Focaccia,Bruschetta,Garlic Bread,Caprese Salad
console.log('Merged array is: ' + menu);

//Using spread operator on string
const str = 'Ashish';
const strArr = [...str];
console.log(strArr); //['A', 's', 'h', 'i', 's', 'h']

const ing = ['First', 'Second', 'Third'];
//Here is your delicious pasta: First Second Third
//we will spread the array in the below function call to orderpasta
restaurant.orderPasta(...ing);

//spread with objects
//works as shallow copy for top level objects
const mee4 = {
	name: 'ashish',
	rollno: 34,
};
const mee5 = { ...mee4, class: 'Salesforce' };
console.log(mee5);
mee5.name = 'test';
//the names will be different not same
console.log(mee5.name);
console.log(mee4.name);

/**
 * Rest Pattern and Params
 * exactly similar to spread operator ... 3 dots operator
 * Rest opertor is to pack elements into an array
 * spread because its on right side of equal operator
 * Rest when used on left hand side of the assignment operator
 * It is rest operator because it takes the rest of the elements
 * The rest pattern like others in the example below should always be the last in de-structuring
 * in one de-structuring assignment, there can only be one rest element
 *
 */
const arr4 = [1, 2, 3, 4, 5];
//others has to be the last element
const [x, y, ...others] = arr4;
console.log(x, y, others);

/**
 * Short circuiting
 * And && operator
 * || Operator
 *
 * 3 properties of logical operators
 *  ** use any data type
 *  ** return any data type
 *  ** do short circuiting
 *
 * if the first value is truthy value, the truthy value will be returned
 */

//since 3 is truthy value, 3 is returned
//this is short circuiting
//if the first value is falsy, the second operator is returned without short circuiting
console.log(3 || 'Jonas'); //3
console.log('' || 1); //1
console.log(true || 1); //true
console.log(null || 1);

/**
 * Nullish coalescing operator
 * works on idea of nullish values instead of falsy values
 * includes null or undefined rather than 0 or empty string(falsy values)
 */
const numGuest = 0;
const guests = numGuest ?? 10;
console.log('line 202::: ' + guests); //line 202::: 0

/**
 * Logical Assignment Operator
 * These are three new assignment operators introduced in 2021
 */
const rest1 = {
	name: 'Capri',
	numGuests: 20,
};

const rest2 = {
	name: 'La Piazza',
	owner: 'Kamal',
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

//assignment OR operator
//assigns value if the variable is falsy value
//will not work correctly in case value is already 0
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

//nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//And Assignment Operator
//assigns a new value to the variable if the value is truthy value
rest1.owner &&= '<And Assignment>';
rest2.owner &&= '<And Assignemnt>';
console.log(rest1);
console.log(rest2);

/**
 * The FOR OF Loop
 * This was introduced in ES6
 */
const newMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of newMenu) {
	console.log(item);
}

//getting index with for of loop
for (const item of newMenu.entries()) {
	console.log(item); //0"0, 1: "Focaccia"
}

/**
 * Enhanced Object Literals
 * Object Literal: objects created using curly braces is called object literal
 * ES6 introduced 3 ways to write objects
 *
 * **1: when key and value are same, only specifying key is fine
 * **2: writing methods: no longer a property needs to be created for a property: No need of function keyword or a new property for creating functions
 * **3: Property names can be manipulated in square brackets instead of literally writing those names
 */
const loan = function () {
	console.log('I am in loan function');
};

const newObjectLiteral = {
	name: 'Ashish',
	loan,
	process(amount) {
		console.log('Loan will be processed for :' + amount);
	},
	fee: ['legal', 'domain'],
	paid: {
		legal: 2000,
		domain: 1000,
	},
};
newObjectLiteral.loan(); //I am in loan function
newObjectLiteral.process(200000); //Loan will be processed for :200000
const feePaid = newObjectLiteral.paid[newObjectLiteral.fee[0]];
console.log('feePaid is: ' + feePaid); //feePaid is: 2000

/**
 * Optional Chaining using the ? operator
 * get opening hours of the restaurant for mon
 * which actually does not exists in the object
 */
//get opening housr for monday
//which does not exist in the restaurant object
//if there are many properties which may not exist in object
//we use optional chaining which will return undefined immediately
//and error will not be thrown

//console.log(restaurant.openingHours.mon.open); //error

//check if mon exists on restaurant.openingHours property
//if does not exist this will return undefined
console.log(restaurant.openingHours.mon?.open); //undefined
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//lets find out if restaurant is open or closed on these days
for (const day of days) {
	console.log(day);
	const open = restaurant.openingHours[day]?.open ?? 'Closed';
	console.log(`On ${day} we open at ${open}`);
}
//Optional Chaining for Methods
console.log(restaurant.order?.(0, 1) ?? 'Method Does not Exist'); //['Focaccia', 'Pasta']
console.log(restaurant.orderSome?.(0, 1) ?? 'Method Does not Exist'); //Method Does not Exist

//Optional Chaining even works on Arrays
const users = [{ name: 'Ashish', email: 'ashish@hello.io' }];
console.log(users[0]?.name ?? 'Name does not exist'); //Ashish

/**
 * Looping Objects:
 * Over names, over values or over both
 * names are also called properties
 */

//names: Object.Keys
for (const day of Object.keys(openingHours)) {
	console.log(day); //thu, fri, sat
}
//values: Object.Values
const values = Object.values(restaurant.openingHours);

//name value pair: Object.entries()
for (let day of Object.entries(restaurant.openingHours)) {
	const [key, { open, close }] = day;
	console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/**
 * Sets in Javascript
 * set is just a collection of unique values.
 * Can have values of mixed data type
 * Can never have duplicates
 * Sets are also iterables
 */
const ordersSet = new Set([
	'Pasta',
	'Pizza',
	'Pizza',
	'Maggi',
	'Sweet Corn',
	'Pasta',
]);
console.log(ordersSet);

//to check if a value exists in set we use the has method
//this has method is similar to includes method in arrays
console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('Bread')); //false

//add: put new value in the set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); //Garlic bread will be added only once

//delete: remove something from set
ordersSet.delete('Garlic Bread');

//size: no of elements in Set
//size is property similar to length
const setSize = ordersSet.size;
console.log(setSize); //4

//retrieve something from set: this is not index based
//no way of getting value out of a set
//if all values are unique and the order is not determined
//if we want to retrieve values, array is better option

//clear: remove all elements from set

//looping over the set
for (const order of ordersSet) {
	console.log(order);
}

/**
 * Use cases:
 * 1. Remove dupes from any array or store unique values
 */
const staff = ['waiter', 'chef', 'waiter', 'Manager', 'chef'];
//lets find out the unique positions
const positions = new Set(staff);
console.log(positions); //{'waiter', 'chef', 'Manager'}

//converting set to array using spread operator
const uniquePositionsArr = [...positions];
console.log(uniquePositionsArr); //['waiter', 'chef', 'Manager']

/**
 * Map: a data structure to map values to keys
 */
//set: set any key value pair
//set does not just adds value to map but also returns the map
//we can also chain multiple set method on the map
//boolean can also be used as key
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');
const updatedMap = rest.set(true, 'Indian Samosa');
console.log(updatedMap);

//get: retrieve value with a key
//when we pass the key, the data type matters
//'true' is not similar to true
console.log(rest.get(true)); //Indian Samosa
console.log(rest.get(1)); //Firenze Italy

//has: if map contains certain key
//checking if map has key named 1 true
console.log('checking if map has key named 1 ' + rest.has(1));

//size: check the size of map
console.log(rest.size); //3

//clear: remove all elements from map
rest.clear();
console.log(rest); //empty map

//using array as map key
rest.set([1, 2], 'Array as Key');
console.log(rest);

//but we cannot get the value using the same array
//rest.get([1,2]) will not work
//need to pass the same object to both get and set
const arrKey = [1, 2];
rest.set(arrKey, 'Key is array');
console.log(rest.get(arrKey)); //Key is array

//Map creation with multiple arrays
const question = new Map([
	['question', 'What is the best Programming Language'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'Javascript'],
	['correct', 3],
	[true, 'Correct'],
	['false', 'Try Again'],
]);
console.log(question);

//converting object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Iterating a Map
for (const [key, val] of question) {
	if (typeof key == 'number') {
		console.log(`key is ${key} and value is ${val}`);
	}
}

//Convert Map to array
//de-structuring will help here
//will return an array of arrays of key value pairs
console.log([...question]);

//Arrays vs sets
//when we need a simple list of values
//Arrays: can contain dupes, and data manipulation is required
//Sets: Unique values, high performance, only storage is main objective
//sets are 10 times faster than arrays

//Objects vs maps
//whenever we need key value pairs we use Objects or Maps
//Maps are better performant
//maps are easy to manipulate and the keys can be of any type
//objects are easier to write and get using . or [] notation

/**
 * Working with String and String Methods
 */
const airline = 'Air India';
const plane = 'Indigo';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

//length
console.log(airline.length); //9

//methods
//indexOf: gives the position at which the certain letter is present
//indexOf: gives first occurrence only
console.log('Position of I in airline var is: ' + airline.indexOf('I')); //4

//lastIndexOf: gives last index of the char in the string
console.log(airline.lastIndexOf('i')); //7

//slice: 0 based breaking of string
//takes input as a index from where to start slicing
//can also take second parameter where to end the slicing
//does not changes the current string
//the result has to be stored in a new variable
//can also take input in negative numbers: will start from the end
console.log(airline.slice(4)); //India
console.log(airline.slice(4, 7)); //Ind

//toLowerCase: changes the case
//toUpperCase: changes the case to Upper Case
console.log(airline.toLowerCase()); //air india
console.log(airline.toUpperCase()); //AIR INDIA

//trim: to trim the whispaces from front and the end
console.log(airline.toLowerCase().trim()); //air india

//replace(replaceThis, replaceWith)
//replaces only first occurrence
const priceDollar = '12,345$';
const priceWithHash = priceDollar.replace('$', '#');
console.log(priceWithHash); //12,345#

//regular expression to replace all occurrences of a char
const thisString = 'door gate door gate';
console.log(thisString.replace(/door/g, 'gate')); //gate gate gate gate

//Methods returning booleans: startsWith, includes, endsWith
console.log(plane.includes('Air')); //false
console.log(plane.startsWith('I')); //true
console.log(plane.endsWith('go')); //true

//split: allows to split string into multiple parts
//this is based on divider string
const str123 = 'a+very+nice+String';
const splitter = '+';
const splitArr = str123.split(splitter);
console.log(splitArr);

//padding: padding means to add characters to the string
//until a desired length is achieved
const message = 'Go to gate 23';
console.log(message.padStart('25', '+')); //++++++++++++Go to gate 23
console.log(message.padEnd(25, '-')); //Go to gate 23------------

//credit card masking
const maskCreditCard = function (num) {
	const str = num + ''; //converting to string from number
	const last = str.slice(-4);
	return last.padStart(str.length, '*');
};
console.log(maskCreditCard(1234567812345678)); //************5678

//repeat: repeats the same string multiple times
const message2 = 'Bad weather.... All departures delayed';
//Bad weather.... All departures delayedBad weather.... All departures delayedBad weather.... All departures delayedBad weather.... All departures delayedBad weather.... All departures delayed
console.log(message2.repeat(5));
