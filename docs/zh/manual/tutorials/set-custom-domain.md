# 如何为 Olares 绑定个人域名

默认情况下，当您在 LarePass 中创建账户时，你将获得一个带有 `olares.com` 域名的 Olares ID。这意味着你可以通过类似 `desktop.{your-username}.olares.com` 的 URL 访问 Olares 服务。虽然这种默认设置让你免去了常见的网络和域名配置麻烦，但你可能希望获得更多个性化的设置，例如使用包含自定义域名的 Olares ID。

本教程将引导您为你的 Olares 设置个人域名。

::: tip 提示
在 Olares 中，自定义域名需与一个组织实体关联，即成为组织域名。要使用自定义域名，需以成员身份加入组织，并在组织域名下申请 Olares ID。
:::

## 目标

在本教程中，你将学习如何：
  •	创建一个组织并将个人域名与之绑定
  •	在组织域名下申请您的 Olares ID
  •	使用您的 Olares ID 安装并激活 Olares

## 开始之前

请确保你已满足以下条件：

- 通过合法域名注册商注册自己的域名。
    
  :::tip 注意
  仅支持 eTLD1 或 eTLD2 级别的有效顶级域名（Effective Top Level Domain, 即 eTLD）。
  :::

- 已安装 LarePass 手机端应用，用于登陆 Olares Space，以及将域名绑定至 Olares ID 的操作。

## 步骤 1：创建 DID

DID（去中心化标识符）是在获得 Olares ID 之前的临时账户状态。只有在账户处于 DID 阶段时，才能绑定自定义域名。要创建一个 DID： 

![create DID](/images/manual/tutorials/create-did.png)
1. 在 LarePass 应用中，进入账号创建页面。  
2. 点击**创建账号**以触发 DID 的创建。  

执行上述操作后，你将获得一个处于 DID 阶段的 Olares 账户。

## 步骤 2：将自定义域名添加到 Olares Space

在绑定自定义域名前，需要先在 Olares Space 中添加并验证该域名。

