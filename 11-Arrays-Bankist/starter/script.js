'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

containerMovements.innerHTML = '';
const displayMovements = function (movements) {
  movements.forEach(function (mov, i, arr) {
    console.log(mov);
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const transaction = mov > 0 ? 'deposit' : 'withdrawl';
    if (mov > 0) {
    } else {
    }
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${transaction}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
//slice method: take part of array without modifying original array
console.log(arr.slice(2)); //c,d,e
console.log(arr.slice(2, 4)); //c,d
console.log(arr.slice(-1)); //e
console.log(arr.slice(-2)); //d,e
//creating shallow copy of array
console.log(arr.slice()); //['a', 'b', 'c', 'd', 'e']
//spread operator to create new array
console.log([...arr]); //['a', 'b', 'c', 'd', 'e']

//splice: almost same as slice
//it does changes the original array
//mutates original array
console.log(arr.splice(2)); //['c', 'd', 'e']
console.log(arr); //['a', 'b']
console.log(arr.splice(-1)); //['b']

//REVERSE: reverses the order
//mutates the original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //['f', 'g', 'h', 'i', 'j']

//CONCAT: add two arrays
//does not mutate original array
const letters = arr.concat(arr2);
console.log('Concatenated array is: ' + letters);
//Concatenated array is: a,f,g,h,i,j
console.log([...arr, ...arr2]);

//JOIN: creates string from array
//takes input as string and using that input joins the array elements
console.log(letters.join('-')); //a-f-g-h-i-j

//AT: takes index as argument
//and returns value at that index
const arr3 = [23, 11, 64];
console.log(arr3[0]); //23
console.log('At method ' + arr3.at(0)); //At method 23
//get last element
console.log(arr3[arr3.length - 1]); //64
console.log(arr3.slice(-1)[0]); //64
console.log(arr3.at(-1)); //64
console.log('Jonas'.at(0)); //J

//ForEach loop
//cannot break out of the foreach loop
//always loop over entire array
//if you need to break, always use for of loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//for-of loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

//forEach(element, index, array)
movements.forEach(function (movement, index, array1) {
  if (movement > 0) {
    console.log(`You deposited ${movement} at ${index}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)} at ${index}`);
  }
});

//Foreach with maps and sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`Key value pair is: ${key} => ${value}`);
});
//Key value pair is: USD => United States dollar
//Key value pair is: EUR => Euro
//Key value pair is: GBP => Pound sterling

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); //{'USD', 'GBP', 'EUR'}

//key and value is same in sets when using forEach
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key} => ${value}`);
});
//USD => USD
//GBP => GBP
//EUR => EUR

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = [...dogsJulia];
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach(function (val, index) {
    if (val >= 3) {
      console.log(
        `Dog Number ${index + 1} is an adult and is ${val} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//Map Filter and Reduce

//Map: similar to forEach but creates brand new array
//loops over array applies a callback function to each iteration
//Filter: filters the array values based on certain condition
//reduce: one single value is returned: example all elements are added

//Map Example
const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movementsUSD);
//[220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);
//[220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

//map using arrow functions
const movementsUSDarrow = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDarrow);
//[220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

const movementsDescriptions = movements.map((mov, i, arr) => {
  return `You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)} at ${i}`;
});
console.log(movementsDescriptions);
//['You deposited 200 at 0', 'You deposited 450 at 1', 'You withdrew 400 at 2', 'You deposited 3000 at 3', 'You withdrew 650 at 4', 'You withdrew 130 at 5', 'You deposited 70 at 6', 'You deposited 1300 at 7']

//username should be stw
console.log(accounts);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((element, i, arr) => {
        return element[0];
      })
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);

//Filter Method: return a boolean condition
//deposites array
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(deposits); //[200, 450, 3000, 70, 1300]

const depositsArrow = movements.filter(mov => mov > 0);
console.log(depositsArrow); //[200, 450, 3000, 70, 1300]

//create an array of withdrawls using filter
const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawls); //[-400, -650, -130]

//reduce: calculate total
//first param is accumulator
//second param is current value
//the last parameter before the closing function is the initial value for acc
//if we dont pass, its 0 by default
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration number ${i}=> ${acc}`);
  return acc + cur;
}, 0);
console.log(balance); //3840

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
  labelBalance.textContent = `${balance} EUR`;
};
//calcDisplayBalance(account1.movements);

//Maximum value of movements
const max = movements.reduce((acc, cur, i, arr) => {
  if (acc < cur) {
    acc = cur;
  }
  return acc;
}, movements[0]);
console.log(max); //3000

//chaining methods
const totalDepositsUSD = movements
  .filter(mov => {
    return mov > 0;
  })
  .map(mov => {
    return (mov = mov * eurToUsd);
  })
  .reduce((acc, mov) => {
    return (acc = acc + mov);
  }, 0);

console.log(totalDepositsUSD); //5522.000000000001

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EURO`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${out} EURO`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * 1.2) / 100)
    .filter(mov => mov > 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};
//calcDisplaySummary(account1.movements);

//The find method
//loops over array
//acceps a condition, callback function
//returns the first element only
const firstNegative = movements.find(mov => mov < 0);
console.log(firstNegative); //-400

const account = accounts.find(acc => acc.owner == 'Sarah Smith');
console.log(account); //account is returned where owner is Sarah Smith

//Event Handlers for Login
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Login Clicked');
  currentAccount = accounts.find(acc => {
    console.log(
      'acc username: ' +
        acc.username +
        ' input username: ' +
        inputLoginUsername.value
    );
    return acc.username === inputLoginUsername.value;
  });
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(currentAccount);
    //Display UI and Mesage
    labelWelcome.textContent = `Welcome Back ${
      currentAccount?.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //clear the input fields
    //inputLoginUsername = inputLoginPin.value = '';
    //inputLoginPin.blur();
    updateUI(currentAccount);
  }
});
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  if (
    amount > 0 &&
    receiverAcc &&
    amount < currentAccount.balance &&
    currentAccount.username != receiverAcc?.username
  ) {
    console.log('Amount lesser than balance');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

const calcDisplayBalance1 = function (acc) {
  const balance = acc.movements.reduce((accm, mov) => {
    return (accm = accm + mov);
  }, 0);
  console.log(balance);
  labelBalance.textContent = balance;
  acc.balance = balance;
  console.log(acc);
};

const updateUI = function (account) {
  displayMovements(account.movements);
  //Display Balance
  calcDisplayBalance1(account);
  //Display Summary
  calcDisplaySummary(account.movements);
};

//findIndex Method
//works similar to find, but returns the index not the element
//closing account means deleting the account from accounts array
btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Delete Account Clicked');
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(acc => {
      return acc.username == currentAccount.username;
    });
    console.log(index);
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
});

