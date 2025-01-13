---
outline: [2, 3]
---
# Olares 命令行工具

Olares 命令行工具（Olares CLI）是一个面向开发者和系统管理员的命令行工具，用于自定义或排查 Olares 的安装过程。

我们推荐使用[一键安装命令](../../../../manual/get-started/install-olares.md)来完成安装。该命令会从 https://olares.sh/ 获取一个 shell 脚本，下载并安装 Olares 命令行工具。安装完成后，命令行工具会协调执行后续的安装步骤。

总体来说，Olares 命令行工具通过以下三个主要阶段来管理安装过程：
1. **预检**：开始安装前预检系统环境
2. **下载**：获取所需组件
3. **预安装**：为安装准备环境
4. **安装**：安装 Olares 核心服务

本文将详细介绍 Olares 命令行工具的语法和各项命令操作。

:::info 需要 root 权限
大多数 `olares-cli` 命令都需要 root 权限。请使用 root 用户执行命令，或在命令前加上 `sudo`。
:::

## 语法
Olares 命令行工具使用如下语法：

> `olares-cli command [子命令] [选项]`

其中：
- `command`：指定要执行的主要操作，例如 `olares download`
- `subcommand`：进一步指定 `command` 的具体任务，例如 `wizard` 或 `component`
- `option`：可选参数，用于修改命令的行为。包括标志（flags）和带参数的选项

通过 Olares 命令行工具，你可以临时覆盖某些 Olares 默认设置。每个选项仅对当前执行的命令生效。

例如，在执行 `olares-cli olares download wizard` 时使用 `--base-dir` 选项，只会影响向导的下载过程，而不会改变其他命令（如"安装"阶段）的基础目录。

如需查看任何命令的详细帮助信息，请运行 `olares-cli help`。

## 可用命令列表

| 操作                 | 语法                                                 | 说明                             |
|--------------------|----------------------------------------------------|--------------------------------|
| `olares info`      | `olares-cli olares info [option]`                  | 显示已下载的 Olares OS 的常规信息         |
| `olares download`  | `olares-cli olares download [subcommand] [option]` | 下载指定资源                         |
| `olares prepare`   | `olares-cli olares prepare [option]`               | 为安装过程准备环境，包括设置 Olares 的基础服务和配置 |
| `olares install`   | `olares-cli olares install [option]`               | 部署 Olares 的系统级和用户级组件           |
| `olares change-ip` | `olares-cli olares change-ip [option]`             | 修改 Olares OS 的 IP 地址           |
| `olares release`   | `olares-cli olares release [option]`               | 打包 Olares 安装资源以供分发或部署          |
| `olares uninstall` | `olares-cli olares uninstall [option]`             | 完全卸载 Olares，或将安装回滚到特定阶段        |

