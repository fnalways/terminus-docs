---
description: Olares 在 Linux 系统上的安装指南，支持脚本安装和 Docker 镜像安装两种方式。
---
# 安装 Olares

本文介绍如何在 Linux 系统上安装 Olares。我们推荐在 **Linux 系统（如 Ubuntu 或 Debian）** 上部署 Olares，以在生产环境中提供最佳的性能与稳定性。

开始安装前，请先[创建 Olares ID](create-olares-id.md)，并确认操作系统与硬件已满足最低要求。

::: tip 其他平台支持
Olares 也支持其他平台（如 macOS、Windows、PVE 和树莓派），但这些环境仅适用于**开发或测试**。如需在这些平台上安装，请参考[其他安装方式](/developer/install/additional-installations.md)。
:::

在 Linux 上，你可以通过以下方式安装 Olares：

- **使用安装脚本（推荐）**：通过一行命令快速安装 Olares。
- **使用 Docker 镜像**：以容器方式运行 Olares，无需在本机直接安装。
在运行 Olares 之前，你需要[创建 Olares ID](create-olares-id.md)，并确保操作系统和硬件配置满足最低要求。

:::info 安装遇到问题？
如果安装过程中遇到问题，[可以提交 GitHub Issue](https://github.com/beclab/Olares/issues/new)。提交时请提供以下信息：
- 使用的平台或环境（如 Ubuntu、Docker、WSL 等）。
- 安装方式（脚本安装或 Docker 镜像）。
- 详细的错误信息（包括日志、错误提示或截图）。
:::