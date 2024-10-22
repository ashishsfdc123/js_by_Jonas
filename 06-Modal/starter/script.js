'use strict';
console.log('Hello from Modal Project');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//when there are multiple elements, it gives only first element

//So lets use querySelectorAll to get all button with same class
//The output is not array but node list
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++) {
	//when we iterate, the node becomes element
	console.log('Text content of each modal: ' + btnsOpenModal[i].textContent);
}

for (let i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener('click', function () {
		console.log('Button clicked');
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');
	});
}

btnCloseModal.addEventListener('click', function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
});

/**
 * Handling an escape event: Keypress event
 * Whenever an event happens like key press or click
 * js generates an internal object which contains info about the event
 */
document.addEventListener('keyup', function (event) {
	console.log(event.key);
	console.log(`Event target is: ${event.target}`);

	if (event.key === 'Escape') {
		if (!modal.classList.contains('hidden')) {
			modal.classList.add('hidden');
			overlay.classList.add('hidden');
		}
	}
});
