# javascript进阶
## 声明提升
**声明提升：在当前作用域，声明变量和函数，会直接提升在整个代码的最前面运行**

**预编译：在所有代码运行之前，计算机将代码从头到尾看一遍，将这个程序需要运行的空间一次性分配好**

```javascript
alert(num) //直接在控制台报错
```

```javascript
alert(num);  //undefined  声明提升了
var num = 10;
alert(num)   //10
```

```javascript
show(); //页面输出hello world  因为函数声明被提升了，把函数放在前面了
function show(){
  document.write('hello world')
}
```

```javascript
//局部作用域
function show(){
  alert(num);
  var num = 10;
  alert(num)
}
show();// undefined,10
alert(num); //直接报错
```

省略var，直接去强制给一个变量赋值，这个变量会被js强制声明声明成全局变量

注：不建议这样使用，这属于语法错误
```javascript
function show(){
  num = 10;//被声明成全局变量
  alert(num);
}
show();//10
alert(num);//10
```


## 冒泡排序
冒泡排序规则：前后两个数两两进行比较，如果符合交换条件就交换两个数位置

规律：冒泡排序每一轮排序，都可以找出一个较大的数，放在正确的位置。

```javascript
9, 8, 7, 6, 5, 4
  第一轮：五次
    9, 8, 7, 6, 5, 4
    8, 9, 7, 6, 5, 4
    8, 7, 9, 6, 5, 4
    8, 7, 6, 9, 5, 4
    8, 7, 6, 5, 9, 4
    8, 7, 6, 5, 4, 9

  第二轮：四次
    8, 7, 6, 5, 4
    7, 8, 6, 5, 4
    7, 6, 8, 5, 4
    7, 6, 5, 8, 4
    7, 6, 5, 4, 8

  第三轮：三次
    7, 6, 5, 4
    6, 7, 5, 4
    6, 5, 7, 4
    6, 5, 4, 7
                
  第四轮：两次
    6, 5, 4
    5, 6, 4
    5, 4, 6
                
  第五轮：一次
    5, 4
    4, 5

  分析：
    比较轮数 = 数组长度 - 1;
    每一轮比较的次数 = 数组长度 - 当前的轮数。
```

```javascript
var arr = [9, 8, 7, 6, 5, 4]; //从小到大

for (var i = 0; i < arr.length - 1; i++) {
//每一轮比较的次数
  for (var j = 0; j < arr.length - (i + 1); j++) {
    if (arr[j] > arr[j + 1]) {
      //交换两个数位置
      var tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;
    }
  }
}
//4,5,6,7,8,9
alert(arr);
```

## 选择排序
选择排序(打擂台法)

    规则：选出一个位置，这个位置上的数，和后面所有的数进行比较，如果比较出大小就交换两个数位置。

    规律：每一轮都能选出一个最小的数，放在正确的位置。

```javascript
第一轮：5次
    9, 8, 7, 6, 5, 4
    8, 9, 7, 6, 5, 4
    7, 9, 8, 6, 5, 4
    6, 9, 8, 7, 5, 4
    5, 9, 8, 7, 6, 4
    4, 9, 8, 7, 6, 5

第二轮：4次
        9, 8, 7, 6, 5
        8, 9, 7, 6, 5
        7, 9, 8, 6, 5
        6, 9, 8, 7, 5
        5, 9, 8, 7, 6

第三轮： 
          9, 8, 7, 6
          8, 9, 7, 6
          7, 9, 8, 6
          6, 9, 8, 7

第四轮：         

              8, 9, 7
              7, 9, 8
第五轮：
                9, 8
                8, 9

比较的轮数 = 数组长度 - 1;
每一轮比较的次数 = 数组长度 - 当前的轮数
```

具体例子：
```javascript
var arr = [9, 8, 7, 6, 5, 4];

for(var i = 0; i < arr.length - 1; i++){
    //被比较的数的下标
    for(var j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
alert(arr);
```



## 字符串
### 认识字符串
**字符串概念：所有带单引号或者双引号的都叫做字符串。**

字符串声明：
1. 通过new运算符去声明字符串
2. 省略new声明字符串
3. 字符串常量赋值

