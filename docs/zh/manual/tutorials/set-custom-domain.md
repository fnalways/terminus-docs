# 如何为 Olares 绑定个人域名

本教程将指导你如何为 Olares 设置自定义域名。完成后，你将拥有一个绑定到 Olares ID 的自定义域名，并可使用该域名来安装和激活 Olares。

## 开始之前

请确保你已满足以下条件：

- 通过合法域名注册商注册自己的域名。
    
  :::tip 注意
  仅支持 eTLD1 或 eTLD2 级别的域名。
  :::

- 已安装 LarePass 手机端应用。

## 步骤 1：创建 DID

只有当账户处于 DID 阶段，即尚未绑定到 Olares ID 时，才能绑定自定义域名。你可以通过以下步骤创建 DID：

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
4. 验证域名的 TXT 记录。 
    <br>a. 在刚添加的域名右侧，点击**引导**。<br>b. 根据弹窗中的提示信息，在 DNS 服务商配置中添加 TXT 记录。  
   ![verify TXT](/images/manual/tutorials/verify-txt.png)
5. 验证域名的 NS 记录以将 DNS 解析委派给 Olares 的 Cloudflare。
    <br>a. 在域名右侧，点击**引导**。<br>b. 按照页面指引，在 DNS 服务商配置中添加对应的 NS 记录。

::: tip 注意 
TXT 记录的验证通常在 30 分钟内完成，NS 记录的验证可能需要长达 2 小时。如果整个过程超过 3 小时，请与 DNS 服务商联系。
:::

当 TXT 和 NS 记录均验证通过后，你的域名即成功添加至 Olares Space，其状态将变更为**等待为该域名申请可验证凭证**。

![domain added](/images/manual/tutorials/domain-added.png)


## 步骤 3：为域名创建组织

在 Olares 中，自定义域需要与组织 Olares ID 绑定。此过程包含创建域名组织以及为域名申请**可验证凭证**。

:::tip 可验证凭证
可验证凭证（Verifiable Credential, 或 VC）是一种数字证明，能在不暴露个人信息的情况下，验证持有者的某些属性或资格。
:::

![Create org](/images/manual/tutorials/create-org.png)

1. 在 LarePass 中创建一个新组织。
  <br>a. 在账号创建页面，点击右上角的高级账户创建按钮.<br>b. 前往**组织 Olares ID** > **创建新组织**，此时应能看到你已验证的域名出现在列表中。<br>c. 点击**继续**提交请求。该过程会持续 10-20 秒。

1. 在 Olares Space 的**域名管理**页面查看该域名状态，状态应变为**等待规则配置**。

至此，你已成功绑定自定义域名，下面将继续配置该域名的使用规则。

## 步骤 4：配置域名邀请规则

通过配置域名规则指定可使用该域名的组织成员。配置方法如下：

![Configure domain rules](/images/manual/tutorials/set-domain-rule.png)

1. 在**域名管理**页面，点击你的域名右侧的**查看**按钮。  
2. 从**域名邀请规则**选项中，选择**指定邮箱地址**，并点击**保存**。  
3. 点击**新增用户**，输入需要访问该域名的成员的 Gmail 地址，如 `justtest193@gmail.com`。  
4. 点击**提交**完成添加。

:::tip 域名邀请规则 
- 域名邀请规则支持**指定邮箱后缀**和**指定邮箱地址**，建议使用后者以快速指定具体用户。
- 邮箱格式支持 Gmail 和 G-suite 格式地址。详情请参考[邮箱邀请规则](../space/manage-domain.md#设置邮箱邀请规则)。
:::

## 步骤 5：为成员创建 Olares ID

要使用绑定的自定义域名，你需要为成员创建在组织下创建 Olares ID。

![Join the org](/images/manual/tutorials/join-org.png)

1. 在 LarePass 应用中，进入**高级账户创建**>**组织 Olares ID** >**加入已有组织**。  
2. 输入绑定的域名后点击**继续**。如果出现错误，请确认域名无误且已在 Olares Space 中设置域名邀请规则。  
3. 为成员添加 VC：
  <br>a. 系统提示时，选择 **Google** 作为 VC 凭证提供方。<br>b. 使用上一步添加的 Gmail 账号登录，并授权 VC 验证操作。

授权成功后，你使用自定义域名创建的 Olares ID（`justtest1953@xxxx.cloud`）将创建完成。此时，在 Olares Space 域名管理页面中，该成员的状态会变为**已验证**。

## 步骤 6：使用 Olares ID 安装并激活 Olares

就快完成了！这一步将使用你刚刚创建的 Olares ID 来安装并激活 Olares。

1. 为安装脚本添加你的域名和用户名（Olares ID 的本地名）的环境变量，然后执行脚本开始安装：
   
   ```bash
   export TERMINUS_OS_DOMAINNAME=xxxx.cloud \
     && export TERMINUS_OS_USERNAME=justtest1953 \
     && curl -sSfL https://olares.sh | bash -
    ```

2. 等待安装完成。安装时间取决于你的网络情况，通常会持续 20-30 分钟。完成后，你会看到以下信息：

    ```bash
    2024-12-17T21:00:58.086+0800        Olares is running at:
    2024-12-17T21:00:58.086+0800        http://192.168.1.16:30180

    2024-12-17T21:00:58.086+0800        Open your browser and visit the above address
    2024-12-17T21:00:58.086+0800        with the following credentials:

    2024-12-17T21:00:58.086+0800        Username: justtest1953
    2024-12-17T21:00:58.086+0800        Password: 2uO5PZ2X
    ```

3. 使用提供的 URL 访问 Olares 激活向导页面并根据提示完成激活。详细操作可查看[激活 Olares](../get-started/install-olares-general-linux.md#激活-olares)。

恭喜，你已经成功将自定义域名的绑定至 Olares。

## 了解更多

- [Olares 账户](../concepts/account.md)
- [安装 Olares](../get-started/install-olares.md)
- [设置域名规则](../space/manage-domain.md)