# Open Application Distribution Protocol

## 理念

Open Application Distribution Protocol 的愿景是:

- 打造一个无许可的应用分发生态
- 用户的付费全部归开发者所有

## 技术方案

要想实现这个愿景，在技术上需要做到：

- 统一的安装格式

  Terminus 提供了 [TAC 格式](../../developer/develop/package/chart.md)，提供给用户在安装和管理传统应用，推荐算法和模型以及未来所有“软件”时一样的体验。

- 应用沙盒

  Terminus 提供了[Community Application 模式](../terminus/application.md#community-application)，让恶意软件的影响范围尽可能的小。

- 去中心化的应用评价体系

  帮助用户进行购买决策，以及识别有信誉的开发者。 Terminus 提供了[Application Reputation](../snowinning/smart-contract.md#application-reputation)

- 用户可以自由为 Market 选择 Indexer 服务，下图是 Developer，Indexer 和 Market 的关系

  ![alt text](/images/overview/protocol/distribute.jpeg)

  Developer 可以将应用自由提交到任意一个 Indexer，Market 可以选择任意一个 Indexer 给用户展现应用列表。

  [apps](https://github.com/beclab/apps) 是 Terminus 官方的 Indexer，它由一个 Gitbot 机器人根据规则自动维护，开发者只要遵守 [流程](../../developer/develop/submit/index.md) 提交符合 TAC 格式的应用，Gitbot 就会将开发者的提交合并到主干，用户就可以在 [Market](../../how-to/terminus/market/index.md) 里看到这个应用并安装。

  其他人也可以参考这个案例搭建自己的 Indexer。