```javascript
var str1 = new String(100);
// alert(str1 + 20);
alert(typeof str1); //object  对象 引用数据类型
var str2 = String(100);
// alert(str2 + 20);
alert(typeof str2); //string

var str3 = "100";
alert(typeof str3); //string
// alert(str3)
```

访问字符串中的字符：

    字符串.length  访问字符串中字符的个数。

    【注】中文 utf-8(三个字符表示一个汉字))  gbk(两个字符表示一个汉字)  在计数的时候都是当做一个汉字计数。

<br/>
访问字符串中单个字符：<br/>
    字符串.charAt(下标)  【注】从0开始的<br/>
    字符串[下标]<br/>

【注】字符串是只读，字符串一旦被声明就没有办法被修改，如果非要声明字符串，我们只能讲原字符串效果，重新生成新的字符串。<br/>
【注】在JS中，字符串既是基本数据类型，又是复合数据类型。<br/>

```javascript
var str = "hello北京";
//  alert(str.length);
// alert(str.charAt(4));
alert(str[4]);
str[4] = "x";
alert(str);//没办法修改
```


### 字符串的方法
**charCodeAt字符串ASCII码值、fromCharCodeASCII码值字符**<br/>
**indexOf查找字符第一次出现的位置、lastIndexOf查找字符最后出现的位置、search**<br/>
**substring、substr提取字符串、replace替换字符串、split字符串分割**<br/>


charCodeAt()<br/>
    格式：字符串.charCodeAt(下标)<br/>
    功能：访问字符串中对应下标字符的ASCII码值。<br/>


String.fromCharCode();<br/>
    格式：String.fromCharCode(码值1, 码值2...);<br/>
    功能：将传入的ASCII码值转成对应的字符<br/>
    返回值：组成的字符串<br/>

```javascript
var str = "hello";
alert(str.charCodeAt(1));

var str = String.fromCharCode(97, 98, 99, 100);
alert(str);
```

indexOf()<br/>
    格式：supStr.indexOf(subStr, start);<br/>
    参数：第一个参数，查找的字符串<br/>
          start 从哪个下标开始去查找，如果不传入，默认从下标0开始查找<br/>
    功能：在supStr中查找subStr第一次出现的位置，从start这个位置开始查找。<br/>
    返回值：-1  说明没有查找到<br/>

```javascript
var supStr = "abcabcabc";
var subStr = "abc";

var index = supStr.indexOf(subStr, 4);
alert(index);//6
```


lastIndexOf()<br/>
    格式：supStr.lastIndexOf(subStr, start);<br/>
    功能：在supStr中查找subStr最后一次出现的位置<br/>
    参数：第二个参数是开始查找的位置，查找的下标是从右往左数的。<br/>
    返回值： -1 没有查找到<br/>

```javascript
var supStr = "abcabcabc";
var subStr = "abc";

var index = supStr.lastIndexOf(subStr, 4);
alert(index);//3
```

search：
```javascript
search()
    格式：supStr.search(subStr);
    参数：字符串/正则表达式
    功能：在supStr中查找subStr第一次出现的位置
    返回值： -1 没有查找到

正则表达式：
    修饰符： i 忽略大小写   g 全局匹配

var supStr = "Abcabcabc";
//var subStr = "abc";
var subStr = /abc/i;

var index = supStr.search(subStr);
alert(index); //0
```

substring<br/>
    格式：字符串.substring(start, end);<br/>
    功能：将字符串中 [start,end) 提取这部分字符，生成一个新字符串<br/>
    返回值：新生成的字符串<br/>

substr<br/>
    格式：字符串.substr(start, length);<br/>
    返回值：新生成的字符串<br/>

slice(是数组)<br/>
    格式：字符串.slice(start, end);<br/>

```javascript
var str = "hello";
//var newStr = str.substring(1, 4);
//var newStr = str.substr(1, 3);
//var newStr = str.slice(1, 4);  以上三者输出结果一样
alert(newStr);
alert(str);
```

