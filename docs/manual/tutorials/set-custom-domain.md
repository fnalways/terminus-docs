---
outline: [2, 3]
---

# Set up a custom domain for your Olares 

This tutorial walks you through setting up your own domain for your Olares. By the end, you’ll have a custom domain bound to Olares ID and be able to install and activate Olares with it.

## Before you begin

Ensure you have:
- Your own domain registered through a domain registrar. 

  :::tip Note
  Only eTLD1 or eTLD2 domains are supported.
  :::
- LarePass app installed on your phone.

## Step 1: Create a DID

You can only bind a custom domain to the account when it is in the DID stage (not yet bound to an Olares ID). To create a DID:

![create DID](/images/manual/tutorials/create-did.png)
1. In LarePass app, go to the account creation page.
2. Tap **Create an account** to trigger a DID creation. 

This gets you an Olares account in the DID stage. 


## Step 2: Add your domain to Olares Space
Add and verify your own domain in Olares Space before binding it.

1. In your browser, access Olares Space at https://space.olares.xyz/.
2. In LarePass app, click the scan button in the top-right corner, and scan the QR code on the login page to log in to Olares Space.   
3. In Olares Space, go to **Domain management** > **Domain name setup**, enter your domain and click **Confirm**.
  ![add domain](/images/manual/tutorials/add-domain.png)
4. Verify your TXT record for your domain.
    <br>a. Click the **Guide** button next to the added domain. 
    <br>b. Follow the on-screen instructions on the pop-up window to add a TXT record to your DNS provider configuration.
    ![verify TXT](/images/manual/tutorials/verify-txt.png)
5. Verify the NS Record for your domain. This delegates the DNS resolution for your domain to Olares’s Cloudflare.
    <br>a. Click the **Guide** button next to the domain.
    <br>b. Follow the on-screen instructions to add the NS record to your DNS provider configuration.

:::tip Note
TXT verification typically completes within 30 minutes. NS record verification may take up to 2 hours. If the whole process exceeds 3 hours, check with your DNS provider.
:::

Once TXT and NS records are verified, your domain is successfully added to Olares Space. The status will change to **Awaiting the application for the domain's Verifiable Credential**. 
![domain added](/images/manual/tutorials/domain-added.png)

## Step 3: Create an org for the domain

In Olares, a custom domain is bound with an organization before the members can use it. This process involves creating an org and applying for the Verifiable Credential (VC) of the domain.

::: tip Verifiable Credential
A Verifiable Credential is a digital format proof that verifies certain attributes or qualifications of its holder without revealing additional personal information. 
:::

![Create org](/images/manual/tutorials/create-org.png)

1. Create a new organization in LarePass app.
    <br>a. On the account creation page, tap the advanced account creation button in the top-right corner.
    <br>b. Go to **Organization Olares ID** > **Create a new organization**. Your verified domain should appear in the list.
    <br>c. Click **Continue** to submit the request. Wait approximately 10–20 seconds for the request to be processed. 
2. On Olares Space, navigate to the **Domain management** page. The domain setup status should change to **Awaiting rule configuration**.

So far, you have successfully bound your custom domain, and is set for configuring the domain rules in Olares Space.

## Step 4: Configure domain invitation rules

The domain rules specify the members of the organization who will use the domain. To configure domain invitation rules:

![Configure domain rules](/images/manual/tutorials/set-domain-rule.png)

1. In **Olares Space** > **Domain Management**, click the **View** button next to your domain.
2. Under **Domain Invitation Rule**, select **Specified email address**, and click **Save**. 
3. Click **Add New User** and enter the Gmail address of each member who needs access, for example, `justtest193@gmail.com`.
4.  Click **Submit** to finalize each addition.

:::tip Note
- Currently, the invitation rules support **Fixed email suffix** and **Specified email address**. We recommend the latter to easily add a specific member.
- Both Gmail and G-suite mail addresses are supported. Learn more in [Manage your domain](.././space/manage-domain.md#set-email-invitation-rules).
:::

## Step 5: Create an Olares ID for the member

To use the domain, create an Olares ID for the member by joining the created organization.

![Join the org](/images/manual/tutorials/join-org.png)

1. In the LarePass app, go to **Advanced Account Creation** > **Organization Olares ID** > **Join an existing organization**.
2. Type the org domain name (the verified custom domain) and click **Continue**. If you see an error, verify if the domain name is correct and the domain rules are set properly in Olares Space.
3. Add a VC for the member.
  <br>a. When prompted, select Google as your VC credential provider.
  <br>b. Log in with the Gmail account you added in the previous step and grant access for VC.  
 
 After successful authorization, your Olares ID with the custom domain, `justtest1953@xxxx.cloud`, is successfully created. The member status on the **Domain management** page becomes **Verified**.

## Step 6: Install & activate Olares
Almost there! Now you are all set to install and activate Olares using the customized Olares ID.

1. Update the installation script with the environment variables of your own domain and local name, and execute it to start the installation:
    
    ```bash
    export TERMINUS_OS_DOMAINNAME=xxxx.cloud \
      && export TERMINUS_OS_USERNAME=justtest1953 \ 
      && curl -sSfL https://olares.sh | bash -
    ```

2. Wait for the installation to finish.  Depending on your network, the process can take 20–30 minutes. When the installation completes, you will see the prompt like below:

    ```bash
    2024-12-17T21:00:58.086+0800        Olares is running at:
    2024-12-17T21:00:58.086+0800        http://192.168.1.16:30180

    2024-12-17T21:00:58.086+0800        Open your browser and visit the above address
    2024-12-17T21:00:58.086+0800        with the following credentials:

    2024-12-17T21:00:58.086+0800        Username: justtest1953
    2024-12-17T21:00:58.086+0800        Password: 2uO5PZ2X
    ```

3. Open the Olares activation wizard in your browser using the given URL, and follow the on-screen instructions to finalize Olares activation. Learn more in [Activate Olares](../get-started/install-olares-general-linux.md#activate-olares).

Congratulations! Your custom domain is now ready to be used with Olares.

## Learn more

- [Olares account](../concepts/account.md)
- [Install Olares](../get-started/install-olares.md)
- [Configure domain rules](../space/manage-domain.md)