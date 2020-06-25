## promise的基本使用
**promise是：异步编程的解决方案，解决了以前的回调地狱，对你的异步操作进行封装**
**有三种状态分别是：等待状态，完成状态，拒绝状态，从一种状态变为另一种状态，是不可逆的**

能解决回调地狱，是因为promise实现了链式调用
每次调用then函数返回的都是新promise继续往下调用

**缺点**：一旦执行promise没有办法取消，错误需要回调函数来捕获


什么情况下会用到promise？
一般情况下是有异步操作时，使用promise对这个异步操作进行封装
树形变为线形，链式编程，平级结构清晰，嵌套结构复杂

异步操作，结构复杂
```javascript

        以下是异步操作
        setTimeout(() =>{
            console.log('五秒到了')
            console.log('五秒到了')
            console.log('五秒到了')
            setTimeout(() =>{
                console.log('五秒到了')
                console.log('五秒到了')
                console.log('五秒到了')
                setTimeout(() =>{
                console.log('五秒到了')
                console.log('五秒到了')
                console.log('五秒到了')
                },5000)
            },5000)
        },5000)
```

使用promise：树形变为线形，链式编程，平级结构清晰，嵌套复杂
```javascript
//树形变为线形，链式编程，平级结构清晰，嵌套复杂
    new Promise ((resolve,reject) => {
      //第一次网络请求的代码
      setTimeout(() => {
        resolve()
      },5000)
    }).then(() =>{
      //第一次请求的结果
      console.log('五秒到了');
      
      return new Promise ((resolve,reject) =>{
        //第二次网络请求的代码
        setTimeout(() =>{
          resolve()
        },4000)
      })
    }).then(() =>{
        //第二次请求的结果
      console.log('四秒到了');
      
      return new Promise ((resolve,reject) => {
        setTimeout(() => {
          resolve()
        },3000)
      })
    }).then(() => {
      console.log('三秒到了')
    })

```

成功的时候调用resolve   then
失败的时候调用reject      catch

```javascript
    new Promise ((resolve,reject) => {
      setTimeout(() => {
        resolve()
        reject()
      },5000)
    }).then().catch()
```

另一种写法
```javascript
    new Promise ((resolve,reject) => {
      setTimeout(() => {
        resolve()
        reject()
      },5000)
      //then可以放入两个函数，函数1为满足条件成功执行，函数2为不满足条件执行失败，具体如下
    }).then(函数1,函数2)
```

其他两种简写方法：
```javascript
//简写格式 Promise.resolve(结果)
    new Promise ((resolve,reject) => {
      setTimeout(() => {
        resolve('aaa')
      },5000)
    }).then(res => {
      console.log(res)

      return Promise.resolve(res+'111')
    }).then(res => {
      console.log(res)

      return Promise.resolve(res+'222')
    }).then(res => {
      console.log(res)
    })
```

```javascript

//省略promise.resolve的写法
    new Promise ((resolve,reject) => {
      setTimeout(() => {
        resolve('aaa')
      },5000)
    }).then(res => {
      console.log(res)
//内部会用promise对其进行包装
      return (res+'111')
    }).then(res => {
      console.log(res)
      
      return (res+'222')
    }).then(res => {
      console.log(res)
    })
```

promise的all意思
两个网络请求都满足时，才进行显示

```javascript
//两个网络请求都满足时，才进行显示
  <script>
    Promise.all([
      new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve({name:'wanjiapeng',age:'18'})
        },7000)
      }),
      new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve('result2')
        },3000)
      })
    ]).then(results => {
      console.log(results)
    })
```


## let const的解释

var的设计可以看成JavaScript语言设计上的错误，这种错误多半不能修复和移除<br/>
我们可以将let看成更完美的var<br/>
JS中使用var来声明一个变量时, 变量的作用域主要是和函数的定义有关<br/>
es5只有function有作用域，ES5中的var是没有块级作用域的(if/for)<br/>
针对于其他块定义来说是没有作用域的，比如if/for等，这在我们开发中往往会引起一些问题<br/>
ES6中,加入了let, let它是有if和for的块级作用域 <br/>

let 关键字是用来声明变量   更过分，只要遇到大括号就形成作用域<br/>
【注】let关键字声明的变量，所在作用域叫做块级作用域。<br/>

const 声明变量，变量值只能在声明的时候确定，后续是没有办法修改的。<br/>
【注】const声明常量(变量没有办法改);<br/>

```javascript
    // 一旦给const修饰的标识符被赋值之后, 不能修改
    // 在使用const定义标识符,必须进行赋值
    const name = 'why';
    name = 'abc'
    // const的变量不能被修改，所以还是why
    console.log(name)  

    

    // 常量的含义是指向的对象不能修改, 但是可以改变对象内部的属性.
    const obj = {
        name: 'taotao',
    }
    console.log(obj.name);
    // obj = {}  这样改会报错
    obj.name = 'jiapeng'; //这样改不会报错
    console.log(obj.name);
```


## 箭头函数
```javascript
    箭头函数:新潮的函数写法
    [注]作用：适当的省略函数中的 function和return关键字
    不利：代码可读性减弱，阅读时间花费多

    注：箭头函数需注意部分
    1，箭头函数不能用new

    2，箭头函数如果返回值是一个对象，一定要加()
    普通：
    const show = () => {
    }
    返回值为对象：
    const show = () => ({
    })

    // 3,箭头函数中的this指向的是上一层函数的主人
    let person = {
        username:'钢铁侠',
        // show: function(){
        //     alert(person.username)
        //     alert(this.username)
        //     //此处两者alert指向同一个
        // }

        show: () => {
            alert(person.username)
            alert(this.username)
            //此处this指向window
        }
    }
```

例如：
```javascript
    //1，无参数，无返回值
    function show(){
        alert('hello word');
    }

    const show = () => {
        alert('hello word');
    }

    //2,有一个参数，无返回值
    function xxx(num){
        alert(num);
    }

    const xxx = num => {
        alert(num);
    }

    //3,有一个参数有返回值
    var x = 5
    function add(x){
        return x+10;
        
    }
    alert(add(x))

    const add = x =>{
        return x + 10;
    } 
    alert(add(x))

    //4,多个参数，有返回值
    const x = 10
    const y = 20
    function show (x,y){
        alert(x + y);
    }

    const show = (x,y) => {
        alert(x+y);
    }
```