replace:
```javascript
replace()
    格式：supStr.replace(oldStr, newStr);
    功能：用newStr将oldStr，替换掉，生成新字符串。
    参数：
        第一个参数传入的是字符串只能替换一次。
        第一个参数  正则表达式
            /xxx/ig    i忽略大小   g全局匹配
    返回值：替换成的新字符串。


var str = "how are aRe are you";
var newStr = str.replace("are", "old are");
var newStr = str.replace(/are/gi, "old are");
alert(newStr);
alert(str);
```


```javascript
split()  字符串分割
    格式：字符串.split(分割符, length)
    参数：
        第一个参数，用这个分割符对原字符串进行分割
        第二个参数，控制返回的数组的元素格式，一般情况下不用。
    功能：用分割符对原字符串，进行字符串分割，将分割完毕以后的子串，放在数组中返回。
    返回值：数组

注意：
    1、相邻的两个分割符，会产生空字符串  ""
    2、分割符是空字符串"",直接将每一个字符，单独分割成子串，放在数组中返回

var str = "how  are you";
// var arr = str.split(" ", 2);
var arr = str.split(" ");
alert(arr); //how,"",are,you
alert(str); //how are you */

  var str = "how are you";
var arr = str.split("");
alert(arr); //h,o,w, ,a,r,e, ,y,o,u 
```

## 随机验证码

随机0~9的验证码
```javascript
//n位验证码  每一个数字的范围 0~9   parseInt(Math.random() * 10);
function numTestCode(n){
  var arr = []; //存储生成的数字
  for(var i = 0; i < n; i++){
    var num = parseInt(Math.random() * 10);
    arr.push(num);
  }
  return arr.join("");
}
alert(numTestCode(6));
```

随机0~9及大小写字母
```javascript
function testCode(n){
  var arr = [];
  for(var i = 0; i < n; i++){
    var num = parseInt(Math.random() * 123);
    if(num >= 0 && num <= 9){
        arr.push(num);
    }else if(num >= 97 && num <= 122 || num >= 65 && num <= 90){
        arr.push(String.fromCharCode(num));
    }else{
        i--;
    }
  }

  return arr.join("");
}

alert(testCode(6));
```


## 敏感词过滤
敏感词过滤

>表单元素，获取其中内容，通过.value的属性
>双标签节点 innerHTML属性，获取标签间内容，设置标签间内容，如果文本中含有标签，会自动解析。

```javascript
要求：
    1、敏感词都过滤  正则表达式
    2、将敏感词替换成*
    replace()
```

```javascript
<style>
    #msg{width: 400px; height: 400px; border: 1px solid black}
</style>

<body>
    <textarea name="" id="txt1" cols="30" rows="10"></textarea>
    <button onclick = 'btnClick();'>发布</button>
    <div id = 'msg'></div>
</body>

<script>
var arr = [/靠/ig, /tmd/ig, /nm/ig];
function btnClick(){
    var oTxt = document.getElementById("txt1");
    var oMsg = document.getElementById("msg");

    var oValue = oTxt.value;
    for(var i = 0; i < arr.length; i++){
        oValue = oValue.replace(arr[i], "*");
    }

    //把textarea内的内容放在div上
    oMsg.innerHTML = oValue;
    //把textarea内容清空
    oTxt.value = '';
}
</script>
```

## 事件驱动函数
onclick 点击<br/>
onblur 失去焦点<br/>

## 事件
### 认识事件

1. 发展历史<br/>
    编程语言：汇编、C语言   面向过程语言<br/>
    编码语言：Java、C++、JavaScript、Object-C、python  面向对象语言<br/>

2. 思想<br/>
    面向过程编程思想：只考虑数学逻辑。<br/>
    面向对象编程思想：直接将生活逻辑映射到我们的程序。<br/>
      <1>分析有哪些实体<br/>
      <2>设计实体属性和功能<br/>
      <3>实体之间相互作用<br/>


3. 语法（在JavaScript中没有类这个概念，只有对象，ECMA6版新增了类的概念）<br/>
  类：一类具有相同特征事物的抽象概念。<br/>
  对象：具体某一个个体，唯一的实例。<br/>

  类   狗   电脑<br/>
  对象  你遇到的那只狗   你的电脑<br/>

