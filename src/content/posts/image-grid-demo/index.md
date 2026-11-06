---
title: "图片画廊网格：语法与完整示例"
published: 2026-07-13
description: "图片画廊网格的语法、参数、裁剪、响应式行为、说明文字与灯箱导航完整指南。"
tags: [Markdown, 图集, 图片网格, 演示]
category: 示例
draft: true
---
`:::grid` 是本站的图片画廊容器指令。它会把普通 Markdown 图片排列成比例一致的响应式网格，并自动启用灯箱浏览。适用于文章配图、截图、作品集或小型相册。

同一个画廊中的图片使用相同的卡片比例。默认情况下，居中裁剪会填满每张卡片并让每行保持整齐；点击图片会在灯箱中打开完整原图。每个画廊都有独立的灯箱分组，不会与文章中的其他图片混在一起。

> 本文既是功能文档，也是一个可视化测试页。请在桌面、平板和手机宽度下查看示例，然后点击任意图片验证灯箱分组。

## 最简语法

直接在 `:::grid` 与结束的 `:::` 之间书写 Markdown 图片：

````markdown
:::grid
![图片描述](./image-1.webp)

![图片描述](./image-2.webp)
:::
````

每张图片必须独占一个段落，图片之间用空行分隔。画廊中只放图片；段落、列表与代码块请写在容器之外。

以下是最简语法的效果。不写参数时，网格默认使用三列、`16/10` 比例与 `cover`。

:::grid
![最简语法效果：第一张图片](./landscape-1.webp)

![最简语法效果：第二张图片](./landscape-2.webp)
:::

## 参数一览

所有参数都写在开始指令之后的花括号中：`:::grid{parameter="value"}`。

| 参数 | 允许值 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `columns` | `1` 到 `6` 的整数 | `3` | 桌面端每行的列数。无效值会回退为 `3`。 |
| `aspect` | 正数比例，例如 `16/9`、`3/4` 或 `1/1` | `16/10` | 显示的卡片比例，而非原图比例。 |
| `fit` | `cover`、`contain` | `cover` | 图片适配模式。`cover` 裁剪以填满；`contain` 保留完整图片，可能留下空白。 |

完整示例：

````markdown
:::grid{columns="3" aspect="16/9" fit="cover"}
![第一张图片](./image-1.webp "可选说明文字")

![第二张图片](./image-2.webp "可选说明文字")

![第三张图片](./image-3.webp "可选说明文字")
:::
````

下面的效果使用上面的三列横图语法。请对比卡片比例、列数，以及标题优先于 alt 文本作为说明文字的表现：

:::grid{columns="3" aspect="16/9" fit="cover"}
![参数示例：第一张横图](./landscape-1.webp "横图说明 1")

![参数示例：第二张横图](./landscape-2.webp "横图说明 2")

![参数示例：第三张横图](./landscape-3.webp "横图说明 3")
:::

## 说明文字与 Alt 文本

图片的 alt 文本既作为无障碍替代文本，也作为默认的说明文字。当图片带有可选的 title 时，则改用 title 作为说明文字：

```markdown
![用于无障碍的文本](./image.webp "显示在图片下方的说明")
```

同一行中，说明文字会对齐到每张卡片的底部。一条换行的说明不会让其他说明浮在不同高度。像 `3:4` 与 `16:9` 这样的比例文本可以直接写在正文、标题和 alt 文本中，无需转义。

本示例演示了默认的 alt 文本说明、显式 title 说明，以及较长说明的底部对齐效果：

:::grid{columns="3" aspect="1/1"}
![此图片没有 title，因此其 alt 文本即为说明文字](./square-1.webp)

![第二张带无障碍 alt 文本的方形图片](./square-2.webp "此标题会作为说明文字显示")

![3:4 海报的无障碍描述](./square-3.webp "这是一段较长的说明文字，用于检查每张卡片的说明在换行后是否仍对齐到卡片底部")
:::

## 布局与裁剪