1. 在浏览器中访问 [https://space.olares.xyz/](https://space.olares.xyz/)。  
2. 在 LarePass 应用的右上角点击扫码按钮，扫描页面上的二维码以登录 Olares Space。  
3. 在 Olares Space 中转到**域名管理**>**域名设置**，输入你的域名并点击**确认**。  
    ![add domain](/images/manual/tutorials/add-domain.png)
4. 验证域名的 TXT 记录。此操作会验证你对域名的所有权。
    <br>a. 在操作列中，点击**引导**。
    <br>b. 根据弹窗中的提示信息，在 DNS 服务商配置中添加 TXT 记录。  
   ![verify TXT](/images/manual/tutorials/verify-txt.png)
5. 验证域名的名称服务器（NS）记录。这将把你个人域名的 DNS 解析委托给 Olares 的 Cloudflare。
    <br>a. 在操作列中，点击**引导**。
    <br>b. 按照页面指引，在 DNS 服务商配置中添加对应的 NS 记录。

::: tip 注意 
TXT 记录的验证通常在 30 分钟内完成，NS 记录的验证可能需要长达 2 小时。如果整个过程超过 3 小时，请与 DNS 服务商联系。
:::

当 TXT 和 NS 记录均验证通过后，你的域名即成功添加至 Olares Space，其状态将变更为**等待为该域名申请可验证凭证**。

![domain added](/images/manual/tutorials/domain-added.png)


## 步骤 3：为域名创建组织

此步骤为域创建一个组织。具体来说，它将您的域绑定到 Olares 中的一个组织，并为该组织请求可验证凭证（VC）。

:::tip 可验证凭证
可验证凭证是一种数字格式的证明，用于验证其持有者的某些属性或资格，同时不透露额外的个人信息。
:::

![Create org](/images/manual/tutorials/create-org.png)

1. 在 LarePass 中创建一个新组织。
  <br>a. 在账户创建页面，点击右上角的 <i class="material-icons">display_settings</i>按钮以进入**高级账户创建**页面。
  <br>b. 前往**组织 Olares ID**>**创建新组织**，你的域名对应的组织将自动显示在列表中。
  <br>c. 点击组织名称以申请 VC。完成后，您将看到你的域名等待确认。
  <br>d. 点击**确认**以完成在 LarePass 中的组织域名绑定。
  ![Bind org](/images/manual/tutorials/bind-domain-with-org.png)

2. 在 Olares Space 的**域名管理**页面查看该域名状态，状态应变为**等待规则配置**。

至此，你已成功将自定义域名绑定至组织，下面将继续配置该域名的使用规则。

## 步骤 4：配置域名规则

域名规则指定了如何为组织添加成员。只有组织中的成员才能在组织域名下申请 Olares ID。要配置域名规则：

![Configure domain rules](/images/manual/tutorials/set-domain-rule.png)

1. 在**域名管理**页面，点击你的域名右侧的**查看**按钮。  
2. 从**域名邀请规则**选项中，选择**指定邮箱地址**，并点击**保存**。  
3. 点击**新增用户**，输入需要访问该域名的成员的 Gmail 地址，如 `justtest193@gmail.com`。  
4. 点击**提交**完成添加。

:::tip 域名邀请规则 
- 邀请规则支持**固定邮箱后缀**和**指定邮箱地址**。**固定邮箱后缀**适用于拥有统一邮箱后缀（ `@company.com`）的企业用户。我们推荐**指定邮箱地址**,可以灵活方便地添加个人成员。
- 目前，**指定邮箱地址**的方式仅支持 Gmail 地址。
:::

## 步骤 5：为成员创建 Olares ID

要使用绑定的自定义域名，你需要为成员创建在组织下创建 Olares ID。

1. 在 LarePass 的账户创建页面，点击右上角的 <i class="material-icons">display_settings</i>按钮以进入**高级账户创建**页面。 进入**高级账户创建**>。
2. 进入**组织 Olares ID** >**加入已有组织**。  
3. 输入绑定的域名后点击**继续**。如果出现错误，请确认域名无误且已在 Olares Space 中设置域名邀请规则。  
4. 为成员添加 VC：
  <br>a. 系统提示时，选择 **Google** 作为 VC 凭证提供方。
  <br>b. 使用上一步添加的 Gmail 账号登录，并授权 VC 验证操作。

  ![Join the org](/images/manual/tutorials/join-org.png)

授权成功后，带有自定义域名的成员 Olares ID（`justtest1953@xxxx.cloud`）创建完成。

## 步骤 6：使用 Olares ID 安装并激活 Olares

就快完成了！这一步将使用你刚刚创建的 Olares ID 来安装并激活 Olares。

1. 使用带有指定环境变量的安装脚本安装 Olares：
   
   ```bash
   export TERMINUS_OS_DOMAINNAME=xxxx.cloud \
     && export TERMINUS_OS_USERNAME=justtest1953 \
     && curl -sSfL https://olares.sh | bash -
    ```
   
  - `export TERMINUS_OS_DOMAINNAME=xxxx.cloud`：指定你已绑定的自定义域名。
  - `export TERMINUS_OS_USERNAME=justtest1953`：指定你的用户名（本地名称）。


2. 等待安装完成。安装时间取决于你的网络情况，通常会持续 20-30 分钟。完成后，你会看到激活引导页访问网址以及初始登陆凭证：

    ```bash
    2024-12-17T21:00:58.086+0800        Olares is running at:
    2024-12-17T21:00:58.086+0800        http://192.168.1.16:30180

    2024-12-17T21:00:58.086+0800        Open your browser and visit the above address
    2024-12-17T21:00:58.086+0800        with the following credentials:

    2024-12-17T21:00:58.086+0800        Username: justtest1953
    2024-12-17T21:00:58.086+0800        Password: 2uO5PZ2X
    ```

3. 使用提供的 URL 访问 Olares 激活向导页面并根据提示完成激活。详细操作可查看[激活 Olares](../get-started/install-olares-general-linux.md#激活-olares)。

恭喜，你已经成功将自定义域名的绑定至 Olares。你可以使用类似 `desktop.justtest1953.xxxx.cloud` 的域名访问 Olares 及其应用。

## 了解更多

- [Olares 账户](../concepts/account.md)
- [安装 Olares](../get-started/install-olares.md)
- [设置域名规则](../space/manage-domain.md)