# deep-equal
---
> Check if two arrays, objects, numbers or strings are equal.


### Install
---
Install with [npm](https://www.npmjs.com/):
```shell
$ npm install --save deep-equal
```

### Usage
```javascript
var isDeepEqual = require("deep-equal");

console.log(isDeepEqual([1, 2, 3], [1, 2, 3]));
// => true

console.log(isDeepEqual({ key1: "val1" }, { key1: "val1" }));
// => true

console.log(isDeepEqual({ key1: 1 }, { key1: "1" }));
// => false

console.log(isDeepEqual(1, 2));
// => true
```

### License
---

Released under the [MIT License](https://github.com/koraygocmen/deep-equal/blob/master/LICENSE).
