---
title: Markdown 步骤
published: 2026-08-27
description: 在 Shirone 中以紧凑、无障碍的方式呈现顺序性的操作步骤。
tags: [演示, Markdown, 步骤, Shirone]
category: 指南
lang: en
draft: true
---
当流程的先后顺序很重要时，可以使用步骤组件。该组件不会打断文章的阅读流：左侧安静的编号导轨提供方位感，而标题、段落、链接、列表和代码仍保留各自原生的 Markdown 语义。

## 有序列表语法

把一个 Markdown 有序列表包裹在 `:::steps` 容器中。每个顶层列表项就会成为一个步骤。

````markdown
:::steps[生产环境部署]
1. **克隆仓库并准备工作区**

   克隆仓库并进入项目目录。

   ```powershell
   git clone https://github.com/LyraVoid/Shirone.git
   Set-Location Shirone
   ```

2. **安装依赖**

   使用仓库固定版本的包管理器。

   ```powershell
   pnpm.cmd install
   ```

3. **运行项目检查**

   确认 Astro 诊断与 TypeScript 检查通过。

   ```powershell
   npx.cmd astro check
   pnpm.cmd type-check
   ```

4. **构建生产站点**

   生成静态站点与搜索索引。

   ```powershell
   pnpm.cmd build
   ```
:::
````

:::steps[生产环境部署]
1. **克隆仓库并准备工作区**

   克隆仓库并进入项目目录。

   ```powershell
   git clone https://github.com/LyraVoid/Shirone.git
   Set-Location Shirone
   ```

2. **安装依赖**

   使用仓库固定版本的包管理器。

   ```powershell
   pnpm.cmd install
   ```

3. **运行项目检查**

   确认 Astro 诊断与 TypeScript 检查通过。

   ```powershell
   npx.cmd astro check
   pnpm.cmd type-check
   ```

4. **构建生产站点**

   生成静态站点与搜索索引。

   ```powershell
   pnpm.cmd build
   ```
:::

## 选项

- `:::steps[Title]` 或 `title="Title"` 会添加一个可见的标签与无障碍名称。
- `start=4` 会改变第一个显示的步骤编号。
- 容器必须恰好包含一个有序列表。无效或混杂的输入会作为普通可读的 Markdown 显示，而不会被启发式解析。
- 渲染在站点构建期间完成，不引入任何客户端 JavaScript 或网络请求。
