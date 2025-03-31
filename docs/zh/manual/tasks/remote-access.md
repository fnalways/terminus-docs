---
outline: [2,3]
description: 了解如何在桌面客户端上启用 LarePass 专用网络，安全地远程访问 Olares 及其局域网设备。
---
# 通过 LarePass 专用网络远程访问局域网设备

借助 LarePass 专用网络，你可以从不同网段或远程位置访问 Olares 设备及其局域网内的设备。启用 SSH 访问和子网路由后，就能远程管理 Olares 局域网中的电脑、打印机或 NAS 等设备。

:::info
只有 Olares 管理员才能通过 LarePass 专用网络启用局域网设备的远程访问。
:::

## 启用 LarePass 专用网络

:::tip
从[官方页面](https://www.joinolares.cn/larepass)下载 LarePass 桌面客户端。
:::

1. 打开 LarePass 桌面客户端，点击主界面左上角的头像区域。
2. 在弹出面板中打开**专用网络连接**开关。

   ![启用 LarePass VPN](/images/zh/manual/tasks/enable-larepass-vpn-desktop.png#bordered){width=50%}


:::info
iOS 或 macOS 版本的 LarePass 在开启专用网络时需要在系统中添加 VPN 配置文件。请按照提示完成设置。
:::

## 允许通过专用网络建立 SSH 连接
启用此功能后，即使在不同网络或远程工作时，也可以通过 LarePass 专用网络使用 SSH 访问 Olares 设备。

1. 打开设置应用，选择**系统** > **VPN**。
2. 开启**允许通过 VPN 进行 SSH 连接**。端口 **22**（SSH）会自动添加到配置中。

   ![通过 VPN 使用 SSH](/images/zh/manual/tasks/ssh-via-vpn.png#bordered)

## 允许子网路由
启用此功能后，你可以访问与 Olares 位于同一局域网的其他设备。

1. 打开设置应用，选择**系统** > **VPN**。
2. 开启**允许子网路由**。

## 配置端口访问的访问控制规则
启用子网路由后，你可以通过配置访问控制列表（ACL）规则来允许访问特定端口，以便使用所需的网络服务。

例如，要通过远程桌面访问 Windows 服务器：
1. 点击 <i class="material-symbols-outlined">add</i> 打开**添加 ACL**对话框。
2. 输入 `3389`（远程桌面协议的默认端口），然后点击**确认**。
3. 点击**应用**使更改生效。

   ![添加 ACL 端口](/images/zh/manual/tasks/add-acl-port.png#bordered)

完成配置后，你就可以使用 Windows 远程桌面来访问与 Olares 位于同一局域网的 Windows 服务器了。