//findLast, findLastIndex
//findLast: returns the last matching element
//findLastIndex: returns the last index of matching element
console.log(movements);
//[200, 450, -400, 3000, -650, -130, 70, 1300]
const lastWithdrawl = movements.findLast(mov => mov < 0);
console.log(lastWithdrawl); //-130

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 1000
);
console.log(latestLargeMovementIndex); //7 which is 1300
console.log(
  `Your latest large movemnt was ${movements[latestLargeMovementIndex]}`
); //1300

//Some and Every
//lets look at includes which returns true or false
//based on value provided
//this is based in equality
console.log(movements.includes(-130)); //true
//what if we wanted to test based on condition
//check for any positive movement and return true of false
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); //true

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    //Add the movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//Every
//when every element in array satisfies the passed in condition
//every method returns true
console.log(movements.every(mov => mov > 0)); //false

//flat and flatMap
//flat: goes one level deep only
//by default the depth is 1
//we can specify depth also to work with multi D arrays
const arrnew = [[1, 2, 3], [4, 5, 6], 7, 8];
//lets take out every element
//and put in new array as elements rather than arrays
console.log(arrnew.flat()); //[1, 2, 3, 4, 5, 6, 7, 8]

const newarr1 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(newarr1.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]

//lets get movements of each account from the accounts array
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log('overall balance is: ' + overallBalance); //17840

//flatMNap: combines map and flat together
//this only goes one level deep
//we cannot even use depth argument
const overallBalance2 = accounts.flatMap(acc => acc.movements);
console.log(overallBalance2);

//Sorting Arrays
//sort method: this sorts based on strings and not numbers
//first converts to strings and then sorts
//mutates the original array
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //['Adam', 'Jonas', 'Martha', 'Zach']
console.log(movements.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70]
//the result is not sorted properly
movements.sort((a, b) => {
  if (a > b) {
    return 1; //switch order
  } else {
    return -1; //keep order
  }
});
console.log(movements); //[-650, -400, -130, 70, 200, 450, 1300, 3000]
//now this is properly sorted

//Array Grouping: Object.groupBy(array, callbackfunction)
//we do not use method, but use Object class to do the gropuings
console.log(movements);
const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawl'
);
console.log(groupedMovements);
//deposits: : (5) [70, 200, 450, 1300, 3000]
//withdrawl: : (3) [-650, -400, -130]

//Creating and filling arrays programatically
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array([1, 2, 3, 4, 5, 6, 7]));
const x = new Array(7);
console.log('created array x is: ' + x); //created array x is: ,,,,,,
//Fill method: fill the entire array with a particular value
//fill(value, beginAtIndex, endAtIndex)
//x.fill(5);
//console.log(x); //[5, 5, 5, 5, 5, 5, 5]
x.fill(5, 3, 6);
console.log(x); //[empty × 3, 5, 5, 5, empty]

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y); //[1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z); //[1, 2, 3, 4, 5, 6, 7]

labelBalance.addEventListener('click', function (event) {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent)
  );
  console.log(movementsUI);
});

//Non Destructive Methods
//toReversed(), toSpliced(), toSorted()
//special and new: with(index, value)
const reversedMov = movements.reverse();
console.log(movements, reversedMov);
//both the arrays are reversed as reverse mutates the original array
const to_reversedMov = movements.toReversed();
console.log(to_reversedMov);
movements[1] = 2000;

const newMovements = movements.with(1, 1000);
console.log(newMovements);
//[3000, 1000, 450, 200, 70, -130, -400, -650]

//Which array methods to use
//depends on what we want to do
//to mutate, to make new copy, get index, get element
//check if array includes any value, want any new string
//to transform to value, to just loop over array

//To mutate
//this should be avoided as js is moving towards
//functional non destructive programming
//push, unshift, pop, shift, splice, reverse, sort, fill, sort

//a new array based on original
//map, filter, slice, with, flat, flatMap,
//toReversed, toSpliced, toSorted, concat

//Array Index
//indexOf, findIndex, findLastIndex

//Array Element
//find, findLast, at(get value based on index)

//know if array includes
//includes, some, every

//A new string
//join, spread operator

//To transform values
//reduce

//To loop over array
//forEach

//Grouping of array elements
//Object.groupBy

//creating a new Array
//Array.from(), new Array(length)
