# JavaScript Map & Set

This is a personal JavaScript Map & Set study repository. For more info about Map & Set, visit [Map and Set](https://javascript.info/map-set)

## Map

`Map` is a collection of key-value pairs, just like an `Object`. The main difference is that `Map` allows **keys of any type**.

### JavaSript Map Methods & Properties

- `.set(key, value)` method inserts given key-value pair into created `Map`

- `.get(key)` method returns values assigned to the given key. Returns `undefined`
  if key doesn't exist in the `Map`

- `.has(key)` method checks if the given key exists in the `Map`. Retruns `true` or ``false` accordingly

- `.delete(key)` method removes the element with the given key

- `.clear()` method removes **all** elements from the `Map`

- `.size` property returns the current element count of the `Map`

### Objects As Keys In Map

`Map` can use objects as keys.

```javascript
let john = { name: 'John' };
let userAgeMap = new Map();
userAgeMap.set(john, 27);

console.log(userAgeMap.get(john)); //returns 27
```

Using objects as keys is one of the most notable and important `Map` features. The same does not count for `Object`. String as a key in `Object` is fine, but we can’t use another `Object` as a key in `Object`.

### Chaining

Every `map.set()` method returns the `Map` itself, so we can chain the calls.

```javascript
map.set('1', 'str1').set(1, 'num1').set(true, 'bool1');
```

### Iteration over Maps

- `map.keys()` returns an iterable for keys

```javascript
let keyIterable = myMap.keys();
for (key of keyIterable) {
  console.log(key); //logs keys of the map to the console
}
```

- `map.values()` returns an iterable for values

```javascript
let valuesIterable = myMap.values();
for (value of valuesIterable) {
  console.log(value); //logs values of the map to the console
}
```

- `map.entries()` returns in iterable for key-value pairs

```javascript
let pairsIterable = myMap.entries();
for (pairs of pairsIterable) {
  console.log(pairs); //logs key-value paris of the map to the console
}
```

- `Map` also has a `forEach()` method, similar to `Array`

```javascript
myMap.forEach((value, key, map) => {
  console.log(`Value: ${value}, Key: ${key}, Map: ${map}`);
});
```

### Creating Map From An Object

When we create a `Map` we can pass an iterable with key-value pairs. We can create a `Map` from an `Object` using `Object.entries()` built-in method which returns an array of key-value pairs exactly in the iterable type (an array in this case) we need.

```javascript
let tempObj = {
  firstName: 'Jane',
  age: 60,
};

const mapFromObj = new Map(Object.entries(tempObj));
console.log(mapFromObj); //logs the Map structure
console.log(`New Map Created from an Object: ${mapFromObj}`);
```

### Creating Object From A Map

We know that `Map` has `.entries()` method which returns iterable key-value pairs and which can bu used as the argument for built-in `Object.fromEntries()` method. That way, we can create an `Object` from an existing `Map`

```javascript
const objFromMap = Object.fromEntries(myMap.entries());
console.log(objFromMap);
console.log(`New Object Created From A Map: ${objFromMap}`);
```

We can also use map itself without `.entries()` method. `.fromEntries()` expect an iterable object as the argument and standart call for `Map` itself returns same key-value pairs as `.entries()` method.

```javascript
const objFromMap2 = Object.fromEntries(myMap);
console.log(objFromMap2);
console.log(`New Object Created From A Map: ${objFromMap2}`);
```

## Set
