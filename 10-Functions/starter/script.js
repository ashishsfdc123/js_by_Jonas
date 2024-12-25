'use strict';

const bookings = [];
const createBooking = function (flightNum, numPassengers, price) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log('boking object is: ' + booking);
  bookings.push(booking);
};

createBooking('LH123', 50, 4500);

//booking with default parameter
const bookingsDefaultParam = [];
const createBookingDefaultParam = function (
  flightNum = 'LH1111',
  numPassengers = 50,
  price = 50000
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookingsDefaultParam.push(booking);
};
createBookingDefaultParam(undefined, undefined, undefined);
/*
flightNum: "LH1111"
numPassengers: 50
price: 50000
*/
console.log(bookingsDefaultParam);

/**
 * Passing arguments to functions
 * passing by value vs passing by reference
 * How primitives and objects works in context of functions
 * When we pass object to a function, what is copied is just the reference of the object in heap
 * There can be consequences of this approach(passing objects to functions)
 * javascript has only pass by value. There is no pass by reference
 *
 */
const flight = 'LH234';
const ashish = {
  name: 'Ashish',
  passport: 123456,
};
const checkin = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;
  if (passenger.passport === 123456) {
    alert('Check In');
  } else {
    alert('Wrong Passport');
  }
};
checkin(flight, ashish);
console.log(flight); //LH234
console.log(ashish); //name is changed to Mr Ashish from just Ashish

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(ashish);
console.log(ashish.passport);

/**
 * First class vs higher order functions
 * Functions are just another type of object
 * They can have other methods associated with them
 * First class functions are just similar to objects
 *
 * Higher order functions
 * A functions that receives another function an an argument
 * or a functions that returns a new function
 */

//first class function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
console.log(oneWord('This is Hello World')); //thisishelloworld

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher order function
const transformer = function (str, fn) {
  console.log('Original String: ' + str);
  //Original String: Javascript is the best!
  console.log(`Transformed String :${fn(str)}`);
  //Transformed String :JAVASCRIPT is the best!
  console.log(`Transformed by: ${fn.name}`);
  //Transformed by: upperFirstWord
};
transformer('Javascript is the best!', upperFirstWord);

//functions returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Ashish');
greeterHey('Jonas');

//call and apply methods
const airIndia = {
  airline: 'Air india',
  iataCode: 'AI',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a set on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

console.log('Call and Apply Methods line no 127');
airIndia.book(123, 'Ashish');
//Ashish booked a set on Air india flight AI 123
airIndia.book(234, 'Jonas');
//Jonas booked a set on Air india flight AI 234
console.log(airIndia.bookings);

const vistara = {
  airline: 'Tata Vistara',
  iataCode: 'New Delhi',
  bookings: [],
};

//copy the book method of air india into the const book
const book = airIndia.book;
//call method
//takes first input as object, and rest as the arguments of the method
//the first input(object) will behave as this keyword
book.call(vistara, 23, 'Sarah Williams');
//Sarah Williams booked a set on Tata Vistara flight New Delhi 23

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 34, 'Kevin Jones');
//Kevin Jones booked a set on Swiss Airlines flight LX 34

//Apply method: generally not used in modern javascript
//similar to call method
//takes input as object and a second argument as array
const flightData = [45, 'George Cooper'];
book.apply(swiss, flightData);
//the below call is also similar
//book.call(swiss, ...flightData)
//George Cooper booked a set on Swiss Airlines flight LX 45

//Bind Method: does not immediately call the function
//returns a new function
//bind function of one object to another object
//this points to the argument passed to the bind method
const bookSwiss = book.bind(swiss);
bookSwiss(45, 'Steven Williams');
//Steven Williams booked a set on Swiss Airlines flight LX 45

//With Event Listeners, this will point to the DOM element
//to solve this issue
//when we need to pass the object function as callback to event listener
//we use the bind method, so that this points to object and not DOM
airIndia.planes = 300;
airIndia.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', airIndia.buyPlane.bind(airIndia));
//{airline: 'Air india', iataCode: 'AI', bookings: Array(2), planes: 300
//301 for line no 178

//partial application of bind
//we can preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); //123

//Immediately invoked function expressions
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This is IIFE');
})();

//Closures:
//we dont need to create, this happens automatically
//securebooking execution context is created
//after returning, the EC of secure booking is removed
//but variable environment remains, and is transferred to heap from stack
//passenger count is still reachable by inner function when called separately
//this is possible because of closure
//A closure gives a function access to all the variables of its parent function
//even after that parent function has returned.
//The function keeps a reference to its outer scope, which preserves the scope chain throughout time

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log('Passenger Count is: ' + passengerCount);
  };
};
const booker = secureBooking();
booker(); //Passenger Count is: 1
booker(); //Passenger Count is: 2
booker(); //Passenger Count is: 3
//lets explore what the booker function contains
console.dir(booker);

//More Closure Examples
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f(); //46
console.dir(f);
//Re-Assigning function f: scope contains var a
h();
f(); //1554
console.dir(f); //score contains var b

//Example 2
const boardPasengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait}`);
};
boardPasengers(180, 3);
//Will start boarding in 3
//After 3 seconds: We are now boarding all 180 passengers
//After 3 seconds: There are 3 groups each with 60 passengers
