---
title: "Markdown 文件包含"
published: 2026-08-28
description: "在构建时包含 Markdown 文件及其片段。"
tags: [Markdown, Shirone]
category: 指南
draft: true
---
Shirone 可以包含本地 Markdown 文件，或其中一段安全的片段。

<!-- @include: src/content/snippets/include-example.md#public-api -->

完整的文件形式与行范围形式同样受支持：

```markdown
<!-- @include: src/content/snippets/include-example.md -->
<!-- @include: src/content/snippets/include-example.md{1-4} -->
<!-- @include: src/content/snippets/include-example.md{5-} -->
<!-- @include: src/content/snippets/include-example.md{-4} -->
```

围栏代码块内的包含注释会保持原样。
