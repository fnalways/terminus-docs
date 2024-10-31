# Command-line operations for Terminus

## Installation
Configure and install Terminus with these environment variables:

```sh
# Environment variable
export KUBE_TYPE="k8s"                          # k8s or k3s (k3s is default)
export REGISTRY_MIRRORS="http://dockermirror/"  # Docker registry mirror URL
export LOCAL_GPU_ENABLE=1                       # Enable local GPU support if hardware is installed on the node
export LOCAL_GPU_SHARE=1                        # Enable GPU sharing

# Execute installation
curl -fsSL https://terminus.sh | bash -
```

## Uninstallation

Choose the appropriate command based on your platform:

<tabs>
<template #Linux,-Raspberry-Pi,-and-Windows-(WSL)>

```sh
cd install-wizard && bash uninstall_cmd.sh
```
</template>
<template #macOS>

```sh
bash uninstall_macos.sh
```
</template>
</tabs>

## Network management

### Update IP address
After changing networks, run this command to update cluster DNS resolution (Linux/WSL only):

```sh
cd install-wizard && bash change_ip.sh
```

## Add a Terminus node locally
Prerequisites:
- The internal IP address of the Master node.
- SSH public key access configured on the Master node. The current machine's public key must be added to the `authorized_keys` of the user who logged into the Master node.

```sh
VERSION="1.3.0"      # Version of Terminus installed on the master node
curl -LO https://github.com/beclab/terminus/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

mkdir -p install_wizard
cd install_wizard && tar zxvf ../install-wizard-${VERSION}.tar.gz

bash ./publicAddnode.sh
```

## Add a local drive locally
Prerequisites:
* Connect and insert the hard drive, format it with a filesystem. (XFS is recommended.)
* Create a new empty directory that follows your existing data directory structure. For example, if your current directory is `/terminus/data/minio/vol1`, create `/terminus/data/minio/vol2`.
* Mount the hard drive at `/terminus/data/minio/vol2`.

```sh
VERSION="1.3.0"      # Version of Terminus installed on the master node
curl -LO https://github.com/beclab/terminus/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

mkdir -p install_wizard
cd install_wizard && tar zxvf ../install-wizard-${VERSION}.tar.gz

bash scale_minio.sh -a driver -v /terminus/data/minio/vol2
```
For multiple hard drives, you can add them concurrently. For example, if you have mounted drives at:
```
/terminus/data/minio/vol2
/terminus/data/minio/vol3
...
/terminus/data/minio/voln
```
Use this command to add them all at once:
```sh
bash scale_minio.sh -a driver -v /terminus/data/minio/vol{2...n}
```

## Add a hard drive node

You can add hard drives to a new node machine separately from the Master node.

Prerequisites:

:::info
- Master node must be in multi-hard drive mode or have multiple partitions mounted.
- New node should also be in multi-hard drive or multi-partition mode.
:::
- Obtain the internal IP address of the master node (e.g.: `192.168.1.100`)
- Obtain the internal IP address of the target node (e.g.: `192.168.1.101`)
- Add the target node machine's public key to the `authorized_keys` of the master node user (e.g.: ubuntu)
- Format the hard drives with `XFS` filesystem
- Create and mount contiguous data storage directories to multiple hard drives or partitions, for example:
    - `/terminus/data/minio/vol1`
    - `/terminus/data/minio/vol2`
    - `/terminus/data/minio/vol3`
    - `/terminus/data/minio/vol4`

Use the following command to add:
```sh
VERSION="1.3.0"      # Version of Terminus installed on the master node
curl -LO https://github.com/beclab/terminus/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

mkdir -p install_wizard
cd install_wizard && tar zxvf ../install-wizard-${VERSION}.tar.gz

bash scale_minio.sh -a node -v /terminus/data/minio/vol{1...4} \
    -u ubuntu \
    -s 192.168.1.100 \
    -n 192.168.1.101
```

## Install a custom version of Terminus

For debugging Terminus startup processes, you may need to build a local version to replace specific services.

For other scenarios, use ControlHub or kubectl to update services.

```sh
# Clone
git clone https://github.com/beclab/terminus

# Build
cd terminus
bash scripts/build.sh

# Modify your application/service yaml

# Install
pkg_path=$(pwd)
mkdir -p ~/install-wizard && cd ~/install-wizard
tar zxvf ${pkg_path}/install-wizard-debug.tar.gz

# Any version number will do, for example 0.0.0-DEBUG
make install VERSION=0.0.0-DEBUG

# Uninstall
cd ~/install-wizard
make uninstall
```

## Restore Terminus from a snapshot

When backup is enabled and system data is stored in S3 storage, you can restore Terminus from a specific snapshot.

```sh
export KUBE_TYPE=k8s                                  # k8s / k3s
export REGISTRY_MIRRORS="http://dockermirror/"

export TERMINUS_BACKUP_NAME=<backup name>
export BACKUP_S3_REPOSITORY=<s3 repository url>
export BACKUP_SNAPSHOT_ID=<snapshot id>

export AWS_ACCESS_KEY_ID=<aws s3 access key>
export AWS_SECRET_ACCESS_KEY=<aws s3 secret key>

export CLUSTER_ID=<cluster id>

VERSION="1.3.0"      # Version of Terminus installed on the master node
curl -LO https://github.com/beclab/terminus/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

mkdir -p install_wizard
cd install_wizard && tar zxvf ../install-wizard-${VERSION}.tar.gz

bash publicRestoreInstaller.sh
```

For Terminus Space backups, download the restoration script directly from Terminus Space.

![restore](images/restore.jpg)
