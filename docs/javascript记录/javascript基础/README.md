# javascript基础

```javascript
基本类型/简单类型/值类型：string number boolean ; 
特殊类型：null undefined ; 
复杂类型/引用类型：object function
JS中typeof返回哪些数据类型：object  function  number  boolean  undefined
```
## 强制数据类型转换
Boolean() 将其他的数据类型强制转换成布尔值

口诀：非0即真
```javascript
alert(Boolean('11'))    //true
alert(Boolean('hello')) //true
alert(Boolean(''))      //false
```


Number() 将其他的数据类型强制转换成数字

注：只有纯数字字符组成的字符串转数字，才能转为数字，其他都为NaN
```javascript
alert(Number('100'))   //100
alert(Number('100a'))  //NaN
```


parseInt() 取整
```javascript
alert(parseInt('100a'))  //100
alert(parseInt('3.14'))  //3
alert(parseInt('10b0a')) //10
```

parseFloat()取浮点数

## 逻辑运算符
与运算 &&
>格式：
表达式1 && 表达式2
规律：只有两个表达式都为true的时候，整个表达式才为真
```javascript
alert(10>5 && 6>4) //true
alert(10<5 && 6>4) //false
```

或运算符 ||
>格式：
表达式1 || 表达式2
规律：只有两个表达式都为false的时候，整个表达式才为假

非运算符 ！
>格式：
！表达式
规律：先将表达式的值自动数据类型转换成布尔值，然后再取反

## 流程控制语句
### 顺序结构
**顺序结构：代码自上而下执行**
题目：输入两个数，然后交换这两个数，再输出交换后的结果
```javascript
    var num1 = 10;
    var num2 = 20;
    alert('num1:' +num1+ ',num2:' +num2)
    var tmp = num1;
    num1 = num2;
    num2 = tmp;
    alert('num1:' +num1+ ',num2:' +num2)
```

### 单分支和双分支语句
单分支语句

语法：
```javascript
if(判断的条件){
  执行语句; (条件为true的时候执行)
}
```
题目：判断一个数是基数还是偶数
```javascript
var num = 7
if(num % 2 == 0){
  alert('这就是一个偶数')
}
```
双分支语句

语法：
```javascript
if(判断的条件){
  执行语句; (条件为true的时候执行)
}else{
  执行语句;(判断条件为flase的时候执行)
}
```
题目：判断一个数是基数还是偶数
```javascript
var num = 7
if(num % 2 == 0){
  alert('这就是一个偶数')
}else{
  alert('这是一个奇数')
}
```


### 多分支语句
多分支语句

语法：
```javascript
if(判断条件1){
  执行语句1
}else if(判断条件2){
  执行语句2
}
......
else{
  执行语句;(上述所有条件都不成立,执行这里)
}
```


### 多分支switch语句
语法：
```javascript
switch(表达式){
  case 常量1:
    执行语句1;
    break;
  case 常量2:
    执行语句2;
    break;
  ......
  default:
    当上述所有的case选项的匹配失败，执行这里
    break;
}
```
过程：

1，计算switch()语句表达式的值

2，和case后续的值进行匹配，匹配成功，执行对应case选项下的执行语句

例题：依照考试成绩的等级，输出百分制数段
```javascript
var grade = 'B';
switch(grade){
  case 'A':
    alert('80~100');
    break;
  case 'B':
    alert('70~79');
    break;
  case 'C':
    alert('60~69');
    break;
  case 'D':
    alert('<60');
    break;
  default:
    alert('error');
    break;
```

### 三目运算符
**注：本质是一个双分支语句**

格式：

表达式1 ？ 表达式2 : 表达式三

过程:

1,先判断表达式1是否为真

2，表达式1为真，直接执行表达式2

3，表达式1为假，直接执行表达式3
```javascript
num % 2 == 0 ? alert('偶数') : alert('奇数')
```

## 循环
三种语法：

while循环

do_while循环

for循环

break和continue

break功能：
终止当前循环

continue功能：
跳过这次循环，直接进入下次循环
### while循环
格式:

while(循环条件){
  循环语句;
}

执行：如果循环条件成立就执行循环条件，直到循环条件不成立为止

题目:在页面上输出十个helloworad
```javascript
var i = 0;
while(i < 10){
  document.write('hello word <br/>');
  i++;
}
```
>写循环的步骤
1，确定循环次数
注：while()可以写任意的表达式，最终都会转为布尔值
注: 不能让循环条件永远成立，否则会造成死循环