桌面布局使用 `columns` 指定的列数。低于 `768px` 时，网格最多使用两列；低于 `480px` 时切换为单列。卡片容器固定 `aspect` 比例并裁剪圆角，图片则填满卡片，不带主题默认的图片外边距。

- 选择 `cover`：推荐的默认值。图片从中心裁剪以填满卡片，让画廊看起来整齐一致。
- 选择 `contain`：完整显示原图而不裁剪。当其比例与卡片不同时，主题背景会显露出来；这适用于不能裁剪的图片。
- 若要在没有空白的情况下保留完整图片，请把 `aspect` 设为接近原图的比例，或把该图片单独放进一个网格。

以下示例把同样的竖图放入 `16/9` 卡片，分别使用 `cover` 与 `contain`。前者会裁剪图片；后者保留完整图片并留下背景空间。

````markdown
:::grid{columns="3" aspect="16/9" fit="cover"}
![图片描述](./image-1.webp "可选说明文字")

![图片描述](./image-2.webp "可选说明文字")
:::

:::grid{columns="3" aspect="16/9" fit="contain"}
![图片描述](./image-1.webp "可选说明文字")

![图片描述](./image-2.webp "可选说明文字")
:::
````

:::grid{columns="3" aspect="16/9" fit="cover"}
![第一张 cover 效果图](./default-portrait-1.webp "cover：居中裁剪")

![第二张 cover 效果图](./default-portrait-2.webp "cover：填满卡片")

![第三张 cover 效果图](./default-portrait-3.webp "cover：布局更整齐")
:::

:::grid{columns="3" aspect="16/9" fit="contain"}
![第一张 contain 效果图](./default-portrait-1.webp "contain：保留完整原图")

![第二张 contain 效果图](./default-portrait-2.webp "contain：可能出现空白")

![第三张 contain 效果图](./default-portrait-3.webp "contain：适合边缘细节")
:::

## 默认配置

不写属性时，默认是三列、`16/10` 比例与 `cover` 裁剪。这三张竖图用于验证默认裁剪与说明文字。

````markdown
:::grid
![图片描述](./image-1.webp)

![图片描述](./image-2.webp)

![图片描述](./image-3.webp)
:::
````

:::grid
![默认配置：竖图一](./default-portrait-1.webp)

![默认配置：竖图二](./default-portrait-2.webp)

![默认配置：竖图三](./default-portrait-3.webp)
:::

## 三列竖图：3:4

使用 `aspect="3/4"` 时，三张竖图会填充为比例一致的纵向卡片。如果原图比例不同，`cover` 会从中心裁剪其边缘。

````markdown
:::grid{columns="3" aspect="3/4"}
![竖图描述](./portrait-1.webp)

![竖图描述](./portrait-2.webp)

![竖图描述](./portrait-3.webp)
:::
````

:::grid{columns="3" aspect="3/4"}
![3:4 测试图一](./default-portrait-1.webp "竖图 1")

![3:4 测试图二](./default-portrait-2.webp "竖图 2")

![3:4 测试图三](./default-portrait-3.webp "竖图 3")
:::

## 三列横图：16:9

这一组演示三列布局中常见的视频封面比例。当横图接近卡片比例时，裁剪量很小。

````markdown
:::grid{columns="3" aspect="16/9"}
![横图描述](./landscape-1.webp)

![横图描述](./landscape-2.webp)

![横图描述](./landscape-3.webp)
:::
````

:::grid{columns="3" aspect="16/9"}
![16:9 测试图一](./feature-landscape-1.webp)

![16:9 测试图二](./feature-landscape-2.webp)

![16:9 测试图三](./feature-landscape-3.webp)
:::

## 两列方形：1:1

当需要更大的预览卡片时，两列是不错的选择。第三张图片会移到下一行。最后一行会保持其网格轨道宽度，而不会把图片拉伸填满整行。

````markdown
:::grid{columns="2" aspect="1/1"}
![方形图片描述](./square-1.webp)

![方形图片描述](./square-2.webp)

![方形图片描述](./square-3.webp)
:::
````

:::grid{columns="2" aspect="1/1"}
![1:1 测试图一](./mixed-square-1.webp)

