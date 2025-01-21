
# 使用 Wise 高效构建个人知识库

Wise 是一款本地优先（local-first）、AI 驱动的现代阅读器。通过与 LarePass 浏览器插件和手机应用端无缝配合，Wise 可以帮助你轻松地从各种平台收集、管理和阅读信息。

本教程将介绍如何使用 Wise 和 LarePass，收集你散落各处的内容，打造个人信息中枢。

## 学习目标

通过本教程，你将学习：
- 安装 LarePass 浏览器插件
- 收集网页音视频、文章
- 上传本地文档
- 订阅 RSS 内容
- 搜索个人知识库内容

## 开始之前

开始以前，请确保满足以下条件：

- 已激活 Olares
- 已完成 Olares ID 助记词备份
- Olares 自带的 Wise 阅读器应用
- 手机安装 LarePass 客户端应用

## 安装 LarePass 浏览器插件

LarePass 浏览器插件是内容发现收集的核心应用，目前仅支持 Chrome 浏览器。

### 安装 LarePass 插件

你可以选择以下任意安装方式：

- **从谷歌应用商店安装**:
  1. 在谷歌应用商店中搜索 LarePass，进入插件详情页面。
  2. 点击**添加至 Chrome** 完成安装。

- **离线安装**
  1. 访问 [LarePass 页面](https://www.joinolares.cn/larepass)，手动下载 LarePass 插件安装文件并解压。
  2. 在 Chrome 网址栏输入 `chrome://extensions/` 以访问插件管理页面。
  3. 在插件管理页面右上角，打开**开发者模式**。
  4. 点击**加载已解压的扩展程序**选项, 并选择刚刚解压的 LarePass 插件文件夹以完成安装。
   
### 登陆 Olares 账户
LarePass 插件支持以导入账户的方式登陆：

1. 打开 LarePass 插件，点击**导入账户**选项。 
2. 输入助记词以导入你的 Olares ID。
3. 输入你的 Olares 密码完成登录。

你可以在 LarePass 插件的**设置**页面中检查插件是否与 Olares 正常连接。如果未正常连接，请检查你的 Olares 主机是否可访问。

## 收集在线内容 
Wise 提供了灵活高效的在线内容收集方式，包括网页文章、在线视频、播客等。

### 通过 LarePass 插件收集

::: tip 上传 Cookie 以优化体验
一些网站会限制匿名用户的访问权限。你可以将 Cookie 上传到 Olares 以优化体验。
1. 登录该网站。
2. 打开 LarePass 插件，进入**收集**> **Cookie** 页面，并点击**上传**。如果不想上传某个 Cookie 项，可以点击 **X** 按钮取消选择。
:::

通过 LarePass 插件收集网页内容步骤如下： 

1. 打开内容页面，如一个 B 站的视频。
2. 打开 LarePass 插件。插件会自动检测并获取当前页面的内容。
3. 在**网页**页签下，点击内容标题旁的 <i class="material-symbols-outlined">add_box</i> 按钮，将该页面添加到 Wise 库中。
   ![收集在线内容](/images/zh/manual/tutorials/wise-collect-web-content.png)

收集成功后，你可以在 Wise 的**库** > **文章**中找到对应内容。页面上的音频、视频和图片也会被下载到本地。

![查看文章](/images/zh/manual/tutorials/wise-view-article.png)


### 通过 LarePass 移动端

你可以将网页链接分享到 LarePass 移动客户端以收集相应内容。此处以 iOS 上收藏微信公众号文章为例：
![LarePass 分享](/images/zh/manual/tutorials/wise-larepass-share.png)
1. 打开公众号文章，点击公众号文章右上角的 <i class="material-symbols-outlined">more_horiz</i> 按钮，选择在默认浏览器中打开。
2. 点击浏览器的分享按钮，选择 LarePass 为分享对象。
3. LarePass 会自动检测待分享页面的内容，并提示是否要添加至 Wise。点击**确认**。

::: tip
你也可以直接复制网页 URL 并打开 LarePass。LarePass 会自动检测剪贴板中的 URL 并识别内容。
:::

收集完成后，可以在 Wise 的**库** > **文章**中阅读收集的微信文章。

## 上传 PDF 及电子书内容

你可以将本地的 PDF 或 EPUB 电子书上传到 Wise 进行统一管理：
1. 打开 Wise, 点击菜单栏下方的 <i class="material-symbols-outlined">add_circle</i> 按钮，选择**上传**。
2. 选择要上传的文件，指定上传的目录，点击**确认**以完成上传。

你可以在 **库** > **PDF** 下查看上传的 PDF，在**库** > **图书**下查看 EPUB 电子书。

![View and manage PDF](/images/zh/manual/tutorials/wise-pdf.png)

::: tip
你可以使用 Wise 中的标签和笔记功能高效地组织你的文档。
:::

## 订阅 RSS 内容

Wise 的 RSS 功能让你轻松订阅所有支持 RSS 的播客和博客。同时你也可以利用此功能自动下载视频网站内收藏的视频。

### 通过浏览器插件订阅

通过 LarePass 插件订阅 RSS 步骤如下：

1. 在浏览器中打开要订阅的 RSS 页面，例如 “加州101”的播客：`https://www.xiaoyuzhoufm.com/podcast/5e280faf418a84a0461fbd0d`。
2. 打开 LarePass 插件。插件会自动识别页面的 RSS 订阅源，并显示 **RSS** 页签。
3. 在 **RSS**，找到正确的订阅源，点击 <i class="material-symbols-outlined">bookmark_add</i> 按钮以完成订阅。
![订阅播客](/images/manual/tutorials/wise-sub-podcast.png)

### 手动添加 RSS 源

通过以下步骤手动添加 RSS 源至 Wise：

1. 获取目标 RSS 订阅链接，如 HackerNews 头条订阅源： `https://hnrss.org/frontpage`。
2. 打开 Wise，在菜单栏点击 <i class="material-symbols-outlined">add_circle</i> 按钮，并选择 **RSS 源**。
3. 输入网址后，Wise 将自动识别出可用的 RSS 订阅源。
   ![手动添加 RSS](/images/zh/manual/tutorials/wise-add-rss.png)
4. 点击 **添加** 完成订阅。

### 自动下载收藏视频

除了常规的 RSS 订阅，你可以通过 LarePass 插件和 Wise 实现自动下载收藏的视频。以 B 站为例：

1. 在浏览器里打开并登陆 B 站。
2. 打开 LarePass 插件，在 Cookie 页签下点击**上传**按钮以完成 Cookie 上传。Olares 需要使用视频网站的 Cookie 来访问你的收藏夹并下载视频。 
   
   ::: tip 自动同步 Cookie
   Cookie 信息可能会过期。你可以在 Cookie 页面启用**自动同步**功能，以确保每次访问网站时，Cookie 会自动更新。
   :::
3. 进入你的 B 站收藏夹管理页面，新建一个收藏夹并打开。此处，我们创建了一个“保存到 Olares” 的收藏夹。
4. 打开 LarePass 插件。插件会自动获取当前页面的订阅源并显示 RSS 页签。我们选择 RSS 页签下第二个源：“UP主非默认收藏夹”。
    ![订阅 B 站收藏夹](/images/zh/manual/tutorials/wise-bilibili-rss.png)
5. 点击 <i class="material-symbols-outlined">bookmark_add</i> 以完成订阅。

订阅完成后，任何添加到此收藏夹的视频都会被 Olares 自动下载至本地。

::: tip 自动下载点赞投币视频
你也可以通过 RSS 订阅方式自动下载 B 站点赞或投币的视频：
1. 在 B 站的**个人空间** > **个人资料**里获取你的 UID，通常是一串 8 位的数字。
2. 手动添加以下 RSS 订阅源至 Wise：
   - 点赞视频：`rsshub://bilibili/user/like/你的uid/`
   - 投币视频：`rsshub://bilibili/user/coin/你的uid/`
:::

### 访问 RSS 内容

通过以下步骤访问所有通过 RSS 方式订阅的内容：
1. 从左侧菜单栏，进入**订阅** > **订阅源**。
2. 选择一个未读的 RSS 项目，进入即可观看视频、收听播客或阅读文章。

::: tip 智能内容推荐
除了常规的 RSS 订阅，Wise 还提供了完全本地运行、100% 保护隐私的智能内容推荐系统，为你提供个性化内容推送。详情请参考[本地推荐算法](../tasks/recommend.md) 。
:::

## 搜索知识库内容

将你的内容收集到 Wise 后，你可以通过 Olares 的聚合搜索功能进行全文搜索。

![搜索 Wise](/images/zh/manual/tutorials/wise-search.png)

::: info 搜索格式
目前，只有文档类型的内容（PDF、网页文章和 ePUB）可以进行搜索。其他格式将在后续版本中支持。
:::
1. 点击 Dock 中的 <i class="material-symbols-outlined">search</i> 打开搜索窗口。
2. 指定搜索范围为 Wise，并输入关键词进行搜索。

## 了解更多

- [Wise 基本操作](../tasks/wise-basics.md)
- [本地算法](../tasks/recommend.md)
- [订阅和管理订阅源](../tasks/subscribe.md)
