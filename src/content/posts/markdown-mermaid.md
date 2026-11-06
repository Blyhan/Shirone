---
title: Mermaid 图表画廊
published: 2026-05-02
description: 展示流程、交互、数据模型、日程与项目历史的 Mermaid 图表合集。
tags: [演示, 示例, Markdown, Mermaid]
category: 示例
lang: en
draft: true
---
Mermaid 能把 Markdown 中的文字描述转换成图表。下面的示例沿用 Shirone 的内容工作流，展示技术文章与项目笔记中常见的几种图表类型。

## 流程图

流程图用于描述一个流程，包括判断分支以及返回前面步骤的路径。

```mermaid
flowchart TD
    accTitle: 文章发布流程
    accDescr: 一篇文章依次经历撰写、校验、预览与构建，然后发布。校验失败时会退回修改。
    Draft[撰写 Markdown] --> Check{校验通过？}
    Check -->|否| Revise[修改文章]
    Revise --> Check
    Check -->|是| Preview[本地预览]
    Preview --> Build[构建静态页面]
    Build --> Publish[发布]
```

## 时序图

时序图按时间顺序展示各参与者之间的协作过程。本例展示一次 Swup 站内导航，从发起请求到 Mermaid 完成渲染。

```mermaid
sequenceDiagram
    accTitle: 站内导航后的图表渲染
    accDescr: 读者发起导航，Swup 替换文章内容，Mermaid 渲染器随后在新页面上增强图表。
    actor Reader as 读者
    participant Browser as 浏览器
    participant Swup
    participant Content as 文章区域
    participant Renderer as Mermaid 渲染器
    Reader->>Browser: 打开另一篇文章
    Browser->>Swup: 开始站内导航
    Swup->>Content: 替换页面内容
    Swup-->>Renderer: 触发 content:replace 事件
    Renderer->>Content: 查找 Mermaid 容器
    Renderer-->>Browser: 插入主题化 SVG
```

## 实体关系图

实体关系图为结构化数据建模，并展示作者、文章、标签与评论之间的关联。

```mermaid
erDiagram
    accTitle: 博客内容关系
    accDescr: 作者撰写文章，文章接收评论，关联记录把文章与多个标签连接起来。
    AUTHOR ||--o{ POST : 撰写
    POST ||--o{ COMMENT : 接收
    POST ||--o{ POST_TAG : 归类
    TAG ||--o{ POST_TAG : 分组
    AUTHOR {
        string id PK
        string display_name
    }
    POST {
        string slug PK
        string title
        datetime published_at
        string author_id FK
    }
    COMMENT {
        string id PK
        string post_slug FK
        string body
    }
    TAG {
        string id PK
        string label
    }
    POST_TAG {
        string post_slug FK
        string tag_id FK
    }
```

## 类图

类图表达软件设计中的职责划分、公开方法与依赖方向。

```mermaid
classDiagram
    accTitle: Markdown 渲染模块
    accDescr: 内容管线使用 Mermaid 插件生成回退标记，客户端渲染器随后将其增强为 SVG。
    class ContentPipeline {
        +render(markdown)
        +collectMetadata()
    }
    class MermaidPlugin {
        +transform(codeFence)
        +createFallback()
    }
    class DiagramRenderer {
        +initialize()
        +renderAll()
        +refreshTheme()
    }
    class ThemeTokens {
        +primary
        +surface
        +outline
    }
    ContentPipeline --> MermaidPlugin : 使用
    DiagramRenderer --> MermaidPlugin : 增强输出
    DiagramRenderer --> ThemeTokens : 读取
```

## 状态图

状态图展示一个对象的生命周期，以及推动它在各状态之间转移的事件。

```mermaid
stateDiagram-v2
    accTitle: 文章生命周期
    accDescr: 文章从草稿进入评审与发布阶段，也可能退回修改，最终归档。
    [*] --> Draft
    Draft --> InReview : 提交
    InReview --> Draft : 请求修改
    InReview --> Published : 批准
    Published --> Draft : 撤回
    Published --> Archived : 归档
    Archived --> [*]
```

## XY 图表

XY 图表把柱形与折线组合在同一条坐标轴上，用于比较数值与趋势。

