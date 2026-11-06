---
title: Markdown 剧透隐藏
published: 2026-08-28
description: 在 Shirone Markdown 中隐藏行内答案，同时保持剧透内容可访问。
tags: [演示, Markdown, 无障碍, Shirone]
category: 指南
lang: en
draft: true
---
剧透功能会遮盖简短的答案或情节细节，但不会把它从文档中删除。将鼠标悬停、聚焦或激活原生控件即可显示内容。

## 行内细节

答案是 :spoiler[**42**]，而这句话的其余部分依然是普通 Markdown。

剧透中可以包含 `inline code` 以及 :spoiler[一段更长的细节，并带有 **强调**]。

## 作者语法

```markdown
答案是 :spoiler[42]。
```

生成的 HTML 使用一个带 `aria-expanded` 状态的原生按钮。在没有 JavaScript 的情况下，悬停与聚焦仍然能显示文本；可选的运行时则额外提供点击与键盘切换。