4. 数据结构<br/>
   基本数据类型(存储一个值) =>  数组(处理批量的数据) => 对象(既可以存储数据又可以存储函数)<br/>

例子：<br/>
  有一辆车速度60km/h，一条路1000km，问题：如果让这辆车跑完这条路，需要多长时间？<br/>


```javascript
//面向过程编程思想
var hours = 1000 / 60;
alert(hours);



//  面向对象的编程思想
车
    属性：
        speed 60km/h
    功能：
        可以跑在路上

路
    属性:
        length 1000km
最后，让车真的跑在路上得出结果。


var car = {
    speed: 60,
    run: function(road){
        return road.length / car.speed;
    }
};

var kuahaidaqiao = {
    length: 1000
};

var hours = car.run(kuahaidaqiao);
//数字.toFixed(n)  保留n为小数的
alert("一共花了" + hours.toFixed(2) + "小时");
```

## Math对象
在JS中一切皆对象。<br/>
在JS，很多关系数学运算的函数，直接一个Math对象提供。<br/>

```javascript
Math.random() //返回0-1之间的随机数
Math.max(num1, num2) //返回较大的数
Math.min(num1, num2)  //返回较小的数
Math.abs(num)  //绝对值
Math.round() 四舍五入(成整数，只看小数点后一位)
Math.ceil(19.3)  //向上取整
Math.floor(11.8)  //向下取整
Math.pow(x,y)  //x的y次方
Math.sqrt(num)  //开平方
```

## 定时器
定时器<br/>
  格式：var timer = setInterval(函数, 毫秒数);<br/>
  功能：每隔对应的毫秒数，执行一次传入的函数。<br/>
  返回值：启动定时器的，系统分配的编号。<br/>

  clearInterval(timer);  取消定时器<br/>

```javascript
var i = 0;
function show(){
    if(i == 5){
        clearInterval(timer);
    }
    document.write(i++ + "<br/>");
}


var timer = setInterval(show, 1000);
```

简化写法：
```javascript
一般情况下，将没有名字的函数叫做匿名函数。

var timer = setInterval(匿名函数, 毫秒数);
var timer = setInterval(function(){
    执行代码;
}, 毫秒数);



var i = 0;
var timer = setInterval(function(){
    if(i == 5){
        clearInterval(timer);
    }
    document.write(i++ + "<br/>");
}, 1000);
```

![Alt text](./img/154.jpg)

## BOM
**BOM：浏览器对象模型(browser object model)**<br/>
每一个窗口都是一个BOM
![Alt text](./img/BOM.jpg)

系统对话框：
```javascript
系统对话框
    window 方法 (一般情况下window可以省略)

    alert() 弹出警告框
    confirm() 弹出一个带确定和取消的提示框
        返回值：如果点击确定，返回true
                如果点击取消，返回false

    prompt() 弹出一个带输入框的提示框
        参数：
            第一个参数：面板上显示的内容
            第二个参数：输入框里面的默认（可以不传入）
        返回值：点击确定，返回输入框中的内容
                点击取消，返回null。
```
oppo方法：
```javascript
<script>
    open()
        第一个参数：跳转的url  打开一个新窗口，加载url
        第二个参数：字符串，给打开的窗口起一个名字
        第三个参数：一串特殊含义的字符串，可以控制打开窗口的属性

function btnClick(){
    // window.open()
    open("https://www.baidu.com", "xxx", 'width=400,height=400,top=200,left=300,scrollbars=yes');
}
</script>

<body>
<button onclick = 'btnClick();'>打开窗口</button>
</body>
```

### history对象
history对象： 掌管的是，**当前窗口(注意不是浏览器)历史记录**(只要加载url不一样就会产生历史记录)
中式英语：嘿死追

history对象：
```javascript
属性 
    history.length 输出当前窗口历史记录的条数
方法
    history.back()  返回上一条历史记录
    history.forward() 前进到下一条历史记录
    history.go()
        参数： 0  刷新当前页面
              正整数 前进n条记录
              负整数 后退n条记录


<button onclick = 'alert(history.length);'>获取历史记录的条数</button>
<button onclick = 'history.back();'>back</button>
<button onclick = 'history.forward();'>forward</button>
<button onclick = 'history.go(2)'>go</button>
```


