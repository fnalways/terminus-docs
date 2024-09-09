# Manage Terminus

## Resource Consumption of the Terminus

:::info
只有 Android 和 iOS 版本支持该功能
:::

在这里您可以查看到 Terminus 的资源消耗信息。

![alt text](/images/how-to/termipass/resource.jpg)

## VPN connection

您可以在 TermiPass 客户端开启 VPN 连接。

![alt text](/images/how-to/termipass/vpn.jpg)

- 在 Terminus 桌面客户端开启 VPN。请点击主界面的左上角头像区域，在新的面板中选择开启 VPN connection。

- 在 Terminus 移动客户端开启 VPN。请切到 Setting 界面，进入 Account，在 Account 页面中开启 VPN。

请注意，如果您在 TermiPass 客户端开启了 VPN，那么无论您是通过 TermiPass 客户端连接到 Terminus，还是通过浏览器访问 Terminus，都将使用 VPN 连接。

## Connection Status

TermiPass 将显示账号和 Terminus 的连接状态.

正常情况下，将有以下几种状态：

![alt text](/images/how-to/termipass/connection_status.jpg)

| 状态                | 状态图标 | 描述                             |
| ------------------- | -------- | -------------------------------- |
| 公网连接 - Internet | Internet | 通过公网连接 到 Terminus         |
| 内网连接 - Intranet | Intranet | 通过内网连接 到 Terminus         |
| FRP                 | FRP      | 通过 FRP 连接 到 Terminus        |
| VPN 连接 - DERP     | DERP     | 通过 VPN - DERP 连接 到 Terminus |
| VPN 连接 - P2P      | P2P      | 通过 VPN - P2P 连接 到 Terminus  |

### Public Network Connection - Internet

显示 “Internet” 状态，则表示，您是通过公网连接到 Terminus。

### Internal Network Connection - Intranet

显示 Intranet 状态，则表示，您是通过内网连接到 Terminus。

### FRP

显示 FRP 状态，则表示，您是通过 FRP 连接到 Terminus。

### VPN Connection - DERP

显示 DERP 状态，则表示，您是通过 VPN - DERP 连接连接到 Terminus。

### VPN Connection - P2P

显示 P2P 状态，则表示，您是通过 VPN - P2P 连接连接到 Terminus。

### Offline Mode

显示 Offline Mode 状态，则表示，您现在处于离线模式下，无法连接到 Terminus。

## Abnormal Status

![alt text](/images/how-to/termipass/abnormal_status.jpg)

### Network Connection Abnormality

处于这种状态下，则提醒您 Network abnormality, please check local network settings，我们自动检测本地网络，网络恢复后会自动连接，自动同步数据。

### VPN Connection Not Enabled

处于这种状态下，则提醒您 Need VPN to connect to Terminus. Connect，点击状态图标和状态条都会弹窗要求立即开启 VPN 连接。

### SSO Invalid

处于这种状态下，则提醒您 Need to log in to Terminus again. Log in，点击状态图标和状态条都会弹窗提示。确认后，将进入输入密码页面，输入密码后完成重新登录。

### SRP Invalid

处于这种状态下，则提醒您 Need to reconnect to Terminus. Reconnect，点击状态图标和状态条都会弹窗提示。确认后，将进入输入密码页面，输入密码后完成重新登录。登录之后，您的 Vault 数据将和服务端 Vault 进行同步并合并，请放心这些数据都不会丢失。

### Device Is Inactive or Expired

出现这种情况，您则提醒您 Need to reactivate Terminus. Learn more。可能的原因，我们都大致罗列了一下，最终的处理方式，由用户自行决定。

- 由于 Terminus 短暂性的网络连通问题引起的，Terminus 恢复正常后，此问题会自动消失。

- 因为您的 Terminus 已经销毁，需要重新激活。如果您确认需要重新激活，请选择重新激活。

- 如果你无法确认情况，请忽略此信息，或寻求管理员帮助。

- 如果你觉得受到了状态提示条的干扰，可以启用离线模式。

| 异常状态           | 描述                                                                                                      | 状态提醒     |
| ------------------ | --------------------------------------------------------------------------------------------------------- | ------------ |
| 离线模式           | 可以手动切换到离线模式，在离线状态继续编辑，内容将在联网后和服务端同步。                                  | Offline 状态 |
| 网络连接异常       | 当前的网络连接不畅，请检查本地网络                                                                        | banner tip   |
| 未开启 VPN 连接    | Need VPN to connect to Terminus.                                                                          | banner tip   |
| SSO 失效           | Need to log in to Terminus again.                                                                         | banner tip   |
| SRP 失效           | Need to reconnect to Terminus.                                                                            | banner tip   |
| 设备未激活或已失效 | 设备未激活，或者设备被销毁等各种情况。用户可以根据自己的实际情况选择：1 重新激活，2 开启离线模式，3，忽略 | banner tip   |
