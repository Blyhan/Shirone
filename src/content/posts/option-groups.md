---
title: Markdown 选项组
published: 2026-08-28
description: 用紧凑且可同步的 M3E 选项组展示相关的 Markdown 备选方案。
tags: [演示, Markdown, 选项卡, Shirone]
category: 指南
lang: en
draft: true
---
选项组把等价的操作说明放在一起，而不必重复周围的解释文字。每个选项都接受完整的块级 Markdown，而选中的值可以与同一页面上的另一个选项组保持同步。

## 选择一个包管理器

使用 `@tab:active` 可以指定初始选中的选项。`#` 之后的后缀提供一个稳定的值，而不会改变显示出来的标题。

::: tabs#package-manager

@tab npm

使用 npm 安装这个包：

```powershell
npm install astro
```

@tab:active **pnpm**#pnpm

使用 pnpm 安装这个包：

```powershell
pnpm.cmd add astro
```

@tab Bun#bun

使用 Bun 安装这个包：

```powershell
bun add astro
```

:::

## 运行项目

这个选项组共享 `package-manager` 这个 id。选择上面的某个选项，会同步更新下面与之匹配的命令，并记住该选择供下次访问时使用。

::: tabs#package-manager

@tab npm

```powershell
npm run dev
```

@tab pnpm

```powershell
pnpm.cmd dev
```

@tab Bun#bun

```powershell
bun run dev
```

:::

## 多个备选方案

较长的选项行会保持在一行内，并在窄屏幕上于自身的导航区域内滚动。

::: tabs

@tab 本地工作站

在开发功能时使用本地工具链。

@tab 托管预览环境

发布一个临时预览以供审核。

@tab 持续集成

为每次变更运行确定性的校验。

@tab 生产环境部署

把已验证的构建产物推送到生产环境。

@tab 离线恢复流程

在网络不可用时，从本地构建产物恢复。

:::

## 作者语法

````markdown
::: tabs#package-manager

@tab npm

在这里填写 npm 的使用说明。

@tab:active **pnpm**#pnpm

在这里填写 pnpm 的使用说明。

:::
````

每个选项组至少需要两个 `@tab` 区块，并且每个区块都需要用空行把正文内容与它的标记分隔开。无效或不完整的选项组仍会作为普通 Markdown 正常显示。