### location
location  地址栏<br/>
中式英语：落k神<br/>


url：统一资源定位符。<br/>
中文版本：<br/>
协议://IP(域名)/:端口号/路径/?查询字符串#锚点<br/>
英文版本：<br/>
protocol://hostname:port/pathname/?search#hash<br/>



location 对象属性
```javascript
location.protocol   file:本地磁盘文件访问
                    http：
                    https：证书认证协议

location.hostname   主机名：ip (在全球范围内找到你当前网络地址)
                          域名 就是 ip的别称

location.port       端口号(默认隐藏的)
注：是当前电脑中使用网络的软件，随机给他分配一个编号 0~65535

location.pathname   路径

location.search     查询字符串

location.hash       锚点
```

location 对象方法
```javascript
方法：
    location.assign(url)
    【注】在当前窗口跳转带这个url
    location.replace(url)
    【注】在当前窗口替换成新的url。不会产生历史记录。
    location.reload()
    【注】刷新窗前窗口
    location.reload(true)   不经过浏览器缓存强制从服务器重载

<button onclick = "location.assign('https://www.baidu.com')">assign</button>
<button onclick = "location.replace('https://www.baidu.com')">replace</button>
<button onclick = 'location.reload(true)'>reload</button>
```


## DOM
**DOM： document object model(文档对象模型)**

### 元素节点的获取

```javascript
节点类型：
  元素节点  <div></div>
  属性节点  id = 'div1'
  文本节点  div文本

<div id = 'div1' title = 'hello' class = 'box' style = 'width: 300px;  background-color: red'>div文本</div>
```


```javascript
元素节点的获取
document.getElementById(id)
功能：通过id获取符合条件的元素，（id必须是唯一的）
返回值：就是符合条件的一个节点。

node.getElementsByTagName(标签名);
功能：从node节点开始，通过标签名获取符合条件的元素节点。
返回值：伪数组/类数组

node.getElementsByClassName(class名字)   （IE8以下不兼容）
功能：通过class名字获取符合条件的元素节点。

document.getElementsByName(name属性的值);
功能：通过name属性的值获取符合条件的元素节点。
【注】一般使用在表单元素里。
```

### 获取当前有效样式
通过.style.xxx的方式只能访问内联的css样式。<br/>
系统提供了两个方法(不同的浏览器)<br/>

```javascript
alert(oDiv.currentStyle['height']);  //IE兼容
alert(getComputedStyle(oDiv)["height"]); //火狐、谷歌

//跨浏览器的兼容
function getStyle(node, cssStyle){
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}
```


### attribute
中式英文：o吹biu
```javascript
setAttribute //添加属性
getAttribute //获取属性
removeAttribute() //删除属性
```

### 元素节点属性
```javascript
innerHTML  获取标签间内容  会解析标签
innerText  获取标签间纯文本  不会解析标签，设置纯文本
outerHTML  从外标签开始到外标签结束   会解析标签
```

### 获取子节点
```javascript
childNodes   访问当前节点下所有的子节点
firstChild   访问子节点中的首位
lastChild    访问子节点中的最后一位
nextSibling  访问当前节点兄弟节点中的下一个节点
previousSibling  访问当前节点兄弟节点中的上一个节点

【注】上述这些属性都包含文本节点


【注】下述这些方法只获取子节点中的元素节点。(IE8以下不兼容)

children
firstElementChild
lastElementChild
nextElementtSibling
previousElementSibling


                nodeType     nodeName    nodeValue
        元素节点     1          标签名         null
        属性节点     2          属性名       属性值
        文本节点     3          #text       文本内容


   空格、回车、换行 看不见，是字符。  

<div id = 'div1'>
  <em>em文本</em>
  div文本
  <strong>strong文本</strong>
</div>
```


