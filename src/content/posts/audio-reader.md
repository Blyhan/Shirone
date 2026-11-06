---
title: "音频朗读器：日系动画的神秘语音"
published: 2026-08-29
description: 一小段神秘的日语动画语音片段合集，通过音频朗读器按需播放。
tags: [示例, 音频朗读]
series: media-embeds
seriesOrder: 2
category: 示例
draft: true
---
这些简短的日语语音片段仿佛是从动画场景边缘拾取而来：一句挑逗的呼唤、一声明亮的问候、一丝轻笑，以及几句来路不明的台词。它们是氛围样本而非对话逐字稿，让声音本身传达含义即可。

音频朗读器会让它们保持安静，直到你选择收听。每个播报按钮只有在被按下后才会加载并播放对应片段。

```markdown
:audio-reader[Clip title]{src="/assets/audio/filename.wav"}
```

## 片段

- **Baka**：:audio-reader[バカ]{src="/assets/audio/Baka.wav"}
- **Ciallo**：:audio-reader[Ciallo！！]{src="/assets/audio/Ciallo.wav"}
- **Ehe**：:audio-reader[玩笑般的意味]{src="/assets/audio/Ehe.wav"}
- **Imoi**：:audio-reader[イモい]{src="/assets/audio/Imoi.wav"}
- **Zako**：:audio-reader[雑魚じゃん、雑魚雑魚]{src="/assets/audio/Zako.wav"}

`src` 必须使用站点根路径或 HTTPS URL，且指令标签不能为空。无效或不完整的指令会保留为普通 Markdown，不会加载音频朗读器资源。