2，确定每一次循环要执行的代码

例题：求1~100的和
```javascript
var i = 1;
var sum = 0;
while(i <= 100){
  sum += i;
  i++;
}
alert(sum);
```


### do...while循环
语法：
```javascript
do{
  循环语句;
}while(循环条件);
//注do_while循环后面的分号不要省略
```

例题：求1~100的和
```javascript
var i = 1;
var sum = 0;
do{
  sum += i;
  i++;
}while(i <= 100)
alert(sum);
```

### while循环和do_while循环的区别
```javascript
//while循环
var num = 5;
while(num>10){
  alert('hello world')
}
```

```javascript
//do_while循环
var num = 5;
do{
  alert('hello world')
}while(num>10)
```
**while循环：先判断循环条件**
**do_while循环：先运行一次循环语句，再判断循环条件，至少会运行一次**

### for循环
格式：
```javascript
for(表达式1; 表达式2; 表达式3){
  执行语句;
}

//1~100的和
var sum = 0;
for(var i = 1; i<=100; i++){
  sum += i
}

```
>执行过程：
1，先求解表达式1(只求一次)
2，求解表达式2，表达式2为真，则执行语句，然后求解表达式3，再求解表达式2，若为假，则循环结束

### 循环嵌套
循环嵌套：循环里面嵌套循环，不是语法。
```javascript
// 确定输出的行
for(var i = 1; i <= 5; i++){
//圆圈个数
  for(var j = 1; j <= i; j++){
    document.write("⭕️");
  }
  document.write("<br/>");
}
```

九九乘法表：
```javascript
//i是行
for(var i = 1; i <= 9; i++){
  //j列
  for(var j = 1; j <= i; j++){
    document.write(j + "X" + i + "=" + (i * j) + "&nbsp;");
  }
  document.write("<br/>");
}
```

## 函数
### 认识函数
**函数比喻：火影忍者背景下，有忍术的存在，忍术是由先祖创立出来的**

**要想使用忍术，就必须通过结印才能触发，结印几次就触发几次**

javascript里面也一样，有种类似于忍术的东西，叫函数

可以创建各种各样的函数，忍术需要结印触发，函数需要调用才能触发

>忍术=js函数

>结印发动忍术=调用函数

函数声明：
```javascript
function 函数名(){
  函数体(具体要执行的代码)
}
```

函数调用：
```javascript
格式：
函数名()
```

### 有参数无返回值的函数
>形参：形式上的参数。【注】使用起来和普通的变量没有区别。

>实参：实际传入的参数。

>传参：用实参给形参赋值。

```javascript
格式：
function 函数名(形参1, 形参2...){
  函数体;
}
                
调用函数：
格式：函数名(实参1, 实参2...);
```

例如：
```javascript
function print(n){ //n = 5;
  for(var i = 0; i < n; i++){
    document.write("hello world<br/>");
  }
}
//调用函数
print(2);
```

### 有参数有返回值的函数

格式：
```javascript
function 函数名(形参1, 形参2...){
  函数体;
  return 表达式;
}
//return关键字
//【注】return后面写什么的表达式，函数调用的结果就是return后面表达式的值。
//【注】函数运行的时候，如果遇到return关键字，整个函数会终止。

function add(num1, num2){
  return num1 + num2;
}

```


### arguments
**每一个函数内部都有有一个arguments，系统内置的**

**arguments是用来存储实际传入的参数.**
```javascript
属性：
  arguments.length 输出当前里面存储的参数个数

访问某一个数据：
  arguments[下标]; 
  【注】下标是从0开始的。
```

例如：
```javascript
function show(){
  alert(arguments.length);//输出5
  alert(arguments[1]);    //输出true
}

show(10, true, "hello", 40, 50); */
```


### 函数作用域
局部作用域：一个函数的大括号。在这个函数内部声明的变量或者形参，只能在当前函数内部使用。

全局作用域：整个页面。

> 任何程序在执行的时候都要占用内存空间内。函数调用的时候也要去占用内存空间。

> 垃圾回收机制：调用函数的时候，系统会分配对应的空间给这个函数使用(空间大小由这个函数里声明的变量和形参决定)。

> 当函数使用完毕以后，这个内存空间要释放，还给系统。

> 【注】在函数内部声明的变量和形参是属于当前函数的内存空间里的。

> 内存管理机制：在函数中声明的变量和形参，会随着函数的调用被创建，随着函数的调用结束而被销毁。

