

Olares 主要运行于 Linux 系统环境下，同时支持在 macOS 或 Windows 上安装，方便测试和评估使用。

## 系统要求

请确保 Linux 设备满足以下配置要求：

- CPU：4 核及以上
- 内存：8GB 及以上（可用内存）
- 存储：64GB 及以上（可用磁盘空间）
- 支持的系统版本：
    - Ubuntu 22.04 LTS 及更新版本
    - Debian 11 及更新版本

## 配置系统环境

1. 将本地 IP 绑定至 Ubuntu 主机名，以确保 DNS 解析稳定：

   ```bash
   sudo apt install net-tools
   ifconfig
   # 获取本地 IP 地址，应以 192.168 开头
   sudo nano /etc/hosts
   192.168.xx.xx   linux  # 添加此行
   # 请将 IP 地址和主机名替换为实际值
2. 重启 Ubuntu 使配置生效：
   ```bash
   sudo reboot
   ```
## 安装 Olares
执行以下命令：
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