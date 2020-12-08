```javascript
var anqing = {
	name: "anqing",
	age : 22,
	birthYear: function() {
		var nowYear = new Date().getFullYear();
		return nowYear - this.age + 1;
	}
}
console.log(anqing.birthYear());  // 1999
var fn = anqing.birthYear;
console.log("fn:" + fn());   // NaN
```

`this.age`this是一个特殊变量，始终指向**当前对象**；

必须要以`anqing.birthYear()`this这个特殊变量才会指向anqing这个对象；

`fn() -------> window.fn()` 执行fn函数是，this的指向为window；

strict模式下this会指向undefined；

```javascript
function getBirthYear(a) {
	var nowYear = new Date().getFullYear();
	var birthYear = nowYear - this.age +1 ;
	console.log(birthYear);
	return birthYear;
}

var anqing = {
	name:'anqing',
	age: 22,
	birthYear: getBirthYear
}

getBirthYear.apply(anqing,[]);

var cnt = 0;
var oldgetBirthYear = getBirthYear;

window.getBirthYear = function (){
	cnt+=1;
	return oldgetBirthYear.apply(anqing,[]);
};
console.log("1cnt="+cnt);
getBirthYear();
console.log("2cnt="+cnt);
```