> 在函数中声明的变量和形参，有效范围是当前函数(当前函数的大括号)，作用域，局部作用域。

> 就近原则：离哪个作用域近，就使用哪个作用域内的同名变量。

```javascript
var a = 2;  //声明在全局作用域的变量叫做全局变量
function show(){
  a++;
  console.log(a);
}

show(); //3
show(); //4
console.log(a); //4
```

```javascript
function show(){
  var a = 2;  //局部变量  局部作用域
  a++;
  console.log(a);
}

show();  //3
show();  //3
console.log(a); // a is not defined
```

```javascript

var a = 10, b = 20;
  function show(a){
  var b = 100;
  a += 5;
  alert(a + ", " + b);
}

show(a); //15, 100 //a = a
alert(a + ", " + b); //10, 20
```

## 递归
**认识递归**

满足以下三个特点就是递归：
1. 函数自己调用自己
2. 一般情况有参数
3. 一般情况下有return

递归方法:
  1. 首先去找临界值，即无需计算，获得的值。
  2. 找这一次和上一次的关系
  3. 假设当前函数已经可以使用，调用自身计算上一次

弊端：短时间开启大量的内存，一次性再释放内存，会卡顿或者死机<br/>
在没有算出那个临界值之前，会开启所有的内存计算每一个公式，算出来之后才会依次释放内存



```javascript
// 计算1~n的和？
function sum(n){
  var res = 0;
  for(var i = 1; i <= n; i++){
    res += i;
  }
  return res;
}
alert(sum(100));



// 递归方法计算1~n的和？
function sum(n){
  if(n == 1){
    return 1;
  }
  return sum(n - 1) + n;
}
alert(sum(100));
```

## 数组
### 认识数组
**数组：用一个变量存储一堆数据的数据结构。**
```javascript
声明数组：
1、通过new创建数组
参数：传入任意的数据，存储到数组中。   
var arr = new Array(100, true, "hello");       
2、省略new运算符创建数组
var arr = Array(100, true, "hello");

注:上述两种方法，传入参数只有一个，并且是数字的时候，直接声明这么长的一个数组。

3、数组常量进行赋值。（JS一般使用中括号[]）;
var arr = [100, true, "hello"];

声明长度为10的数组，数组中没有数据。
var arr = new Array(10);
var arr = Array(10);
```

```javascript
数组的属性：
数组.length  返回值数组【元素】的个数。

元素：将数组存储的每一个数据，叫做数组的元素。

访问数组的元素：
数组[下标]; 下标是从0开始的。


var arr = [100, true, "hello"];
alert(arr.length);  //3
alert(arr[1]);      //true
```

以下通过循环给数组每个元素赋值，随机数。
1. Math.random()  随机 [0,1)
2. parseInt(Math.random() * 10);  随机0~9的整数

```javascript
//1、长度是10的数组
var arr = new Array(10);
for(var i = 0; i < arr.length; i++){
  arr[i] = parseInt(Math.random() * 10);
}
  alert(arr);
```


### 数组遍历
三种方法：
1. for循环
2. for...in 遍历   快速遍历/快速枚举
3. forEach

在页面上分别将每一个数输出。
```javascript
//for循环
for(var i = 0; i < arr.length; i++){
  document.write(arr[i] + "<br/>");
}
//for...in循环
for(var i in arr){
  document.write(arr[i] + "<br/>");
}
```

```javascript
forEach
//第三种遍历数组的方法

arr.forEach(function(item, index, arr){
      // item当前遍历到的元素
      // index当前遍历到元素的下标
      // arr数组本身
    document.write(item + ", " + index + ", " + arr + "<br/>");
});
```


### 数组的方法
数组的方法：push、pop、shift、unshift、concat、slice、join(传入拼接符)、reverse(逆序)、sort(数组排序)

```javascript
栈结构：
结构：从同一头进，从同一头出。
特点：先进后出。

数组的两个方法形成栈结构：push pop

  push
    格式：数组.push(参数1, 参数2...);
    功能：给数组的末尾添加元素。
    返回值：插完元素以后数组的长度。

var arr = ["北京", "上海", "广州"];
var res = arr.push("深圳", "天津", "成都");
alert(arr);
alert(res);
```


```javascript
  pop
    格式：数组.pop()
    参数：没有参数
    返回值：取下一个元素
    功能：从数组末尾取下一个元素

var arr = ["北京", "上海", "广州"];
var res = arr.pop();
alert(res);
alert(arr);
```

