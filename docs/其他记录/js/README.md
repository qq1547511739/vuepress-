## 递归
**认识递归**
递归就是，打开一个房间的门，发现里面还有一个房间有门，不停地开门进房间直到没有门了原路返回。<br/>

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

## 闭包
什么是闭包，如何使用它，为什么要使用它？

满足以下特点的就是闭包：<br/>
1. 函数嵌套函数
2. 内部函数使用外部函数的形参和变量
3. 被引用的形参和变量就不会被(垃圾回收机制所回收)

闭包的作用：<br/>
1. 可以是变量常驻在内存当中
2. 可以读取函数内部的变量
3. 避免全局变量污染(开发中如果声明的是全局变量的话，多人协作难免会出现重复的变量)
4. 可以声明私有成员

闭包的缺点：
1. 闭包使函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包否则会造成网页的性能问题


```javascript
var a = 2; //声明全局变量，会造成变量我污染
function show(){
    a++;
    alert(a)
}
alert(a); //2
show(); //3
shwo(); //4



function show(){
    var a = 2;
    a++;
    alert(a)
}
show();//3
show();//3
alert(a);//报错(回收机制)



function aaa(){
    var a = 2;
    function bbb(){
        a++;
        alert(a);
    }
    return bbb;
}
var ccc = aaa();
ccc();
ccc();
alert(a)//局部变量访问不到
```

立即执行函数：
```javascript
()()//两个括号，先声明这个函数，再执行
(function show(){
    alert('hello world')
})()


var ccc = (function(){
    var a = 2;
    return function(){
        a++;
        alert(a)
    } 
})()

ccc();//3
ccc();//4
alert(a)//报错
```

## 深拷贝浅拷贝
最简单区分深浅拷贝的方法<br/>
假设a复制了b，当修改a时，看b是否会发生改变，b变了就是深拷贝，b没有变化就是浅拷贝<br/>

深拷贝：<br/>
创造出一个一模一样的新对象，新对象跟原对象不共享内存，修改新对象不会更改原对象<br/>

例子：你从我的电脑拷贝一份文件到你的电脑，我修改我电脑里面的文件并不会修改你电脑里的文件<br/>

浅拷贝：<br/>
只复制该对象的地址，不是复制对象的本身，新旧对象共享同一块内存<br/>

例子：我们两个人同用一个博客账号，当你修改博客里面的内容，我们两个看到的博客内容都是经过修改的<br/>


## 防抖与节流
**防抖**<br/>
让函数在停止触发事件后的一段时间再执行<br/>
在规定的时间内，只让最后一次生效，前面的不生效，就是指触发事件后在n秒内函数只执行一次，如果在n秒内又触发了事件，则重新计算时间<br/>

用于：输入框搜索，验证码<br/>

**节流**<br/>
限制一个函数在一定时间内只能执行一次，只让函数触发的第一次生效，后面的不生效<br/>

用于：表单提交<br/>

## 构造函数

1. 构造函数的首字母需要大写
2. 我们构造函数不需要return 就可以返回结果
3. 调用函数必须使用new
4. 我们只要new xxx(),调用函数就创建一个对象
5. 我们的属性和方法面前必须添加 this

```javascript
function Stoo(name,age,sex){
  this.name = name;
  this.age = age;
  this.sex = sex;
}
var1 = new Stoo('刘德华',18,'男')
console.log(var1.name);
console.log(var1.age)
console.log(var1.sex)
```

## new关键字

new在执行时会做的四件事：<br/>
1. new构造函数可以在内存中创建一个空的对象
2. 让this指向这个新的对象
3. 执行构造函数里面的代码，给这个新对象添加属性和方法
4. 返回这个新对象(所以构造函数里面不需要return)

new和构造函数确认了眼神：<br/>
1. 他们两生了一个宝宝(新对象)
2. 这个宝宝必须是亲生的(this指向)
3. 教孩子读书(执行构造函数了的代码)
4. 长大挣钱回报父母(所以构造函数里面不需要return)


## 垃圾回收机制
从根开始查找引用的对象，当一个对象没有任何一个变量或属性对他进行引用，对象将被垃圾回收机制所回收<br/>
此时这种对象就是一个垃圾，这种对象过多会占用大量的内存，导致程序变慢，所以必须清理<br/>
在js中拥有自动的垃圾回收机制，会自动将这些垃圾从内存中销毁<br/>


## 原型
**prototype 原型对象** (普了托time)<br/>
概念：每一个函数上，都有一个原型对象prototype<br/>

