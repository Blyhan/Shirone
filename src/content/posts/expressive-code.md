---
title: Expressive Code 示例
published: 2026-04-10
description: 使用 Expressive Code 时 Markdown 代码块的呈现效果。
tags: [Markdown, 博客, 演示]
category: 示例
draft: true
---
下面我们来了解使用 [Expressive Code](https://expressive-code.com/) 时代码块的呈现效果。这里的示例基于官方文档，你可以查阅官方文档了解更多细节。

## Expressive Code

### 语法高亮

[语法高亮](https://expressive-code.com/key-features/syntax-highlighting/)

#### 常规语法高亮

```js
console.log('This code is syntax highlighted!')
```

#### 渲染 ANSI 转义序列

```ansi
ANSI 颜色:
- 常规: [31mRed[0m [32mGreen[0m [33mYellow[0m [34mBlue[0m [35mMagenta[0m [36mCyan[0m
- 粗体:    [1;31mRed[0m [1;32mGreen[0m [1;33mYellow[0m [1;34mBlue[0m [1;35mMagenta[0m [1;36mCyan[0m
- 暗淡:  [2;31mRed[0m [2;32mGreen[0m [2;33mYellow[0m [2;34mBlue[0m [2;35mMagenta[0m [2;36mCyan[0m

256 色（显示第 160-177 号颜色）:
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m
[38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171[0m
[38;5;172m172 [38;5;173m173 [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177[0m

完整 RGB 颜色:
[38;2;34;139;34mForestGreen - RGB(34, 139, 34)[0m

文本格式: [1mBold[0m [2mDimmed[0m [3mItalic[0m [4mUnderline[0m
```

### 编辑器与终端边框

[编辑器与终端边框](https://expressive-code.com/key-features/frames/)

#### 代码编辑器边框

```js title="my-test-file.js"
console.log('Title attribute example')
```

---

```html
<!-- src/content/index.html -->
<div>File name comment example</div>
```

#### 终端边框

```bash
echo "This terminal frame has no title"
```

---

```powershell title="PowerShell 终端示例"
Write-Output "This one has a title!"
```

#### 覆盖边框类型

```sh frame="none"
echo "Look ma, no frame!"
```

---

```ps frame="code" title="PowerShell Profile.ps1"
# 若不覆盖，这里默认是终端边框
function Watch-Tail { Get-Content -Tail 20 -Wait $args }
New-Alias tail Watch-Tail
```

### 文本与行标记

[文本与行标记](https://expressive-code.com/key-features/text-markers/)

#### 标记整行与行范围

```js {1, 4, 7-8}
// 第 1 行 - 按行号标记
// 第 2 行
// 第 3 行
// 第 4 行 - 按行号标记
// 第 5 行
// 第 6 行
// 第 7 行 - 按范围 "7-8" 标记
// 第 8 行 - 按范围 "7-8" 标记
```

#### 选择行标记类型（mark、ins、del）

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log('this line is marked as deleted')
  // 本行与下一行被标记为插入
  console.log('this is the second inserted line')

  return 'this line uses the neutral default marker type'
}
```

#### 为行标记添加标签

```jsx {"1":5} del={"2":7-8} ins={"3":10-12}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}
  value={value}
  className={buttonClassName}
  disabled={disabled}
  active={active}
>
  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

#### 为行标记添加单独成行的长标签

```jsx {"1. 在这里传入 value 属性：":5-6} del={"2. 移除 disabled 与 active 状态：":8-10} ins={"3. 添加这段代码以在按钮内渲染 children：":12-15}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}

  value={value}
  className={buttonClassName}

  disabled={disabled}
  active={active}
>

  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

#### 使用类 diff 语法

```diff
+本行会被标记为插入
-本行会被标记为删除
这是一行普通文本
```

---

```diff
--- a/README.md
+++ b/README.md
@@ -1,3 +1,4 @@
+这是一个真实的 diff 文件
-所有内容都会保持不修改
 空白也不会被移除
```

#### 结合语法高亮与类 diff 语法

```diff lang="js"
  function thisIsJavaScript() {
    // 整个代码块都会按 JavaScript 高亮，
    // 并且仍然可以为其添加 diff 标记！
-   console.log('Old code to be removed')
+   console.log('New and shiny code!')
  }
```

#### 标记行内的特定文本

```js "given text"
function demo() {
  // 标记行内任意指定的文本
  return 'Multiple matches of the given text are supported';
}
```

#### 正则表达式

```ts /ye[sp]/
console.log('The words yes and yep will be marked.')
```

#### 转义正斜杠

```sh /\/ho.*\//
echo "Test" > /home/test.txt
```

#### 选择行内标记类型（mark、ins、del）

```js "return true;" ins="inserted" del="deleted"
function demo() {
  console.log('These are inserted and deleted marker types');
  // return 语句使用默认的标记类型
  return true;
}
```

### 自动换行

[自动换行](https://expressive-code.com/key-features/word-wrap/)

#### 按代码块配置自动换行

```js wrap
// 使用 wrap 的示例
function getLongString() {
  return 'This is a very long string that will most probably not fit into the available space unless the container is extremely wide'
}
```

---

```js wrap=false
// 使用 wrap=false 的示例
function getLongString() {
  return 'This is a very long string that will most probably not fit into the available space unless the container is extremely wide'
}
```

#### 配置换行内容的缩进

```js wrap preserveIndent
// 使用 preserveIndent 的示例（默认启用）
function getLongString() {
  return 'This is a very long string that will most probably not fit into the available space unless the container is extremely wide'
}
```

---

```js wrap preserveIndent=false
// 使用 preserveIndent=false 的示例
function getLongString() {
  return 'This is a very long string that will most probably not fit into the available space unless the container is extremely wide'
}
```

## 可折叠区块

[可折叠区块](https://expressive-code.com/plugins/collapsible-sections/)

```js collapse={1-5, 12-14, 21-24}
// 以上这些样板初始化代码都会被折叠
import { someBoilerplateEngine } from '@example/some-boilerplate'
import { evenMoreBoilerplate } from '@example/even-more-boilerplate'

const engine = someBoilerplateEngine(evenMoreBoilerplate())

// 这部分代码默认可见
engine.doSomething(1, 2, 3, calcFn)

function calcFn() {
  // 可以有多个折叠区块
  const a = 1
  const b = 2
  const c = a + b

  // 这部分保持可见
  console.log(`Calculation result: ${a} + ${b} = ${c}`)
  return c
}

// 从这里到代码块末尾的代码会再次被折叠
engine.closeConnection()
engine.freeMemory()
engine.shutdown({ reason: 'End of example boilerplate code' })
```

## 行号

[行号](https://expressive-code.com/plugins/line-numbers/)

### 按代码块显示行号

```js showLineNumbers
// 这个代码块会显示行号
console.log('Greetings from line 2!')
console.log('I am on line 3')
```

---

```js showLineNumbers=false
// 这个代码块不显示行号
console.log('Hello?')
console.log('Sorry, do you know what line I am on?')
```

### 更改起始行号

```js showLineNumbers startLineNumber=5
console.log('Greetings from line 5!')
console.log('I am on line 6')
```
