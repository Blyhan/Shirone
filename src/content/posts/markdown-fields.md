---
title: Markdown 字段卡片
description: API 与组件参数文档卡片。
published: 2026-08-30
category: 指南
draft: true
---
当多个相关选项属于同一个 API 或组件时，使用 `field-group`。把字段名写在起始行，然后在描述之前添加元数据标签。

:::: field-group

::: field tex
@type object
@optional

TeX 解析器选项。
:::

::: field output
@type `'svg' | 'chtml'`
@default `'svg'`
@optional

输出格式，SVG 或通用 HTML。
:::

::::

## 基础字段

必填、可选和已弃用的状态可以在同一组中混用。默认值会与类型分开显示，以便快速浏览。

:::: field-group

::: field title
@type string
@required

组件的可见标题。该值会显示在页面标题中，应当简短，便于快速浏览。
:::

::: field disabled
@type boolean
@default `false`
@optional

控件是否以禁用状态启动。
:::

::: field locale
@type `'en' | 'zh-CN' | 'ja-JP'`
@default `'en'`
@optional

用于格式化日期、数字和无障碍标签的区域设置。
:::

::::

## 富文本描述

描述就是普通的 Markdown。元数据行之后仍可使用链接、强调、列表和行内代码。

:::: field-group

::: field render
@type `(value: unknown) => string`
@required

将值渲染为最终输出。回调应返回**安全字符串**，并可使用 `formatValue` 辅助函数。

- 保持渲染的确定性。
- 避免在回调中发起网络请求。
:::

::: field retries
@type number
@default `3`
@optional

请求被报告为失败之前的最大尝试次数。
:::

::: field legacyMode
@type boolean
@deprecated

为向后兼容而保留。新的集成应改用 `compatibility`。
:::

::::

## 独立字段

在示例或代码块旁记录单个选项时，可以不使用分组而单独使用一个字段。

::: field format
@type `'short' | 'long'`
@default `'short'`
@optional

控制结果的格式化方式。
:::

## 编写说明

- `@type` 和 `@default` 的取值会渲染为代码标记。
- `@required`、`@optional` 和 `@deprecated` 会添加状态徽章。
- 元数据之后的任何普通 Markdown 都会成为字段描述。
- 无法识别的 `@tags` 会作为描述文本保留下来，而不会被丢弃。
