

Olares 主要运行于 Linux 系统环境下，同时支持在 macOS 或 Windows 上安装，方便测试和评估使用。

## 系统兼容性
请确保树莓派设备满足以下要求：
- 硬件：树莓派 4B 或树莓派 5（8GB 内存版本）
- 操作系统：Raspbian 12
- 存储空间：64GB（建议使用 SSD）

## 环境配置
1. 配置 Raspbian 环境，启用必要功能：

      ```bash
      echo "$(head -1 /boot/firmware/cmdline.txt) cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1" | sudo tee /boot/firmware/cmdline.txt

      echo "kernel=kernel8.img" | sudo tee -a /boot/firmware/config.txt
      ```

2. 将本地 IP 绑定至主机名，以确保 DNS 解析稳定：

   ```bash
   sudo apt install net-tools
   ifconfig
   # 获取本地 IP 地址，应以 192.168 开头
   ```

   ```bash {2}
   sudo nano /etc/hosts
   192.168.xx.xx   raspberrypi  # 添加此行
   # 请将 IP 地址和主机名替换为实际值
   ```

3. 重启树莓派使配置生效。

   ```bash
   sudo reboot
   ```
## Install Olares
Run the following command:

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