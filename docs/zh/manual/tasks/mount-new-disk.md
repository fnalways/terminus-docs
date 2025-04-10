---
description: 了解如何在 Olares 中挂载新的磁盘分区。
---

# 挂载硬盘至 Olares

本文档介绍如何在 Linux 系统中将新增硬盘挂载至 Olares，以便在 Olares 本地存储或传输 AI 模型等体积较大的数据文件。

::: tip 路径限制
本功能最初目的为存储和传输本地 AI 模型，所以目前只支持将硬盘挂载在  `/olares/share/ai` 目录下。
:::

## 开始之前

请确保：

* 你已拥有当前 Linux 系统的管理员权限。
* Olares 系统已正确安装并运行。
* 准备好格式化好的目标硬盘，推荐 ext4 或 XFS 格式。

## 识别硬盘

1. 将硬盘插入主机。
2. 在 Linux 终端执行以下命令查看硬盘信息：

   ```bash
   fdisk -l
   ```

3. 根据输出内容识别目标硬盘：

   - **NVMe 固态硬盘**：设备名称通常为 `/dev/nvme0n1`、`/dev/nvme1n1` 等。
   - **SATA/机械硬盘**：设备名称通常为 `/dev/sda`、`/dev/sdb` 等。
   - 每个硬盘下方会列出其分区，如 `/dev/nvme1n1p1`, `/dev/nvme1n1p2`, `/dev/sdb1` 等。

4. 确定你要挂载的目标分区，如 `/dev/nvme1n1p1`。


## 临时挂载分区

临时挂载适用于一次性或短暂使用的场景，如文件拷贝。重启 Olares 后挂载配置就会失效。

1. 创建挂载目录：

   ```bash
   sudo mkdir -p /olares/share/ai/<目录名>
   ```

    替换 `<目录名>` 为你自定义的目录名称。

2. 执行挂载命令：

   ```bash
   sudo mount /dev/<待挂载分区>/olares/share/ai/<目录名>
   ```

   例如 `sudo mount /dev/nvme1n1p1 /olares/share/ai/my_disk`。

挂载成功后，可通过 Olares 文件管理器在 **外部设备** > **ai** 目录下访问该硬盘内容。

![alt text](image.png)


## 持久挂载分区

如果你希望长期在 Olares 下使用挂载的分区，则需修改配置文件`/etc/fstab`以设置开机自动挂载，这样重启后配置依然有效。

1. 按[识别硬盘](#识别硬盘)里的步骤获取待挂载硬盘分区，如
2. 获取文件系统类型：

   ```bash
   lsblk -f
   ```

   找到分区对应的 `FSTYPE`（如 `ext4`、`ntfs`）。

3. 编辑系统挂载配置文件：

   ```bash
   sudo vi /etc/fstab
   ```

4. 在文件里添加如下配置：

   ```text
   /dev/<待挂载分区> /olares/share/ai/<目录名> <文件系统类型> defaults,nofail 0 0
   ```

   如 `/dev/sdb1 /olares/share/ai/my_disk ext4 defaults,nofail 0 0`

5. 保存并退出。

挂载成功后，可通过 Olares 文件管理器在 **外部设备** > **ai** 目录下访问该硬盘内容。挂载配置在系统重启后仍然有效。

## 卸载挂载分区

上述两种方式挂载的分区均可通过以下方式卸载：

1. 在 Linux 终端里执行以下命令：

```bash
sudo umount /olares/share/ai/<目录名>
```

   ::: tip 注意
   执行卸载前，请确保当前没有任何程序或终端正在访问该目录，否则卸载会失败。
   :::

2. 卸载完成后挂载目录为空，需手动删除：

   ```bash
   rm -rf /olares/share/ai/<目录名>
   ```
   
   你也可以在 Olares 的文件管理器里查看并删除此目录。

   ::: warning 慎重操作
   删除前，请确保已执行卸载且目录为空，否则可能误删数据。
   :::

