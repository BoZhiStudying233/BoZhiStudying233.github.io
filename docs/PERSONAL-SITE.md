# 段智博的个人网站

网站基于 al-folio，当前包含首页、Publications 和 404 页面。

## 本地运行

双击项目上一级的 `start-website.cmd`，打开 http://localhost:8080/ 。保持启动窗口打开，按 Ctrl+C 停止。Ruby 和 MSYS2 位于上一级 `work/runtime/`，依赖安装在 `vendor/bundle/`。

## 编辑内容

| 内容                     | 文件                         |
| ------------------------ | ---------------------------- |
| 姓名、全局配置           | `_config.yml`                |
| 简介、研究方向、照片说明 | `_pages/about.md`            |
| 论文                     | `_bibliography/papers.bib`   |
| 邮箱和 GitHub            | `_data/socials.yml`          |
| 样式                     | `assets/css/custom-site.css` |
| 邮箱复制交互             | `assets/js/site-contact.js`  |

首页和论文页同步显示全部论文，按年份、月份从新到旧排序，无需精选标记。每篇保留 Bib、PDF、Website，作者列表中的 Zhibo Duan 加粗。页面不展示共同贡献说明。

邮箱图标点击后直接复制地址，只显示短暂提示。学校与城市显示在照片下方。

## 添加论文

添加真实 BibTeX 记录，并填写 `year`、`month`、`pdf`、`website` 和 `preview`。缩略图放在 `assets/img/publication_preview/`，图片保持原始比例，点击可放大。

## 图片来源

- 个人照片：用户提供的微信图片，位于 `assets/img/zhibo-duan.jpg`。
- CrossFly：`https://bozhistudying233.github.io/CrossFly/assets/figure-1-overview.png`。
- UDF：`https://underwater-dynamic-field.github.io/UDF/static/images/teaser.png`。

## 构建与发布

参见项目根目录 `README.md`。正式网址配置为 `https://bozhistudying233.github.io/`。推送到个人仓库的 `main` 分支后，由 GitHub Actions 构建并发布 Pages。本地样式与脚本通过内容哈希刷新缓存，主题运行代码仍由版本固定的 gem 提供。
