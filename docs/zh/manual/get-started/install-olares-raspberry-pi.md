

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
## 安装 Olares
执行以下命令:

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
2. 依次输入域名和 Olares ID。 以 Olares ID 为 `alice123@olares.cn` 为例：
   - **Domain name**：按下回车将直接使用默认域名（olares.cn）。
   - **Olares ID**：输入 ID 前缀，即 `alice123`。

   ![Enter domain name and Olares ID](/images/manual/get-started/enter-olares-id.png)

安装完成后，屏幕将显示初始系统信息，包括向导地址和初始登录密码。这些信息在后续激活步骤中会用到。

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
   ![激活 Olares](/images/manual/get-started/activate-olares.png)
   b. 按照 LarePass 上的提示重置 Olares 的登录密码。

设置成功后，LarePass 应用会自动返回主界面，向导页面则会跳转到登录界面。

## 登录流程

1. 在登录页面输入 Olares 登录密码。

   ![登录](/images/manual/get-started/log-in.png)
2. 系统会要求完成双重验证。你可以选择：
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

## 后续步骤
快要大功告成了！在开始使用 Olares 之前，还需要确保你的 Olares ID 得到安全保护：
- [备份助记词](./back-up-mnemonics.md)
