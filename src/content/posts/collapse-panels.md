---
title: Markdown 折叠面板
published: 2026-08-28
description: 将可选的 Markdown 内容归入紧凑、无障碍的 M3E 折叠面板。
tags: [演示, Markdown, 折叠面板, Shirone]
category: 指南
lang: en
draft: true
---
折叠面板把相关的可选详情收纳在一个紧凑的分组中。标题与正文保留行内与块级 Markdown，同时原生折叠语义让每个面板无需客户端 JavaScript 也可使用。

## 独立面板

默认情况下各项独立展开。在标题前加上 `:+` 可让该项初始展开，或加上 `:-` 使该组在使用 `expand` 时保持关闭。

::: collapse
- **依赖包要求**

  请使用 Node.js 26.13.0 或更高版本，并在安装依赖包前启用 Corepack。

- :+ 安装依赖

  在仓库根目录运行工作区包管理命令。

  ```powershell
  pnpm.cmd install
  ```

- 校验命令

  在构建生产产物前检查内容管线。

  - `pnpm.cmd check:manifest`
  - `npx.cmd astro check`
:::

## 手风琴模式

当只允许一项保持展开时，添加 `accordion`。浏览器直接对原生折叠元素进行分组，因此展开另一项会关闭上一项，无需水合（hydration）。

::: collapse accordion expand
- 这里的 `expand` 有什么作用？

  当没有任何项带 `:+` 标记时，它会初始展开第一项。

- 标题中可以包含 Markdown 吗？

  可以。标题支持行内 **强调** 与 `code`，面板正文支持完整的块级 Markdown。

- 窄屏上会发生什么？

  内容内边距会变得紧凑，长文本自动换行，内嵌代码保留独立的横向滚动区域。
:::

## 作者语法

````markdown
::: collapse accordion
- :+ 第一个标题

  第一个面板内容。

- 第二个标题，含 `code`

  第二个面板内容。
:::
````

容器必须恰好包含一个顶层无序列表。每个项都需要一个标题段落、一个空行以及正文内容。无效或混合的输入会保留为普通的可读 Markdown 列表。
