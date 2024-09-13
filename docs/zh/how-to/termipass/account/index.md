---
outline: [2, 4]
---

# 使用 TermiPass 管理账户

TermiPass 的主要功能之一是管理 Terminus 账户。如果你刚开始使用 Terminus，可以先创建一个 Terminus Name。本文档将介绍如何创建账户以及其他常见操作。

## 创建 Terminus Name

在开始前，请确保你的手机上已安装 [TermiPass](../overview.md#download-termipass) 应用。你可以选择新建 Terminus Name 或者导入已有的 Terminus Name。

![创建 Terminus Name](/images/how-to/termipass/create_an_account.png)

打开 TermiPass 应用，点击 **创建 Terminus Name** 设置你的 Terminus 账户。创建之前，你可以根据需求选择是否绑定可验证凭证（VC）。

### 默认模式（不绑定 VC）

如果不绑定 VC，你可以快速创建 Terminus Name：

1. 输入你想要的 Terminus Name。名称至少需要 8 个字符，且只能包含小写字母和数字。
2. 点击 **继续** 完成创建。

![快速创建](/images/how-to/termipass/individual_terminus_name_fast.png)

获取你的 Terminus Name 后，等待 [Terminus 安装](../../terminus/setup/install/) 完成，进行[激活](../../terminus/setup/wizard.md)操作。

### 高级模式（绑定 VC）

如果你想创建一个独一无二的 Terminus Name，可以在高级模式下通过社交账户绑定 VC。这样，你的 Terminus Name 将与你的社交账户名称相同：

1. 在 TermiPass 应用中，点击 **创建 Terminus Name**。
2. 在创建页面，点击右上角的按钮。

![高级模式](/images/how-to/termipass/terminus_name_advanced.png)

根据你的需求，你可以选择为个人账户或组织账户绑定 Terminus Name。

#### 绑定个人 Terminus Name

目前我们通过 Google Gmail 提供 VC 服务。具体信息请查看 [Gmail 发行者服务](../../../developer/contribute/snowinning/terminus-name.md#gmail-发行者服务)。使用 Gmail VC 创建个人 Terminus Name 的步骤如下：

![Terminus Name VC](/images/how-to/termipass/individual_terminus_name_vc.png)

1. 点击 VC 卡，登录你的 Google 账户。
2. 登录后在 TermiPass 点击 **继续**。
3. 绑定完成后，再次点击 **继续** 查看你的 Terminus Name。

:::info
如果绑定时遇到问题，请检查你的账户是否已绑有 Terminus Name。
:::

#### 绑定组织 Terminus Name

绑定 **组织 Terminus Name** 的步骤如下：

1. 选择加入已有的组织或创建新组织：
   - 如果你的组织还未创建，扫描二维码登录 Terminus Space 并[绑定自定义域名](https://docs.jointerminus.com/how-to/space/domain/#using-a-custom-domain-with-terminus)。
   - 如果组织已有认证的域名，可以直接加入。

   ![组织 Terminus Name](/images/how-to/termipass/organization_terminus_name.png)


2. 输入组织的域名并点击 **继续**。如果出错，请检查域名是否已经被验证和配置。

3. 绑定组织邮箱。目前支持 Gmail 和 Google Workspace 邮箱。绑定过程与绑定个人 Terminus Name 类似。

完成以上步骤后，你将获得一个 **组织 Terminus Name**。

## 导入现有账户

你也可以通过导入已有的 Terminus Name 来设置账户：

1. 在 TermiPass 应用中，点击 **导入 Terminus Name**。
2. 输入 12 个单词的助记词来导入你的 Terminus Name。

::: tip
如果你的账户已绑定 Terminus Name，可以随意将其导入任何 TermiPass 设备。
:::

## 备份助记词

在去中心化的账户系统中，助记词是你找回 DID 和 Terminus Name 的**唯一**方式。**务必确保安全保管你的 Terminus Name 助记词！**

:::info
每个 TermiPass 都会保存你导入的所有 Terminus Name 助记词。这些助记词由手机设备安全存储。通常，只有在你丢失了所有安装了 Terminus 的设备时，才会丢失助记词。
:::

备份你的助记词：

![alt text](/images/how-to/termipass/mnemonic_phrase.png)

1. 输入你的 TermiPass 本地密码并点击**导出助记词短语**。TermiPass 将显示 12个单词构成的助记词。
2. 请手动记录这些助记词，并将其存放在安全的地方。
3. 在下一页按正确顺序输入助记词。如果输入正确，即表示助记词备份成功。

:::warning
点击**复制**按钮会将助记词复制到剪贴板，但这可能存在安全风险。为了更安全地保管助记词，我们强烈建议进行**离线**备份。
:::

## 账户的阶段

从创建 Terminus 账户，到绑定并激活 Terminus，会经历三个阶段：

1. **未绑定 Terminus Name**

   - 账户已在本地通过助记词、私钥和 DID 创建，但尚未绑定 Terminus Name。
   - 助记词可被导出和备份。
   - 可登录 **Terminus Space** 申请组织域名。
   - 不能通过助记词将账户导入至其他 TermiPass 客户端。

2. **已绑定 Terminus Name**

   - Terminus Name 与 DID 的对应关系已在区块链上记录。
   - 可在**Terminus Space**申请并激活 Terminus。
   - 助记词一旦导出，便可在其他设备上的 TermiPass 中导入。

3. **已绑定 Terminus**

   绑定并激活 Terminus 后，便可以完全访问 TermiPass 上的所有功能。

## 账户同步

TermiPass、Terminus 和 Terminus Space 中的账户保持同步，具体如下：

- 创建 Terminus 时，你需要提供 Terminus Name，并使用已登录该 Terminus Name 的 TermiPass 进行激活。详见[激活向导](../../terminus/setup/wizard.md)。
- 要登录 Terminus Space，你需要用 TermiPass 扫描显示的二维码。详见[登录 Terminus Space](../../space/account.md)。
