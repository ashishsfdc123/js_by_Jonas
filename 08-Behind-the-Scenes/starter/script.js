'use strict';
console.log(
	'Javascript is High level Garbage Collected Interpreted or Just in Time Compiled Multi Paradigm Prototype Based Object Oriented First Class Functions Dynamic Single Threaded Non Block Event Loop Language'
);
//Features of javascript
//1. High Level
//2. Garbage Collected
//3. Interpreted or Just in Time Compiled
//4. Multi Paradigm: Paradigm is approach or mindset of structuring code
//Procedural
//OOP
//Functional Programming
//5. Prototype based: Prototype based Object Oriented Based language. Everything in js is Object except the primitives
//6. First Class Functions: functions are just like regular variables. We can pass functions as arguments and return a functions from another function
//7. Dynamic: Dynamically typed. We dont assign types to variables. The type is known only when js engine encounters them.
//8. Single Threaded: JS is single threaded language
//9. Non Blocking event loop: How js handles multiple tasks at same time. Js runs in just one thread. We need a way to handle multiple tasks at same time. We use event loop to execute the long running task

/**
 * What is JS engine
 * What is JS runtime
 *
 * JS engine is computer program that executes a js program
 * Every browser has its own js engine
 * The JS engine contains Call Stack and Heap
 * Call stack executes our code using execution context
 * Heap is unstructured memory pool which stores all object that our app needs
 *
 * How the code is compiled to machine code?
 * What is difference between compilation and interpretation:
 * Compilation: Entire code is converted to m/c code in just single step and then executed in CPU. Execution can happen after compilation
 *
 * Interpretation: Line by Line conversion of code to m/c code. Just happens when code is executed. Slower in comparison to compiled language.
 * Modern JS engine uses JIT compilation. Entire code is converted to m/c code and then executed immediately.
 *
 * 1. parsing: When code enters the JS engine, first thing that happens is parse the code which means to read the code. Code is convered to AST and save the tree into structured tree. AST is just representation of entire code.
 *
 * 2. Compilation: Generated AST is taken and then compiled to m/c code.
 *
 * 3. Execution: as part of JIT compilation, the compiled code is executed right away. This happens in call stack
 *
 * 4. Optimized: code is optimized during execution without stopping the code execution in call stack
 *
 * This compilation and optimization happens in some threads that we can access.
 *
 * Browser OR node is the runtime for JS
 * Runtime is a big box which includes all the things we need to run JS.
 * The heart of runtime is the JS engine.
 * Without the engine there is no runtime.
 * However the engine alone is nothing. We need web apis as well which are not part of the JS.
 * JS gets access to WEB APIS through the global window object.
 *
 * There is a callback queue as well which are event handlers, timers, intervals
 * Event Loop: pushes the callback functions to call stack and executes them. This is non blocking event loop that does not stop when a long running task is encountered.
 *
 * JS can exist outside of browser. but the web apis will not be available outside of the browser.
 *
 */

/**
 Execution Context and Call Stack
 Suppose our code is compiled and waiting execution.

 Global execution context is created(code not inside any function, top level code)

 THe code inside the functions gets executed only when the functions are called, not before that.

 Execution context is abstract concept. Environment in which js is executed. Its box that contains local var, arguments. JS always runs in execution context.

 There is always one global exeuction context in one js project.
 This is environment where top level code will be executed.
 Its the cpu processing compiled m/c code.

 Once the top level code is executed, functions will be called.

 Separate execution context will be created for functions.
 All the execution context make the call stack.

 **Whats exactly inside the execution context: variable environment like vars, functions arguments.
 **Scope Chain: to access variables located outside of the exeuction context of a function
 **Each exeuction context gets special keyword called this

 *********************
 The variable env, Scope chain and This keyword are created during the creation phase of the execution context.
 
 ********** Execution context for arrow functions do not get arguments objects and nor they get the this keyword.

 */

/**
 * Scope and scope chain
 * Scoping: controls how our variabels are organized and accessed by the JS engine.
 * Scoping answers where variables live and where can it be accessed
 * Lexical Scoping: is the Way var are organized and accessed. It means scoping is controlled by placement of functions and blocks in the code.
 *
 * Scope: space or env where a certain variable is declared. For a particular function, it will be the variable env stored in execution context of that particular function.
 *
 * Scope of variable: Where the variable can be accessed
 *
 * There are three scopes in js:
 * Global
 * Function
 * Block
 *
 * If there are two variables with same name, the current scope only matters.
 *
 * Global Scope: top level code. Outside of any function or block. These var are accessible anywhere in the program
 * Function Scope: Each function has its own scope. Also called Local Scope. Local variables live inside function. Outside function, these variables are not accessible.
 * Block Scope(ES6): Control Statement like if-else, for loop, while loop. switch case statements. everything in curly braces forms block. Block scope only applies to variables declared with let and const. var does not follow block scope and will attach to function or block scope.
 */

