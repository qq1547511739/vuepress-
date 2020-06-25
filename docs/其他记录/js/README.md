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