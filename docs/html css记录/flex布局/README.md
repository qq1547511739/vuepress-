# flex布局
### flex是目前web开发中使用最多的布局方案
### flex布局(flexble布局，弹性布局)
<br>

#### 两个重要概念：
开启了flex布局的元素叫 flex container

flex container 里的直接子元素叫 flex items
<br><br>

设置dislay属性为flex 或者inline-flex 可以成为flex container

## flex container相关的属性
### flex-direction
flex items默认都是沿着main axis (主轴)从main start开始往main end方向排布
```javascript
dispiay:flex
flex-direction:绝对主轴的方向
row:主轴从左到右
row-reverse:主轴从右到左
column:主轴从上到下
column-reverse:主轴从下到上
```

### justify-content
justify-content决定了flex items在main axis上的对齐方式
```javascript
justify-content
flex-start(默认值):与main start对齐
flex-end:与main end对齐
center:居中对齐
//三种等分对齐方式：
space-between
space-evenly
space-around
```

### align-items
align-items决定了flex items在cross axis上的对齐方式
```javascript
align-items:
normal:在弹性布局中，效果和stretch一样
stretch:
flex-start:与cross start对齐
flex-end:与cross end对齐
center:居中对齐
baseline:与基线对齐
```


### flex-wrap
默认情况下所有flex items都会在同一行显示
```javascript
flex-wrap:
nowrap(默认):单行
wrapa:多行
```

### align-content
align-content决定了flex items在cross axis上的对齐方式,用法和justify-content类似
```JavaScript
align-content:
stretch:
flex-start:与cross start对齐
flex-end:与cross end对齐
center:居中对齐
//三种等分对齐方式：
space-between
space-evenly
space-around
```


## flex items相关的属性
### order
order决定了flex items的排布顺序

可以设置任意整数，值越小就越在前面，默认值为0
```javascript
order:数字
```


### align-self
flex items可以通过align-self 覆盖flex container设置的align-self
```javascript
stretch
flex-start
flex-end
center
baseline
```


### flex-grow
flex-grow决定了flex items如何扩展

可以设置任意非负数字(正小数，正整数，0)，默认值为0

当flex container 在main axis方向上剩余有空间时flex-grow才会生效

如果flex items的flex-grow都等于1的话，均等分

如果flex items的flex-grow总和(sum)超过1，每个flex items的扩展空间为
>剩余空间*flex-grow/sum

如果flex items的flex-grow总和(sum)不超过1，每个flex items的扩展空间为
>剩余空间*flex-grow


