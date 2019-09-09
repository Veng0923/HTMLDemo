# web存储

HTML5 web 存储,一个比cookie更好的本地存储方式。

早些时候,本地存储使用的是 cookie。但是Web 存储需要更加的安全与快速. 这些数据不会被保存在服务器上，但是这些数据只用于用户请求网站数据上.它也可以存储大量的数据，而不影响网站的性能.

数据以 键/值 对存在, web网页的数据只允许该网页访问使用。

## localStorage 和 sessionStorage

客户端存储数据的两个对象为：

- localStorage - 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
- sessionStorage - 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。

### localStorage 对象

```javascript
// 存储数据
localStorage.authorName = "veng";
// 这样也行
localStorage.setItem("authorName","author");

// 取出数据
const authorName = localStorage.authorName;
// 或者
localStorage.getItem("authorName");
```

然后打开开放者工具:

![1568017523945](assets/1568017523945.png)

然后关闭标签页，再次访问，发现数据依然存在。

如果想要移除之前存的值：

```javascript
localStorage.removeItem("authorName");
```

删除所有的数据：

```javascript
localStorage.clear();
```

获取某个值的key：

```javascript
localStorage.key(`author`);
```

### sessionStorage对象

方法跟localStorage的方法一样，只不过具有短暂性。