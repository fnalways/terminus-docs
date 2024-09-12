
# 在 Linux 上开始

本文档将介绍如何在 Linux 系统上快速部署和启动 Terminus。只需遵循以下几个简单的步骤，你就可以创建账户、安装 Terminus 并开始探索其丰富的功能。

## 开始之前

- 确保你的 Linux 设备符合[硬件与系统要求](../getting-started/index.md#硬件与系统要求)。
- 手机上已安装 [TermiPass](../../../how-to/termipass/overview.md#download) 应用。

## 1. 创建 Terminus Name

在手机上打开 TermiPass，按照界面指示[创建 Terminus Name](../../../how-to/termipass/account/#create-terminus-name)。

:::info 信息
Terminus Name 是你在 Terminus 中的唯一身份标识。
了解[为什么需要 Terminus Name](../../../../overview/terminus/terminus-name.md#why-do-you-need-a-terminus-name)。
:::

## 2. 安装 Terminus

1. 将局域网 IP 地址绑定到 Ubantu 主机名，以确保 DNS 解析稳定：

   ```bash
   sudo apt install net-tools
   ifconfig
   # 查找以 `192.168` 开头的局域网 IP 地址。
   ```
   
   ```bash
   sudo nano /etc/hosts
   # 添加一行
   192.168.xx.xx   Ubuntu 
   # 将 xx 替换为你的实际 IP 地址和主机名。
   ```

2. 重启 Ubuntu 使更改生效。
   
   ```bash
   sudo reboot
   ```

3. 打开终端，运行以下命令来安装 Terminus 的最新版本：

   ```sh
   curl -fsSL https://terminus.sh |  bash -
   ```

4. 安装完成后，请记下 Terminus 激活向导的网址和你的初始登录密码。

根据你的网络和硬件配置，安装时间可能会有所不同。详细的安装步骤，请参考 [在 Linux 上安装 Terminus](../../../how-to/terminus/setup/install/linux.md)。

## 3. 激活 Terminus

1. 使用记录的网址，在浏览器中打开 Terminus 激活向导，并用初始密码登录。
2. 根据页面指示完成初始设置。
3. 用 TermiPass 扫描二维码以激活你的 Terminus，并设置新的登录密码。

完整的激活步骤，请查看[向导文档](../../../how-to/terminus/setup/wizard.md)。

## 4. 登录 Terminus

在向导页面，用新设置的密码登录 Terminus，并通过 TermiPass 完成双重验证。更多登录详情，参见[登录帮助文档](../../../how-to/terminus/setup/login.md)。

:::warning 警告
为保障账户和数据安全，别忘了[备份你的助记词](../../../how-to/termipass/account/index.md#backup-mnemonic-phrase)。
:::

## 下一步
- [探索 Terminus 的各种任务](../../../how-to/terminus/index.md)
- [安装更多应用](../../../how-to/terminus/market/index.md#install-application)
- [如何卸载 Terminus](../../../developer/develop/advanced/cli.md#terminus-uninstallation-script)
- [如何解决 IP 地址变更的问题](../../../developer/develop/advanced/cli.md#resolve-ip-change-issue)
