---
description: 全平台 Olares 安装指南，支持 Linux、PVE、LXC、树莓派、Mac、Windows WSL，提供命令行和 Docker 两种部署方式。
---
# 安装 Olares
本文介绍安装 Olares 的不同方式。在运行 Olares 之前，你需要[创建 Olares ID](create-olares-id.md)，并确保操作系统和硬件配置满足最低要求。

推荐在 **Linux 系统（Ubuntu 或 Debian）** 上使用 Olares，这些平台可以为生产环境提供最佳的性能和稳定性。你也可以在 macOS 和 Windows（通过 WSL 2）等平台运行 Olares，但建议仅用于开发或测试环境。

你可以选择以下方式安装 Olares：

- **使用脚本安装**：通过简单的安装脚本将 Olares 直接安装到系统中。
- **使用 Docker 镜像**：以容器化方式运行 Olares，无需直接安装在机器上。

:::info 安装遇到问题？
如果安装过程中遇到问题，[可以提交 GitHub Issue](https://github.com/beclab/Olares/issues/new)。提交时请提供以下信息：
- 使用的平台或环境（如 Ubuntu、Docker、WSL 等）。
- 安装方式（脚本安装或 Docker 镜像）。
- 详细的错误信息（包括日志、错误提示或截图）。
:::