/**
 * Scope Chain: one scope inside another forms scope chain.
 * How can the js engine get the outer scope functions or global scope.
 * The JS engine has the ability to access the variables declared in outer scope.
 * This also applies to arguments of the functions as well.
 *
 * But the opposite is not true.
 * Parent scope cannot look down into the child scope.
 *
 * The order of declaration is what matters.
 * The order of function calls, or the execution context is not relevant to the scope chain.
 *
 *
 */

/**
 * Scoping in Action
 */

function calcAge(birthYear) {
	console.log('firstname is: ' + firstName);
	const age = 2024 - birthYear;

	function printAge() {
		const output = `You are ${firstName} and ${age} years old`;
		console.log(output);
		if (birthYear > 1988 && birthYear < 1996) {
			const str = `Oh, and you are a millenial, ${firstName}`;
			console.log(str);
		}
	}
	printAge();
	return age;
}

const firstName = 'Ashish';
calcAge(1989);

/**
 * Hoisting:
 * We learnt that the execution context contains three parts:
 * Variable env, the scope chain and the this keyword
 *
 * Lets take a look at variable environment.
 * In js there is a concept called hoisting: a way to use variable before even 	it is declared.
 * Behind the scenes the code is scanned for variable declaration before the code is executed. For each variable declared, a new property is created in the variable environment object.
 *
 *
 * *****function declarations: are hoisted. We can use the functions even before they are declared
 * ****** var declared with var keyword are hoisted: unlike functions, if we use any variable declared with var, we get undefined but we do not get any error.
 * ***** let and const are not hoisted. They are placed in Temporal Dead Zone. We get error if we try to use these variables before they are declared.
 *
 * ***** functions expression and arrow functions: depends if they are created using var or let or const. These behave the same way as variables.
 * If created with var, hoisted, but if created with let and const, not hoisted
 *
 * Accessing variables before declaring is bad practice. This is the use of temporal dead zone.
 *
 * ****** Why does hoisting exists????
 * So that we can use function declaration.
 */

/**
 * Hoisting with variables: var let and const
 */
console.log(me); //undefined
//console.log(job); //Ref error
//console.log(year); //Ref error
var me = 'JONAS';
let job = 'Programmer';
const year = 1989;

/**
 * Hoisting with functions
 * IF we use arrow functions with var keyword, it will be hoisted
 * but its value will be undefined because of hoisting
 */
console.log(addDeclaration(2, 3)); //5
//console.log(addExpr(2, 3)); //Ref Error
//console.log(addArrow(2, 3)); //Ref Error
function addDeclaration(a, b) {
	return a + b;
}
const addExpr = function (a, b) {
	return a + b;
};

const addArrow = (a, b) => a + b;

/**
 * Pitfall of hoisting
 */

//since numProducts is var, it will be hoisted
//but its value will be undefined which is falsy value
//and this will delete all the products
if (!numProducts) {
	deleteShoppingCart();
}
var numProducts = 10;
function deleteShoppingCart() {
	console.log('All products deleted');
}

/**
 * This keyword:
 * special var that is created for every execution context
 * Takes the value of the owner of the functions in which the this keyword is used
 * Its value is not static. Depends on how the function is called and assigned value only when the function is called.
 *
 * When we call the method(function in object), this points to the object containing the function
 *
 * In a simple function call this points to the window in strict mode else undefined(non strict mode)
 *
 * In arrow functions: arrow functions do not get their own this function. Instead the this keyword in arrow functions points to the surrounding function.
 * This is called the lexical this.
 *
 * Event Listener: the this keyword in the event handler will point to the DOM element which triggered the event.
 *
 * This never points to the function itself but the execution context in which the function is getting executed.
 */

/**
 * This keyword in practice
 */
console.log(this);

const calcAge1 = function (birthYear) {
	console.log(2024 - birthYear);
	console.log(this); //undefined. In simple function call this is undefined
};
calcAge1(1989);

//arrow function gets this of the surrounding function
//the surrounding of this arrow function is global context
// in gloabl context, the this points to window object
const calcAge2 = (birthYear) => {
	console.log(2024 - birthYear);
	console.log(this); //points to window object
};
calcAge2(1989);

const ashish = {
	birthyear: 1989,
	calcAge3: function () {
		//In an object, the this will point to the object
		//the reason why the this points to ashish is because
		//its the ashish object calling the calcAge3 4-5 lines below
		console.log(this);
		console.log(this.birthyear);
	},
};
ashish.calcAge3();

const matilda = {
	birthyear: 2017,
};
matilda.calcAge3 = ashish.calcAge3;
matilda.calcAge3();
