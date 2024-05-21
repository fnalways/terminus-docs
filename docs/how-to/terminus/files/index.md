---
outline: [2, 4]
---

# Files

![alt text](/images/how-to/terminus/files.jpg)

Our goal is to offer a product that enables users to manage files scattered across various locations, anytime and anywhere.

Similar to **Vault**, **Files** is a pre-installed app on Terminus OS and is accessible through both the web and TermiPass.

- This chapter primarily focuses on the main features of **Files** web version.
- You can learn about using the **Sync** feature on your computer at [Local File Sync](../../termipass/local-file-sync.md).

## Introduction

Files uses a layout similar to computer file management systems.

![alt text](/images/how-to/terminus/drive.jpg)

### Drive

The **Drive** is similar to iCloud, designed to store files that don't need frequent syncing or modifications, such as videos and photos.

Each user has a **Home** directory, with default directories like **Documents**, **Pictures**, and **Downloads**.

:::tip
For developers, consider the **Home** directory on the **Drive** as the root directory for [UserData](../../../overview/terminus/data.md#userdata).
:::

### Sync

The **Sync** functions similarly to Dropbox, allowing you to sync files and directories across devices using **TermiPass**.

Each user has their own default **Library**. You can also create **Shared Libraries** to share files with other Terminus users.

:::tip
The Sync drive has its own file system, stored on **JuiceFS**. But, this system is not visible to developers.
:::

### Application Data

This directory is not intended for your daily use. It appears in Files primarily to aid developer debugging.

For developers, this corresponds to the [AppData](../../../overview/terminus/data.md#appdata) directory.

### Application Cache

Similar to Application Data, you will not usually access this directory. It's primarily used by developers for debugging.

For developers, this is the [AppCache](../../../overview/terminus/data.md#appcache) directory.

## Basics

In Files, users do not need to worry about the the differences in the underlying filesystems between underlying filesystems of different directories. You can interact with them using a unified, intuitive set of operations.

![alt text](/images/how-to/terminus/drive.jpg)

### Create New Folder

You can **right-click** in any folder's empty space and select **'New Folder'** from the context menu to create a folder at that location.

Alternatively, you can click the **'New Folder'** button in the upper right corner of any folder to create a new folder.

After either method, a popup will appear where you can enter your desired folder name.

### Rename

You can rename a file by right-clicking on the file and selecting **'Rename'** from the context menu.

In the popup that appears, enter the new file name.

This method also works for renaming folders.

### View Mode

Files supports two view modes for file lists: **List** and **Large Icons**.

![alt text](/images/how-to/terminus/drive_view_mode.jpg)

### Multiple Selection

Files currently support using keyboard shortcuts plus clicking to select multiple files at once.

- On Windows, use Ctrl + click.
- On Mac, use Command + click.

We plan to support more intuitive multi-selection methods in the future.

### Copy
To copy a file to the clipboard, select the file, right-click to access the context menu, and choose **'Copy'**. Then, navigate to the desired location, right-click in an empty space, and select **'Paste'**.

Files now support copying across different file systems, allowing files to be copied from **Drive** to **Sync** and vice versa.

:::info NOTE
This process may take some time, so please wait for the operation to complete before moving on to the next operation.
:::

### Delete

To delete a file, select the file, right-click to access the context menu, and choose **'Delete'**. Confirm in the popup dialog to delete the file.

Alternatively, you can also initiate deletion from the **'...'** more options button in the upper right corner of the interface.

:::warning
There is no recycle bin mechanism, so once files are deleted, they cannot be recovered. Deleting a file will immediately free up the storage space.
:::

### Attributes

To view details about a file, select the file, right-click to access the context menu, and choose **'Attributes'**. You can find information about file size, count, location, update time, and more.

:::info NOTE
You can view details for only one file or folder at a time.
:::

### Right-click Menu

![alt text](/images/how-to/terminus/drive_right_click_menu.jpg)

The **Right-click Menu**, also known as the context menu, can be accessed in two different situations, each providing different menu options:

- When a file is selected, the menu is contextual to that file. The options include: **Download**, **Copy**, **Rename**, **Delete**, and **Attributes**.
- When clicking in an empty list space, the menu is contextual to the list itself. The options include: **New Folder**, **Upload Files**, **Upload Folders**, **Paste** (if the clipboard contains files), and **Refresh**.

### Upload

![alt text](/images/how-to/terminus/drive_upload.jpg)

Files supports various upload methods:

- **Drag and Drop**:<br>
On the PC, you can select files from your local file manager and drag them into the Files window to upload.
- **Upload from Toolbar**:<br>
Click the **'Upload'** button in the upper right corner of the Files toolbar, select local files in the popup dialog, and upload.
- **Upload from Right-click Menu**:<br>
Right-click in an empty list space to open the context menu, select **'Upload'**, then choose local files from the popup dialog.

Files aslo support various types of uploads:
- **Single file upload**:<br>
You can upload one file at a time.
- **Multiple file uploads**:<br>
You can upload multiple files at once. Files can be uploaded simultaneously.
- **Folder upload**:<br>
You can upload all files within a selected folder.
- **Mixed upload**:<br>
You can upload both files and folders together.

Files now fully supports resumable uploads, this applies to both **Drive** and **Sync**. If a portion of the upload fails, the next upload will pick up from the last recorded checkpoint in the file, eliminating the need to re-upload all parts. Once finished, all parts will merge into a single file.

### Download

**Single File Download**
In Files, select any file, right-click to bring up the context menu, choose **'Download'**, then select the location to save the file on your local drive and click **Save**.

**Multiple File Downloads**
When downloading through the browser, Terminus will package multiple files into a single zip file. After the download is complete, you will need to manually unzip the file.

**TermiPass** desktop supports multiple file downloads. All submitted download are added to a queue. You can pause, delete, or manage ongoing downloads. Additionally, you can view and locate files that have been downloaded to your local drive.

### Preview & Edit

- File Preview
Files supports previewing the following file types:

| File Type | Formats                                        |
|-----------|------------------------------------------------|
| Images    | JPG, JPEG, PNG, BMP, WEBP, SVG                 |
| Videos    | MP4, MKV, AVI, MOV, MPEG, MTS, TS, WMV, WEBM, RM, 3GP |
| Audio     | MP3, WMA, WAV, OGG, AAC, M4A, APE, FLAC        |
| Text      | PDF, TXT, JS, MD, CSS, XML, YAML, HTML         |

- Text File Edit
Files supports editing and saving text files in formats such as TXT, JS, MD, CSS, XML, YAML, HTML.

## Sync

![alt text](/images/how-to/terminus/sync.jpg)

The **Sync** is another independent module in **Files**, with the basic unit being the **Library**.

**Libraries** can be used to synchronize your data across multiple devices or to share data in real-time with other members. It also supports simultaneous multi-device syncing and multi-user data sharing.

You can create multiple **Libraries** to meet different syncing and sharing needs. For more information, see [Sync](../../termipass/local-file-sync.md).

### Create Library

Click the **'+'** button on the page to create a new **Library**.

![alt text](/images/how-to/terminus/sync_new_library.jpg)

:::info NOTE
The user who creates a Library is its owner, and ownership cannot be transferred.
:::

### Library Operations

In the **Libraries** list, each Library has a **'...'** more options button on the right, allowing for operations like **'Share with'**, **'Delete'**, **'Rename'**, etc.

![alt text](/images/how-to/terminus/sync_operation.jpg)

:::info NOTE
Sharing and renaming operations are only available to the owner.
:::

### Team Shared Library

Select a Library, click the **'...'** more options button on the right, and choose **'Share with'**.

![alt text](/images/how-to/terminus/sync_share_repo.jpg)

In the pop-up dialog, enter the users you want to share with or select them from a dropdown menu. Set their file permissions, then click **'Complete'** to finish the sharing process. After a while, the invited users will find the shared Library in their **Libraries list**.

To **remove a user** from a shared library, delete the user from the dialog. This action will remove your library from that user’s **Libraries list**.

### User And Authority Management

In the above scenario, any shared users will appear in the **USER list** with their respective permissions displayed. Owner can manage users, including modifying permissions and deleting users.

#### Member

- **Owner**, has full permissions for the Library.
- **User**, whose permissions can be set by the owner.

#### Authority

- **Read-write** permission allows for adding, deleting, and modifying Library content.
- **Read-only** permission allows viewing content without modifying it.

:::info NOTE
In **Shared Libraries**, only the owner can invite other members. Users do not have invitation permissions.
:::

### Exit & Delete

In **Shared Libraries**, only the owner can delete the library. The owner cannot transfer ownership or exit his/her **Shared Libraries**. On the other hand, users can choose to exit the library, but they cannot delete it.

#### Exit

Select **'Exit'** from the **'...'** more options button on the right of the **Library** to confirm and exit the **Library**.

:::info NOTE
Users can exit a **Shared Library**, but the owner cannot.
:::


#### Delete

Select **'Delete'** from the **'...'** more options button on the right of the **Library** to confirm and delete the **Library**.

Only the owner can delete the **Shared Library**. Once the owner deletes it, the library will be removed from all members' **Libraries list** and will no longer be accessible.

:::warning
Deleting a library is an irreversible action. All files in the library will be permanently deleted and cannot be restored. Please value your and your team's data security.
:::

## Reference

Files is built on [FileBrowser](https://filebrowser.org/) and [SeaFile](https://github.com/haiwen/seafile)
