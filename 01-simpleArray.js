'use strict';

// Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice - Returns array starting element 2
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); //2-3
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2)); //1-2 only
console.log(arr.slice()); //Shallow copy
console.log([...arr]); //Shallow copy also

// Splice - Same as slice, but changes the original array
// console.log(arr.splice(2)); // The extracted array is removed from the original array.
arr.splice(-1); // Removes the last element
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse - changes the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2);

// Concat - combine 2 arrays
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // Destructuring method, same as concat

// Join - returns string with the separator
console.log(letters.join(' - '));