### 节点操作
```javascript
document.write()
    【注】会覆盖页面上原有的内容。

createElement()
    格式：document.createElement()
    参数：标签名
    返回值：创建好的这个节点

appendChild()
    格式：node1.appendChild(node2);
    功能：将node2节点插入到node1节点子节点的末尾

createTextNode()
    格式：document.createTextNode(文本);
    功能：创建文本节点(纯文本)

insertBefore()
    格式：box1.parentNode.insertBefore(box2, box1);
    功能：将box2添加到box1的前面

replaceChild()
    格式：box1.parentNode.replaceChild(box2, box1);
    功能：用box2节点将box1节点替换掉。

cloneNode()
    格式：node.cloneNode()
    格式2：node.cloneNode(true);  克隆节点本身和子节点
    返回值：克隆出来的新节点


removeChild()
    格式：box.parentNode.removeChild(box);
    功能：将box节点从页面上删除
```


```javascript
window.onload = function(){
    var oBtn = document.getElementById("btn1");
    var oDiv = document.getElementById("div1");
    oBtn.onclick = function(){
        // document.write("<h1>hello world</h1>");
        /* var oP = document.createElement("p");
        var oTxt = document.createTextNode("<h1>hello world</h1>");
        oP.appendChild(oTxt);

        // oDiv.appendChild(oP);

        //将oP节点插入到oDiv节点的前面
        // document.body.insertBefore(oP, oDiv);

        //用oP节点，将oDiv节点替换掉
        document.body.replaceChild(oP, oDiv); */

        // var newNode = oDiv.cloneNode();
        /* var newNode = oDiv.cloneNode(true);
        document.body.appendChild(newNode); */
        document.body.removeChild(oDiv);

    }
}


<div id = 'div1'>
    <em>em</em>
    div文本
    <strong>strong</strong>
</div>
<button id = 'btn1'>节点操作</button>
```

### 找到当前点击按钮的下标
点击按钮，输出当前按钮的下标
```javascript
    刻舟求剑
//给他添加点击的驱动函数这是一个行为，点击按钮的时候要执行的函数又是另外一回事
这样使用的话，每次点击按钮的下标都是3
for(var i = 0; i < aBtns.length; i++){
    aBtns[i].onclick = function(){
        alert(i);
    }
}

alert("循环结束了：" + i);


        <button>按钮1</button>
        <button>按钮2</button> 
        <button>按钮3</button>
```



以下方法通过this可以输出正确的点击按钮下标：
```javascript
    点击按钮，输出当前按钮的下标
for(var i = 0; i < aBtns.length; i++){
    //给每一个按钮添加一个自定义属性
    aBtns[i].index = i;
    aBtns[i].onclick = function(){
        alert(this.index);
    }
}

alert("循环结束了：" + i);


        <button>按钮1</button>
        // index = 0 onclick = func 
        <button>按钮2</button>
        // index = 1 onclick = func 
        <button>按钮3</button>
        // index = 2 onclick = func 
```

## this关键字
this概念：只要封装函数，任何一个函数系统都会内置一个叫做this的变量，<br/>
this变量存储的是地址，是当前函数主人的地址。<br/>

【注】this永远指向当前函数的主人。函数的主人要通过当前上下文去判断。<br/>

this类似于现实生活中，用到的"我"<br/>

```javascript
  常用的情况：

var person = {
  username: "钢铁侠",
  sex: "男",
  show: function(){
    alert(person.username); 
    alert(this.username); 
    //以上两者的指向都是同一个
  }
};
```

```javascript
function show(){
    alert(this);
}
//该函数没人调用的话指向windows
```

## 对象的遍历
只有for in
```javascript
var person = {
  name:'钢铁侠',
  age:18,
  sex:'男',
}

for(var i in person){
  //i是当前遍历到的属性
  document.write(i+','+person[i]+'<br/>')
}
```


## 认识事件
绑定事件<br/>
    1、内联模式<br/>
    2、外联模式/脚本模式(最多)<br/>

绑定事件格式：<br/>
    元素节点.on + 事件类型 = 匿名函数。<br/>

click   事件类型<br/>
onclick 事件处理的函数<br/>


```javascript
  <button onclick="btnclick()">内联模式</button>
  <button id="btn1">外联模式</button>


function btnclick() {
  console.log('内联')
}

var obut = document.getElementById('btn1')
obut.onclick = function(){
  console.log('外联')
}
```

