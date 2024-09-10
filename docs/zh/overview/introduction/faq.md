# FAQ

## Terminus 采用了什么协议？

Terminus 由一系列项目组成，采用了分层授权的方式，基本原则是：

- 区块链上运行的项目，采用 Apache 2.0，例如 [Snowinning Protocol](https://github.com/beclab/terminusdid-contract-system)。
- 协议相关的项目，采用 Apache 2.0，例如 [r4](https://github.com/beclab/r4)。
- [Terminus](https://github.com/beclab/terminus) 和 [TermiPass](https://github.com/beclab/TermiPass) 相关的项目，采用 [Terminus License](https://github.com/beclab/terminus?tab=License-1-ov-file)。
- 在 Terminus 上运行的第三方应用，由开发者自己决定开源与否与协议选择。

每个项目具体的情况，可以在 [GitHub](https://github.com/beclab) 上查询。

## Terminus License 是开源协议吗？

Terminus 在主项目的协议选择上深受 [fair code](https://faircode.io/) 启发。[Terminus License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) 直接复制了 [Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) 的内容，同样遵循以下 4 点原则：

> - is generally free to use and can be distributed by anybody
> - has its source code openly available
> - can be extended by anybody in public and private communities
> - is commercially restricted by its authors

## 助记词丢了怎么办？

你将会丢失：

- 对 [DID](../../developer/contribute/snowinning/concepts.md#去中心化标识符-did) 和 [Terminus Name](../../../developer/contribute/snowinning/terminus-name.md) 的所有权。
- 丢失 [Vault](../../how-to/terminus/vault/index.md) 里存储的数据。

我们强烈建议你采用离线的方式备份助记词。

从 1Password 的 MasterKey 到 Crypto 钱包的助记词。十几年来，助记词的存储的问题一直没有很好的被解决。

Terminus 的助记词会加密保存在所有安装了 TermiPass 的设备上，一般情况下，你只有在同时丢失所有装有 TermiPass 的设备后，才会丢失助记词。

安全是我们设计系统最重要的原则，我们会在未来持续改进，给大家更好的兼顾便捷和安全性的方案。

## Terminus 和现在 NAS 上运行的操作系统有什么区别？

Terminus 在立项之初，市场上就已经有了 [Synology](https://www.synology.com/en-global/dsm/packages)，[CasaOS](https://github.com/IceWhaleTech/CasaOS) 和 [Umbrel](https://github.com/getumbrel/umbrel) 这样优秀的运行在 NAS 上的`操作系统`，给了我们很大的启发。

但我们认为未来运行在 Edge 端的操作系统：

- 需要能够对对多个硬件进行资源调度
- 能对软件进行沙盒化管理

这是上述基于 Docker Compose 构建的`操作系统`比较难做到的。

同时 Terminus 希望提供一个一站式的 Self-Hosted 解决方案，也是一般 NAS `操作系统`不考虑的。

## 我有几台服务器，可以用 Terminus 统一管理吗？

可以，参见 [如何添加一个节点](../../developer/develop/advanced/cli.md)。

添加完成后，你就可以通过[面板](../../how-to/terminus/dashboard/) 和 [ControlHub](../../how-to/terminus/controlhub/) 来管理集群。

多节点集群的体验是我们未来几个月的工作重点。

## 我需要为 Terminus 付费吗？

本地部署时，你几乎可以完全免费的使用 Terminus。

但当你使用到以下两种功能时，考虑到成本，我们会考虑收取一定费用（目前都是免费的）:

- 备份

  我们在 Terminus Space 上为每个 Terminus Name 提供了 10G 的免费备份额度。当存档大小超过这个额度后，我们会向大家收取一定的费用，以应对云厂商的账单。

  你可以在[修改备份设置](../../how-to/terminus/settings/backup.md) ，关闭备份或将数据备份到本地硬盘或 S3 上来规避这部分费用。

- 公网访问

  我们为每个 Terminus Name 每个月提供了 2G 的免费公网流量。

  如果你不提供公开的互联网服务，那么你几乎所有的流量都可以通过 VPN 进行点对点传输，我们不会从中收取费用。（我们暂时不确定 TailScale DERP 服务如何产生费用。）

  如果你需要提供公开的互联网服务，产生的额外流量，我们会参考云厂商的账单向你收取费用。

同时我们认为冷备份和 CDN 都是比较容易 DePin 化的资源类型，我们期待看到基于 [Otmoic Protocol](../protocol/otmoic.md) 的解决方案。

## 区块链操作需要付费吗？

我们目前的合约部署在 [OPTIMISTIC ROLLUPS](https://optimism.io/) 上。

我们支付所有 Terminus Name 的注册费用，每个注册的成本大概在 1-2 美金左右。这样做的目的是为了降低系统的使用门槛。

但当用户想直接跟链上的合约进行交互，例如发出评论，管理 Domain 时，就需要通过浏览器钱包插件，自己支付对应的 Gas。

## 什么时候支持其他语言？

目前我们只支持英语。我们期望在 2024 年 Q2 开始多语言支持。

事实上，我们已经在所有前端项目完成了 i18n 替换，但我们并没有通过开源社区维护一个持续迭代的复杂项目的翻译资源的经验。我们还在学习中。

## 我可以开发自己的桌面吗？

当然。如果你记得 2011 年的 Android 市场，Google Market（是的，那时候不叫 Google Play）里有格式各样的桌面、短信和联系人应用。

我们会采用跟 Android 类似的架构（LaunchProvider-> Launcher），将应用前端和后端分离，前端交给第三方应用，放在第三方应用空间。

我们期望在 2024 年 7 月前支持这个功能。但如果你现在就想要开始，可以:

1. 参考 [desktop](https://www.transifex.com/) 的实现
2. 通过 [DevBox](../../developer/contribute/system-app/overview) 开发系统桌面替换掉本地的桌面

通过这个方法开发的应用，通过 Market 分发后无法被正确安装。但当我们支持前后端分离后，只要简单的修改就可以对外发布。

## `Terminus` 的用法

我们目前在两种场景下使用 Terminus 这个词：

1. 描述整个项目时。指代包含了 3 个核心组件和扩展协议的完整架构。
2. 描述运行了 Terminus OS 的硬件设备。从一个树莓派到云上多台机器组成的集群，都叫 Terminus

## 如何区分各种“密码”？

Terminus 的确会用到各种密码来保障安全，包括：

- 私钥
- TermiPass 的密码:
  - 在手机上，可以通过生物识别来辅助输入
  - 在电脑和浏览器插件上，需要手动输入
- Terminus 首次激活时的密码
- Terminus 登录时的密码
- Terminus 登录时的二次验证码

别害怕！从日常使用角度来说，你需要经常输入的是 Terminus 登录时的密码二次验证码。

## 什么是工作量证明？

工作量证明（Proof of Useful Work， PoUW）有两个特点：

1. 生产成本远远高于验证成本
2. 任何第三方可以验证

例如 Bitcoin 的挖矿就是第一个也是最经典的工作量证明。但这个工作量证明不有用，应为我们无法拿计算出来的 Hash 解决实际问题。

类似的项目还有 Chia，它为存储提供了一种工作量证明，在磁盘中存储了大量随机生成的数字。

有很多项目都声称自己给出了一个这样的工作量证明，但我们对此持谨慎态度。

## 多用户的应用如何部署？

取决于你是想用这个应用对外提供服务，还是对内让 Terminus 的用户使用。

- 对外提供服务，用户可以将访问应用的 Entrance 选择为 [Public](../terminus/network.md#public-entrance)。这样可以由应用自己管理本身的用户注册和鉴权。
- 对内提供协同，用户可以在 Terminus 上部署这类产品的 [Cluster Scoped](../terminus/application.md#cluster-scoped-application) 版本

对于 Gitlab 来说，我们同时提供了两种版本的移植，[Gitlab Pure](https://github.com/beclab/apps/tree/main/gitlabpure) 和 [Gitlab Fusion](https://github.com/beclab/apps/tree/main/gitlabfusion)。
