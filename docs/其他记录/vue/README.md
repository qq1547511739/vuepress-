## 什么是mvvm？

在View和Model之间没有联系<br/>
通过ViewModel进行交互，而且Model和ViewModel之间的交互是双向的<br/>
因此视图的数据的变化会同时修改数据源，而数据源数据的变化也会立即反应view。<br/>

Model: 模型层，在这里表示JavaScript对象<br/>
View:视图层，在这里表示DOM (HTML操作的元素)<br/>
ViewModel: 连接视图和数据的中间件,Vue.js就是MVVM中的ViewModel层的实现者<br/>

在MVVM架构中，是不允许数据和视图直接通信的，只能通过ViewModel来通信<br/>
ViewModel能够观察到数据的变化，并对视图对应的内容进行更新<br/>
ViewModel能够监听到视图的变化，并能够通知数据发生改变<br/>



## vue双向数据绑定
**vue双向数据绑定**<br/>
Vue是采用数据劫持结合发布/订阅模式的方式<br/>
通过Object.defineProperty()来劫持各个属性的setter，getter<br/>
在数据变动时发布消息给订阅者，触发相应的监听回调。<br/>

Object.defineProperty()<br/>
读法：o波j.d烦 泼播踢<br/>

1. 实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。
2. 实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。
3. 实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

![text](./img/shuangxiang.jpg)


## vue中 key 值的作用
使用key来给每个节点做一个唯一标识<br/>
key的作用主要是为了**高效的更新虚拟DOM**。另外vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，<br/>
否则vue只会替换其内部属性而不会触发过渡效果。<br/>


## v-if和v-show的区别
请问 v-if 和 v-show 有什么区别？<br/>
a.实现方式： v-if是根据后面数据的真假值判断直接从Dom树上删除或重建元素节点。  v-show只是在修改元素的css样式，也就是display的属性值，元素始终在Dom树上。<br/>
b.编译过程：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；  v-show只是简单的基于css切换；<br/>
c.编译条件：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译； v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素始终被保留；<br/>
d.性能消耗：v-if有更高的切换消耗，不适合做频繁的切换；  v-show有更高的初始渲染消耗，适合做频繁的额切换<br/>

## computed和methods区别
computed具有缓存性，基于依赖进行缓存的，只有相关的依赖发生改变才会重新缓存<br/>
在我们处理大量数据的时候使用可以大大提高效率<br/>
计算过程过于庞杂，而且会经常被调用的话，就使用计算属性<br/>

methods只有在调用的时候才会执行对应的方法，结果不会缓存，重新渲染时，会重新调用执行<br/>

computed的性能比methods更高


## vuex
**什么是vuex？**
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式<br/>

五大核心:<br/><br/>
state：(四爹t)保存共享状态的地方 响应式的 相当于data 处理用commit  单一状态树<br/><br/>
getter：(给托)类似于组件里面的计算属性 相当于computed<br/><br/>
mutation：(谬贴神)方法 不能进行异步操作，只能同步函数<br/><br/>
action：(啊神)做一些异步操作 类似于mutation，但是用来替代mutation进行异步操作的 处理用dispatch<br/><br/>
module：(莫卓)划分模块 vuex允许我们将store分割模块，每个模块都拥有自己的state，mutations，action，getters等<br/><br/><br/><br/>


修改state至少需要经过mutations，一般不直接修改state，直接修改记录不到是哪一次错误<br/>
mutations可以跟踪我们每一次提交的状态

![text](./img/zhuangtaishu.jpg)



## 组件中的data为什么是一个函数

组件的好处就是可以**复用**，在多页面中进行反复调用
如果data不是一个函数的话，当组件发生改变，**所有引用组件都将会发生改变**，这是我们所不希望看到的