//Assign a new Map instance to 'myMap' variable
const myMap = new Map();

//.set(key, value) method is used for populating the map with key-value pairs
myMap.set('firstName', 'John');

//Unlike objects, keys can be assigned any values when working with JavaScript Maps
myMap.set(true, 'true'); //key is a boolean value and value is string 'true'
myMap.set(1, '1'); //key is a number value and value is number '1'
myMap.set(2, 2); //key and value can also be the same type.

//.get(key) method is used for getting values assigned to given 'key'. Returns undefined if key doesn't exist in the Map
myMap.get(true); //returns string 'true'
myMap.get('firstName'); //returns string 'John'
myMap.get(2); //returns number 2

//.has(key) method is used to check if key exists in the Map. Returns true or false accordingly
myMap.has('firstName'); //returns true
myMap.has('lastName'); //returns false

//.delete(key) method is used to remove the element with the given key
myMap.delete(2); //returns true if an element is found and deleted

//.clear() method is used to remove all elements from the map
myMap.clear();

//.size property returns the current element count in the map
myMap.size;
