# promise的基本使用
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