## 事件类型
事件类型的种类：<br/>
一、鼠标事件（可以绑定在任意的元素节点上）<br/>
    click      单击<br/>
    dblclick   双击<br/>
    mouseover  鼠标移入 <br/>
    mouseout   鼠标移出<br/>
    mousemove  鼠标移动（会不停的触发）<br/>
    mousedown  鼠标按下<br/>
    mouseup    鼠标抬起<br/>
    mouseenter 鼠标移入<br/>
    mouseleave 鼠标移出<br/>

二、键盘事件（表单元素，全局window）<br/>
    keydown    键盘按下（如果按下不放手，会一直触发）<br/>
    keyup      键盘抬起<br/>

keypress   键盘按下（只支持字符键）<br/>
    
三、HTML事件<br/>
    1、window事件<br/>
        load    当页面加载完成以后会触发<br/>
        unload  当页面解构的时候触发(刷新页面，关闭当前页面)  IE浏览器兼容<br/>
        scroll  页面滚动<br/>
        resize  窗口大小发生变化的时候触发<br/>

2、表单事件<br/>
blur   失去焦点<br/>
focus  获取焦点<br/>
select 当我们在输入框内选中文本的时候触发<br/>
change 当我们对输入框的文本进行修改并且失去焦点的时候<br/>

【注】必须添加在form元素上<br/>
submit 当我们点击submit上的按钮才能触发<br/>
reset  当我们点击reset上的按钮才能触发<br/>


## 事件对象的获取
事件绑定：<br/>
    元素节点.on + 事件类型 = 匿名函数;<br/>
【注】系统会在事件绑定一旦完成的时候，会自动生成一个事件对象。<br/>

【注】触发事件的时候，系统会自动去调用事件绑定的函数。将事件对象当做第一个参数传入。<br/>
```javascript
var oBtn = document.getElementById("btn1");
//  oBtn.onclick = show;

oBtn.onclick = function(ev){
  //事件对象获取的方式，固定写法。
  var e = ev || window.event;
  alert(e);
}

<body>
    <button id = 'btn1'>按钮</button>
</body>
```


### 修改键
事件对象的四个修改键：<br/>

shiftKey  如果按下shift键，值就是true，否则是false<br/>
ctrlKey<br/>
altKey<br/>
metakey （windows键  mac电脑下command键）<br/>

### 键码和字符码
```javascript
键码:只在keydown下支持。
【注】不管是在大写字母还是小写字母的情况下，返回的统一都是大写字母的ASIIC码值。
    keyCode
    which


字符码: 只在keypress下支持
【注】区分大小写，并且按下的时候我当前按下这个键的ASCII码值。
【注】
    charCode
    which
```

```javascript
window.onload = function(){
  /*  window.onkeydown = function(ev){
        var e = ev || window.event;
      //  alert(e.keyCode);
      // alert(e.which);
      var which = e.keyCode || e.which;
      alert(which); //回车=13
    } */

    window.onkeypress = function(ev){
      var e = ev || window.event;
      var which = e.charCode || e.which;

      alert(which);
    }
}
```


## target 触发对象
target   目标对象/触发对象  事件对象的属性<br/>
注：这个事件是由谁而起的。<br/>
IE8以下不兼容 window.event.srcElement;<br/>

```javascript
  var oLi = document.getElementById("li1");
  oLi.onclick = function(ev){
      var e = ev || window.event;
      var target = e.target || window.event.srcElement;
    alert(this.innerHTML);
    alert(target.innerHTML);
  //以上两者输出结果一样
  //注：this不等于 target
  } 
```

## 事件冒泡
浏览器上事件天生的一个特点：事件流<br/>
事件冒泡：由里向外逐级触发。<br/>
事件捕获：由外向里逐级触发。<br/>


阻止事件冒泡：浏览器兼容问题<br/>
事件对象的属性和方法：<br/>
cancelBubble=true<br/>
stopPropagation()<br/>

```javascript
//封装跨浏览器兼容的阻止事件冒泡
function stopBubble(e){
    //e 是事件对象
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}
```