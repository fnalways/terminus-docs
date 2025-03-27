---
outline: [2, 3]
---
# `olares backups snapshots`
:::warning
The `olares-cli olares backups download` command must be run first to install Restic. Otherwise, this command will return an error.
:::
## Synopsis
The `snapshots` subcommand lists all available snapshots for a specific backup repository. It supports multiple storage backends and provides the necessary options to authenticate and query snapshots.

```bash
olares-cli olares backups snapshots <backend> --repo-name <name> [options]
```
## Common options
These options apply to all backends:

| Name          | Shorthand | Usage                                                  |
|---------------|-----------|--------------------------------------------------------|
| `--help`      | `-h`      | Displays help information.                             |
| `--repo-name` |           | 	Specifies the name of the backup repository to query. |

## Backend-specific options

### Options for `cos`

| Name                  | Shorthand | Usage                                                                                            |
|-----------------------|-----------|--------------------------------------------------------------------------------------------------|
| `--access-key`        |           | Specifies the Access Key for Tencent COS.                                                        |
| `--endpoint`          |           | Specifies the Tencent COS endpoint, e.g., `https://cos.{region}.myqcloud.com/{bucket}/{prefix}`. |
| `--secret-access-key` |           | Specifies the Secret Access Key for Tencent COS.                                                 |

### Options for `fs`

| Name         | Shorthand | Usage                                                          |
|--------------|-----------|----------------------------------------------------------------|
| `--endpoint` |           | Specifies the local directory where the backup will be stored. |

### Options for `s3`

| Name                  | Shorthand | Usage                                                                                       |
|-----------------------|-----------|---------------------------------------------------------------------------------------------|
| `--access-key`        |           | 	Specifies the Access Key for Amazon S3.                                                    |
| `--endpoint`          |           | Specifies the Amazon S3 endpoint, e.g., `https://{bucket}.{region}.amazonaws.com/{prefix}`. |
| `--secret-access-key` |           | 	Specifies the Secret Access Key for Amazon S3.                                             |

### Options for `space`

| Name                 | Shorthand | Usage                                                     |
|----------------------|-----------|-----------------------------------------------------------|
| `--access-token`     |           | Specifies the Access Token for Olares Space.              |
| `--cloud-api-mirror` |           | Specifies the Cloud API mirror.                           |
| `--cloud-name`       |           | 	Specifies the Cloud Name of the Olares Space instance.   |
| `--cluster-id`       |           | Specifies the Cluster ID where the backup will be stored. |
| `--olares-did`       |           | Specifies the Olares DID.                                 |
| `--region-id`        |           | Specifies the Region ID of the Olares Space instance.     |

## Example
```bash
# List snapshots for Tencent COS
olares-cli olares backups snapshots cos --repo-name my_repo \
  --access-key YOUR_KEY \
  --secret-access-key YOUR_SECRET \
  --endpoint https://cos.region.myqcloud.com/bucket/prefix
  
# List snapshots for local filesystem
olares-cli olares backups snapshots fs --repo-name my_repo --endpoint /backup_repo
```