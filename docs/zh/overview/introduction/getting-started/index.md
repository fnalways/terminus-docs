---
outline: [2, 3]
---

# 开始使用 Terminus

欢迎使用 Terminus！本文档会帮助你在偏好的平台上快速启动并运行 Terminus。除了基本的设置步骤，你还将了解一些高级配置技巧。

:::info 信息
- 后文将以管理员（Admin）角色为例展开说明。管理员用户有权访问 Terminus 全部功能。
- 本文档主要介绍 Terminus 的自托管方式安装。如果想尝试云服务版本，请查看 [Terminus Space 文档](../../../how-to/space/host/create-terminus.md)。
:::

## 硬件与系统要求

请确认你的系统符合以下基本要求。为了获得更好的性能，建议选择更高的配置。

|       | Linux                              | 树莓派                            | macOS                        | Windows                                         |
|-------|------------------------------------|--------------------------------|------------------------------|-------------------------------------------------|
| 操作系统  | Ubuntu 20.04 或更高版本，Debian 11 或更高版本 | Raspbian 12                    | macOS Monterey (12) 或更高版本    | Windows 10, 11                                  |
| 架构/型号 | x86-64, amd64                      | Raspberry Pi 4B，Raspberry Pi 5 | x86-64, ARM64                | x86-64, amd64                                   |
| 内存    | 8GB                                | 8GB                            | 8GB                          | 8GB                                             |
| 磁盘空间  | 64GB                               | 64GB SSD                       | 64GB                         | -                                               |
| 其他    | -                                  | 建议使用以太网线                       | 需安装 Docker Desktop, Minikube | 需启用 WSL2 并安装 Ubuntu 20.04 或更高版本；Debian 11 或更高版本 |

:::info 信息
- 我们将持续更新此表。如果你在未列出的系统版本上成功安装了 Terminus，或在安装过程中遇到任何问题，请及时联系我们。
- 为保证最佳性能和兼容性，我们建议在 Linux 上安装 Terminus。
:::

## 快速开始

选择你的操作系统以开始安装：

- [在 Linux 上开始](linux.md)
- [在 MacOS 上开始](mac.md)
- [在 Windows 上开始](windows.md)
- [在 Raspberry Pi 上开始](raspberry.md)

:::tip 提示
安装之前，建议你先了解以下几个概念：

- [什么是 Terminus](../../introduction/what-is-terminus.md)
- [Terminus 名称解释](../../terminus/terminus-name.md)
- [TermiPass 介绍](../../../how-to/termipass/overview.md)
:::