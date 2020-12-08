# HTML 表单

form tag is a coontainer.
form元素的属性与属性值

| Attribute                                                    | Description                                                  | value     |
| :----------------------------------------------------------- | :----------------------------------------------------------- | --------- |
| [accept-charset](https://www.w3schools.com/tags/att_form_accept_charset.asp) | Specifies the character encodings used for form submission   |           |
| [action](https://www.w3schools.com/tags/att_form_action.asp) | Specifies where to send the form-data when a form is submitted |           |
| [autocomplete](https://www.w3schools.com/tags/att_form_autocomplete.asp) | Specifies whether a form should have autocomplete on or off  | no/off    |
| [enctype](https://www.w3schools.com/tags/att_form_enctype.asp) | Specifies how the form-data should be encoded when submitting it to the server (only for method="post") |           |
| [method](https://www.w3schools.com/tags/att_form_method.asp) | Specifies the HTTP method to use when sending form-data      | get/post  |
| [name](https://www.w3schools.com/tags/att_form_name.asp)     | Specifies the name of the form                               |           |
| [novalidate](https://www.w3schools.com/tags/att_form_novalidate.asp) | Specifies that the form should not be validated when submitted |           |
| [rel](https://www.w3schools.com/tags/att_form_rel.asp)       | Specifies the relationship between a linked resource and the current document |           |
| [target](https://www.w3schools.com/tags/att_form_target.asp) | Specifies where to display the response that is received after submitting the form | _blank/.. |

`<input type="radio" name="gender" id="other" value="other">`

​    value="other"  value有什么作用？

​    提交给服务器处理的值，在使用radio类型时需要预先定义好，服务器脚本才可根据值处理

​    如果在其他类型的input中预先定义好，value的值会事先输入到选框中。

​    name="gender" 不可以忽略name属性，name属性用于后端提交数据的键值

​    id 与 label标签的for属性绑定



  form的属性

​    action用于指定处理提交数据的脚本语言

​    target指定在哪显示提交后的返回信息

​    method指定使用HTTP的通信方式（get、post)

​      get使用url字符串给服务器传输数据大小限制 2048bit

​      post发送数据包与服务器通信

​    autocomplete指定是否记录账号类型，方便下次输入，下次输入时下方会出现提示，点击即可；

​    novalidate指不验证输入的数据格式