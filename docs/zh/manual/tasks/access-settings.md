---
outline: [2, 3]
---

# 自定义应用程序 URL

无论是在本地还是远程，你都可以随时随地访问 Olares 应用程序。本文档将介绍如何：
- 为应用程序个性化域名
- 在无需身份验证的情况下公开访问

## 开始之前

在开始之前，建议你先熟悉一些与 Olares 应用程序相关的概念：

- [端点 (Endpoints)](../concepts/network.md#endpoints)
- [路由 ID (Route ID)](../concepts/network.md#route-id)

## 为应用程序自定义域名

Olares 提供两种方法来优化应用程序的访问地址：
* 自定义路由 ID
* 自定义域名

### 自定义路由 ID

路由 ID 是访问 Olares 应用程序的重要组成部分，和 Olares 域名一起构成了你通过 Web 浏览器访问应用程序的 URL：

`https://{routeID}.{local}.{OlaresDomainName}`

::: info Local 访问
URL 中的 `local` 表示一个私有访问点，通常用于为个人用户、家庭或团队提供服务的应用程序。面向公众的应用程序不会包含 `local`。更多详情，请参阅 [入口](../concepts/network.md#entrance)。
:::

为方便起见，Olares 为预安装的系统应用程序使用了易于记忆的路由 ID。
对于社区应用程序，你可以通过更改路由 ID 快速获得一个简单易记的 URL。例如，使用 Jellyfin：

1. 在 Olares 中，从 Dock 或启动板打开 **设置** 应用程序。
2. 在左侧边栏中选择 **应用程序**，然后点击右侧的 **Jellyfin** 查看应用程序详情。
3. 前往 **入口** > **设置端点**。可以看到 Jellyfin 的默认路由 ID，是一个数字和字母的组合 `7e89d2a1`。
4. 在 **设置自定义路由 ID** 旁，点击 <i class="material-icons">add</i>。
5. 输入一个更易记的路由 ID，例如 `jellyfin`。
6. 点击 **确认 (Confirm)**。

现在，你可以通过新的 URL 访问 Jellyfin：`https://jellyfin.local.bob.olares.cn`。

### 自定义域名

除了使用默认的 Olares 域名，你还可以使用自己的域名访问应用程序，使其看起来更专业、更易记。我们使用 Affine 为例：

1. 从 Dock 或启动板打开 **设置** 应用程序。
2. 在左侧边栏中选择 **应用程序**，然后点击右侧的 **Affine** 查看应用程序详情。
3. 前往 **入口** > **设置端点**。
4. 在 **设置自定义域名** 旁，点击 <i class="material-icons">add</i>。
5. 输入你的自定义域名，例如 `hello.coffee`，然后点击 **确认**。
6. 点击 **激活**。
7. 按提示在你的域名托管网站上添加 CNAME 记录。
8. 等待 DNS 传播，时间可能从几分钟到 48 小时不等。

Olares 将自动验证 DNS 记录的激活状态。一旦验证通过，自定义域名状态将变为“已激活 (Activated)”。然后，你可以通过新 URL 访问 Affine：`hello.coffee`。

::: tip 提示
若要允许无需登录即可通过自定义域名公开访问应用程序，请按以下步骤更新访问策略：
1. 前往 **设置** > **应用程序**，然后点击目标应用程序。
2. 在 **创建访问策略** 下，将 **身份验证级别** 设置为 **公开**，然后点击 **提交**。
:::