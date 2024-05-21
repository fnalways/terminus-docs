---
outline: [2, 3]
---

# User Management

:::info
Only Admin can see this page.
:::

You can check each user’s role, either as Admin or Member, in the list.

If an account has a red **'Not activated'** label, it means that although the account has been created, the [Wizard](../setup/wizard.md) process has not been completed, and the account cannot be used yet.

![alt text](/images/how-to/terminus/settings_users.png)

## Create Account

The process of creating a user account consists of 3 steps:

![alt text](/images/how-to/terminus/settings_create_account.png)

1. **Confirm Terminus Name**
    
   - Confirm the **Terminus Name** for the new user. If they don't have a Terminus Name yet, direct them to the [Getting Started](../../../overview/introduction/getting-started.md#member) guide for application instructions.

   :::info
   Make sure the user's **Terminus Name** domain matches the domain of this Terminus.
   :::

2. **Create Account**

   - Click the **'Create User'** button.
   - Enter the **Terminus Name** for the new user.
     :::info
     Enter only the local part of the **Terminus Name**. For example:<br>
     If the email is 'alice@myterminus.com', enter 'alice'.<br>
     If the email is 'bob@helloworld.com', enter 'bob'.<br>
     :::

   - Enter the CPU and memory usage quotas for the user. You can adjust them later in the [User Details](#set-resource-limit).
     :::info
     We recommend setting the minimum CPU to 1 and the minimum memory to 3Gi.
     :::

3. Send **Wizard URL** and **Initial Login One Time Password** to the user
   - When a user is successfully created, a dialog will appear displaying the new user's Terminus Name, initial password, and Wizard activation link. Copy this information and send it to the new users. So the user use it to activate the account.
     :::info
     If the user forgets the activation link or initial password, these can be found at the bottom of the inactive account details page. The initial password can also be reset there.
     :::

## Account Details

![alt text](/images/how-to/terminus/settings_user_info.png)

The content of the details page varies slightly depending on the account type.

Here is the differences:

- For **Admin**,  you can reset your own account password on details page.

- For **activated** **Member**, you (as a Admin) can reset their password, adjust and configure their CPU and memory usage quotas, and delete the user.

- For **inactive** **Member**, you (as a Admin) can reset their password, display the Wizard URL, adjust and configure their CPU and memory usage quotas, and delete the user.

### Reset User Password

If your **Members** forget their passwords, you can **reset** them here. The new password will be a randomly generated string.

- If the **Member** has not yet activated, please immediately visit the activation URL after receiving the password reset and [activate now](../setup/wizard.md).

- If the **Member** has already activated, use the new password to log in to Terminus and [change the password](../settings/home.md#change-password).

### Set Resource Limit

You can adjust and configure the CPU and memory usage quotas for a user here.

:::info NOTE
The CPU and memory usage quotas for an individual user must not exceed the cluster's CPU and memory limits.
:::

### Delete User

Click on **'Delete User'** to remove a user. Please be patient after submitting the deletion, as the process may take some time to complete.

:::info NOTE
Deleting an activated user will result in the loss of **Terminus** data. However, the **Vault** data stored in **TermiPass** will not be lost.
:::
