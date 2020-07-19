## 块级元素与行内元素
### 一、常见的块级元素<br/>
div、p、h1-h6、form、ul、ol、dl、dt、dd、li、table、tr、
td、th、hr、blockquote、address、table、menu、pre<br/>

HTML5：header、section、article、footer等<br/>
```javascript
1、块级元素独占一行，当没有设置宽高时，它默认设置为100%（其宽度自动填满其父元素宽度）
2、块级元素允许设置宽高，width、height、margin、padding、border都可控制
注：块级元素设置了width宽度属性后仍然独占一行
```

### 二、常见的行内元素及行内块元素
（1）span、img、a、label、code、input、abbr、em、b、big、cite、i、q、textarea、
select、small、sub、sup，strong、u、button（display：inline-block）

```javascript
1、行内元素不能独占一行，与其他行内元素排成一行，其宽度随元素的内容变化而变化
2、行内元素不能设置width、height、margin、padding
3、行内元素默认宽度为其content宽度
4、行内元素只能包括文字或行内元素、行内块元素，不能包括块级元素
5、display：inline-block：行内块元素与行内元素属性基本相同即不能独占一行，但是可以设置width及height
行内元素的水平方向的padding-left和padding-right都会产生边距效果，但是竖直方向上的padding-top和padding-bottom都不会产生边距效果
```
（2）有一些特别的行内元素可设置宽高
替换元素：< img>、< input>、< textarea>、< select>、< object>
