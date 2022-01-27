'use strict';

// The Map Method

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

//Just like forEach method
//Need array as parameter
//Used a function (functional programming)
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

//Arrow Function - shorter code
// const movementsUSDArrow = movements.map(map => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

//Similar approach using for of loop
// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

//Similar approach using forEach loop
// console.log('---- FOREACH ----');
// movements.forEach(function (mov, i, arr) {
//     if (mov > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//       } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//       }
// });

console.log(movementsDescriptions);
