# Backup & Restore

**Terminus Space** stores all `backup snapshots` for **Terminus**. Each `snapshot` is secured with a password for data protection and safety. Even when backed up to the cloud, the data remains secure and can't be decrypted without the password. You can restore Terminus to its most recent state whenever needed.

- You can learn more about [Backup Design Philosophy](/overview/terminus/data.md#backup).

- If you have not yet performed a backup, you can try [Backing up Terminus](../../how-to/terminus/settings/backup.md)

:::tip
Each Terminus is provided with **10GB** of free backup space. Any usage beyond this will be charged according to the cloud provider's pricing.
:::


## Backup List

![alt text](/images/how-to/space/backup_list.jpg)

The backup task list shows information of each backup task, including its initial creation time and the most recent snapshot time, as well as the overall storage usage of the backup task.

Click **'View Details'** on a task to see its detail page. This page shows how much storage the backup task has used since it was created. Additionally, it provides a list of all successful snapshots.

:::info NOTE
At present, we only support restoring from the most recent snapshot, not from any point in snapshot list.
:::

## Restore Backup to the Terminus Space

![alt text](/images/how-to/space/restore_backup_to_the_terminus_space.jpg)

Restoring a snapshot to the cloud is similar to setting up a new **cloud-based Terminus.**

**Step 1: Set up relevant details**<br>
1. Select the cloud service provider and their data center location.
2. Choose the hardware configuration for the instance.
3. Confirm the snapshot details and enter the backup password.

**Step 2: Understand our charges for storage and bandwidth**<br>
Each instance includes a certain amount of free storage and traffic. Any usage exceeding these quotas will incur progressively increasing charges.

**Step 3: Confirm the order and complete payment** <br>
Please confirm the order. After you complete the payment, the Terminus will begin to install.

:::info NOTE
During the installation process, **Terminus**  will verify the backup password. If it is incorrect, you'll be asked to enter the correct one. If you forget the backup password, the restoration process won't be able to continue. In this case, please return the machine and try restoring again.
:::
:::info NOTE
To avoid conflicts or other unforeseeable problem, you must return the existing Terminus that uses the same name before restoring to a **cloud-based Terminus**.
:::

## Restore Backup to Local

![alt text](/images/how-to/space/restore_backup_to_local.jpg)

Clicking **'Restore to Local'**  will open a **'Restoration Guide'** page. Please follow the instructions in the pop-up for restoration. For more details, see [here](../../developer/develop/advanced/cli.md#restore-terminus-from-a-backup-snapshot-locally).

:::info NOTE
You need to enter the restore password in the command line window to continue with the restoration. If you enter the wrong backup password, follow the guide in command line window to retry.
:::