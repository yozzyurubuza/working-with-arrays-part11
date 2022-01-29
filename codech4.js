'use strict';

// Test Data

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const dogEatOkayAmount = function (obj) {
  return (
    obj.curFood <= obj.recommendedFood * 1.1 &&
    obj.curFood >= obj.recommendedFood * 0.9
  );
};

// 1. Calculate the recommended food portion and add it to the object as a new property

dogs.forEach(
  foodPortion => (foodPortion.recommendedFood = foodPortion.weight ** 0.75 * 28)
);
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little

const dogDetails = dogs.find(dogs =>
  dogs.owners.find(owners => owners === 'Sarah')
);

const sarahDog =
  dogDetails.curFood > dogDetails.recommendedFood * 1.1
    ? console.log(`Sarah's dog is eating too much`)
    : console.log(`Sarah's dog is eating too little`);

// 3. Create an array containing all owners of dogs who eat too much and vice versa

let ownersEatTooMuch = [],
  ownersEatTooLittle = [];

dogs.filter(val => {
  if (val.curFood > val.recommendedFood * 1.1) {
    return ownersEatTooMuch.push(val.owners);
  }
  if (val.curFood < val.recommendedFood * 0.9) {
    return ownersEatTooLittle.push(val.owners);
  }
});

ownersEatTooMuch = ownersEatTooMuch.flat();
ownersEatTooLittle = ownersEatTooLittle.flat();

// 4. Log a string to the console for each array created in #3

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console (true/false) whether there is any dog eating exactly the amount of food that is recommended

console.log(dogs.some(val => val.curFood === val.recommendedFood));

// 6. Log to the console (true/false) whether there is any dog eating an okay amount of food

console.log(dogs.some(val => dogEatOkayAmount(val)));

// 7. Create an Array containing the dogs that are eating an okay amount of food

const okayDog = dogs.filter(val => dogEatOkayAmount(val));

console.log(okayDog);

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in ascending order

const dogsCopy = Array.from({ length: dogs.length }, (_, i) => dogs[i]);

dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);

// Jonas Schmedtmann Implementation

/*
// 1.

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);

console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3.

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too much!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.

const checkEatingOkay = dog =>
  dog.curFood >= dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.

console.log(dogs.filter(checkEatingOkay));

// 8. 

const dogsSorted = dogs.slice().sort((a,b) => a.recFood - b.recFood);

console.log(dogsSorted);

*/
