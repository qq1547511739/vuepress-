## 插值操作
**v-once**<br/>
不希望它响应可以用这个<br/>
该指令后面不需要跟任何表达式<br/>
该指令表示元素和组件只渲染一次，不会随着数据的改变而改变。<br/>

message发生改变，界面并没有重新渲染<br/>
![Alt text](./img/once.jpg)

**v-html**<br/>
我们从服务器请求到的数据本身就是一个HTML代码<br/>
如果我们直接通过{{}}来输出，会将HTML代码也一起输出。<br/>
但是我们可能希望的是按照HTML格式进行解析，并且显示对应的内容。<br/>
我们希望解析出HTML展示，可以使用v-html指令<br/>
![Alt text](./img/html.jpg)

**v-text**<br/>
一般不用<br/>


**v-pre**<br/>
v-pre用于跳过这个元素和它子元素的编译过程，不会解析<br/>


## 属性绑定
除了内容需要动态来决定外，某些属性我们也希望动态来绑定。<br/>
比如动态绑定a元素的href属性<br/>
比如动态绑定img元素的src属性<br/>
v-bind用于绑定一个或多个属性值，或者向另一个组件传递props值<br/>
![Alt text](./img/bind.jpg)

### 动态绑定class

很多时候，我们希望动态的来切换class，比如：
1. 当数据为某个状态时，字体显示红色。
2. 当数据另一个状态时，字体显示黑色。

绑定class有两种方式：
1. 对象语法
2. 数组语法

对象语法的含义是:class后面跟的是一个对象
```javascript
<h2 :class="{'类名1': Boolean, '类名2': Boolean}">Hello World</h2>
<h2 :class="{'active': isActive, 'line': isLine}">Hello World</h2>
//在data里面进行判断
//如果内容太长了，可以定义一个方法
<h2 :class="getClass()">hello world</h2>

methods:{
  getClass:function(){
    return {'active': this.isActive, 'line': this.isLine}
  }
}
```

数组语法的含义是:class后面跟的是一个数组<br/>
用得不多
```javascript
<h2 :class="['active', 'line']">Hello World</h2>

```

### 动态绑定style
我们可以利用v-bind:style来绑定一些CSS内联样式

绑定class有两种方式：
1. 对象语法
2. 数组语法


```javascript
<h2 :style="{key(属性名): value(属性值)}">hello world </h2>
<h2 :style="{font-size: finalSize}">hello world </h2>
data:{
  finalSize:'100px'
}
```


## 计算属性属性属性
在某些情况，我们可能需要对数据进行一些转化后再显示，<br/>
或者需要将多个数据结合起来进行显示，此时就会用到计算属性<br/>

如下图：
![text](./img/jisuan.jpg)

**计算属性和methdos对比**
计算属性会进行缓存，如果多次使用时，计算属性只会调用一次。<br/>
computed具有缓存性，基于依赖进行缓存的，只有相关的依赖发生改变才会重新缓存<br/>
在我们处理大量数据的时候使用可以大大提高效率<br/>
计算过程过于庞杂，而且会经常被调用的话，就使用计算属性<br/>

methods只有在调用的时候才会执行对应的方法，结果不会缓存，重新渲染时，会重新调用执行<br/>

computed的性能比methods更高<br/>
