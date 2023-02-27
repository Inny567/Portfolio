'use strict';

// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,

//   movementsDates: [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2020-05-08T14:11:59.604Z',
//     '2020-07-26T17:01:17.194Z',
//     '2020-07-28T23:36:17.929Z',
//     '2020-08-01T10:51:36.790Z',
//   ],
//   currency: 'EUR',
//   locale: 'pt-PT', // de-DE
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,

//   movementsDates: [
//     '2019-11-01T13:15:33.035Z',
//     '2019-11-30T09:48:16.867Z',
//     '2019-12-25T06:04:23.907Z',
//     '2020-01-25T14:18:46.235Z',
//     '2020-02-05T16:33:06.386Z',
//     '2020-04-10T14:43:26.374Z',
//     '2020-06-25T18:49:59.371Z',
//     '2020-07-26T12:01:20.894Z',
//   ],
//   currency: 'USD',
//   locale: 'en-US',
// };

// const accounts = [account1, account2];

// /////////////////////////////////////////////////
// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');

// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

const inputLoginPin = document.querySelector('.input--pin');
const inputLoginUsername = document.querySelector('.input--user');
const logIn = document.querySelector('.login');
const signUp = document.querySelector('.signup');
const btnOpenSignUp = document.querySelector('.sign-up');
const btnOpenLogIn = document.querySelector('.log-in');
const btnCloseSignUp = document.querySelector('.close-signup');
const btnCloseLogIn = document.querySelector('.close-login');
const overlay = document.querySelector('.overlay');

// const btnSignIn = document.querySelector('.log--in');

// let currentAccount;

const openLogIn = function () {
  btnOpenLogIn.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openSignUp = function () {
  btnOpenSignUp.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeSignLog = function () {
  btnOpenLogIn.classList.add('hidden');
  btnOpenSignUp.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeLogIn = function () {
  btnOpenLogIn.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeSignUp = function () {
  btnOpenSignUp.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeOverlay = function () {
  overlay.classList.add('hidden');
  btnOpenSignUp.classList.add('hidden');
  btnOpenLogIn.classList.add('hidden');
};

logIn.addEventListener('click', openLogIn);

btnCloseLogIn.addEventListener('click', closeLogIn);

signUp.addEventListener('click', openSignUp);

btnCloseSignUp.addEventListener('click', closeSignUp);

overlay.addEventListener('click', closeOverlay);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (
      !btnOpenLogIn.classList.contains('hidden') ||
      !btnOpenSignUp.classList.contains('hidden')
    ) {
      closeSignLog();
    }
  }
});

// btnSignIn.addEventListener('click', function (e) {
//   currentAccount = accounts.find(
//     (acc) => acc.username === inputLoginUsername.textContent
//   );
//   if (currentAccount?.pin === inputLoginPin.textContent) {
//     containerApp.classList.remove('.hidden');
//     overlay.classList.remove('.hidden');
//   }
// });
// const updateUI = function (acc) {
//   // Display movements
//   displayMovements(acc.movements);

//   // Display balance
//   calcDisplayBalance(acc);

//   // Display summary
//   calcDisplaySummary(acc);
// };

// logIn.addEventListener('click', function (e) {
//   // Prevent form from submitting
//   e.preventDefault();

//   currentAccount = accounts.find(
//     (acc) => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // Display UI and message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }`;
//     containerApp.style.opacity = 100;

//     // Clear input fields
//     inputLoginUsername.value = inputLoginPin.value = '';
//     inputLoginPin.blur();

//     // Update UI
//     updateUI(currentAccount);
//   }
// });