```javascript
队列结构
结构：从末尾进，从头部出。
特点：先进先出

shift()
格式：数组.shift()
参数：没有参数
功能：从数组的头部取下一个元素
返回值：取下的元素

var arr = ["唐朝", "元朝", "清朝"];
var res = arr.shift();
alert(res);
alert(arr);
unshift()
```


```javascript
格式：数组.unshift(参数1, 参数2...)
功能：从数组的头部插入元素
返回值：插完元素以后数组的长度。

var arr = ["唐朝", "元朝", "清朝"];
var res = arr.unshift("隋朝", "商汤");
alert(res);
alert(arr);
```

```javascript
concat()
1、拷贝原数组生成新数组
2、合并数组
  格式：数组.concat(数组，数据...)
  返回值：合并成的新数组，原数组不会改变
  注：就算传入的是数组，数组中的元素要单独拆出来再进行合并

var arr1 = [10,20,30];
var arr2 = [50,60,70];
var newarr = arr1.concat(arr2,'hello',true)
alert(newarr);
alert(newarr.lenght);
alert(arr1);
```

```javascript
数组提取元素
格式：slice(start, end); (不会修改原数组）
功能：基于当前函数获取指定区域元素[start,end),含头不含尾，提取出元素生成新数组
返回值：生成新数组，原数组不会发生改变

var arr = [10,20,30,40,50,60];
var newarr = arr.slice(1,4);
alert(newarr); //20,30,40
alert(arr); //10,20,30,40,50,60
```

```javascript
splice()  增加，删除，修改
  格式:数组.splice(start, length, 数据1,数据2...);
  参数:
    start 开始截取的位置
    length 截取的元素的长度
    第三个参数开始:在start位置，插入的元素。
返回值:截取下来的元素组成的数组。

增加：
var arr = [10,20,30,40,50];
var res = arr.splice(2, 0, "hello", "world");
alert(arr);
alert(res);

删除：
var res = arr.splice(1, 2);
alert(arr); 
alert(res); 

修改：  (先删除，再增加)
var arr =[10, 20, 30, 40,50];
arr.splice(2, 1, "hello");
alert(arr);//10, 20, hello, 40,50
```

### ES5新增的数组语法
新增语法：indexof、数组遍历forEach、map映射、filter过滤、some某些、every每一个、reduce归并
```javascript
indexOf()
  格式：数组.index(item, start);
  参数： item 任意的数据  start 下标 可以不传入，默认是0
  功能：在数组中查找第一次出现item元素下标，从start开始去查找
  返回值： -1 没有查找到    >=0 查找到的元素的下标。

var arr = [10, 20, 30, 40, 50, 20, 30];
  var index = arr.indexOf(20, 2);
  alert(index); //5
```


```javascript
map() 映射

var arr = [10, 20, 30, 40, 50];
var newArr = arr.map(function(item, index, arr){
    //遍历要做的事情  映射关系
  return item * 1.3;
});
alert(newArr);
alert(arr); 
```


```javascript
filter() 过滤

var arr = [10, 20, 30, 40, 50];
var newArr = arr.filter(function(item, index, arr){
    //过滤的条件
    return item > 20;
});
alert(newArr);
alert(arr); 
```

```javascript
some  某些
【注】在数组中查找是否有符合条件的元素，有返回true，没有返回false。
短路操作：只要找到符合条件的元素，后面的循环就停止了。

var arr = [10, 20, 30, 40, 50];
var res = arr.some(function(item, index, arr){
    alert(item);//10,20,30 短路操作
    //过滤的条件
    return item > 20;
});
console.log(res);//true
console.log(arr); //[10, 20, 30, 40, 50]
```

```javascript
every 每一个
【注】在数组中查找每一个元素是否有符合条件，符合返回true，不符合返回false。
短路操作：只要找到不符合条件的元素，后面的循环就停止了。
                
var arr = [10, 20, 30, 40, 50];
var res = arr.every(function(item, index, arr){
    alert(item);
    //过滤的条件
    return item < 100;
});
alert(res);
alert(arr); 
```

### 二维数组
二维数组：人为起的，不是官方语法

数组存储数据，数组中每一个元素， 元素可以是任意的数据类型。

注：数组中的元素可以是数组。

```javascript
var arr1 = [10, 20, 30];
var arr = [true, 100, "hello", arr1];
alert(arr.length); //4
alert(arr[3] == arr1)  //true

alert(arr[3][1]);
alert(arr1[1])
//以上两个获取的相等
```
