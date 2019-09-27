# 头部head

### HTML` <head> `元素

`<head>` 元素是所有头部元素的容器。`<head>` 内的元素可包含脚本，指示浏览器在何处可以找到样式表，提供元信息，等等。

以下标签都可以添加到 head 部分：`<title>、<base>、<link>`、`<meta>、<script> 以及 <style>`。

### HTML `<title>` 元素

`<title>` 标签定义文档的标题。

title 元素在所有 HTML/XHTML 文档中都是必需的。

### HTML `<base>` 元素

`<base>` 标签为页面上的所有链接规定默认地址或默认目标（target）：

```html
<head>
	<base href="http://www.w3school.com.cn/images/" />
	<base target="_blank" />
</head>
```

### HTML `<link>` 元素

`<link>` 标签定义文档与外部资源之间的关系。

`<link>` 标签最常用于连接样式表：

```html
<head>
	<link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```

还有用其更改**标题栏的图标**,如：

```html
<link rel='icon' href='favicon.ico'/>
<!-- or -->
<link rel='shortcut icon' href='favicon.ico'/>
```

<font color=red>注意</font>：这里的favicon必须是16$$\times$$*16或者32*$$\times$$32的，必须是8位色或者24位色的，格式必须是png或者ico或者gif。

### HTML `<style>` 元素

`<style>` 标签用于为 HTML 文档定义样式信息。

您可以在 style 元素内规定 HTML 元素在浏览器中呈现的样式：

```html
<head>
	<style type="text/css">
		body {background-color:yellow}
		p {color:blue}
	</style>
</head>
```

### HTML `<meta>` 元素

元数据（metadata）是关于数据的信息。

`<meta>` 标签提供关于 HTML 文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。

典型的情况是，meta 元素被用于规定页面的描述、关键词、文档的作者、最后修改时间以及其他元数据。

`<meta>` 标签始终位于 head 元素中。

元数据可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。

### HTML `<script>` 元素

`<script>` 标签用于定义客户端脚本，比如 JavaScript。

