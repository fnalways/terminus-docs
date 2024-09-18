# 账户

## Log in

我们使用去中心化 ID（DID）作为登录方法。 它可以确保用户身份和数据所有权掌握在用户自己手中。

![alt text](/images/how-to/space/space_login.jpg)

:::info
Terminus Name 是你在 Terminus 世界中的标识符。 了解[什么是 Terminus Name](../../developer/contribute/snowinning/terminus-name.md)。
:::

请通过 TermiPass 客户端获取 DID/Terminus Name，并「扫码」登录 Terminus Space。

![alt text](/images/how-to/space/login.jpg)

如上图所示，在 TermiPass 上，你可以在 2 个位置找到扫码登录 Terminus Space 的入口。

1. 当你创建了 DID 之后的页面，以及你绑定了 Terminus Name 之后的落地页，你可以在页面的右上角找到扫码登录 Terminus Space 的入口。

2. 当你成功激活了 Terminus 之后，正常打开 TermiPass，切换到 Setting，你可以在此页面的右上角找到扫码登录 Terminus Space 的入口。

想要了解更多的关于账号的相关信息，你可以查看[ account](../termipass/account/index.md)

## Account Type

你可以使用 DID 或者 Terminus Name 来登录 Terminus Space，但不同的账号形态，在 Terminus Space 中能使用的功能和服务也不尽相同。具体如下：

- **DID 形态**，在此状态下登录 Space，由于你还未绑定 Terminus Name，因此无法创建 Terminus。但你可以设置自己的域名。因为 DID 形态还未绑定任何域名。

- **Terminus Name 形态**，在此状态下登录 Space，理论上你可以创建 Terminus。不过，如果你的 Terminus Name 已经绑定了其它 Terminus，则无法再创建一个新的 Terminus。并且不可以设置自己的域名，因为 Terminus Name 已经绑定了其他的域名。

## Multi-account Management

一个 Terminus Name 只允许绑定一台 Terminus。如果一个用户拥有多个 Terminus Name 和多台 Terminus，那么他就会面临着一个多账号登录的问题。Terminus Space 完美支持多账号的登录与切换。你可以轻松的管理多台 Terminus。

![alt text](/images/how-to/space/import_account.jpg)

如果你需要登录更多的账号，请点击右上角头像，在弹窗的面板上选择「导入账号」，这时会回到扫码登录页面，扫码登录即可。

登录成功后，你可以在下面的面板中选择「切换账号」来切换当前登录中的账号。如果切换的账号登录态失效，那么也将会重新回到扫码登录页面，你需要重新扫码登录。

## Log out

如果你要退出任意账号，请点击右上角头像，在弹窗的面板上选择「切换账号」，在账号列表中点击账号项右侧的退出按钮，即可退出。

![alt text](/images/how-to/space/log_out.jpg)

:::tip
退出账号，仅仅会清除此账号在这个浏览器里的登录记录，不影响账号的数据。
:::
