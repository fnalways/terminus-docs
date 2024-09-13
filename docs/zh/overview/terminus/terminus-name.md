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

## 如何创建 Terminus Name？

创建 Terminus Name 是使用 Terminus 的第一步。这个过程涉及到设置你的 Terminus 账户，并将其与一个 Terminus Name 关联。根据需求，你可以选择以下两种方式：

   - [快速创建（默认模式）](../../how-to/termipass/account/index.md#默认模式不绑定-vc)：适用于不打算绑定可验证凭证且希望尽快开始使用的用户。
   - [高级创建](../../how-to/termipass/account/index.md#高级模式绑定-vc)：适用于追求额外安全保障或需要个性化 Terminus Name 的用户或组织。此方式需绑定可验证凭证。

## Terminus Name 和 DID 有什么关系？

去中心化标识符（DID）是一个独一无二的标识符，可以通过密码学方式验证，不需要依赖任何中心化机构。虽然 DID 在去中心化网络中解决了身份验证问题，但通常这些标识符不便于人们记忆或日常使用。

Terminus Name 则让 DID 变得更亲切，它提供了一个类似电子邮件地址的格式，既容易记忆也好用，同时保留了 DID 的安全性和强大功能。

每个 Terminus Name 都连接着一个具体的 DID。在 Terminus 创建账户时，相应的 DID 也会被创建。要详细了解它们如何协作，可以查看[Terminus 账户的阶段](../../how-to/termipass/account/index.md#账户的阶段)。
## 更多信息

* [使用 TermiPass 管理账户](../../how-to/termipass/account/index.md#创建-terminus-name)
* [Snowinning 协议简介](../../developer/contribute/snowinning/overview.md)
* [深入了解去中心化标识符（DID）](../../developer/contribute/snowinning/concepts.md)
* [域名类型介绍](../../developer/contribute/snowinning/terminus-name.md#域名类型)
* [Gmail 发行者服务](../../developer/contribute/snowinning/terminus-name.md#gmail-发行者服务)