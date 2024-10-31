---
outline: [2, 3]
---

# Vault basics
This guide will walk you through the fundamentals of using Vault, from setting up your first vault to organizing your sensitive data efficiently.

## Understand Vault components

### Types of vault
Terminus Vault offers two main types of vaults for users:

* Main vault (**My vault**): Automatically created upon account activation, serving as the user's private vault. It's encrypted with the user's mnemonic for maximum security.
* Shared vault (**Team vault**): These are collaborative vaults within Terminus, allowing secure information sharing among team members or family.

### Vault items
Think of vault items as individual secure containers for your sensitive information. Each vault item consists of several components:

* **Name**: A title for easy identification
* **Tags**: For organization and quick filtering
* **Fields**: Various data types to store different kinds of information
* **History**: Tracks changes made to the item
* **Attachments**: For adding related files
* **Expiration**: Set an expiry date for time-sensitive information

### Fields
Fields are the core component of Vault Items, allowing storage of various data types, including:

* Username
* Password
* Mnemonic
* Email address
* URL
* Date and month
* Credit card number
* Phone number
* PIN
* Plain text
* One-time password (OTP)

## Protect Vault with password
When use Vault in Terminus for the first time, you will be prompted to set a local password. This password should not be the same as your Terminus login password.

After setting up, you also need to import the Terminus Name that's already linked to your Terminus server using mnemonic phrase. 

:::info
If you don't know where to find the mnemonic phrase, see [back up mnemonic phrase](../get-started/back-up-mnemonics).
:::

## Manage vault items
:::tip
Keep your vault organized from the start by using descriptive names and relevant tags. This becomes especially valuable as your collection of secure items grows.
:::

### Add
To add a vault item:
<tabs>
<template #Terminus>

1. Open the Vault app from the Dock or Launchpad.
2. Click <i class="material-icons">add</i> in the top right corner.
3. Select a type, such as **Website / App** for storing account details, and click **Create**.
4. Fill in the required fields like item name, Username, Password, and URL.
5. Click **Save** to create the new vault item.
</template>
<template #TermiPass-desktop-or-mobile>

1. Open TermiPass on your device, and navigate to the **Vault** page within the app.
2. Click <i class="material-icons">add</i> in the top right corner.
3. Select a type, such as **Website / App** for storing account details, and click **Create**.
4. Fill in the required fields like item name, Username, Password, and URL.
5. Click **Save** to create the new vault item.
</template>

<template #TermiPass-browser-extension>

:::info
The TermiPass browser extension is currently only available for Google Chrome. Visit the [official page](https://www.jointerminus.com/termipass) to download the extension.
:::
:::tip
To easily access TermiPass, you can pin the extension to your toolbar.
:::
1. Click the TermiPass icon in your toolbar or extension menu to open TermiPass on the right side of your browser window.
2. Navigate to the **Vault** page within the extension.
3. Click <i class="material-icons">add</i> in the top right corner.
4. Select a type, such as **Website / App** for storing account details, and click **Create**.
5. Fill in the required fields like item name, Username, Password, and URL. The URL field is automatically populated with the current web address.
6. Click **Save** to create the new vault item.
</template>
</tabs>


### Generate strong password
Now that a new item is saved in your vault, you can improve its security by replacing the existing password with a stronger one:

1. In Vault, select the item you want to secure, click the URL to copy.
2. Open the corresponding website, and log in.
3. On that website, navigate to the settings or account page where you can change your password.
4. Generate strong password.

    a. Return to Vault, navigate to the page **Tools** > **Password generators**.
    
    b. Set up the generator following the password requirements. You can choose to generate a passphrase, or a random string.

    c. Click **Copy** to copy your new password.

    d. Update the password in Vault. See [Edit](#edit).
5. Return to the other website, and paste your strong password in the field **New password** and **Confirm new password**.
6. Save your changes.

### Edit
:::info
The TermiPass browser extension does not support editing vault items. For full editing capabilities, please use the Vault app in Terminus, the mobile, or desktop versions of TermiPass.
:::
In the edit mode, you can:
- Update required fields.
- Add tags to items for easy organization and filtering.
- Set an expiration time.
- Add file attachments. Each file must not exceed 1 MB.
- View and restore a history item. Vault keeps up to 10 records for each item. When this limit is reached, older entries are discarded to make way for new ones.

To edit a vault item:
1. In Vault, select the vault item you need to edit. 
2. In its details window or page, click <i class="material-icons">edit_note</i> in the top right corner to enter edit mode.
3. Make the necessary changes to the item's details.
4. Click **Save**.

### Favorite
Important items can be marked as favorites for quick access.
<tabs>
<template #Terminus>

1. In Vault, click the vault item to open its details window on the right.
2. Click <i class="material-icons">star_border</i> in the top right corner to mark this item as favorite.
</template>
<template #TermiPass-desktop-or-mobile>

1. Open TermiPass on your device, and navigate to the **Vault** page within the app.
2. Click the vault item to navigate to its details page.
3. Click <i class="material-icons">star_border</i> in the top right corner to mark this item as favorite.
</template>
</tabs>



## Filter vault items
You can use quick filters or search box to locate the vault item you need.
### Quick filters
* By Main Vault & Shared Vault: Select **My Vault** or **Team Vault** to quickly find items within.
* By Tags: Click on tag names to locate tagged vault items easily.
* By Favorites: Click on **Favorites** to list all your favorite items.
* By Recently Used: Click on **Recently used** to display your recent items.
* By attachment: Click on **Attachment** to display all items with attached files.

### Keyword search
Click <i class="material-icons">search</i> to directly search for target items using keywords.