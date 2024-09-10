---
outline: [2, 3]
---

# Terminus Name

本文档将帮助你了解 Terminus Name 的重要性以及如何创建 Terminus Name。

## 什么是 Terminus Name？

Terminus Name 是 Terminus 生态系统中的独一无二的标识符，它是你数字身份的核心，也是你使用各种服务和功能的门户。每个 Terminus 账户都会有一个对应的 Terminus Name，它包括一个本地名称（Local Name）和一个域名。例如，`alice@myterminus.com` 中的 *alice* 是本地名称，*myterminus.com* 是域名。

## 为什么需要 Terminus Name？

每个 Terminus Name 都有对应的域名，带来以下优势：

* **访问便捷**：系统将自动配置你的应用子域名和访问策略，你可以通过这些域名轻松地从任何地点访问 Terminus 的应用和服务。
* **安全性高**：每个 Terminus 域名都配备了免费的 HTTPS 证书，保障数字通信安全，确保数据传输过程中的加密。
* **易于记忆和个性化**：Terminus Name 及其对应的域名设计易于记忆与分享，同时也能够彰显个性化的网络身份。

将 Terminus Name 中的 “@” 简单替换为 “.”，就能得到相应的域名。例如：

* **Terminus Name**：`alice@myterminus.com`
* **域名**：`alice.myterminus.com`

## 如何获取 Terminus Name？

创建 Terminus Name 是使用 Terminus 的第一步。你需要在 TermiPass 应用上创建并绑定 Terminus 账户。

1. 创建新的 Terminus 账户。
    1. 在手机上打开 TermiPass 应用。如果你未设置本地解锁密码，请先行设置。
    2. 点击 **创建 Terminus Name**。你也可以选择导入已有的名称。
2. 绑定 Terminus Name。
    - **个人用户**
        * 选择 **个人 Terminus Name**。
        * 使用 Google 的 Gmail 身份验证服务绑定个人可验证凭证（VC），进而创建 Terminus Name。按照提示使用 Google 账户登录并完成绑定。
    - **组织用户**
        * 选择 **组织 Terminus Name**。
        * 加入现有的组织或通过 Terminus Space 创建新组织。
        * 输入组织的域名。
        * 绑定组织邮箱。当前支持 Gmail 和 Google Workspace 邮箱。
        * 完成后，你将获得组织 Terminus Name。
3. 备份助记词。

    助记词是恢复你的 DID 和 Terminus Name 的唯一方式。请确保安全地[备份你的助记词](../../how-to/termipass/account/#backup-mnemonic-phrase)。

有关详细步骤，请参阅[创建 Terminus Name](../../how-to/termipass/account/#create-a-terminus-name)。

## 更多信息

* [使用 TermiPass 管理账户](../../how-to/termipass/account/#create-terminus-name)
* [Snowinning 协议](../../developer/contribute/snowinning/overview.md)
* [了解去中心化标识符 (DID)](../../developer/contribute/snowinning/concepts.md)
* [域名类型](../../developer/contribute/snowinning/terminus-name.md#domain)
* [Gmail 发行者服务](../../developer/contribute/snowinning/terminus-name.md#gmail-发行者服务)
* [Terminus 账户阶段](../../how-to/termipass/account/#stage-of-account)