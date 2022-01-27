'use strict';

//forEach with Maps and Sets

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Value, Key, Entire Map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);

// Value, Value, Set
// Set has no index and key, so Key = value
// _ means a throwaway variable = useless
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${_}: ${value}`);
});
