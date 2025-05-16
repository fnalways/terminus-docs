---
outline: [2, 3]
description: 将 Olares Space 或第三方服务集成到现有系统中，包括账号授权、ID 关联及解除集成等基本操作步骤和注意事项。
---

# 添加和管理集成

Olares 支持集成 Olares Space 和其他第三方服务，以增强功能并个性化你的体验。通过集成，你可以同步数据、管理设备并自定义个人资料。

本文档以添加 Olares Space 集成为例。

:::info
我们正在开发对第三方云存储服务的支持。

了解此功能及其他新功能的最新动态：

* [关注我们的官方博客](https://blog.olares.com/)
* [加入我们的 Discord 频道](https://discord.com/invite/BzfqrgQPDK)
:::

## 连接到 Olares Space

Olares Space 是 Olares 的云托管服务，与 LarePass 和 Olares 共享相同的账户系统。

### 第一步：登录 Olares Space

1. 在浏览器中打开 [https://space.olares.com/login](https://space.olares.com/login)。
2. 在移动设备上打开 LarePass。
3. 在**设置**页面，点击右上角的“扫描”图标。
4. 扫描 Olares Space 登录页面上的二维码。
5. 确认风险提示并完成登录。

### 第二步：授权 Olares Space

1. 在 LarePass 应用中，进入**设置** > **集成**。
2. 右上角点击 **<span class="material-symbols-outlined">add</span>添加**，选择 **Space** 添加你的 Olares Space 账户。

授权 Olares Space 后，你还可以在 Olares 中验证集成状态。

### 第三步：关联 Olares ID

1. 打开**设置**，在左侧边栏选择**集成**。
2. 点击右侧的 Olares Space 卡片查看详情。
3. 点击**绑定**。这将触发 LarePass 应用中的确认提示。
4. 打开 LarePass 应用。你应该会看到确认提示。如果没有：

   a. 前往**设置** > **集成**。

   b. 点击 Olares Space 卡片。

   c. 在确认提示中，点击**确认**授权。

返回 Olares，点击**确认**完成与 Olares ID 的关联。

## 移除集成

:::warning 警告
断开 Olares Space 的连接会导致无法在 Olares Space 页面管理设备或进行云备份。

如有需要，你可以随时重新连接。
:::

要从 Olares 中断开 Olares Space：

1. 打开 LarePass 应用，进入**设置** > **集成**。
2. 点击 Olares Space 卡片。
3. 点击右上角的 <i class="material-symbols-outlined">more_horiz</i>，然后点击**删除**。

## 了解更多

- [连接你的区块链钱包](./nft-image.md)
- [探索如何利用 Olares Space](../space/)