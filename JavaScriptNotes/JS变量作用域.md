# 变量作用域
函数内部变量不可以被外部访问，而外部变量可以被函数内部访问；
嵌套函数：内部函数可以访问外部函数的变量；
JS函数在执行时变量从内部开始查找
## 变量提升
JS函数执行时会将函数体内所有定义的变量放置到函数体顶部
```javascript
function {
    x = x+1;
    var x;}
```
## 全局作用域
不在任何函数内定义的变量就具有全局作用域，JS默认的全局对象window，在全局中定义的变量被绑定为
window下的一个属性；
## 名字空间
考虑需要使用多个JS文件的情况下，如果JS文件中出现名称冲突，很难解决；
减少冲突方法：
将所有变量和函数全部绑定到另一个全局变量中。
```javascript
var myapp = [];

// difine variable
myapp.name = "myapp";
myapp.version = "0";

// define function
myapp.alert = function () {
    return "foo";
```

## 局部作用域
在函数外部应当无法调用函数内部的变量，但for语句中不同，for语句中的变量作用域称为块级作用域；
在使用for语句时,常使用的自增变量i可以在for语句外被引用；
```javascript
function foo() {
    for (var i=0;i<10;i++){
        pass;
    }
    console.log(i); // 10
}
```
使用let关键字声明块级作用域变量：
```javascript
function foo() {
    for (let i=0;i<10;i++>){
        pass;
    }
    console.log(i); // ReferenceError: i is not defined;
}
```
## 解构赋值
将一个数组的元素分别赋值给几个变量
```javascript
var arr = ['hello','java','script'];
var a = arr[0];
var b = arr[1];
var c = arr[2];
```
对数组使用解构赋值使用[]
```javascript
var [x,y,z] = ['hello','java','script'];
var [x,[y,x]] = ['hello',['java','script']]; //嵌套
var [,,z] = ['hello','java','script']; //ingore element
```
对对象使用解构赋值使用{}
```javascript
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person;
// 变量名与对象属性名不一致时
var {name,age,passport:id} = person;
console.log(id) // 'G-12345678'
// 当对象属性不存在时使用默认值，避免存在underfined值；
var {name,single=true} = person;
```
若事先声明变量后再对其进行解构赋值，会出现语法错误
```javascript
var x,y;
{x,y} = {x:1,y:2}; // Uncaught SyntaxError:Unexpeted token =;
// {x,y}被误认为时语句块
({x,y} = {x:1,y:2});
```
## 使用场景
- 交换两个变量的值

`var x=1,y=2;[x,y]=[y,x];`
- 快速获取当前页面的域名和路径

`var {hostname:domain,pathname:path} = location; `

