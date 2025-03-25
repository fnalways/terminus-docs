---
outline: [2, 3]
---
# `olares backups restore`

## Synopsis
The `restore` subcommand allows you to restore data from a specified backup repository and snapshot to a target directory.

```bash
olares-cli olares backups restore <backend> --path <path> --repo-name <name> --snapshot-id <id> [options]
```

## Common options
These options apply to all backends:

| Name            | Shorthand | Usage                                                         |
|-----------------|-----------|---------------------------------------------------------------|
| `--help`        | `-h`      | Displays help information.                                    |
| `--path`        |           | Specifies the directory to which data will be restored.       |
| `--repo-name`   |           | 	Specifies the name of the backup repository to restore from. |
| `--snapshot-id` |           | 	Specifies the snapshot ID to restore.                        |


## Backend-specific options

### Options for `cos`

| Name                    | Shorthand | Usage                                                                                            |
|-------------------------|-----------|--------------------------------------------------------------------------------------------------|
| `--access-key`          |           | Specifies the Access Key for Tencent COS.                                                        |
| `--endpoint`            |           | Specifies the Tencent COS endpoint, e.g., `https://cos.{region}.myqcloud.com/{bucket}/{prefix}`. |
| `--limit-download-rate` |           | Limits the download speed to a maximum rate in KiB/s (default: unlimited).                       |
| `--secret-access-key`   |           | Specifies the Secret Access Key for Tencent COS.                                                 |

### Options for `fs`

| Name          | Shorthand | Usage                                                     |
|---------------|-----------|-----------------------------------------------------------|
| `--endpoint`  |           | Specifies the local directory where the backup is stored. |
| `--olares-id` |           | Specifies the Olares ID.                                  |

### Options for `s3`

| Name                    | Shorthand | Usage                                                                                       |
|-------------------------|-----------|---------------------------------------------------------------------------------------------|
| `--access-key`          |           | Specifies the Access Key for Amazon S3.                                                     |
| `--endpoint`            |           | Specifies the Amazon S3 endpoint, e.g., `https://{bucket}.{region}.amazonaws.com/{prefix}`. |
| `--limit-download-rate` |           | Limits the download speed to a maximum rate in KiB/s (default: unlimited).                  |
| `--secret-access-key`   |           | Specifies the Secret Access Key for Amazon S3.                                              |

### Options for `space`

| Name                    | Shorthand | Usage                                                                      |
|-------------------------|-----------|----------------------------------------------------------------------------|
| `--access-token`        |           | Specifies the Access Token for Olares Space.                               |
| `--cloud-api-mirror`    |           | Specifies the Cloud API mirror.                                            |
| `--cloud-name`          |           | Specifies the Cloud Name of the Olares Space instance.                     |
| `--cluster-id`          |           | Specifies the Cluster ID where the backup is stored.                       |
| `--limit-download-rate` |           | Limits the download speed to a maximum rate in KiB/s (default: unlimited). |
| `--olares-did`          |           | Specifies the Olares DID.                                                  |
| `--region-id`           |           | Specifies the Region ID of the Olares Space instance.                      |

## Example
```bash
# Restore the data from Tencent COS
olares-cli olares backups restore cos --path /data_restore --repo-name my_repo \
  --snapshot-id snapshot_12345 \
  --access-key YOUR_KEY \
  --secret-access-key YOUR_SECRET \
  --endpoint https://cos.region.myqcloud.com/bucket/prefix
  
# Restore the data from local filesystem
olares-cli olares backups restore fs --path /data_restore --repo-name my_repo \
  --snapshot-id snapshot_12345 --endpoint /backup_repo
```