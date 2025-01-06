---
outline: [2, 3]
---

# Set up a custom domain for your Olares 

By default, when you create an account in LarePass, you get an Olares ID with the `olares.com` domain. This means you access your Olares services through URLs like `desktop.{your-username}.olares.com`. While this default setup saves you from common network and domain configuration hassles, you might want more personalization, for example, an Olares ID with your custom domain. 

This tutorial walks you through setting up your own domain for your Olares. 

::: tip Note
In Olares, a custom domain is associated with an organization. This makes it an organization domain. To use the domain, you must join the organization as a member, and apply for an Olares ID under the organization domain.
:::

## Objectives
In this tutorial, you will learn how to:
- Create a organization and bind your domain with it
- Apply for your Olares ID under the organization domain 
- Install and activate Olares with your Olares ID 


## Before you begin

Ensure you have:
- Your own domain registered through a domain registrar. 

  :::tip Note
  Effective top level domains (eTLD)，inlcuding eTLD1 and eTLD2, are supported.
  :::
- LarePass app installed on your phone. LarePass will be used later to sign in to Olares Space, and to bind your custom domain to Olares ID.

## Step 1: Create a DID

A DID (Decentralized Identifier) is a temporary account state before you get your final Olares ID. You can only bind a custom domain to the account when it is in the DID stage. To create one:

![create DID](/images/manual/tutorials/create-did.png)
1. In LarePass app, go to the account creation page.
2. Tap **Create an account** to trigger a DID creation. 

This gets you an Olares account in the DID stage. 

## Step 2: Add your domain to Olares Space
Add and verify your own domain in Olares Space before binding it.

1. In your browser, access Olares Space at https://space.olares.xyz/.
2. In LarePass app, click the scan button in the top-right corner, and scan the QR code on the login page to log in to Olares Space.
  ![scan QR](/images/manual/tutorials/scan-qr.png)
3. In Olares Space, go to **Domain Management** > **Domain Name Setup**, enter your domain and click **Confirm**.
  ![add domain](/images/manual/tutorials/add-domain.png)
4. Verify your TXT record for your domain. This verifies your ownership of the domain.
    <br>a. Click **Guide** in the **Action** column. 
    <br>b. Follow the on-screen instructions on the pop-up window to add a TXT record to your DNS provider configuration.
    ![verify TXT](/images/manual/tutorials/verify-txt.png)
5. Verify the Name Server (NS) Record for your domain. This delegates the DNS resolution for your domain to Olares’s Cloudflare.
    <br>a. Click **Guide** in the **Action** column.
    <br>b. Follow the on-screen instructions to add the NS record to your DNS provider configuration.

:::tip Note
TXT verification typically completes within 30 minutes. NS record verification may take up to 2 hours. If the whole process exceeds 3 hours, check with your DNS provider.
:::

Once TXT and NS records are verified, your domain is successfully added to Olares Space. The status will change to **Awaiting the application for the domain's Verifiable Credential**. 
![domain added](/images/manual/tutorials/domain-added.png)

## Step 3: Create an org for the domain

This step creates an organization for the domain. Specifically, it binds your domain to an organization in Olares and requests the Verifiable Credential (VC) for the domain.

::: tip Verifiable Credential
A Verifiable Credential is a digital format proof that verifies certain attributes or qualifications of its holder without revealing additional personal information. 
:::

![Create org](/images/manual/tutorials/create-org.png)

1. Create a new organization in LarePass app.
    <br>a. On the account creation page, tap <i class="material-icons">display_settings</i> in the top-right corner to go to the **Advanced account creation** page.
    <br>b. Go to **Organization Olares ID** > **Create a new organization**. The organization for your domain will automatically show in the list. 
    <br>c. Tap the organization name to apply for the VC. When it's done, you will see your domain name for confirmation.
    <br>c. Click **Confirm** to finish the organization domain binding in LarePass.
    ![Bind org](/images/manual/tutorials/bind-domain-with-org.png)
2. On Olares Space, navigate to the **Domain management** page. The domain setup status should change to **Awaiting rule configuration**.

So far, you have successfully bound your custom domain with an organization, and is set for configuring the domain rules in Olares Space.

## Step 4: Configure domain rules

The domain rules specify how you add the members for the organization. Only members in the organization can apply for Olares ID under the organization domain. To configure domain rules:

![Configure domain rules](/images/manual/tutorials/set-domain-rule.png)

1. In Olares Space, go to **Domain management**, and click **View** next to your domain.
2. Under **Domain Invitation Rule**, select **Specified email address**, and click **Save**. 
3. Click **Add New User** and enter the Gmail address for the member. For example, `justtest193@gmail.com`.
4. Click **Submit** to finalize the member addition. Repeat step 3 and step 4 if you want to add multiple users.

:::tip Note
- The invitation rules support **Fixed email suffix** and **Specified email address**. Fixed email suffix is designed for corporation users with a unified email suffix (`@company.com`). We recommend **Specified email address** for its flexibility in adding a specific member.
- Currently, only Gmail is supported for **Specified email address**.
:::

## Step 5: Create an Olares ID for the member

To use the domain, apply for an Olares ID for the member under the organization.

1. On the account creation page of LarePass app, tap <i class="material-icons">display_settings</i> in the top-right corner to go to the **Advanced account creation** page.
2. Go to **Advanced Account Creation** > **Organization Olares ID** > **Join an existing organization**.
3. Type the org domain name (the verified custom domain) and click **Continue**. If you see an error, verify if the domain name is correct and the domain rules are set properly in Olares Space.
4. Add a VC for the member.
  <br>a. When prompted, select Google as your VC credential provider.
  <br>b. Log in with the Gmail account you added in the previous step and grant access for VC.  
 
  ![Join the org](/images/manual/tutorials/join-org.png)

 After successful authorization, an Olares ID with the custom domain, `justtest1953@xxxx.cloud`, is successfully created for the member. 

## Step 6: Install and activate Olares
Almost there! Now you are all set to install and activate Olares using the customized Olares ID.

1. Use the installation script with specified environment variables to start the installation:
    
    ```bash
    export TERMINUS_OS_DOMAINNAME=xxxx.cloud \
      && export TERMINUS_OS_USERNAME=justtest1953 \ 
      && curl -sSfL https://olares.sh | bash -
    ```
  - `export TERMINUS_OS_DOMAINNAME=xxxx.cloud`: Specify your custom domain.
  - `export TERMINUS_OS_USERNAME=justtest1953`: Specify your username (local name).
2. Wait for the installation to finish. Depending on your network, the process can take 20–30 minutes. When the installation completes, you will see the wizard URL and login credentials:

    ```bash
    2024-12-17T21:00:58.086+0800        Olares is running at:
    2024-12-17T21:00:58.086+0800        http://192.168.1.16:30180

    2024-12-17T21:00:58.086+0800        Open your browser and visit the above address
    2024-12-17T21:00:58.086+0800        with the following credentials:

    2024-12-17T21:00:58.086+0800        Username: justtest1953
    2024-12-17T21:00:58.086+0800        Password: 2uO5PZ2X
    ```

3. Open the Olares activation wizard in your browser using the given URL, and follow the on-screen instructions to finalize Olares activation. Learn more in [Activate Olares](../get-started/install-olares-general-linux.md#activate-olares). 

Congratulations! Your custom domain is now ready to be used with Olares. Now you can access Olares with a custom domain like `desktop.justtest1953.xxxx.cloud`.

## Learn more

- [Olares account](../concepts/account.md)
- [Install Olares](../get-started/install-olares.md)
- [Configure domain rules](../space/manage-domain.md)