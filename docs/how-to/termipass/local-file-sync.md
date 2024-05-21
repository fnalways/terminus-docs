# Local File Sync

:::info
This feature is supported only on Windows and Mac versions.
:::

## Library Creation and Management

Please refer to the guide of [sync in Files](../terminus/files/index.md#sync-1)

## Library Sync

The **TermiPass** desktop client can be used for real-time syncing between a local folder and a **Library** in **Sync Drive**. You can use the **Files** and **TermiPass** to preview documents once they have finished synchronizing.

## Sync Library to Local

In the **TermiPass** client, open the **Files**. Right-click on a **Library** in **Sync**, and then select **'Synchronize to Local'** from the drop-down menu. Choose the location of the local folder and click **'Complete'** to begin syncing the remote Library.

![alt text](/images/how-to/termipass/sync.jpg)

You can choose the default local directory or set a custom local directory. For example, if you select `D:/Sync/` as your local directory, **TermiPass** will create a folder with the same name as the **Library**. All the data from that **Library** will then be synced to this location.

## Sync Local to Library

To sync local files to the Library, simply move the files or folders into the synced folder named after the Library. If you remove a local file from the synced folder, the corresponding file in the Library will also be removed.

To set a local folder as a Sync Library, you must first create a Library with the same name. Then, sync the local files to that Library.

## Unsynchronize

If you decide not to sync a **Library** with a local folder anymore, you can unsynchronize the **Library**.

After disconnecting, changes to your local files and folders won't be synced to the **Library**, and likewise, updates from the **Library** won't be downloaded to your local computer. Don't worry, the data in your local folder is safe and will not be deleted.

## Sync Immediately

Usually, the sync service automatically checks for changes in the local folder and sends them to the **Library**. However, if the local folder is on a network drive, or under certain conditions, it may not detect the changes promptly. In these cases, you can sync manually.

## Read-only Sync

If your permission to the **Library** is `read-only`, you cannot sync changes from the local folder to the Library. Your newly added and modified files will be `read-only`, indicated by a gray disabled icon **(—)**.


## File Conflict

Sometimes, you and your colleague may edit the same file simultaneously, which could lead to conflicts.

In these situations, the **TermiPass** will saves the first edited version of the file to the **Library**, and it renames the other version as a "conflict file."

The name of the conflict file starts with the author's **Terminus Name** and ends with the present time. For example, a conflict file could be named like this: `test.txt(SFConflict name 2024-04-17-12-12-12)`.