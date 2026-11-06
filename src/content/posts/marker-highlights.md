---
title: Markdown 标记高亮
published: 2026-08-28
description: 在 Shirone Markdown 中用由令牌驱动的标记语法突出关键短语。
tags: [演示, Markdown, 排版, Shirone]
category: 指南
lang: en
draft: true
---
标记高亮用于强调某个具体短语，同时不会把周围的段落变成独立组件。它们在构建时渲染为原生 `<mark>` 元素，并继承当前生效的 M3E 配色系统。

## 默认强调

当文章的主色应当承载强调时，使用 `==text==`。当读者在普通段落中继续阅读时，这适合用来标记 ==某个他们应当记住的结论==。

当短语需要更强的层级时，标记中可以包含 ==嵌套的 **Markdown 强调**==。

## 语义颜色

当含义需要不同的色调角色时，可以添加后缀。可用变体为 `primary`、`secondary`、`tertiary`、`error` 和 `tip`。

- ==主色把短语与当前主题联系起来=={.primary}
- ==次色让辅助性的区分保持低调=={.secondary}
- ==第三色增添独立的编辑信号=={.tertiary}
- ==错误色标示需要修正的状况=={.error}
- ==提示色突出实用建议=={.tip}

## 作者语法

```markdown
==主色标记==

==次色标记=={.secondary}
==第三色标记=={.tertiary}
==错误标记=={.error}
==提示标记=={.tip}
```

诸如 `==literal marker syntax==` 这样的行内代码与围栏示例会保持字面形式，因此文档可以在不触发语法的情况下讲解它。
