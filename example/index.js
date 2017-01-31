var is = require("../index.js");

var obj1 = {
  level1: {
    level2: {
      name: "123",
    },
    id: 4
  }
}
console.log(is(obj1, "level1", "level1 default value"));
console.log(is(obj1, "level1.level2", "level1.level2 default value"));
console.log(is(obj1, "level1.level2.id", "level1.level2.id default value"));
console.log(is(obj1, "level1.level2.lavel3", "level1.level2.lavel3 default value"));

var obj2 = {};
console.log(is(obj2, "level1", "level1 default value"));
console.log(is(obj2, "level1.level2", "level1.level2 default value"));

var array1 = [1, [21, 22], 3];
console.log(is(array1, "[0]", "[0] default value"));
console.log(is(array1, "[1][0]", "[1][0] default value"));
console.log(is(array1, "[2]", "[2] default value"));
console.log(is(array1, "[5]", "[5] default value"));
console.log(is(array1, "[5][0]", "[5][0] default value"));

var array2 = ["a", "b", "c"];
console.log(is(array2, "[0]", "[0] default value"));
console.log(is(array2, "[2]", "[2] default value"));
console.log(is(array2, "[5]", "[5] default value"));

var arrObj = [{id: 1}];
console.log(is(arrObj, "[0].id", "[0].id default value"));
console.log(is(arrObj, "[2].id", "[2].id default value"));

var obj3 = {
	val1: 1,
	val2: 2,
	obj1: {
		id: 123,
		name: "test",
	},
	fun1: function() {
		return is(this, "val1", "val1 default value");
	},
	fun2: function() {
		return is(this, "val3", "val3 default value");
	},
	fun3: function() {
		return is(this, "obj1.id", "obj1.id default value");
	},
	fun4: function() {
		return is(this.obj1, "id", "id default value");
	}
}
console.log(obj3.fun1());
console.log(obj3.fun2());
console.log(obj3.fun3());
console.log(obj3.fun4());
