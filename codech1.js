'use strict';

// Coding Challenge #1

//Test Data
const juliaData1 = [3, 5, 2, 12, 7];
const juliaData2 = [9, 16, 6, 8, 3];

const kateData1 = [4, 1, 15, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

// Create a function checkDogs
const checkDogs = function (dogsJulia, dogsKate) {
  //1. Create a shallow copy of dogsJulia
  const dogsJuliaCopy = dogsJulia.slice(1, -2);
  console.log(dogsJuliaCopy, dogsKateCopy);
  console.log(dogsJulia, dogsKate); // To confirm parameters weren't mutated

  // Refactoring
  const displayStudy = function (age, i) {
    const dogOrPuppy =
      age >= 3 ? `is an adult, and is ${age} years old` : `is still a puppy 🐶`;
    console.log(`Dog number ${i + 1} ${dogOrPuppy}`);
  };

  console.log('--- JULIA ---');
  dogsJuliaCopy.forEach(function (age, i) {
    displayStudy(age, i);
  });

  console.log('--- KATE ---');
  dogsKateCopy.forEach(function (age, i) {
    displayStudy(age, i);
  });
};

checkDogs(juliaData1, kateData1);
checkDogs(juliaData2, kateData2);

// Jonas Schmedtmann Implementation
/*
const checkDogs = function(dogsJulia, dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);

    // dogsJulia.slice(1,3);

    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);

    dogs.forEach(function(dog, i){
        if (dog >= 3){
            console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i+1} is still a puppy`);
        }
    })

}

checkDogs([3,5,2,12,7], [4,1,15,8,3]);
checkDogs([9,16,6,8,3], [10,5,6,1,4])
*/
