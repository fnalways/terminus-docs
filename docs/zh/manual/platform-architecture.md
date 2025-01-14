---
outline: [2, 3]
---

# Olares 架构

本文详细介绍了 Olares 的架构，阐述了各层及其组件的用途和功能。

![Olares 架构图](/images/manual/olares-architecture-diagram.png)

## 基础设施

这一层是 Olares 的基石，提供容器编排、存储、网络等基础设施。

### 容器编排

Olares 根据底层环境支持不同的 Kubernetes 发行版：
- Linux 环境（包括 WSL、PVE、LXC、树莓派）：用户可以选择安装 [Kubernetes](https://kubernetes.io/) 或轻量级的 [K3s](https://k3s.io/)。K3s 作为默认选项，在本地硬件上能提供更好的性能和资源效率。
- macOS：使用 [minikube](https://minikube.sigs.k8s.io/) 在 Linux 虚拟机中部署 Kubernetes，确保跨平台的统一体验。

无论选择哪种 Kubernetes 发行版，用户都能获得一致的 Olares 核心能力和使用体验。

### 网络

网络组件确保容器、节点和服务之间的无缝通信，包括：

- [CoreDNS](https://coredns.io/)：为集群提供 DNS 服务，实现高效的域名解析。
- [Calico](https://www.tigera.io/project-calico/)：提供高性能容器网络接口（CNI），负责容器和虚拟机之间的通信，并提供高级网络策略控制。
- [Envoy](https://www.envoyproxy.io/)：高性能、可扩展的边缘和服务代理。Envoy 作为服务间通信的中间件，处理负载均衡、服务发现、安全通信和可观测性。它可以作为独立的反向代理或 API 网关使用，也常作为服务网格（Service Mesh）的数据平面组件。

这些组件共同确保了 Olares 中网络的健壮性、可扩展性和安全性。

### 存储

Olares 为单节点和多节点设置提供灵活的存储方案：

- 本地存储：适用于单节点部署，为系统日志等本地数据提供最佳读写性能。
- [S3](https://aws.amazon.com/s3/)：多节点环境的云存储选项，也支持任何兼容 S3 的服务。
- [MinIO](https://min.io/)：本地部署的 S3 兼容存储解决方案。用户可以通过 Olares 搭建 MinIO 集群，或使用现有的 MinIO 服务。

这种方案确保了应用能够访问所需的存储机制，无论是本地还是分布式环境。

### 分布式键值存储

Olares 使用 [etcd](https://etcd.io/) 作为分布式键值存储。etcd 对管理集群状态、配置和服务发现等关键系统数据至关重要。其高可用性和强一致性使其成为分布式环境的理想选择。

### GPU 管理

针对资源密集型需求（如使用 AI 应用），Olares 提供强大的 GPU 管理能力，支持共享和独占两种 GPU 使用模式：

- **共享模式**：应用可以访问完整的 GPU（算力和显存），Olares 会调度 GPU 使用以确保多个应用间的公平性。通过 [nvshare](https://github.com/grgalex/nvshare) 实现。
- **独占模式**：如果一个应用声明使用全部 GPU 内存，其他需要 GPU 资源的任务将等待资源释放后才能执行。

:::info 注意
Olares 目前的 GPU 管理功能仅支持单节点单 GPU 的部署场景。
:::
从 Olares v1.11 开始，支持 [CUDA](https://developer.nvidia.com/cuda-toolkit)（12.4 及以上版本）。当宿主机环境的 CUDA 配置变更时，可以通过 `olares-cli` 通知 Olares 集群进行配置。

### Olares 管理

Olares 的集群管理通过以下工具实现：

- [olares-cli](../developer/install/cli/olares-cli.md)：命令行工具，用于管理 Olares 集群、应用和硬件节点等。
- [olaresd](../developer/install/installation-overview.md#系统守护进程olaresd)：Olares 的守护进程，用于监控硬件和网络变更、处理集群升级和重启等。

这些工具简化了 Olares 的安装、维护和扩展过程。

## 平台层

平台层的服务运行在容器中，提供数据库、消息系统、文件系统、工作流编排、密钥管理和可观测性等中间件服务。

### 数据库

Olares 使用 [PostgreSQL](https://www.postgresql.org/) 16 作为主要关系型数据库。所有应用共享一个 PostgreSQL 实例，每个应用都有专用账号以实现隔离。PostgreSQL 同时作为全文搜索引擎和向量数据库。

多节点方面，使用 [Citus](https://github.com/citusdata/citus) 实现，但该方案仍在调试中。

未来，PostgreSQL 预计会迁移到基础设施层以实现更好的资源管理。

### 键值缓存

Olares 集成了 [KVRocks](https://github.com/apache/incubator-kvrocks)，这是一个基于 RocksDB 构建的 Redis 兼容持久化键值存储。KVRocks 在内存和磁盘存储之间取得平衡，比 Redis 集群更节省资源，但性能略有损失。

### 消息系统

使用轻量级高性能的 [NATS.io](https://nats.io/) 作为消息系统。NATS 在保证可靠消息队列的同时，保持较低的资源消耗。

### 文件系统

Olares 采用云原生分布式文件系统 [JuiceFS](https://juicefs.com/)，为应用提供 POSIX 兼容接口。当使用 S3 或 MinIO 作为存储后端时，JuiceFS 确保跨节点的无缝文件访问。

### 工作流管理

Olares 使用 [Argo Workflows](https://argoproj.github.io/) 进行工作流编排。这个 Kubernetes 原生工具可以自动化复杂任务流程，如 Olares 分布式推荐引擎所需的任务。目前这个功能尚未对第三方应用开放。

### 密钥管理

Olares 集成了两个密钥管理解决方案：

- [Vault](https://github.com/beclab/olares/tree/main/apps/vault)：保护账号、密码和助记词等敏感数据。它对密钥进行加密，即使服务器被攻破，数据也能保持安全。Vault 由 Olares 团队基于 [Padloc](https://padloc.app/) 开发。
- [Infisical](https://infisical.com/)：一个用于管理敏感信息和防止团队内密钥泄露的工具。

### 可观测性

Olares 集成了 [Prometheus](https://prometheus.io/) 用于系统监控和资源使用跟踪。Prometheus 为**仪表盘**和**应用市场**等应用提供资源使用方面的数据。

此外，使用基于 eBPF 的 [OpenTelemetry](https://opentelemetry.io/) 正在开发中，用于监控请求进入 Olares 后的链路。*（开发中）*

### 其他中间件

Olares 在**应用市场**中集成了一些常用中间件，如用于可视化的 [Grafana](https://grafana.com/)、用于文档存储的 [MongoDB](https://www.mongodb.com/) 和用于混沌工程的 [Chaos Mesh](https://chaos-mesh.org/)。

## 应用框架

应用框架层为系统和第三方应用提供通用功能和接口。

### 认证和身份管理

Olares 使用 [LLDAP](https://lldap.example.com/) 管理用户账号并为应用提供 LDAP（轻量目录访问协议）服务。

此外，[Authelia](https://www.authelia.com/) 添加了认证和授权支持，包括多因素认证和单点登录（SSO）。

### 应用治理

应用治理的组件包括：
- [app-service](https://github.com/beclab/app-service)：处理应用生命周期管理和资源分配。
- [system-server](https://github.com/beclab/system-server)：管理应用间接口调用的权限，以及应用和数据库中间件之间的网络路由。
- image-server：与 app-service 协作管理 Olares 应用所需的容器镜像。
- [bfl](https://github.com/beclab/bfl)：聚合后端接口，代理所有系统服务的请求，如用户隔离的系统信息和集群信息。

### 网络连接
Olares 通过以下方式提供安全灵活的网络连接：
- 反向代理：Olares 支持 [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)、Olares Tunnel 和自建 FRP 三种方案。
- [Tailscale](https://tailscale.com/)：让用户可以从任何地方安全访问系统。
- [Headscale](https://github.com/juanfont/headscale)：Tailscale 控制面板的自托管实现。

### 文件服务
文件服务的组件包括：
- File server
- [Seafile](https://www.seafile.com/)：Dropbox 的开源替代品，用于文件同步。Olares 深度集成了 Seafile，使用户能将分散在多个设备上的文件同步到统一的存储库中。
- Drive server：提供与 Google Drive、Dropbox 和 S3 等外部存储服务的接入。
- Media server：使用 [ffmpeg](https://github.com/FFmpeg/FFmpeg) 流式传输视频文件。

### 知识服务
知识服务的组件包括：
- Knowledge：存储用户通过浏览器扩展收集或通过 LarePass 从手机分享的网页、视频、音频、PDF 和 EPUB 等内容。这个存储库也被分布式推荐引擎用来存储其推荐的结果。
- Download：使用 [aria2](https://aria2.github.io/) 和 [youtube-dlp](https://github.com/yt-dlp/yt-dlp) 下载文件、磁力链接和在线视频。
- Search：为 Knowledge 和**文件管理器**的内容提供全文搜索。
- [RSSHub](https://github.com/DIYgod/RSSHub)：生成 RSS 源以便订阅内容。

### AI 服务

Olares 提供以下 AI 能力：
- 模型服务*：提供模型托管服务。*（开发中）*
- RAG 接口*：为文件、文章、图片和视频提供检索增强生成（RAG）服务。*（开发中）*
- 代理和工作流编排*：管理 Agent 和工具工作流。*（开发中）*

### 系统服务

系统服务包括：
- 通知：传递系统级通知。
- 分析：提供类似 Google Analytics 的网络分析。
- 备份*：支持目录、应用和集群备份。*（开发中）*
- 升级*：支持系统自动升级。*（开发中）*

## 系统应用

系统应用提供文件、知识、密码和系统本身的管理工具。这些应用预装在系统中。

用户可以通过应用市场安装更多应用。

### 文件管理器

管理和同步多设备间的文件，实现无缝共享和访问。

### Wise

一个本地优先、AI 原生的现代阅读器，帮助从各平台收集、阅读和管理信息。用户可以运行自托管的推荐算法来过滤和排序在线内容。

### Vault

一个安全的密码管理器，用于存储敏感信息并在设备间同步。

### 应用市场

一个去中心化、无许可的应用商店，用于安装、卸载和更新应用。

### 设置

系统配置应用。

### 仪表盘

监控系统资源使用的应用。

### 控制面板

Olares 的控制台，提供对系统及其环境的精确和自主控制。

### Profile

自定义用户个人页面的应用。

### DevBox

用于构建和部署 Olares 应用的开发工具。

## 了解更多
- 要开始使用 Olares，请参阅[快速开始](get-started/index.md)。
- 要深入了解 Olares 的内部原理，请参阅[概念](concepts/index.md)中的主题。
- 要详细了解 Olares 中各组件如何被编排，请参阅 [Olares 安装概述](../developer/install/index.md)。