![1:1 测试图二](./mixed-square-2.webp)

![1:1 测试图三](./mixed-square-3.webp)
:::

## 使用 `contain` 的四列

`fit="contain"` 不会裁剪原图。当图片比例与卡片比例不同时，主题背景会显露出来。这是有意为之，而非布局问题。它同时验证四列网格与独立的灯箱分组不会相互干扰。

````markdown
:::grid{columns="4" aspect="16/9" fit="contain"}
![图片描述](./image-1.webp)

![图片描述](./image-2.webp)

![图片描述](./image-3.webp)
:::
````

:::grid{columns="4" aspect="16/9" fit="contain"}
![contain：竖图一](./default-portrait-1.webp)

![contain：竖图二](./default-portrait-2.webp)

![contain：竖图三](./default-portrait-3.webp)
:::

## 单列详情图

当图片需要更大的阅读尺寸时，单列是合适的选择。它在桌面、平板和手机上均保持单列，原图仍可在灯箱中查看。

````markdown
:::grid{columns="1" aspect="16/9"}
![图片描述](./detail.webp)
:::
````

:::grid{columns="1" aspect="16/9"}
![单列测试图](./feature-landscape-1.webp)
:::

## 稀疏的五列行

五列用于验证更高的受支持列数。只有三张图片时，最后一行保持左对齐，而不会拉伸图片。

````markdown
:::grid{columns="5" aspect="1/1"}
![缩略图描述](./thumb-1.webp)

![缩略图描述](./thumb-2.webp)

![缩略图描述](./thumb-3.webp)
:::
````

:::grid{columns="5" aspect="1/1"}
![五列测试图一](./mixed-square-1.webp)

![五列测试图二](./mixed-square-2.webp)

![五列测试图三](./mixed-square-3.webp)
:::

## 六列混合图片

六列是当前的上限。混合横图与竖图可验证 `cover` 裁剪、窄卡片上的说明文字，以及密集的桌面布局。若要让文章内容易读，通常两到四列更合适。

````markdown
:::grid{columns="6" aspect="1/1"}
![图片描述](./image-1.webp)

![图片描述](./image-2.webp)

![图片描述](./image-3.webp)

![图片描述](./image-4.webp)

![图片描述](./image-5.webp)

![图片描述](./image-6.webp)
:::
````

:::grid{columns="6" aspect="1/1"}
![六列测试图一](./default-portrait-1.webp)

![六列测试图二](./default-portrait-2.webp)

![六列测试图三](./default-portrait-3.webp)

![六列测试图四](./feature-landscape-1.webp)

![六列测试图五](./feature-landscape-2.webp)

![六列测试图六](./feature-landscape-3.webp)
:::

## 四列方形：1:1

四张比例相同的方形图片是典型的四列布局。桌面端一行显示全部四张；平板折叠为两列，手机折叠为单列。

````markdown
:::grid{columns="4" aspect="1/1"}
![方形图片描述](./square-1.webp)

![方形图片描述](./square-2.webp)

![方形图片描述](./square-3.webp)

![方形图片描述](./square-4.webp)
:::
````

:::grid{columns="4" aspect="1/1"}
![方形图一](./square-1.webp)

![方形图二](./square-2.webp)

![方形图三](./square-3.webp)

![方形图四](./square-4.webp)
:::

## 六列横图：16:9

六列横图非常适合缩略图预览、作品集与截图索引。即使原图比例略有差异，`cover` 也会一致地填满每张 `16/9` 卡片。

````markdown
:::grid{columns="6" aspect="16/9"}
![横图描述](./landscape-1.webp)

![横图描述](./landscape-2.webp)

![横图描述](./landscape-3.webp)

![横图描述](./landscape-4.webp)

![横图描述](./landscape-5.webp)

![横图描述](./landscape-6.webp)
:::
````

:::grid{columns="6" aspect="16/9"}
![横图一](./landscape-1.webp)

![横图二](./landscape-2.webp)

![横图三](./landscape-3.webp)

