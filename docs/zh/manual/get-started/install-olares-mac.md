

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

1. 打开 Docker Desktop，进入"**设置**" > "**资源**"，按以下要求配置资源：
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

在安装过程结束时，你需要提供下列信息：
1. 检查 Mac 的 IP 地址（例如，`192.168.x.x`）。如果自动获取的 IP 地址正确，请按 `Y` 确认。如果需要修改，请按 `R` 并输入正确的地址。
2. 依次输入域名和 Olares ID。 以 Olares ID 为 `alice123@olares.com` 为例：
    - **Domain name**：按下回车将直接使用默认域名（olares.com）。
    - **Olares ID**：输入 ID 前缀，即 `alice123`。

   ![Enter domain name and Olares ID](/images/manual/get-started/enter-olares-id.png)

安装完成后，屏幕将显示初始系统信息，包括向导地址和初始登录密码。这些信息在后续激活步骤中会用到。

![Wizard URL](/images/manual/get-started/wizard-url-and-login-password.png)

# 激活 Olares

使用向导 URL 和初始一次性密码进行激活。此过程通过 LarePass 将 Olares 与你的 Olares ID 关联，确保你能安全访问个人云空间。

## 完成 Olares 初始化设置

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