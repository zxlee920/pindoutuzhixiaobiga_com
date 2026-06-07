# 拼豆图纸（Astro）

[GitHub 仓库](https://github.com/zxlee920/pindoutuzhixiaobiga_com)

基于 `Astro + Tailwind CSS v4` 的图纸展示站点，面向“图纸内容发布 + 标签聚合 + 详情查看下载”场景。

站点核心形态：

- 首页采用小红书风格瀑布流卡片（非无限滚动，使用分页）
- 卡片展示图纸封面、标题与描述
- 点击进入图纸详情页，支持图片轮播与单图下载
- 保留标签聚合与分页能力
- 保留详情页 SEO 与 `Article` 结构化数据

## 功能特性

- 首页瀑布流列表：双列/多列自适应布局
- 列表分页：支持 `首页 + /page/[page]`
- 图纸详情页：标题、时间、标签、正文内容
- 图集轮播：从正文中提取多张图片并轮播展示
- 图片下载：详情页提供当前图片下载按钮
- 标签体系：`/tag/[tag]` 与 `/tag/[tag]/page/[page]`
- SEO：页面级 `title/description/canonical`、`robots.txt`、`sitemap.xml`

## 技术栈

- Astro 6
- Tailwind CSS 4
- @tailwindcss/typography
- TypeScript

## 项目结构

```text
.
├── public/
│   └── images/                 # 图纸封面与详情图
├── src/
│   ├── components/            # 页面组件
│   ├── layouts/               # 布局
│   ├── pages/                 # 路由页面
│   ├── content/               # 图纸 Markdown 内容
│   ├── styles/                # 全局样式
│   └── utils/                 # 图文提取工具函数
├── site.config.ts             # 站点主配置
└── astro.config.ts
```

## 本地开发

> Node.js 18+

```bash
pnpm install
pnpm dev
```

默认端口：`4321`

## 构建与预览

```bash
pnpm build
pnpm preview
```

## 内容发布规范

图纸内容使用 `Markdown`，位于 `src/content`。

Frontmatter 示例：

```md
---
title: "某某拼豆图纸"
description: "简要描述图纸特点、尺寸、适用场景"
date: "2026-06-06"
author: "拼豆图纸"
tags: ["角色", "中级", "动漫"]
image: /images/xxx.png
---
```

正文中可插入多张图片（用于详情页轮播）。

## 配置说明

核心配置位于 `site.config.ts`：

- `site`：站点名称、域名、语言
- `seo`：默认标题、描述、OG 图
- `nav`：头部导航
- `list`：图纸列表标题、分页大小、默认作者
- `about`：关于页面配置
- `analytics`：统计脚本
- `sitemap` / `robots`：抓取策略

## 部署建议

1. 将 `site.url` 设置为生产域名
2. 确认 `seo.ogImage` 可访问
3. 按需填写统计代码（`analytics.baidu` / `analytics.google`）
4. 执行 `pnpm build` 后部署 `dist/`
