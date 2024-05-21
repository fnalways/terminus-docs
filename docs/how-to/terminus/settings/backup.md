---
outline: [2, 3]
---

# Backup Management

You can manage **backups** and **snapshots** of Terminus here.

Terminus aims to provide a backup experience similar to **TimeMachine**. It will automatically back up your Terminus in the background. If something goes wrong, you can restore your Terminus to a specific saved point.

Backup data can be stored in **Terminus Space**, **AWS S3**, or your own hard drives. The backup data is encrypted, and **only you know the encryption**. This ensures data privacy, even when stored in the cloud.

:::info NOTE
Currently, we only support backing up data to Terminus Space. Support for additional backup locations will be available soon.
:::

## Login to Terminus Space

Currently, you need to log in to **Terminus Space** to use the backup service. Please use **TermiPass** to scan the QR code and log in to **Terminus Space**.

![alt text](/images/how-to/terminus/login_terminus_space.png)

## Create a Backup

![alt text](/images/how-to/terminus/create_a_backup.png)

You can add a new backup task in **Settings**. During this process, please note:

- **Name the backup task**. It should contain at least one character.
- **Choose the backup frequency**. You can back up either weekly or daily.
- **Determine the start time**. This will be the time for automatic backups. If you've selected a weekly frequency, specify the day of the week for the backup.
- **Enter the backup password twice**. It must be at least 4 characters long.

The backup process will begin at the scheduled time you have set. The first backup will create a complete backup package. Subsequent backups will generate incremental snapshots, according to the backup frequency.

:::info NOTE
Please remember the backup password. If you lose it, you will not be able to restore your backup data.
:::

## View Backup Logs

You can view backup task details through the **backup logs**.

![alt text](/images/how-to/terminus/view_backup_logs.png)

The backup task details include:
- Backup-related parameters. You can [modify some parameters](#modify-backup-settings).
- The **total size** of the backup. showing the storage space used by this task.
- The list of **backup snapshots**. You can find the result of each backup tasks, such as the time, size, and status.

### Modify Backup Settings

For created backup tasks, the backup name cannot be modified at the moment. However, you can adjust the backup frequency, time, and other parameters.

### Remove Backup Job

If a backup task is no longer required, you can delete it to save storage space.

:::warning
Deleting a backup task will also remove all associated backup snapshots. Please ensure your data is safe before proceeding.
:::

## Restore from Backup

Please refer to [Terminus Space Backup & Restore](/how-to/space/backup.md)
