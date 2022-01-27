'use strict';

// The new at method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Get last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

//At method also works at strings
console.log('jonas'.at(0));
