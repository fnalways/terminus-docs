
Olares 主要运行于 Linux 系统环境下，同时支持在 macOS 或 Windows 上安装，方便测试和评估使用。

:::info
Windows 版 Olares 目前存在以下限制：
- 不支持分布式存储
- 无法添加本地节点

建议仅用于开发或测试环境。
:::

## 系统要求

Windows 设备需满足以下条件：
- CPU：4 核及以上
- 内存：可用内存 16 GB 及以上
- 存储空间：可用磁盘空间 64 GB 及以上
- 支持的系统：
    - Windows 10 或 11
    - Linux（WSL2 环境）：Ubuntu 20.04 LTS 及以上；Debian 11 及以上

## 配置系统环境

1. 启用 Hyper-V 以支持虚拟化功能。具体步骤参见 [Install Hyper-V on Windows](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)。

2. 暂时关闭 Windows Defender 防火墙。安装完成后可重新启用。具体步骤参见 [Turn Microsoft Defender Firewall on or off](https://support.microsoft.com/en-us/windows/turn-microsoft-defender-firewall-on-or-off-ec0844f7-aebd-0583-67fe-601ecf5d774f)。

3. 设置当前用户的执行策略。

   a. 以管理员身份打开 PowerShell，运行以下命令：
    ```powershell
    Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
    ```
   b. 输入 `A` 并按下**回车键**以确认更改执行策略。

   ![更改执行策略](/images/manual/get-started/change-execution-policy.png)

## 安装 Olares

1. 点击 https://windows.olares.sh 下载安装脚本 `publicInstall.latest.ps1`。
2. 下载完成后，双击 `publicInstall.latest.ps1` 文件，或右键选择**使用 PowerShell 运行**。
3. 在弹出的提示框中，点击**打开**继续。
4. 输入 `R` 并按下**回车键**以运行脚本。

   ![运行安装脚本](/images/manual/get-started/run-installation-script.png)

随后脚本将开始安装 Olares。
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