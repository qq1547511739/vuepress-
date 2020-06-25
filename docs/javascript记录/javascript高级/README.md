## 解构
**中括号解构**<br/>
**大括号解构**<br/>

使用解构的好处：<br/>
1、交换两个数<br/>
2、函数可以返回多个值<br/>
3、函数定义参数，和传入参数的顺序改变<br/>
【注】参数可以带默认值<br/>
4、快速取出数组中的某一个元素。<br/>


```javascript
var x = 10, y = 20, z = 30;
var [x, y, z] = [10, 20, 30];
alert(x + ", " + y); 


var [x, [a, b], y] = [10, [20], 40];
alert(a + ", " + y);//20，40
alert(b); //underfunded


var [x, y] = [10, 20];
[x, y] = [y, x];
alert(x + ", " + y); //20，10


function show(){
  return ["结果1", "结果2", "结果3"];
}
var [a, b, c] = show();
alert(a + ", " + c); //结果1，结果3


function showSelf({name, age, sex = "男"}){
  alert("我叫" + name + "，今年" + age + ",是一位" + sex + "性");
}
showSelf({
  age: 18,
  name: "小明",
  sex: "女"
})
```

## 合并对象
Object.assign 合并对象<br/>
将所有传入的对象，都合并到第一个对象中。<br/>
英文读法：o赛<br/>

```javascript
var obj1 = {
    a: 10
}
var obj2 = {
    b: 20,
    c: 30
}
var obj3 = {
    d: 40,
    f: ["hello", "world", true]
}

Object.assign(obj1, obj2, obj3);
```


## 浅拷贝和深拷贝
浅拷贝:只拷贝地址(遇到比较复杂的数据结构，只拷贝变量的地址)<br/>
深拷贝:将复合数据类型重新生成一份，进行拷贝(数组里面有对象，对象里面有数组)


## Set与Map集合
集合：<br/>
1、不重复<br/>
2、无序<br/>
通过for...of进行遍历
### Set
```javascript
//数组变集合去重
let set = new Set([10, 20, 30, 40, 50, 40, 30, 20, 10]);
 console.log(set)
//集合变数组  将数据结构展开成数组
 let arr = [...set];
console.log(arr);


数组去重方法
var arr = [10, 20, 30, 40, 50, 40, 30, 20, 10];
arr = [...new Set(arr)];
alert(arr);
```

### Map
```javascript
 map遍历  通过for of

for(let [key,value] of map){ 
    console.log(key,value);
}
```
