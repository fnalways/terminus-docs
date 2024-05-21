---
outline: [2, 3]
---

# Vault & Item

## Vault

A Vault is a place where you can store your **Vault Items**. Think of it as a password-protected folder that can hold an unlimited number of items. 

By default, you'll have a **Private Vault** for personal use, where you can store all your personal data. For most users, a single vault is sufficient as it can store any number of items. There are various ways to organize and find the items within it.

### Create Vault Item

When you open your Vault, you'll see an empty list if you haven't added any Vault Items yet.

![image](/images/how-to/terminus/vault.jpg)

To start, click the **'+'** icon at the top right. You can create different types of Vault Items.

![image](/images/how-to/terminus/vault_dialog.jpg)

For example, If you want to create a Vault Item for storing app account details, you can select **'Website/App'** type. Fill in the fields such as **Username**, **Password**, and **URL**, then save it. This will successfully add a new Vault Item.

![image](/images/how-to/terminus/vault_new_vault.jpg)

### Search & Filter

You can quickly find the Vault Item you need using this feature. The Vault provides **five** common methods to retrieve your Vault Items:

- **By Main Vault & Shared Vault:** Directly select "My Vault" or "Team Vault" to quickly find items within.

- **By Tags:** Organize tags by type, usage area, or any other criteria. Tags help you locate previously tagged Vault Items.

- **By Favorites:** Add your favorite or most important Vault Items to your favorites. Click on **'Favorites'** to list all your favorite Items.

- **By Recently Used:** If you've recently used certain Vault Items, clicking on **'Recently Used'** will show those items.

- **By Attachment:** Vault Items with attachments are categorized under **'Attachment'**. Clicking on **'Attachment'** will display all these items.

- **Keyword Search:** You can also click the **'Search'** button and directly enter keywords in the search box to quickly find the Vault Items you need.

## Vault Item

Choose any Vault Item from the list to edit or modify it in the details column on the right. You can add fields to store different types of data, and use Tags, Favorites, and other features to manage your Vault Items effectively.

:::warning
Please note that deleting a Vault Item is irreversible.
:::

![image](/images/how-to/terminus/vault_edit.jpg)

Here are some key features for organizing Vault Item editing:
### Tag

Tags are a simple yet powerful way to organize items. You can use type, usage area, or any other criteria you can think of to tag items. To add tags, enter edit mode, click **'Add Tag'**, type your tag, and press Enter or click one of the suggested tags.

You can add any number of tags to an item as needed. Once you add tags, the item will appear under the **'Tags'** menu.

### Favorite

To add an item to your favorites, click the **'Favorite'** button next to the item name (no need to enter edit mode). Once favorited, the item will appear under **'Favorites'** in the main menu and will be highlighted in the list view.

To remove an item from favorites, simply click the **'Favorite'** button again.

### Expiration

Many services and companies require passwords to be changed regularly. Even if it's not mandatory, rotating passwords regularly is generally a good practice! By setting an **expiration date** for your Vault Item, track when a password needs to be updated or has expired.

To add an expiration, simply click **'Add Expiration Date'** under the title **'Expiration'**. Then, you can enter the number of days until the item expires.

To remove an expiration date, enter edit mode and click **'Remove Expiration Date'**.

### History

Vault automatically keeps a record of previous versions whenever you update a Vault Item. This feature allows you to view and restore older versions of an item. In some situations, this could be a lifesaver.

You can find the list of historical entries under the **'History'** section. To view an record, click on it. A dialog will appear where you can see the item's details at a specific time. If you wish to restore the item, click **'Restore'**.

:::tip
Vault retains up to 10 historical records for each item. When this limit is reached, older entries are discarded to make way for new ones.
:::

### Attachments

Sometimes, a lot of sensitive information is stored in PDF documents, spreadsheets, photos, and various other file types. **Attachments** provide a secure way to save sensitive information stored in various file types, alongside your **Vault Item**.

To attach a file to a Vault Item, simply click **'Add Attachment'** and schoose the file to upload in the dialog.

:::tip
You can store unlimited files of any type in your Vault. However, each file must not exceed 1 MB.
:::

## Creating Shared Vault

For everyday usage, tags and favorites should be sufficient to organize your Vault Items within your private Vault. Creating a Shared Vault is primarily for organizing and sharing items among multiple users. To create additional Shared Vaults, you must first join an organization. For more information, please refer to the [team section](./team.md).
