// Creating a new Set
const mySet = new Set();

// Add Values To The Set.
// Set Values can be any type both primitive and object references
const myNum = 42;
const isAlive = true;
const john = { name: 'John' };
const cities = ['Paris', 'Sydney', 'Madrid', 'Istanbul'];

mySet.add(myNum);
mySet.add(isAlive);
mySet.add(john);
mySet.add(cities);

console.log(mySet); //returns the set with values

// Loop Over A Set
//for..of
for (let value of mySet) {
  console.log(value);
}

//forEach
mySet.forEach((value) => console.log(value));

// Keys
mySet.keys();

// Values
mySet.values();

// Entries
mySet.entries();

// Get Element Count (size) Of The Set
console.log(mySet.size); //returns 4

// Remove Value From The Set
mySet.delete(cities);

console.log(mySet); //returns the set without cities array

// Check if a given value exists in the Set
mySet.has(myNum);

// Remove all Elements in Set
mySet.clear();
