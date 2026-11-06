---
title: Markdown 提示容器
published: 2026-08-27
description: 使用 Shirone 的 M3E Markdown 容器呈现备注、警告与可选详情。
tags: [演示, Markdown, 提示容器, Shirone]
category: 指南
lang: en
draft: true
---
提示容器（Admonitions）能让辅助信息在视觉上保持独立，同时不打断文章的阅读节奏。所有形式都在服务端渲染，并使用同一个紧凑的 M3E 组件。

## 语义变体

::: note 部署上下文
带空格的形式接受自定义的纯文本标题，同时保持与参考语法的兼容性。
:::

:::info
使用信息块来呈现中立的上下文说明，帮助读者理解所在的章节。
:::

:::tip[既有 **label** 语法]
原有的方括号标签仍然可用，并且可以包含行内 Markdown 强调。
:::

> [!IMPORTANT]
> GitHub Alert 语法会进入同一个渲染器，因此既有文章保持统一的视觉语言。

:::warning
在生产构建前检查环境变量。
:::

:::caution
不要在示例中发布凭据、本地配置或私钥。
:::

## 可选详情

::: details 查看完整命令
该折叠使用浏览器原生语义，无需客户端 JavaScript 即可保持键盘可访问。

```powershell
npx.cmd astro check
pnpm.cmd build
```

- 默认处于关闭状态。
- 较长的代码可以在其自身的代码块内滚动。
- 在窄屏上，容器不会超出文章宽度。
:::

## 作者语法

```markdown
:::note[既有标题语法]
内容
:::

::: warning Plume-compatible title syntax
内容
:::

> [!TIP]
> GitHub Alert 语法

::: details 可选内容
在读者展开之前保持隐藏。
:::
```
