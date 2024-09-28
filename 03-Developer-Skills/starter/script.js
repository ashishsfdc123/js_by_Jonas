// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/**
 * Configure Prettier
 * Configure Global Snippets
 */

const x = 23;
if (x === 23) {
	console.log(23);
}

const calcAge = (birthYear) => 2024 - birthYear;
console.log(calcAge(1990)); //34

/**
 * Learn how to code
 * There should be clear goal at the beginning of learning
 * a lot of practice should be there
 * learn in group
 * dont loose motivation, dont be frustrated
 *
 * What we need to do:
 *
 * 1. Set a goal: specific, measureable, time based
 * 2. Always type code rather than copying
 * 3. Reinforce: After learning a new feature, implement it immediately
 * 4. Dont just complete a course as fast as possible
 * 5. Solve code challenges: codewars, leetcode
 * 6. Practicing coding a lot, not just follow code
 * 7. Never become frustrated with the quality of your code
 *          Clean code will come with spending more time
 * 8. You will never know everything in web development
 *          Its normal and acceptable to not know everything
 *
 */

/**
 * Problem Solving
 *
 * 1. Slow down, Calm down
 *
 * **** Take this 4 step solution to solve the issue
 * a. Understand the problem
 *      make sure you understand 100% what the problem is
 * b. Divide and Conquer Strategy:
 *      Break problem into sub-problems
 * c. Research:
 *      Done be afraid to research
 * d. write pseudo code before the actual code
 */

/**
 * How to research
 * Problem: company that builds thermometer.
 * given temperature of one day, calculate temperature amplitude.
 * Keep i ming that sometimes there might be a sensor error
 */
//1. Understand the issue: Temperature amplitude
//temperature amplitude: difference b/2 highest and lowest temp
//how to calculate the highest and lowest temp in array
//how to tackle sensor error: what to do for sensor error: ignore the error string in temperature\
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//2. Breaking into sub-problems
//find max, min values
//ignore error string from array
//calculate difference b/w max and min value in array

//3. Research: lets google for max and min value in js
const calcTempAmplitude = (temps) => {
	let max = temps[0];
	let min = temps[0];
	for (let i = 1; i < temps.length; i++) {
		console.log(typeof temps[i]);

		if (typeof temps[i] != 'number') {
			continue;
		}
		if (max < temps[i]) {
			max = temps[i];
		}
		if (min > temps[i]) {
			min = temps[i];
		}
	}
	return max - min;
};

const tempAmplitude = calcTempAmplitude(temperatures);
console.log(tempAmplitude);

/**
 * Second problem
 * How to merge two arrays
 */
//using Arrays.concat: returns a new array, nothing happens to original array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log('Concatenated array is: ' + arr3); //Concatenated array is: 1,2,3,4,5,6
const arr4 = [...arr1, arr2];
console.log('merge opertor array is: ' + arr4); //merge opertor array is: 1,2,3,4,5,6

/**
 * Debugging: Unexpected behavior is called bug
 * Bugs are completely normal in computer programming
 * Debugging is finding fixing the unexpected behaviour
 * First its important to identify where the bug is
 * Then replace the existing solution with working solution
 *
 * Identify(reproduce), find, fix, Prevent
 */

//Lets change the units to Kelvin for the temperature array

const measureKelvin = function () {
	const measurement = {
		type: 'temperate',
		unit: 'Celcius',
		value: prompt('Degrees celsius'),
	};
	//the prompt takes values in String format
	//this is bug that we will correct using type casting

	console.table(measurement);
	const kelvin = measurement.value + 273;
	return kelvin;
};
//input is 123
console.warn(measureKelvin()); //output is 123273

//lets rectify the bug
const measureKelvin1 = function () {
	const measurement = {
		type: 'temperate',
		unit: 'Celcius',
		value: prompt('Degrees celsius'),
	};
	//the prompt takes values in String format
	//this is bug that we will correct using type casting

	console.table(measurement);
	const kelvin = Number(measurement.value) + 273;
	return kelvin;
};
//input is 123
console.warn(measureKelvin1()); //output is 396

/**
 * Exercise
 * takes input as array
 * gives output as ...17 degree Celcius on day 1
 * ...21 degree celcius on day 2
 */
const temparr1 = [17, 21, 23];
const temparr2 = [12, 5, -5, 0, 4];

const printForecast = (temparr) => {
	for (let i = 0; i < temparr.length; i++) {
		console.log(`...${temparr[i]} degree Celcius in ${i + 1} days`);
	}
};
printForecast(temparr1);
printForecast(temparr2);
