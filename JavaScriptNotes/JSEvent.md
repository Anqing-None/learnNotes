# JS Event

HTML事件含义：

- 浏览器完成加载

- 检测到输入框被输入文字

- 按钮被按下

在HTML代码实现监听某一事件，当该事件被触发时，执行JS代码，语法格式如下：

`  <element event='some JavaScript code'>`

eg：

`  <button onclick="document.getElementById('demo').innerHTML = Date();">The time is?</button>`

改变自身：

` <button onclick="this.innerHTML = Date();">the time is</button> `

调用函数：

`<button onclick="myfunction()">the time is</button>`

常见HTML事件：

| Event       | Description                                        |
| :---------- | :------------------------------------------------- |
| onchange    | An HTML element has been changed                   |
| onclick     | The user clicks an HTML element                    |
| onmouseover | The user moves the mouse over an HTML element      |
| onmouseout  | The user moves the mouse away from an HTML element |
| onkeydown   | The user pushes a keyboard key                     |
| onload      | The browser has finished loading the page          |

# String Methods

### str.length

查找字符：

### str.indexOf()

从文本开始寻找字符，未找到则返回-1；

`  str.indexOf("locate")`

可以指定第二个参数，表示从哪里开始寻找字符串，如：

` str.indexOf("locate",10) //表示从第10个(从0开始数）字符开始（包含第10个字符）;`

### str.lastIndexOf()

从文本末尾开始寻找字符，其他用法同indexOf；

### str.search()

不支持指定位置开始搜索，支持正则表达式；



提取字符串操作：

### slice(start,end)

截取指定好的开始与终点字符串，左闭右开；

substring(start,end)

用法与slice相同但不支持负值；

substr(start,length)

第二个参数指定需要截取字符串的长度而不是终点；

替换文本操作：

replace(oldStr,newStr)

支持正则表达式，replace区分字母大小写，使用正则表达式/i可不区分大小写：

```javascript
str = "Please visit Microsoft."
str.replace(/MICROSOFT/i,"W3School");
// replace只替换第一个匹配到的值，若要替换全部，使用正则表达式/g（global）
str.replace(/MICROSOFT/g,"W3School");
```

字母大小写

txt.toUpperCase()

txt.toLowerCase()

连接字符串

txt.concat(str1,str2)

去除空格

string.trim()

填充字符串操作：

padStart(num,str)

从左边开始填充，例子：

` let str = "5"; str.padStart(4,0); //result is 0005; `

padEnd(num,str)

提取字符串中字母：

charAt()

charCodeAt()

str[]

str使字符串的提取操作看起来像列表，但字符串不是列表；

若未找到字符串返回undefined；charAt()则返回空字符；

对str[0]="a"进行赋值操作不会报错，但也不会改变str本身的值；

如果需要将字符串当作数组处理，使用split()

## Number method

toString()

toExponential()

toFixed()

toPrecision()

将变量转换为数字类型

Number()

parseFloat()

parseInt()

## Array method

pop()

末尾处删除元素

push()

末尾处添加元素

shift()

unshift()





















