'use strict';

// Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//First element is index, Second is the value
//Can use continue / break to stop loop
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// forEach is a higher-order function
// Loop over the array, and execute the function each iteration
// Receive the current element as argument
// forEach also passes the index and the entire array we are using.
//First element is the value, Second element is the index, Third element is the entire array
//Cannot break or stop forEach loop
console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