一般用在构造函数上，我们可以给构造函数的原型prototype添加方法
1. 如果我们将方法添加到构造函数的原型prototype对象上，
2. 构造函数构造出来的对象将共享原型上所有的方法


**属性__proto__**<br/>
构造函数构造出来的对象，都有一个属性__proto__，指向构造出这个对象的构造函数的原型<br/>


**原型链**
当试图得到一个对象的属性时，如果这个对象不存在这个属性的时候，<br/>
那么他就会去他的构造函数prototype里面去找，因为prototype也是一个对象<br/>
所以它也有一个__proto__属性，它会一层一层的往上面找，这就是原型链<br/>
一直到null为止<br/>


**instanceof 关键字**(in死吞赛夫)<br/>
功能：判断某一个对象是否是这个构造函数构造出来的



```javascript
function show(){

}
alert(show.prototype)//此处原型为object
```

给数组添加一个方法，可以对数组中每一个元素进行求和
普通方法：
```javascript
var arr1 = [10, 20, 30, 40, 50];
var arr2 = [1,2,3,4,5];

arr1.sum = function(){
  var res = 0;
  for(var i = 0; i < this.length; i++){
    res += this[i];
  }
  return res;
}

arr2.sum = function(){
  var res = 0;
  for(var i = 0; i < this.length; i++){
    res += this[i];
  }
  return res;
}
console.log(arr1.sum());
console.log(arr2.sum());
```

原型方法：
```javascript
var arr1 = [10, 20, 30, 40, 50];
var arr2 = [1,2,3,4,5];

Array.prototype.sum = function(){
  var res = 0;
  for(var i = 0; i < this.length; i++){
    res += this[i];
  }
  return res;
}

console.log(arr1.sum());//150
console.log(arr2.sum());//15
alert(arr1.sum == arr2.sum);//true
```

混合法：
```javascript
function Person(name, sex){           
    this.name = name;
    this.sex = sex;      
}

//Person构造函数添加方法，添加在构造函数的原型上prototype
Person.prototype.showName = function(){
    alert("我的名字" + this.name);
}
Person.prototype.showSex = function(){
    alert("我的性别" + this.sex);
}

var p1 = new Person("blue", "男");
p1.showName();
p1.showSex();


var p2 = new Person("red", "女");
p2.showName();
p2.showSex();

alert(p1.showName === p2.showName); //true
```

普通方法：
```javascript
function Person(name, sex){
    //1、原料
    // var obj = new Object();
    // this = new Object();

    //2、加工
    this.name = name;
    this.sex = sex;
    this.showName = function(){
        alert("我的名字叫" + this.name);
    }
    this.showSex = function(){
        alert("我的性别是" + this.sex + "的");
    }

    //3、出厂
    // return obj;
    //return this;
}

var p1 = new Person("blue", "男");
p1.showName();
p1.showSex();


var p2 = new Person("red", "女");
p2.showName();
p2.showSex();

alert(p1.showName === p2.showName); //false,虽然代码一样，但是是两套不同的函数
```

## 面向对象与面向过程
面向对象有三大特征：封装性、继承性、多态性<br/>

举例来说：比如说你要去饭店吃饭，你只需要饭店，找到饭店的服务员，跟她说你要吃什么，然后就会给你做出来让你吃，你并不需要知道这个饭是怎么错做的，你只需要面向这个服务员，告诉他你要吃什么，然后他也只需要面向你吃完收到钱就好，不需要知道你怎么对这个饭进行吃。

特点：<br/>
1：将复杂的事情简单化。<br/>
2：面向对象将以前的过程中的执行者，变成了指挥者。<br/>
3：面向对象这种思想是符合现在人们思考习惯的一种思想。<br/>

1、封装性
```javascript
只隐藏对象的属性和实现细节，仅对外提供公共访问方式
好处：将变化隔离、便于使用、提高复用性、提高安全性
原则：将不需要对外提供的内容隐藏起来；把属性隐藏，提供公共方法对其访问
```

2、继承性
```javascript
提高代码复用性；继承是多态的前提
就是两种事物间存在着一定的所属关系，那么继承的类就可以从被继承的类中获得一些属性和方法,这就提高了代码的复用性。
```

3、多态性
```javascript
是父类或接口定义的引用变量可以指向子类或具体实现类的实例对象
好处：提高了程序的扩展性
弊端：当父类引用指向子类对象时，虽提高了扩展性，但只能访问父类中具备的方法，不可访问子类中的方法；即访问的局限性。
前提：实现或继承关系；覆写父类方法。
```