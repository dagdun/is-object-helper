# is-object-helper

```javascript
var obj = [{id: 123, name: "test"}];
console.log(obj[0].id); // 123
```

```javascript
var obj = {};
console.log(obj[0].id); // crashed program
```

```javascript
var is = require("is-object-helper");
var obj = {};
console.log(is(obj, "[0].id", null); // null
```
