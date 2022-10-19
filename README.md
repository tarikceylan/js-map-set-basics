# JavaScript Map & Set

This is a personal JavaScript Map & Set study repository. For more info about Map & Set, visit [Map and Set](https://javascript.info/map-set)

## Map

**Map** is a collection of key-value pairs, just like an **Object**. The main difference is that **Map** allows **keys of any type**.

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
let keyIterable = map.keys();
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

- `map.entries` returns in iterable for key-value pairs

```javascript
let pairsIterable = myMap.entries();
for (pairs of pairsIterable) {
  console.log(pairs);
}
```
