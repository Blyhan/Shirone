---
title: 在文章中嵌入视频
published: 2026-08-01
description: 这篇文章演示如何在博客文章中嵌入视频。
tags: [示例, 视频]
series: media-embeds
seriesOrder: 1
category: 示例
draft: true
---
只需从 YouTube 或其他平台复制嵌入代码，然后粘贴到 markdown 文件中即可。

```yaml
---
title: 在文章中嵌入视频
published: 2023-10-19
// ...
---

<iframe width="100%" height="468" src="https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_" title="YouTube 视频播放器" frameborder="0" allowfullscreen></iframe>
```

## YouTube

::youtube{id="5gIf0_xpFPI" title="YouTube 视频" preload="auto"}

## Bilibili

::bilibili{bvid="BV1fK4y1s7Qf" title="Bilibili 视频" p=1 preload="auto"}

## AcFun

::acfun{acid="ac48649632" title="AcFun 视频" preload="auto"}

## ArtPlayer

::artplayer{src="https://www.pexels.com/download/video/38538991/" title="Sintel 预告片" preload="auto"}