```mermaid
xychart-beta
    accTitle: 六周内容表现
    accDescr: 柱形表示归一化后的每周发布量，折线表示归一化后的阅读完成率。
    title "六周内容表现"
    x-axis "周" [1, 2, 3, 4, 5, 6]
    y-axis "相对得分" 0 --> 100
    bar [36, 52, 44, 68, 76, 84]
    line [48, 55, 62, 61, 73, 81]
```

## 饼图

饼图以紧凑的方式比较各个类别在整体中所占的比例。

```mermaid
pie showData
    accTitle: 文章主题占比
    accDescr: 工程类占百分之四十，设计系统占百分之二十五，其余由指南与随笔分摊。
    title 文章主题占比
    "工程" : 40
    "设计系统" : 25
    "指南" : 20
    "随笔" : 15
```

## 甘特图

甘特图把任务、依赖关系与里程碑排列在日历时间轴上。

```mermaid
gantt
    accTitle: 主题发布计划
    accDescr: 发布计划从需求确认与交互设计开始，经过组件开发、测试，最终发布。
    title 主题发布计划
    dateFormat YYYY-MM-DD
    axisFormat %m/%d
    section 设计
    确认需求 :done, brief, 2024-05-06, 2d
    细化交互 :done, interaction, after brief, 3d
    section 实现
    开发组件 :active, components, after interaction, 6d
    编写示例 :examples, after interaction, 4d
    section 验证
    自动化测试 :tests, after components, 3d
    发布 :milestone, release, after tests, 0d
```

## 思维导图

思维导图把一个中心主题扩展为相关领域与支撑概念。

```mermaid
mindmap
  root((Shirone))
    内容体验
      Markdown
      搜索
      图表
    界面系统
      M3E 令牌
      响应式布局
      配色方案
    工程质量
      Astro Check
      Playwright
      无障碍
```

## 时间线

时间线概括重要事件或阶段，不需要精确的日历时长。

```mermaid
timeline
    title Mermaid 支持演进
    管线设计 : 识别 Mermaid 代码块
                    : 保留源码回退
    客户端增强 : 按需加载运行时
                       : 应用主题令牌
    可靠性 : 支持 Swup 导航
                : 验证响应式与无障碍输出
```

## 用户旅程图

用户旅程图把任务各阶段中的行为、参与者与体验评分综合呈现。

```mermaid
journey
    accTitle: 读者理解一篇技术文章
    accDescr: 读者发现一篇文章，结合正文与图表理解内容，随后继续探索相关主题。
    title 读者理解一篇技术文章
    section 发现
      浏览文章列表: 4: Reader
      选择主题: 5: Reader
    section 理解
      阅读文章: 4: Reader
      查看关系图: 5: Reader
    section 继续
      打开相关文章: 4: Reader
      收藏页面: 3: Reader
```

## Git 图

Git 图展示功能分支上的工作如何推进，直至合并到主线。

```mermaid
gitGraph
    accTitle: Mermaid 功能分支历史
    accDescr: 功能分支添加渲染器与测试，然后合并到主分支进行发布。
    commit id: "base"
    branch mermaid
    checkout mermaid
    commit id: "add-renderer"
    commit id: "add-tests"
    checkout main
    merge mermaid id: "merge-mermaid"
    commit id: "release"
```

## 看板

看板按工作流状态给任务分组，让当前进展一目了然。

```mermaid
kanban
  backlog[待办]
    docs[编写作者文档]
    examples[扩充示例数据]
  active[进行中]
    themes[验证主题适配]
  complete[已完成]
    fallback[源码回退]
    rendering[客户端渲染]
```

## 桑基图

桑基图用连线宽度表示流量或其他数量在节点之间的流向。

```mermaid
sankey-beta
落地页,阅读,720
发现,阅读,430
阅读,探索,360
阅读,主题,210
阅读,外链,140
```

## 标签中的换行

HTML 标签支持换行，因此标签内容可以折行显示而不会撑宽图表。

```mermaid
flowchart LR
  A[第一行<br>第二行] --> B[普通标签]
```

每个示例都使用标准的 `mermaid` 代码围栏。服务端会保留可读的源码标记，浏览器再把它增强为跟随当前主题的 SVG。当主题切换或 Swup 导航到本文时，图表会重新渲染。
