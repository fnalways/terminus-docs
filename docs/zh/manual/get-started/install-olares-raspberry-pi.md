

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

2. 重启树莓派使配置生效。

   ```bash
   sudo reboot
   ```
## 预安装 Olares

1. 在 Linux 终端执行以下命令：
```bash
curl -fsSL https://cn.olares.sh |  bash -
```

2. 安装过程中根据提示输入用户密码。

3. 看到以下提示则预安装完成：

```bash
[Install]
WantedBy=multi-user.target

2024-12-12T11:30:41.936+0800	[A] GenerateOlaresdService success (23.835099ms)
2024-12-12T11:30:43.089+0800	[A] EnableOlaresdService success (1.152940336s)
2024-12-12T11:30:43.089+0800	[Module] PrepareFinished
2024-12-12T11:30:43.090+0800	[A] LocalHost: PrepareFinished success (255.929µs)
2024-12-12T11:30:43.090+0800	[Job] Prepare the System Environment execute successfully!!! (6m55.544264947s)
```

:::info
如果安装过程中出现错误，请先执行以下命令卸载：

```bash
bash olares-uninstall.sh
```
卸载完成后，重新运行安装命令进行安装。
:::

## LarePass 引导安装激活

:::tip NOTE
请确保你的手机和 Olares 设备连接至同一网络。
:::

预安装完成后，你可以使用 LarePass 应用引导后续的安装，初始配置，以及激活。 

![安装激活](/images/manual/get-started/install-activate.jpeg)

1. 打开 LarePass, 在 Olares 账户页面，点击 **发现附近的 Olares** 选项。
2. 在 **激活 Olares** 页面，找到刚刚完成预安装的 Olares 设备，并点击**立即安装**。
3. 等待安装进度完成后，点击**立即激活**。Olares 进入激活流程，同时自动完成系统初始化设置，网络配置等。
4. 初始配置完成后，按照 LarePass 上的提示设置 Olares 的登录密码，并点击 **完成**。

此刻你已经成功安装并激活了 Olares。LarePass 会自动进入 Olares 管理页面，并弹出 Olares 的访问网址。

![访问 URL](/images/manual/get-started/access-url.png)

## 登陆 Olares

通过以下步骤访问 Olares:

1. 在浏览器中输入 Olares URL。进入欢迎页面后，按任意键继续。
2. 在登录页面输入 Olares 登录密码。

   ![登录](/images/manual/get-started/log-in.png)
3. 系统会要求完成双重验证。你可以选择：
    - 通过 LarePass 确认登录：
        - a. 点击手机上的 LarePass 登录通知。
        - b. 在弹出的对话框中点击**确认**。
          ![确认](/images/manual/get-started/second-confirmation.png)
    - 手动输入 6 位验证码：
        - a. 打开 LarePass 应用，进入**设置** > **验证器**。
        - b. 点击验证器生成 6 位验证码。
        - c. 在登录页面输入验证码。
          ![一次性密码](/images/manual/get-started/OTP.png)
          ::: info
          验证码有时效限制，请在过期前完成输入。如果验证码过期，需要重新生成。
          :::

完成这两个步骤后，就会进入 Olares 桌面。

## 常见问题

- **用 LarePass 引导安装时，无法发现待安装 Olares 设备。**

   请检查你的手机网络，确保与 Olares 设备连接至同一网络。

- **用 LarePass 引导安装时，发现了设备，但弹出域名解析错误窗口，无法继续。**

   此报错是因为你手机语言为英语而默认创建了 `.com` 域名的 Olares ID，这与中国大陆地区设置的默认反向代理配置冲突，无法完成 DNS 解析。此时可以通过重新创建一个 `.cn` 域名的 Olares ID，并用 LarePass 重新引导安装。具体步骤如下：

   ![重新创建](/images/manual/get-started/recreate-id.png)

   1. 从报错页面返回至账户页面。
   2. 点击右上角的帐户图标，在账户列表最后选择 **添加新账户**。
   3. 在账户创建页面，点击右上角图标进入高级账号创建模式。
   4. 设置默认域名为 `.cn`。
   5. 返回后，创建新的 Olares ID。
   
   在新的账户页面用 LarePass 重新引导安装激活流程。

## 后续步骤
快要大功告成了！在开始使用 Olares 之前，还需要确保你的 Olares ID 得到安全保护：
- [备份助记词](./back-up-mnemonics.md)