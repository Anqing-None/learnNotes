# css伪元素

为指定部位添加样式，如首字母大写，首行缩进等

Syntax：

```css
selector::pseudo-element{
    property: value;
}
/* 其中selector可以结合class属性一起使用 *？
```

## Pseudo-elements:

### ::first-line

只能应用于块级元素；

### ::first-letter

### ::before

### ::after

在元素后添加内容，内容可以是（文字、图片表情·····）

### ::selection

## Summary

| Selector                                                     | Example         | Example description                                          |
| :----------------------------------------------------------- | :-------------- | :----------------------------------------------------------- |
| [::after](https://www.w3schools.com/cssref/sel_after.asp)    | p::after        | Insert something after the content of each <p> element       |
| [::before](https://www.w3schools.com/cssref/sel_before.asp)  | p::before       | Insert something before the content of each <p> element      |
| [::first-letter](https://www.w3schools.com/cssref/sel_firstletter.asp) | p::first-letter | Selects the first letter of each <p> element                 |
| [::first-line](https://www.w3schools.com/cssref/sel_firstline.asp) | p::first-line   | Selects the first line of each <p> element                   |
| [::selection](https://www.w3schools.com/cssref/sel_selection.asp) | p::selection    | Selects the portion of an element that is selected by a user |