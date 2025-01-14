## <span class="h2-border-none">系统要求</span>

LXC（Linux 容器）是一种轻量级的虚拟化技术，可以在隔离的容器中运行应用程序。在 PVE 环境下使用 LXC 部署 Olares 能够避免完整虚拟机的额外开销，提供了一种更高效的部署方式。

请确保设备满足以下配置要求：

- CPU：4 核及以上
- 内存：不少于 8GB 可用内存
- 存储：建议使用 SSD，且可用磁盘空间不少于 64GB
- 支持的系统版本：
  - PVE: 8.2.2
  - LXC 容器系统：Debian 12（既有 LXC 环境）

::: tip 版本兼容性
虽然以上版本已经过验证，但其他版本也可能正常运行 Olares。根据你的环境可能需要进行调整。如果你在这些平台上安装时遇到任何问题，欢迎在 [GitHub](https://github.com/beclab/Olares/issues/new) 上提问。
:::

## 准备工作

- 在 PVE 主机上创建用于存储镜像和软件包的工作目录。
  
   ```bash
   mkdir -p /root/.olares/images /root/.olares/pkg
   ```
-  `debian-12-standard_12.7-1_amd64.tar.zst`的容器模板（CT），可从 PVE [镜像仓库](http://download.proxmox.com/images/system/)下载。

### 配置 LXC 环境

1. 使用以下命令创建 LXC 容器：

   ::: tip 指定唯一容器 ID
   要创建容器，必须分配一个唯一的 **容器 ID**。在本指南中，我们使用 `16553`，但你可以将其替换为任何可用的数字 ID，并在所有相关命令和配置中更新此 ID。
   :::

   ::: tip 安装至已有 LXC 容器
   如果你想要在 PVE 中已有 LXC 容器上安装 Olares，请直接到第二步更新 LXC 配置。要记得更新对应的容器 ID。
   :::

   ```bash{2}
   export ROOTPASS=123456 
   pct create 16553 /var/lib/vz/template/cache/debian-12-standard_12.7-1_amd64.tar.zst \
   --hostname olares \
   --ostype ubuntu \
   --cores 4 \
   --memory 10240 \
   --swap 0 \
   --net0 name=eth0,bridge=vmbr0,firewall=1,ip=dhcp,ip6=dhcp,type=veth \
   --rootfs local-lvm:80 \
   --unprivileged 0 \
   --ignore-unpack-errors \
   --mp0 "/root/.olares/images,mp=/root/.olares/images" \
   --mp1 "/root/.olares/pkg,mp=/root/.olares/pkg" \
   --password="$ROOTPASS"

2. 修改 LXC 配置。
   
   a. 打开配置文件:

   ```bash
   nano /etc/pve/lxc/16553.conf
   ```
   
   b. 复制并粘贴以下配置到文件中:
      
      ```bash
      # 基础配置
      arch: amd64
      cores: 4
      hostname: olares
      memory: 10240
      net0: name=eth0,bridge=vmbr0,firewall=1,hwaddr=BC:24:11:13:05:7C,ip=dhcp,ip6=dhcp,type=veth
      ostype: debian
      rootfs: local-lvm:vm-16553-disk-0,size=80G

      # 存储配置
      mp0: /root/.olares/images,mp=/root/.olares/images
      mp1: /root/.olares/pkg,mp=/root/.olares/pkg

      # 权限配置
      lxc.apparmor.profile: unconfined
      lxc.cgroup.devices.allow: a
      lxc.cap.drop:
      lxc.mount.auto: "proc sys cgroup:mixed"
      ```
   
   c. 保存并退出编辑界面。

3. 在 PVE 主机上启用 IP 虚拟服务器 （IPVS) 模块：

   ```bash
   sudo modprobe ip_vs
   sudo modprobe ip_vs_rr
   sudo modprobe ip_vs_wrr
   sudo modprobe ip_vs_sh
   sudo modprobe overlay
   ```
4. 启动并配置 LXC 容器。

   ```bash 
   # 启动容器
   pct start 16553

   # 进入容器
   pct enter 16553

   # 创建缺失的目录
   mkdir -p /lib/modules

   # 更新 PATH 环境变量
   echo 'export PATH="/usr/local/bin:$PATH"' >> /root/.bashrc
   source ~/.bashrc
      
   # 退出 LXC
   exit

5. 将 PVE 依赖项复制到 LXC 容器。
   
   ```bash
   # 将内核配置从 PVE 主机复制到 LXC 容器
   pct push 16553 /boot/config-$(uname -r) /boot/config-$(uname -r)
   
   # 打包并复制内核模块目录
   tar cvf /lib/modules/6.8.4-2-pve.tar.gz /lib/modules/6.8.4-2-pve
   pct push 16553 /lib/modules/6.8.4-2-pve.tar.gz /lib/modules/6.8.4-2-pve.tar.gz
   
   # 在 LXC 容器内解压内核模块文件
   pct enter 16553
   cd /lib/modules
   tar xvf /lib/modules/6.8.4-2-pve.tar.gz -C /
   ```

## 安装 Olares

在 LXC 容器 中运行以下安装命令：

```bash
curl -fsSL https://cn.olares.sh | bash -
```

:::tip root 用户密码
安装过程中，可能需要输入 root 用户密码。
:::

:::info 安装遇到报错？
如果安装过程中出现错误，请先执行以下命令卸载：

```bash
bash olares-uninstall.sh
```
卸载完成后，重新运行安装命令进行安装。
:::

## 配置 Wizard
在安装 Olares 的核心服务之前，需要输入在 LarePass 中注册的 Olares ID 前缀。如果你的 Olares ID 为 `alice123@olares.cn`，输入 `alice123` 即可。

![Enter domain name and Olares ID](/images/zh/manual/get-started/enter-olares-id.png)

安装完成后，屏幕将显示初始系统信息，包括向导地址和初始一次性密码。这些信息在后续激活步骤中会用到。

![Wizard URL](/images/manual/get-started/wizard-url-and-login-password.png)

## 激活 Olares

使用向导 URL 和初始一次性密码进行激活和 Olares 初始化配置。

1. 在浏览器中输入向导 URL。进入欢迎页面后，按任意键继续。

   ![打开向导](/images/manual/get-started/open-wizard.png)
2. 输入一次性密码，点击**继续**。

   ![输入密码](/images/manual/get-started/wizard-enter-password.png)
3. 选择系统语言。

   ![选择语言](/images/manual/get-started/select-language.png)
4. 使用 LarePass 应用激活 Olares。

   a. 打开 LarePass 应用，点击**扫描二维码**，扫描向导页面上的二维码完成激活。
   :::warning 检查网络连接
   为避免激活失败，请确保你的手机和 Olares 设备连接到同一网络。
   :::
   ![激活 Olares](/images/manual/get-started/activate-olares.png)
   b. 按照 LarePass 上的提示重置 Olares 的登录密码。

设置成功后，LarePass 应用会自动返回主界面，向导页面则会跳转到登录界面。

## 登录流程

1. 在登录页面输入 Olares 登录密码。

   ![登录](/images/manual/get-started/log-in.png)
2. 系统会要求完成双重验证。你可以选择在 LarePass 上确认登录，或手动输入 6 位验证码。
   ::: info
   验证码有时效限制，请在过期前完成输入。如果验证码过期，需要重新生成。
   :::

   ![Confirm login](/images/manual/get-started/confirm-login.png)

登录后你就会看到 Olares 桌面。🎉

## 安全保存 Olares ID
你已经准备好开始使用 Olares！在此之前，请务必确保 Olares ID 已安全备份。如果不备份，你将无法在需要时恢复 Olares ID。

- [备份助记词](./back-up-mnemonics.md)