![横图四](./landscape-4.webp)

![横图五](./landscape-5.webp)

![横图六](./landscape-6.webp)
:::

## 三列竖图：3:4

这一组六张竖图演示人物、海报或手机截图的常见布局。图片排成两行三列，说明文字底部对齐。

````markdown
:::grid{columns="3" aspect="3/4"}
![竖图描述](./portrait-1.webp)

![竖图描述](./portrait-2.webp)

![竖图描述](./portrait-3.webp)

![竖图描述](./portrait-4.webp)

![竖图描述](./portrait-5.webp)

![竖图描述](./portrait-6.webp)
:::
````

:::grid{columns="3" aspect="3/4"}
![竖图一](./portrait-1.webp)

![竖图二](./portrait-2.webp)

![竖图三](./portrait-3.webp)

![竖图四](./portrait-4.webp)

![竖图五](./portrait-5.webp)

![竖图六](./portrait-6.webp)
:::

## 边缘敏感内容：`cover` 与灯箱

这些图片的边缘附近包含重要文字或细节。`cover` 能让网格保持整齐，但可能裁掉这些边缘；点击图片可在灯箱中查看未裁剪的原图。对边缘敏感图片请使用清晰的说明文字，或改用下方的 `contain`。

````markdown
:::grid{columns="3" aspect="16/9" fit="cover"}
![边缘敏感内容](./critical-1.webp "打开灯箱以查看完整的边缘内容")

![边缘敏感内容](./critical-2.webp "打开灯箱以查看完整的边缘内容")

![边缘敏感内容](./critical-3.webp "打开灯箱以查看完整的边缘内容")
:::
````

:::grid{columns="3" aspect="16/9" fit="cover"}
![第一张边缘敏感图片](./critical-1.webp "打开灯箱以查看完整的边缘内容")

![第二张边缘敏感图片](./critical-2.webp "打开灯箱以查看完整的边缘内容")

![第三张边缘敏感图片](./critical-3.webp "打开灯箱以查看完整的边缘内容")
:::

## 极端比例下的 `contain`

对于横幅、长截图以及其他极端图片比例，`contain` 会显示完整原图。与 `cover` 不同，它可能留下主题背景空白，但绝不会裁剪内容。

````markdown
:::grid{columns="3" aspect="16/9" fit="contain"}
![完整截图的描述](./wide-1.webp)

![完整截图的描述](./wide-2.webp)

![完整截图的描述](./wide-3.webp)
:::
````

:::grid{columns="3" aspect="16/9" fit="contain"}
![极端比例图片一](./extreme-1.webp)

![极端比例图片二](./extreme-2.webp)

![极端比例图片三](./extreme-3.webp)
:::

## 透明图片

透明图片会显露卡片的主题背景。这个单列 `contain` 示例便于检查透明区域、原始边缘与灯箱行为。

````markdown
:::grid{columns="1" aspect="16/9" fit="contain"}
![透明图片描述](./transparent.webp)
:::
````

:::grid{columns="1" aspect="16/9" fit="contain"}
![透明背景测试图](./transparent-1.webp)
:::

## 灯箱导航

点击网格中任意图片即可打开 Fancybox 灯箱。在那里你可以缩放、旋转、进入全屏、查看缩略图，并用方向键导航。导航仅限于当前的 `:::grid` 容器：例如点击「16:9 测试图一」，只会打开该节中其余两张横图。

同一篇文章中的普通 Markdown 图片仍会单独处理；它们不会被加入任何画廊网格。

## 检查清单

1. 每个网格中的图片尺寸一致，说明文字位于卡片下方。
2. 图片在悬停时轻微缩放；点击后可缩放、旋转并用键盘导航。
3. 点击「16:9 测试图一」时，灯箱只会浏览该节中其余两张横图。
4. 低于 768px 时，网格最多使用两列；低于 480px 时使用单列。
5. 「使用 `contain` 的四列」中的竖图完全可见，留有空白且未裁剪。
6. 五列与六列网格在宽屏下保持指定列数，然后按响应式规则折叠为两列或一列。
