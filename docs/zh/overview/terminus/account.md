---
outline: [2, 3]
---

# Account

## Motivation

Terminus 在研发之初是一个逻辑上的单用户系统，这样每个用户的 Terminus 在物理上都是独立的，每个人都拥有自己的数据。但随着研发推进，我们很快发现这么做的劣势：

- 硬件资源开销大，并且会随着用户数的增长而线性增长。因为每个用户都需要独立的部署重复的系统软件和中间件，这些软件几乎没有负载，但占据大量的内存。
- 无法处理需要协同的场景。由于单用户系统的应用不支持 [Cluster Scoped Application](./application.md#cluster-scoped-application)，这会导致放弃过去开源社区里大量协同软件的积累。

其次，我们期望用户只需要在桌面登录一次，就可以访问系统里所有的应用。对比之下，手机里每一个应用都需要我们单独登录。

我们认为，统一的账号体系不仅有助于打破不同应用间的数据孤岛，也可以通过统一的鉴权流程提高系统整体的安全性。

最后，我们希望应用在迁移到 Terminus 时，为兼容新的账号系统，所需的改动尽可能的少。

## Unified Account

![alt text](/images/overview/terminus/account.jpg)

我们设计了多用户体系下的应用鉴权流程，上图是流程示意图：

1. 用户在 [Login 页面](../../how-to/terminus/setup/login.md) 完成登录后，后续的所有请求都会自动附带鉴权信息
2. 用户每次发送请求，请求都会首先经过 Authelia 服务进行鉴权
3. 请求附带的的鉴权信息如果没有通过，应用会自动跳转到 [Login 页面](../../how-to/terminus/setup/login.md)，用户要手工进行 [MFA](#multi-factor-authentication)
4. 对于通过 Authelia 的请求，BFL 会附带上用户的基本信息后，将它转发给应用，应用无需自己处理鉴权
5. 对于 [Cluster Scoped Application](./application.md#cluster-scoped-application) 需要开发者额外开发 `Auth Server` 将应用的账号和 BFL 的账号绑定

   您可以参考 Terminus 团队开发的一些`Auth Server`：[wordpress-proxy](https://github.com/beclab/wordpress-proxy)，[bytebase-proxy](https://github.com/beclab/bytebase-proxy)，[gitlab-client-proxy](https://github.com/beclab/gitlab-client-proxy)，[gitlab-server-proxy](https://github.com/beclab/gitlab-server-proxy)

## Multi-factor Authentication

当前，单纯采用密码进行身份认证的系统，往往都会受到大量的攻击。`社会工程学窃取` `暴力破解`等多种攻击手段也越来越多。MFA 认证已成为越来越多系统和服务的选择。Terminus 采用了多种不同安全程度认证因素叠加的方式来保证系统用户身份认证的安全。

- 密码

  在用户创建之初，我们会为用户生成随机密码，用于完成用户的初始化流程。在完成用户的身份识别认证后，会要求用户修改初始密码。采用安全性更高的自定义密码。

- TOTP

  在 [激活 Terminus](../../how-to/terminus/setup/wizard.md) 的过程中，TermiPass 会存储 Terminus OS 的 TOTP （ Time-Based One-Time Password ）。

  在用户进行敏感操作， 例如 [登录流程](../../how-to/terminus/setup/login.md) 时，Terminus OS 会要求用户输入 TermiPass 中通过 TOTP 生成的`一次性二次认证码`。

## Multiple Accounts

### Role

在 Terminus OS 中存在两种角色：

- **Admin**： 创建 Terminus 的用户会自动成为 Admin，他可以：
  - [管理用户](../../how-to/terminus/settings/account.md)
  - [管理 Cluster 应用](./application.md#cluster-application)
  - 管理硬件
- **Member**： 除 Admin 外的用户

:::info
Admin 拥有查看和修改所有账户资源使用情况的权利，但他无法查看其他账户的数据
:::

### Account

因为每个 Terminus OS 的 Account 都对应了一个 [Terminus Name](../snowinning/terminus-name.md)。

同时每一台 Terminus 都属于一个 [Domain](../snowinning/terminus-name.md#domain)。

所以，Terminus 里的用户例如 `alice@myterminus.com` 在`BFL`等模块中会使用`Local Name`: alice

## Resource Limit

Terminus OS 在创建新用户时，需要给每个用户分配 CPU 和内存资源。

当新用户安装新应用时，会检查用户的可用资源。如果所剩资源不够，将不允许安装。

同时，新用户在使用过程中，如果实时消耗资源超过了分配资源的 90%，这个时候 Terminus OS 会启动保护机制。将用户消耗资源最高的两个 Community Application`暂停`。

在用户的实时消耗资源下降到合理水平之后，可以手动在 [Control Hub](../../how-to/terminus/controlhub/browse.md#修改部署运行状态)中，重启被`暂停`的应用。

## Learn More

- 用户

  [使用 TermiPass 管理 Account ](../../how-to/termipass/account/index.md)<br>
  [使用 Settings 管理自身账号安全](../../how-to/terminus/settings/home.md)<br>
  [使用 Settings 管理系统 Account](../../how-to/terminus/settings/account.md)

- 开发者

  [Account 系统回调](../../developer/develop/advanced/account.md)<br>
