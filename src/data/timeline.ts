/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 *
 * 可用的 category 值（对应 timelineConfig.categories）：
 *   "milestone" | "project" | "career" | "education" | "life"
 *
 * 条目字段：title、date（如 "2026.08" 或 "2025.03 – Present"）、
 * category、subtitle、description、highlights[]、tags[]、links[]、icon、featured。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [];
