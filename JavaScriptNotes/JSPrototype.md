```javascript
var Student = {
	name:'student',
	age:20,
	run: function () {
		console.log(this.name+"is running.")
	}
};

var anqing = {
	name:'anqing',
	age:20
};

var Bird = {
	name:'bird',
	fly:function () {
		console.log(this.name+'is flying');
	}
};
anqing.__proto__ = Bird;

anqing.fly();
```

JS使用指向原型（prototype）的方式创建对象；

一个实例指向原型，会继承原型的方法；

实际工作中，不要使用`obj.__proto__`去改变一个对象的原型，使用`Object.create()`方法；

```javascript
var Student = {
	name:'anqing',
	age:20,
	run: function () {
		console.log(this.name+"is running.")
	}
};

function createStudent(name) {
	var s = Object.create(Student);
	s.name = name;
	return s;
}

var anqing = createStudent("anqing");
anqing.run();  // anqing is running
console.log(anqing.__proto__);
console.log(anqing.__proto__===Student);  // true
```

## 创建对象

> 当我们用`obj.xxx`访问一个对象的属性时，JavaScript引擎先在当前对象上查找该属性，如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到`Object.prototype`对象，最后，如果还没有找到，就只能返回`undefined`。

Array对象的原型链：`arr->Array.prototype->Object.prototype->null`

函数对象的原型链：`fun->Function.prototype->Object.prototype-null`

所以对象的方法可能来自当前对象、上一层原型继承的方法……

### 构造函数(constructor)

使用new关键字调用函数，使一个普通函数变为一个构造函数返回一个对象

```javascript
function Student(name){
	this.name = name;
	this.hello = function () {
		console.log('Hello ' + this.name + ' !');
	}
}
// 使用new关键字调用函数返回一个对象
var anqing = new Student('anqing');
console.log(anqing.name);
// console.log(anqing.hello());
anqing.hello(); // Hello anqing !
```

在使用new关键字时，`anqing`会自动含有一个constructor属性，指向`anqing`的构造函数`Student`;

`anqing.constructor === Student  //true`

每一个构造函数都会有一个`prototype`属性，指向另一个对象，这个对象的所有属性和方法都会被构造函数实例继承；

`Student.prototype.constructor === Student;`

`Student.prototype === 另一个对象;`

### prototype验证方法

1. isPrototypeOf()

`Student.prototype.isPrototypeOf(anqing);  //  true`

2. hasOwnProperty()

验证是否是本地属性，还是继承属性；

anqing.hasOwnProperty('name');  //  true`

3. in运算符

查看实例是否有某个属性；

`"name" in anqing;   //  true`





