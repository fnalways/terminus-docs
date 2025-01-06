# Olares 安装概述 

本文档将向你介绍 Olares 安装的整体架构及核心组件。

执行一键安装安装脚本后，你将首先安装 `olares-cli`。`olares-cli` 是一个 Olares 的命令行工具，用于安装维护 Olares 集群、管理应用、管理用户、以及扩展硬件节点等日常任务。`olares-cli` 会主导后续组件的安装，具体包括：

![Install arch](/images/developer/install/olares-install.png)

- 操作系统层：处理 Linux 系统配置与基础环境依赖安装。
- 容器编排层：部署 Kubernetes 集群，实现服务的自动化管理与扩展。
- 容器化层：启动容器化的系统核心服务和用户应用，提供最终运行环境。

::: tip 提示
要了解这些组件涉及的具体安装过程，请参考[Olares 安装过程](installation-process.md)文档。
:::

## 操作系统层面 
Olares 的安装从 操作系统层面 开始，确保底层 Linux 环境支持分布式存储、容器运行时和 Kubernetes 集群管理。该层的配置涵盖 Linux 系统的核心环境设置、文件系统初始化、容器运行时安装以及关键系统服务部署。 

### 环境配置

安装 Olares 时，系统首先会 Linux 进行基本安装环境配置，如配置 DNS、SSH、NTP 服务，确保时间同步与远程管理。同时，也会安装必要依赖，如 gcc、net-tools 等系统工具，确保运行时环境。

### 文件系统配置

文件系统 （rootfs）用于存取系统核心组件与用户数据。根据安装模式，支持以下两种文件系统：

- **LocalFS**: 默认文件系统。使用 Linux 本地磁盘作为存储系统。适用于单节点部署，数据吞吐要求高，且无网络共享需求的日常部署场景。.

- **JuiceFS**: 分布式文件系统 。该方式使用 JuiceFS 充当 文件系统网关，将文件数据存入 Olares 本地安装的 MinIO，或是远端存储桶（如 S3）。不同存储节点可拥有统一的存储视图。该方式适用于多节点集群部署，数据跨节点共享的场景。JuiceFS 和 MinIO 默认不安装，需安装时设置[环境变量](environment-variables.md#juicefs) 或用 [olares-cli 脚本](./cli/olares-prepare.md#选项)配合 JuiceFS 相应参数安装。

### 容器运行时：Containerd

Olares 的核心组件全部都是容器化发布和部署的，因此需要安装轻量级容器运行时 containerd。功能如下：
- 容器镜像管理：将打包好的容器镜像从 CDN 下载下来，在环境预装阶段导入至 containerd, 并在正式安装环节以容器进程的方式启动镜像。
- 容器生命周期管理：负责启动、停止、重启和监控容器化应用服务。

::: tip 注意
如果系统之前安装过 containerd，尤其是以 Docker 的形式安装的，可能会与 Olares 有兼容性问题。请卸载之后再安装 Olares。
:::

### 系统守护进程：`olaresd`

Olaresd 是 Olares 的系统守护进程，以 system daemon 服务的形式持续在后台运行。它主要提供以下系统管理服务：
- 自动化配置更新：当 IP 地址或相关配置项发生变更时，自动调检测并调整。
- 系统管理：通过 LarePass 客户端或命令行的请求，执行 Olares 安装、激活、恢复出厂设置、连接 WiFI 等系统操作。

### CUDA 支持
Olares集成了强大的本地 AI 能力。为了确保用户在 Olares 部署的本地 AI 模型和应用可充分利用 Nvidia 显卡的性能，用户可通过配置相关环境变量安装统一计算架构（CUDA）的工具包及相应驱动。 

## 容器编排层：Kubernetes 

在完成操作系统层的环境准备后，Olares 的安装会进入容器编排层。这一层的主要任务是将系统的各个组件（核心服务、辅助工具、用户应用）整合到一个有序、高效且易于扩展的运行环境中。这一层的核心是 Kubernetes，它为多组件服务的自动化部署、运行、扩缩和管理提供了基础框架。

### 为什么使用 Kubernetes？

在容器编排领域，Kubernetes 是公认的事实标准。相比早期的 docker-compose 或 Docker Swarm，Kubernetes 在社区活跃度、架构可扩展性、生产级别的可靠性与安全性方面有着显著优势。同时，其强大的生态意味着海量系统应用可通过 Helm Charts、Operators、CRD（自定义资源定义）等方式轻松集成到 Olares 中，为用户提供更多样的选择和云原生的使用体验。

### Olares 的 Kubernetes 选择

Olares 在以下 Linux 环境中，Olares 支持官方 Kubernetes 和 Rancher 的轻量级 K3s：

- Ubuntu/Debian
- Windows Subsystem for Linux (WSL)
- Proxmox Virtual Environment (PVE)
- 树莓派

默认会选择 K3s 以在本地硬件上取得更佳性能和资源利用效率。

在 macOS 上，Olares 通过 Minikube 在 Linux 虚拟机中部署 Kubernetes，从而确保底层功能和用户体验的一致性。

## 容器化层：Olares 的应用运行机制

容器化层就是 Olares 系统的最终呈现形式。在这一层中，Olares 的所有组件（如存储管理、认证服务、应用网关等）和用户应用都运行在容器内，通过 Kubernetes 进行全生命周期管理，确保系统高效、稳定和可扩展。

你可以在一个已经安装了 Olares 的环境上，使用**控制面板**应用查看正在运行的容器：

![Running pods](/images/developer/install/running-pods.png)


## 了解更多

- [Olares 安装过程](installation-process.md)
- [`olares-cli` 命令行参考](../install/cli/olares-cli.md)
- [Olares 环境变量](environment-variables.md)