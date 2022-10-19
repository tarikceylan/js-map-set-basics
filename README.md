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

`Map` can use `Objects` as keys.

```javascript
let john = { name: 'John' };
let userAgeMap = new Map();
userAgeMap.set(john, 27);

console.log(userAgeMap.get(john));
```
