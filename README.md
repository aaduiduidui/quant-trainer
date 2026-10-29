# Quant Interview Trainer · 量化面试题库

241 道数学与编程训练题，支持中英切换、章节浏览、双语搜索、提示与解析、收藏、笔记、进度统计及每日一题。

网站地址（启用 Pages 并完成首次部署后可用）：

https://aaduiduidui.github.io/quant-trainer/

## 首次启用 GitHub Pages

1. 打开本仓库 **Settings → Pages**。
2. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
3. 打开 **Actions → Deploy question bank to GitHub Pages**。如果首次运行因未启用 Pages 而失败，点击 **Re-run all jobs**；也可以点击 **Run workflow**，选择 `main` 运行。
4. 等待部署成功，再访问上面的网站地址。

后续推送到 `main` 时，GitHub Actions 自动检查并部署。发布目录仅包含 `index.html`、`.nojekyll`、`css/`、`js/` 和 `data/`。

## 在 iPhone 使用

用 Safari 打开网站，通过分享菜单选择“添加到主屏幕”，如出现“作为网页 App 打开”选项可将其开启。

页首已适配手机：标题与常用工具置于第一行，导航置于第二行并可左右滑动；手机隐藏未启用的登录按钮和键盘快捷键入口。以 iPhone 17 常规款的 402 CSS 像素竖屏宽度为主要验证尺寸。尚未加入离线缓存。公式与 Markdown 渲染依赖外部 CDN，使用时需要联网。GitHub Pages 和 CDN 在不同网络下的访问情况需实际测试。

笔记、收藏与进度存储在当前设备、当前站点的 localStorage 中，不会上传至本仓库，也不会自动与电脑或其他浏览器同步。清除网站数据可能丢失记录。原版进度导入、导出和重置入口仍按既有设置隐藏。登录、讨论和排行榜后端未启用。

## 本地预览与检查

无需安装第三方 Python 包，在仓库根目录执行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 http://127.0.0.1:4173 。已安装 Node.js 时，可执行：

```bash
node --test tests/*.test.cjs
```

## 维护

题库数据在 `data/problems.js`，网页逻辑在 `js/`，样式在 `css/styles.css`。题目英文标题与所属 topic 决定记录键，修改时需考虑已有用户记录。修改 `index.html` 引用的本地资源后，同步更新对应 `?v=` 为文件 SHA-256 的前 12 位。

本仓库是从本地题库导出的独立公开版本，原目录的更改不会自动同步到这里；需要更新本仓库并推送才能发布。不要加入个人练习会话、环境变量文件、密钥或其他私人资料。

## 来源与归属

基于 [ellenzishanli/quant_interview_trainer](https://github.com/ellenzishanli/quant_interview_trainer)，并合入本地题目及双语、搜索、每日一题等改动。来源、基准提交及题库整理说明见 [UPSTREAM.md](UPSTREAM.md)。

上游未附独立 LICENSE；本仓库保留来源与归属，不为上游代码或书籍内容另行声明授权。
