# Olares 安装概述 

本文档概述了 Olares 的安装流程，重点介绍其整体架构和核心组件，旨在为系统管理员和开发者提供 Olares 的运行原理及安装方法的基本了解。
![Install arch](/images/developer/install/olares-install.png)

## Olares 安装的三层结构

Olares 的安装流程分为三个关键层级：
- **操作系统层**：处理 Linux 系统配置与基础环境依赖安装。
- **容器编排层**：部署 Kubernetes 集群，实现服务的自动化管理与扩展。
- **容器化层**：启动容器化的系统核心服务和用户应用，提供最终运行环境。

安装过程由命令行工具 `olares-cli` 管理。该工具负责协调所有组件的安装、配置以及生命周期管理。

::: tip 提示
要了解安装的详细过程，请参考 [Olares 安装分解](installation-process.md)文档。
:::

## 操作系统层
Olares 的安装从操作系统层面开始，确保底层 Linux 环境支持分布式存储、容器运行时和 Kubernetes 集群管理。

该层的配置涵盖核心 Linux 环境设置、文件系统初始化、容器运行时安装以及关键系统服务部署。

### 环境配置

安装 Olares 时，系统首先会 Linux 进行基本安装环境配置，如配置域名解析系统 （DNS）、安全外壳（SSH）远程访问协议、网络时间协议 （NTP）等服务，以确保时间同步与远程管理。

同时，也会安装必要依赖，如 GNU 编译器集合（GCC）、网络工具（net-tools） 等系统工具，确保运行时环境。

### 文件系统配置

文件系统（rootfs）用于存取系统核心组件与用户数据。根据部署要求，支持以下两种文件系统：

- LocalFS（默认）：使用本地 Linux 磁盘进行存储，适用于无需网络共享且需要高数据吞吐量的单节点部署。

- JuiceFS：为多节点集群提供分布式文件系统。文件数据可以存储在本地安装的 MinIO 实例中，也可以存储在 Amazon S3 这一类远程存储桶中。该配置支持不同存储节点共享统一的存储视图。

:::tip 启用 JuiceFS
JuiceFS 和 MinIO 默认不安装，需安装时设置必要的[环境变量](environment-variables.md#juicefs)或用 [olares-cli 命令](./cli/olares-prepare.md#选项)配合 JuiceFS 相应参数安装。

### 容器运行时：containerd
Olares 使用轻量级容器运行时 containerd 进行容器化部署，其主要功能包括：

Olares 的核心组件全部都是容器化发布和部署的，因此需要安装轻量级容器运行时 containerd。功能如下：
- **容器镜像管理**
  - 从内容分发网络（CDN）下载已打包的容器镜像。
  - 在预装阶段导入将下载镜像导入至 containerd,
  - 在安装环阶段以容器进程的方式启动镜像。
  
- **容器生命周期管理**：启动、停止、重启和监控容器化应用服务。

::: tip 兼容性问题
如果你的机器之前安装过 containerd，比如通过 Docker 安装，可能会与 Olares 安装的 containerd 有兼容性问题。请卸载已有版本之后再安装 Olares。
:::

### 系统守护进程：olaresd

olaresd 是系统守护进程，运行于后台，提供以下关键管理功能：
- 自动配置更新：当系统发生变化（如 IP 地址变更）时，自动检测并调整相关配置项。
- 远程系统管理：通过 LarePass 客户端或 `olares-cli` 命令处理远程操作系统，例如 Olares 的安装、激活、恢复出厂设置以及 Wi-Fi 连接。

### CUDA 支持
为了为本地 AI 模型和应用启用 GPU 加速，Olares 支持通过 `olares-cli` 自动检测并安装 CUDA 工具包和相关驱动程序。

## 容器编排层：Kubernetes 

容器编排层通过 Kubernetes 将系统组件集成到高效的运行环境中。

### Kubernetes 的角色

Kubernetes 是容器编排层的核心，负责实现多组件服务的自动部署、运行、扩展和管理。

与 Docker Compose 或 Docker Swarm 等工具相比，Kubernetes 提供了以下优势：
- 高可扩展性和生产级可靠性：适用于大规模集群部署和关键任务环境。
- 丰富的社区支持：拥有活跃的社区和丰富的生态系统，可通过 Helm Charts、Operators 和自定义资源定义（CRDs）集成各种应用程序。

### Olares 支持的 Kubernetes 版本

Olares 支持以下 Kubernetes 部署方式：
	•	K3s（默认）：轻量级 Kubernetes 发行版，可优化本地硬件上的资源利用效率。
	•	Kubernetes：完整功能的 Kubernetes 发行版，适用于高级或自定义部署需求。
	•	Minikube（仅限 macOS）：通过 Minikube 工具部署的本地单节点 Kubernetes 集群，确保一致的功能和用户体验。

## 容器化层：Olares 的应用运行机制

在容器化层，Olares 各组件和应用协同工作提供系统完整功能。所有组件和用户应用程序都运行在容器中，并通过 Kubernetes 进行全生命周期管理。种架构确保了系统的高效性、稳定性和可扩展性。

在安装并激活 Olares 后，您可以通过控制面板应用的图形界面查看正在运行的容器。

![Running pods](/images/developer/install/running-pods.png)


## 了解更多

- [Olares 安装过程](installation-process.md)
- [Olares Home 概述](olares-home.md)
- [`olares-cli` 命令行参考](../install/cli/olares-cli.md)
- [Olares 环境变量](environment-variables.md)
