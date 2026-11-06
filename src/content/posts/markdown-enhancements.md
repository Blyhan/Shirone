---
title: Shirone Markdown 增强功能
published: 2026-08-19
pinned: true
description: 探索 Shirone 的自定义 Markdown 扩展、表现力丰富的组件与写作语法。
tags: [演示, Markdown, 扩展语法, 主题, Shirone]
series: markdown-syntax-guide
seriesOrder: 3
category: 指南
lang: en
draft: true
---
Shirone 提供了一系列主题专属的 Markdown 扩展和自定义语法容器。它们构建在我们原生的 unified AST 处理流程之上，所有扩展都会在站点构建时渲染为可访问的语义化 HTML，具有**零客户端 JavaScript 水合开销**和**100% 的 M3E 设计令牌对齐**。

## 文件树

文件树可将多级项目结构、源码层级和终端目录输出转换为紧凑的交互式树形视图，并自动显示扩展名图标、diff 高亮和可折叠分支。

### 1. 嵌套列表语法（`:::file-tree`）

当以 Markdown 嵌套列表的形式直接书写文件层级时，可使用 `:::file-tree` 块指令。

```markdown
:::file-tree{title="Shirone 源码树"}
- src
  - components/
    - ++ Navigation.svelte # 新增组件
    - -- Button.astro # 删除组件
  - content
    - posts/
      - markdown-enhancements.md
  - layouts/
    - PostLayout.astro
  - plugins
    - markdown/
      - rehype-file-tree.mjs
  - styles
    - markdown/
      - trees.css
  - **content.config.ts** # 重要文件
- public/
  - favicon.svg
- package.json
:::
```

:::file-tree{title="Shirone 源码树"}
- src
  - components/
    - ++ Navigation.svelte # 新增组件
    - -- Button.astro # 删除组件
  - content
    - posts/
      - markdown-enhancements.md
  - layouts/
    - PostLayout.astro
  - plugins
    - markdown/
      - rehype-file-tree.mjs
  - styles
    - markdown/
      - trees.css
  - **content.config.ts** # 重要文件
- public/
  - favicon.svg
- package.json
:::

#### 编写规则与标记

- **Diff 状态**：在条目开头加上 `++`（绿色背景与徽章）或 `--`（红色背景与删除线）以突出变更。
- **注释**：`#` 之后的任何文本都会渲染为弱化的、右对齐的行内注释。
- **强调**：用 `**粗体**` 包裹文件名，让关键文件获得更醒目的视觉权重。
- **可折叠目录**：由嵌套列表项推断出的目录默认展开。在名称末尾加上斜杠（例如 `components/`）可创建折叠目录，读者可通过点击或键盘导航展开。

---

### 2. 终端输出语法（```` ```file-tree ````）

如果你已经从 `tree` 等命令行工具得到了目录树文本，可以直接把它粘贴到 `file-tree` 围栏代码块中。Unicode 分支字符（`├──`、`└──`、`│`）和 ASCII 分支都会被自动解析。

````markdown
```file-tree title="构建输出" icon="simple"
dist
├── _astro/
│   ├── index.css
│   └── page.js
└── favicon.ico
```
````

```file-tree title="构建输出" icon="simple"
dist
├── _astro/
│   ├── index.css
│   └── page.js
└── favicon.ico
```

#### 配置选项

- `title="string"`：设置自定义的头部标题以及该树的无障碍标签。
- `icon="colored" | "simple"`：在多彩的扩展名图标（`colored`，默认）与极简单色图标（`simple`）之间选择。

---

## 代码树

交互式代码树将左侧的多级文件层级导航面板与右侧即时切换的代码面板配对呈现，为多文件示例、模块或整套目录讲解提供类似 IDE 的阅读体验。

### 1. 容器语法（`:::code-tree`）

在 `:::code-tree` 块指令中组合多个围栏代码块。每个代码块通过 `title="path/to/file"` 指定其路径。

````markdown
:::code-tree{title="Shirone 组件演示" height="380px" entry="src/Button.svelte"}
```svelte title="src/Button.svelte"
<script lang="ts">
  let { label = "Click me" } = $props();
</script>

<button class="m3-btn">{label}</button>
```

```stylus title="src/styles/button.styl"
.m3-btn
  background: var(--primary)
  color: var(--on-primary)
  border-radius: var(--shape-corner-m)
```

```json title="package.json"
{
  "name": "button-demo",
  "version": "1.0.0"
}
```
:::
````

:::code-tree{title="Shirone 组件演示" height="380px" entry="src/Button.svelte"}
```svelte title="src/Button.svelte"
<script lang="ts">
  let { label = "Click me" } = $props();
</script>

<button class="m3-btn">{label}</button>
```

```stylus title="src/styles/button.styl"
.m3-btn
  background: var(--primary)
  color: var(--on-primary)
  border-radius: var(--shape-corner-m)
```

```json title="package.json"
{
  "name": "button-demo",
  "version": "1.0.0"
}
```
:::

#### 配置与标记

- `title="string"`：设置代码树的头部标题和无障碍标签。
- `height="string"`：设置桌面视图的高度（默认 `420px`，例如 `380px`、`26rem`）。
- `entry="filepath"`：指定首次加载时激活的文件。
- `icon="colored" | "simple"`：在彩色或极简单色文件图标之间切换。
- `:active`：在任意围栏代码块上标注 `:active`，把它指定为默认激活的标签页。

---

### 2. 本地目录自动导入（`@[code-tree]`）

直接指向工作区中的任意本地目录路径，即可在构建时自动扫描并生成交互式代码树，无需手动复制文件内容。

```markdown
@[code-tree title="动漫工具函数" entry="status.ts"](/src/utils/anime)
```

@[code-tree title="站点配置" entry="siteConfig.ts"](/src/config)

