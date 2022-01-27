'use strict';

// Coding Challenge #2

const calcAverageHumanAge = function (arr) {
  //1. Calculate dog age in human years
  const dogAgeInHumanYrs = arr.map(
    age => (age = age <= 2 ? age * 2 : 16 + age * 4)
  );
  console.log(dogAgeInHumanYrs);

  //2. Exclude all dogs below 18 human yrs old
  const filterDog = dogAgeInHumanYrs.filter(age => age > 18);
  console.log(filterDog);

  //3. Calculate the average human age of all adult dogs
  const aveAllAge =
    filterDog.reduce((acc, age) => (acc += age), 0) / filterDog.length;
  console.log(aveAllAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Jonas Schmedtmann Implementation
/*

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // Other approach on getting average with reduce method
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3 (2+3)/2 = 2.5  ===  2/2+2/3 = 2.5

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

*/
