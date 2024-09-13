---
outline: [2, 4]
---

# Account

当你首次使用 TermiPass 时，可以直接尝试 [Create Terminus Name](#create-terminus-name)

在使用一段时间后，你可以尝试了解：

- [Account 账号的状态](#stage-of-account)
- [Terminus Name 是同步的](#account-同步)

## Create Terminus Name

以下是申请 Terminus Name 的流程：

1. [下载手机版 TermiPass](../overview.md#download)
2. [设置本地密码](#setup-local-password)
3. [创建本地账户](#create-an-account)，对第一次使用 Terminus 的用户，选择"Create“而不是 ”Import“
4. [申请 Terminus Name](#bind-terminus-name)

### Setup Local Password

![alt text](/images/how-to/termipass/setup_local_password.png)

首次运行，需要设置一个 TermiPass 的本机解锁密码。

#### Setup Password

为了保证密码的健壮与安全，我们的密码规则如下：

- 长度 8-32 个字符
- 包含小写字母
- 包含大写字母
- 包含数字
- 包含符号

如果你输入了不符合规则的密码，将无法完成密码设置步骤。

:::tip

- 这个 TermiPass 下所有的 Terminus Name 都共享一个解锁密码
- 不同设备安装的 TermiPass 的解锁密码是存储在本地，并互相独立的
  :::

#### Biometric Unlock

设置完成之后，可以选择开启生物特征解锁，以使用人脸、指纹等更安全便捷的解锁方式。

如果你在这里选择不开启生物特征解锁，后续你还可以在 TermiPass 的设置 中随时开启或关闭。

### New an account

![alt text](/images/how-to/termipass/new_an_account.png)

#### Create an account

点击「Create a Terminus Name」 开始创建账号。

点击之后将先生成 DID，再完成 [绑定 Terminus Name](#bind-terminus-name) 。

#### Import an account

点击「Import a Terminus Name」进行导入账号。

请输入 12 个助记词，来完成账号导入。

请注意以下几种情况：

1. 如果你输入错误的助记词，无法进行导入操作

2. 如果你输入的助记词对应的账号还没有绑定 Terminus Name，它无法导入到 TermiPass 客户端。

3. 如果你输入的助记词对应的账号已经绑定 Terminus Name，那么它可以导入到任意 TermiPass 客户端。

### Bind Terminus Name

![alt text](/images/how-to/termipass/choose_terminus_name_type.png)

如果你是个人用户，点击 Individual Terminus Name，来绑定一个仅供个人使用的 Terminus Name。

如果你是组织用户，不管你是否管理员，请都点击 Organization Terminus Name 来绑定一个组织的 Terminus Name。

#### Individual Terminus Name

![alt text](/images/how-to/termipass/individual_terminus_name.png)

如果你是个人用户，那么通常你将选择绑定个人 VC 来创建成为一个个人的 Terminus Name

我们提供了 Google Gmail VC 验证方式。详细的技术方案请参考：[Gmail 发行者服务](../../../developer/contribute/snowinning/terminus-name.md)

1. 点击 VC 卡片后，将调起 Google 账号界面
2. 选择要绑定的账号

   a. 如果你的账号已经登录，则可以直接在这里选择要绑定的账号

   b. 如果你需要绑定新的账号，则选择再添加一个账号。添加完成之后，将回到 Google 账号界面，你可以选择要绑定的账号

3. 点击之后将提示你将使用 Google 账号登录 TermiPass，请点击「继续」
4. 等待绑定成功，在绑定成功的页面，点击「继续」
5. 进入 Terminus Name 落地页

如果绑定过程中，提示错误信息，请检查你的账号是否已经绑定过 Terminus Name，如果确认未曾绑定但还是无法完成绑定操作，请联系我们。

当你看到以上界面的时候，请等待 [ Terminus 设备的安装](../../terminus/setup/install/index.md) 完成，以继续完成 [激活流程](../../terminus/setup/wizard.md) 即可。

#### Organization Terminus Name

![alt text](/images/how-to/termipass/organization_terminus_name.png)

绑定 Organization Terminus Name 需要以下几步骤：

1. 你将看到一个有关 Organization Terminus Name 说明页面，请认真阅读后，点击「Got it」继续

2. 请选择加入已有组织，或者创建一个新组织

   a. 如果你的组织还没有完成创建，请扫码登录 Terminus Space 以完成[创建 Domain](../../space/domain/host-domain.md)

   b. 如果你的组织已经创建了组织域名并完成验证和配置流程，请选择加入已有组织。

3. 输入组织的域名，点击「继续」，请确认你的组织域名。如果输入的域名尚未完成验证和配置流程，则会报错，无法继续。如果你不慎输入了其它组织的域名，请返回此页面，确认域名的正确性。

4. 绑定你的组织邮箱。目前我们仅支持 Gmail 或 Google Workspace 的邮箱地址。绑定流程 请参考 Individual Terminus Name 的[Google 验证流程](#individual-terminus-name)

5. 绑定完成，你将获得一个组织 Terminus Name。

### Backup Mnemonic Phrase

请你务必了解，在去中心化账号的系统中，助记词是你找回 DID/Terminus Name 的唯一方式。请务必妥善保管你的 Terminus Name 的助记词。

如果忘记了助记词，你将会丢失 DID/Terminus Name ，以及 Vault 里存储的数据控制权。我们强烈建议你采用离线的方式备份助记词。

提醒：目前，Terminus Name 的助记词会保存在所有已导入的 TermiPass 上，助记词是由手机的秘钥存储，一般情况下，你只有在同时丢失所有装有 TermiPass 的手机和电脑后，才会丢失助记词。

#### Standardize Process

![alt text](/images/how-to/termipass/mnemonic_phrase.png)

备份助记词时，我们有一个规范流程，如下：

- 第一步，输入密码，在此页面上，单击最底部的「Export Mnemonic Phrase」进入备份助记词界面。你需要输入 TermiPass 的本机解锁密码后才能查看到助记词。

- 第二步，把助记词抄到纸上，妥善保存它。

:::warning
单击「Copy」 按钮会将 12 个助记词保存到剪切板。请妥善保存助记词。我们强烈建议你采用离线的方式备份助记词。
:::

- 第三步，在页面上按完整的顺序填入 12 个单词。如填写正确，则代表你已经成功备份了助记词。

## Stage Of Account

TermiPass 通过 [一个本地的密码](#setup-local-password)，让用户可以同时管理多个`Account`，不同 `Account` 是互相独立的。每个 `Account` 有三个阶段：

![account](/images/how-to/termipass/account.png)

1. 没绑定 Terminus Name，用户在 TermiPass 选择 [Create an Account](#create-an-account) 后，就生成了一个 Account，它还没有绑定 Terminus Name，有以下几个特点：
   1. 账户是本地创建的，有助记词，私钥和 DID，但没有 Terminus Name
   2. 可以导出助记词
   3. 可以用来登录 Terminus Space（在申请企业域名时会用到）
   4. 输入助记词也无法导入 TermiPass，参考 [Import an Account](#import-an-account)
2. 绑定了 Terminus Name，不管是申请了 Individual 还是 Organization 的 Terminus Name
   1. Terminus Name 和 DID 的映射关系被记录在了区块链上
   2. 用户可以使用这个 Terminus Name 申请和激活 Terminus
   3. 助记词被导出后，可以导入到其它设备上的 TermiPass 中，参考 [Import an Account](#import-an-account)
3. 绑定过 Terminus
   - 绑定了 Terminus即可正常进入 TermiPass 首页，正常使用 TermiPass 的各项功能。
## Account 同步

TermiPass 和 Terminus，Terminus Space 是如何保持一致的呢？

- Terminus 在创建的时候需要输入 Terminus Name，之后需要使用用友该 Terminus Name 的 TermiPass 进行激活。[了解更多](../../terminus/setup/wizard.md)
- Terminus Space 的账户，通过 TermiPass 扫码 [登录 Terminus Space](../../space/account.md)
