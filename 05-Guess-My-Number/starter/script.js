'use strict';
//Start guessing...
console.log(document.querySelector('.message').textContent);

/**
 * DOM and DOM Manipulation
 * DOM stands for Document Object Model
 * Structured representation of HTML documents.
 * Allows js to access html elements and styles to manipulate them
 * Its DOM that sets the connection between HTML and JS
 * DOM is automatically created when document loads in browser
 * Its a tree structure also called DOM Tree containing parent child and sibling elements
 * the elements in DOM are called nodes
 * The parent of tree is document object itself
 * THe first child element of document is the HTML element
 * The HTML will have two child elements normally which are head and body
 * Inside head and body there will be more child elements
 * and the tree keeps getting deeper and denser
 * DOM and DOM manipulation is not part of JS, these are part of WEB API's
 * which are libarries that browsers implement so that JS and DOM can interact with each other
 * all this happens behind the scenes.
 * There is a DOM specification which browsers implements
 * Some other APIls are Timers Fetch API and many more
 */

/*
document.querySelector('.message').textContent = '!Guess Please';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//to get the value we use the value property
//to set the value also we use value property

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//Random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('The secret random number this time is: ' + secretNumber);

let score = 20;
let highscore = 0;
//set this random number in the hidden ?
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function (e) {
	console.log('click event called: ' + e);
	secretNumber = Number(document.querySelector('.number').textContent);
	let guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);
	score = Number(document.querySelector('.score').textContent);
	if (!guess) {
		displayMessage(' :( !!Please enter the guess number');
	} else if (guess === secretNumber) {
		displayMessage('Hurray Correct Number');
		document.querySelector('.score').textContent = score;
		document.querySelector('body').style.backgroundColor = 'green';
		document.querySelector('.number').style.width = '30rem';
		if (score >= highscore) {
			document.querySelector('.highscore').textContent = score;
			highscore = score;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? 'Its smaller' : 'Its greater');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('You lost the game');
			document.querySelector('.score').textContent = 0;
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('.number').textContent = secretNumber;
	displayMessage('Start Guessting');
	document.querySelector('.score').textContent = 20;
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.highscore').textContent = 0;
});

function displayMessage(messageContent) {
	document.querySelector('.message').textContent = messageContent;
}
