

Olares 主要运行于 Linux 系统环境下，同时支持在 macOS 或 Windows 上安装，方便测试和评估使用。

:::info
Mac 版 Olares 目前存在以下限制：
- 不支持分布式存储
- 无法添加本地节点

建议仅用于开发或测试环境。
:::

## 系统要求

Mac 设备需满足以下条件：
- 处理器架构：X86-64 或 ARM64
- 内存：可用内存 8 GB 及以上
- 存储空间：可用磁盘空间 90 GB 及以上
- MacOS 版本：Monterey（12）及以上

## 前置准备

请确保已安装以下软件：
- [Docker](https://www.docker.com/products/docker-desktop/)
- [MiniKube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fhomebrew)
  ::: tip
  推荐通过 `homebrew` 安装 minikube。
  :::

## 配置系统环境

1. 打开 Docker Desktop，进入"**Settings**" > "**Resources**"，按以下要求配置资源：
    - "**CPU limit**"：至少设置为 4 核
    - "**Memory limit**"：至少设置为 9 GB
    - "**Virtual disk limit**"：至少设置为 80 GB

   ![更新资源配置示例](/images/manual/get-started/docker-resources-settings.png)

2. 点击"**Apply & restart**"使配置生效。

## 安装 Olares

在终端中运行以下命令：

 ```bash
 curl -fsSL https://olares.sh |  bash -
 ```
:::info
如果安装过程中出现错误，请先执行以下命令卸载：

```bash
bash olares-uninstall.sh
```
卸载完成后，重新运行安装命令进行安装。
:::
## 配置 Wizard
安装过程结束时，系统会要求输入域名和 Olares ID：
1. 输入 root 用户密码。
   ![Enter password](/images/manual/get-started/enter-root-user-password.png)
2. 依次输入域名和 Olares ID。 以 Olares ID 为 `alice123@olares.com` 为例：
    - **Domain name**：按下回车将直接使用默认域名（olares.com）。
    - **Olares ID**：输入 ID 前缀，即 `alice123`。

   ![Enter domain name and Olares ID](/images/manual/get-started/enter-olares-id.png)

安装完成后，屏幕将显示初始系统信息，包括向导地址和初始登录密码。这些信息在后续激活步骤中会用到。

![Wizard URL](/images/manual/get-started/wizard-url-and-login-password.png)

## 下一步
完成安装后，接下来需要激活系统才能开始使用，这个过程类似于新手机的首次设置：

- [激活 Olares](./activate-olares)