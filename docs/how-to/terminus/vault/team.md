---
outline: [2, 3]
---

# Team & Shared Vault

The **Shared Vault** is a great tool for organizing, managing, and sharing data among users. It's ideal for various organizations, from family accounts to teams, companies, or any group requiring secure storage and information sharing among multiple members. The **Shared Vault** allows precise control over who can access, edit, or share specific information.

To use the **Shared Vault**, you must first join a **Vault Team**.

## Join Team

At Terminus, all administrators and users of a Terminus cluster are automatically included in one **Vault Team**. However, due to security concerns, each new member must go through a multi-step process to establish an encrypted handshake.

Here’s how it works:

1. The system automatically sends an invitation to each new member to join the **Vault Team**. Users can open Vault to check for the invitation.
   ![image](/images/how-to/terminus/vault_invite.jpg)

   - As an administrator, you'll see the invitation code sent to new users displayed on the interface.
   - As a new user, a popup will appear for you to enter the invitation code. Please contact your system administrator to get the code, then enter it and click submit.

   :::tip
   Each new user invitation is valid for 30 days, so be sure to complete the process within this period.
   :::

2. If you are a new user, please inform your system administrator in any way when you have accepted the invitation, and then wait for the administrator's final approval. If you are an administrator, once you are notified that a new user has accepted the invitation, you can add he/she to the team management page.

3. As a new member, your default role will be a **Regular Members** in the **Vault Team**. It means that you will not be able to create a **Shared Vault**. Please wait for the administrator to add you to a **Shared Vault**.

## Member & Role

Theres are three different roles in a **Vault Team**:

- **Owner** is the user the user who created the team, usually the administrator who initialized Terminus. Only they can add, suspend, or unsuspend members and appoint administrators.

- **Administrators** can create **Shared Vault** Items and assign read/write permissions for them.

- **Regular Members** have no special permissions unless the owner or administrators add them to a **Shared Vault** Item and set their read/write permissions.

### Suspended Members

Suspended members maintain their assigned permissions and group membership but are unable to exercise their rights. They will not receive any updates to the vault data and cannot make any modifications.

To **suspend a member**, select the user from the member list, click the **'...'** in the top right corner of the member page, and choose **'Suspend'**.

To **unsuspend a member**, select **Unsuspend** from the same place. Afterwards, their membership must be reconfirmed in the same manner as when they initially joined the organization.

### Make Admin

To appoint a member as an administrator, select the member from the list. Then, click the **'...'** icon in the top right corner of the member page, and choose **'Make Admin'**.

To **remove an administrator**, simply select "Remove Member" from the same place.

## Shared Vault

A **Shared Vault** functions like a secure folder that can save many Vault Items. Unlike your Main Vault, the **Shared Vault** is designed to share data among multiple Terminus users.

By default, a **Shared Vault** will not be created automatically. It requires the **administrator** to create it manually.

### Create Shared Vault

To create a **Shared Vault**, open the team management page, select **'Vaults'**, then click the **'+'** icon at the top to create a new **Shared Vault**. You can add multiple members to this **Shared Vault** and set their read/write permissions. Once confirmed, click **'save'** to apply the changes.

### Edit Shared Vault

You can select the **Shared Vault** you want to edit on the **'Vaults'** page. You can add or remove members, set members' read/write permissions. Click **'save'** to apply the changes.

### Delete Shared Vault

To delete a **Shared Vault**, navigate to the **'Vaults'** page and select the vault you want to remove. Click on the **'...'** icon located in the upper right corner, then choose **'Delete'** in the drop-down menu. You must type the word **'DELETE'** in pop-up dialog to confirm your action.

:::warning
Deleting a vault is irreversible! All data within the vault will be destroyed.
:::

### Authority

Vault offers a simple yet powerful permission system that allows you to define who can read, edit, and manage the **Shared Vault**. You can assign read/write permissions to members in the **Vault Team**.
