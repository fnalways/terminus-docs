---
outline: [2, 4]
---

# Account

If you are new to TermiPass and Terminus, you can begin with [Create Terminus Name](#create-terminus-name).

Then, you can explore additional topics such as:

- [The stage of an Account](#stage-of-account)
- [Terminus Name synchronization](#account-synchronization)

## Create Terminus Name

Here are the steps to apply for a Terminus Name:

1. [Download the mobile version of TermiPass](../overview.md#download).
2. [Set up a local password](#setup-local-password).
3. [Create a local account](#create-an-account). If you're a first-time user of Terminus, select **Create** instead of **Import**.
4. [Apply for a Terminus Name](#bind-terminus-name).

### Setup Local Password

When starting TermiPass for the first time, you need to set a local unlock password.

![alt text](/images/how-to/termipass/setup_local_password.png)

#### Setup Password

For the robustness and security of your password, please adhere to the following rules:
- Length of 8-32 characters
- Contains lowercase letters
- Contains uppercase letters
- Contains numbers
- Contains symbols

If your password does not comply with these rules, you will be unable to complete the setup process.

:::tip
- All Terminus Names under one TermiPass share the same unlock password.
- Unlocked passwords for TermiPass on different devices are stored locally, making them independent of each other.
:::

#### Biometric Unlocking

After setting up, you can choose to enable biometric unlocking, which can include facial recognition, fingerprint scanning, or other secure and convenient methods.

You can always activate or deactivate it later via the settings in TermiPass.

### Create a new account

![alt text](/images/how-to/termipass/new_an_account.png)

#### Create an account

Click on **Create a Terminus Name** to start creating an account.<br>
After clicking, a DID will be created. Next, you need to [bind your DID to a Terminus Name](#bind-terminus-name.md).

#### Import an account

Click on **Import a Terminus Name** then enter the 12 mnemonic words to import your account.

:::tip
- If you enter incorrect mnemonic words, the import operation cannot proceed.
- An account that has not yet bound a Terminus Name cannot be imported into the TermiPass.
- An account that has already bound a Terminus Name can be imported into any TermiPass.
:::

### Bind Terminus Name

![alt text](/images/how-to/termipass/choose_terminus_name_type.png)

If you're an individual user, select **Individual Terminus Name** to bind a Terminus Name for personal use.

If you're using Terminus within an organization, select **Organization Terminus Name**, regardless of whether you're an administrator or a member.

#### Individual Terminus Name

![alt text](/images/how-to/termipass/individual_terminus_name.png)

If you're using Terminus for personal purposes, you'll need to bind a personal VC to create an individual Terminus Name.

We provide Google Gmail VC method. For details, please refer to [Gmail Issuer Service](../../../overview/snowinning/terminus-name.md#gmail-issuer-service). To create your Terminus Name with Gmail VC:

1. Click on the VC card to trigger the Google account interface.
2. Choose the account you want to bind:
   - If you're already logged into your account, you can select it directly.
   - If you want to bind a new account, select 'add another account'. Afterward, you will return to the Google account interface where you can select your account to bind.
3. Click to log in to TermiPass using your Google account, then click **Continue**.
4. Wait for the binding process to complete. After receiving a successful binding notification page, click **Continue**.
5. Proceed to the **Terminus Name** landing page.

If you see an error message while binding, check if your account is already bound to a **Terminus Name**. If not, but you're still having trouble complete the binding process, please contact us.

Once you see the landing page, please wait for the [installation of Terminus devices](../../terminus/setup/install.md) to be completed, and then proceed with the [activation process](../../terminus/setup/wizard.md).

#### Organization Terminus Name

![alt text](/images/how-to/termipass/organization_terminus_name.png)

Binding an **Organization Terminus Name** requires the following steps:
1. Carefully read the **Organization Terminus Name** explanation page and click **Got it** to proceed.
2. You can join an existing organization or create a new one:
   - If your organization doesn't exist yet, scan the QR code to log in to Terminus Space and [creating a domain](notion://www.notion.so/space/domain/host-domain.md).
   - If your organization already has a domain name, and has completed the verification and configuration process, you can choose to join an existing organization.
3. Input your organization's domain name and click **Continue** to confirm it. If the domain name hasn't been verified and configured yet, an error will occur. If you enter another organization's domain name by mistake, return to this page and check it again.
4. Bind your organizational email. At present, only Gmail or Google Workspace emails are supported. The binding process is similar to binding an **Individual Terminus Name**. You can refer to the [Google verification process](#individual-terminus-name) for guidance.
5. Once the binding is complete, you receive get an **Organization Terminus Name**.

### Backup Mnemonic Phrase

Please note, in a decentralized account system, the mnemonic phrase is the **ONLY** way to recover your **DID/Terminus Name**. 

:::danger IMPORTANT
**Make sure you store your Terminus Name's mnemonic phrase securely!**
:::

:::info
Each TermiPass will save the mnemonic phrase for all Terminus Names you've imported. The mnemonic phrase is safeguarded by the mobile device's key storage. Generally, you will only lose the mnemonic phrase if you lose all your devices installed with Terminus.
:::

#### Standardize Process

![alt text](/images/how-to/termipass/mnemonic_phrase.png)

When backing up the mnemonic phrase, please follow a standardized process as follows:

1. Enter your TermiPass local unlock password and click **Export Mnemonic Phrase** below. This will take you to a screen where you can see your 12-word mnemonic phrase.
2. Write down the mnemonic phrase on paper and keep it safe.
3. Type these 12 words of the mnemonic phrase in the correct order on the next page. If entered correctly, this confirms that you have successfully backed up your mnemonic phrase.

:::warning
Clicking the **Copy** button will save the 12 mnemonic phrase to the clipboard. However, this may pose a risk of leakage. For secure storage of the mnemonic phrase, we strongly recommend backing it up **offline**.
:::

## Stage of Account

TermiPass uses [one local password](#setup-local-password.md) to allow users to manage multiple accounts simultaneously. These accounts are independent of each other.

Each account has three stages:

![account](/images/how-to/termipass/account.png)

1. **Not bound to a Terminus Name**

   The DID of the account was generated during the [Create an Account](#create-an-account) process, but it hasn't been bound to a Terminus Name yet. In this stage:
   - The account is created locally, with a mnemonic phrase, private key, and DID, but does not include a **Terminus Name**.
   - The mnemonic phrase can be exported and backed up.
   - The account can be used to log into **Terminus Space**, which is necessary when applying for an organization domain name.
   - The account cannot be imported into other TermiPass by entering the mnemonic phrase, as explained in [Import an Account](#import-an-account).
2. **Bound to a Terminus Name**

   At this stage, for both Individual and Organization Terminus Names:
   - The mapping between the Terminus Name and DID is recorded on the blockchain.
   - Your can use this Terminus Name to apply for a Terminus on **Terminus Space** and activate the Terminus.
   - Once the mnemonic phrase is exported, it can be imported to TermiPass on other devices. For more information, refer to [Import an Account](#import-an-account).
3. **Bound to a Terminus**

   If your account is bound to Terminus, you'll have full access to all the features on the TermiPass.

## Account Synchronization

Account in TermiPass, Terminus, and Terminus Space stay synchronized as follows:

- When creating a Terminus, you must provide a Terminus Name and activate it using the TermiPass imported with that Terminus Name. [Learn more](../../terminus/setup/wizard.md).
- To log into Terminus Space, you need to scan a QR code with TermiPass. For more details, please see [log in to Terminus Space](../../space/account.md).
