# Install a multi-node Olares cluster
The default Olares installation sets up a single-node cluster. Starting from v1.11.3, Olares supports adding worker nodes. This tutorial explains how to configure a master node and add worker nodes to create a scalable, multi-node Olares cluster.

:::warning Preview feature
This is a preview feature and is not recommended for production environments. It may require additional manual configurations, and some instability or unexpected behavior could occur. If you encounter any issues, please report them to the [Olares GitHub repository](https://github.com/beclab/Olares/issues).
:::
:::info Linux-only support
Currently, Olares only supports adding worker nodes on Linux systems.
:::


## Objectives
In this tutorial, you will learn how to:
- Install Olares on the master node with support for JuiceFS.
- Add a worker node to the cluster.
- Handle potential network changes to ensure the cluster continues to function properly and efficiently.

## Before you begin
Before you begin, make sure the following requirements are met:
- Prior experience with Kubernetes and system administration.
- Both master and worker nodes must be on the same local network.
- Master and worker nodes must have unique hostnames to avoid conflicts.
- The worker node must be able to connect to the master node via SSH. This means:
  - For the root user or a user with `sudo` privileges: add the worker node's SSH public key to the master node's `authorized_keys` file.
  - For non-root user: enable password-based SSH authentication on the master node.

## Step 1: Set up the master node
To set up the master node, run the following command to install Olares with support for JuiceFS:
```bash
export JUICEFS = 1 \
&& curl -sSfL https://olares.sh | bash -
```
This command installs Olares with a built-in MinIO instance as the backend storage. The installation process is identical to a single-node one and will prompt you to enter the domain name, and provide username of your Olares ID.

:::tip Custom storage
If you already have your own MinIO cluster or an S3 (or S3-compatible) bucket, you can configure Olares to use it instead of the built-in MinIO instance.
:::

## Step 2: Add a worker node to the cluster
1. On the worker node, download `joincluster.sh` from https://github.com/beclab/Olares/releases.
2. Run the `joincluster.sh` script with the necessary environment variables. These variables tell the worker node how to connect to the master node. Below is a list of the variables you might need to set:
   - `MASTER_HOST`: The IP address of the master node (required). 
   - `MASTER_NODE_NAME`: The Kubernetes node name of the master node (optional). 
   - `MASTER_SSH_USER`: The username to log in to the master node via SSH. By default, this is root. 
   - `MASTER_SSH_PASSWORD`: The password for the SSH user (required if you're not using SSH keys). 
   - `MASTER_SSH_PRIVATE_KEY_PATH`: The path to the private SSH key for authentication (default: `/root/.ssh/id_rsa`). 
   - `MASTER_SSH_PORT`: The port number for the SSH service on the master node (default: `22`). 

The remaining installation process is identical to a single-node installation and will prompt you to enter the domain name, and provide username of your Olares ID.

:::info
- If `MASTER_SSH_USER` or `MASTER_SSH_PRIVATE_KEY_PATH` is not specified, the script will prompt you interactively to confirm the required parameters.
- Non-root users must provide a password to execute commands with `sudo`. Therefore, using a non-root `MASTER_SSH_USER` without specifying `MASTER_SSH_PASSWORD` is not allowed.
- Environment variables set with `export` will remain active in your current terminal session. Be careful to clear (`unset`) any conflicting variables when switching between different setups.
    ```bash
    unset MASTER_SSH_PRIVATE_KEY_PATH
    ```
:::

## Examples
Here are practical examples to help you understand how to run the `joincluster.sh` script under different scenarios.
### Example 1: Default setup
If the master node IP is `192.168.1.15`, and SSH keys are already set up with the default user (`root`) and port (`22`), run:
```bash
export MASTER_HOST=192.168.1.15
./joincluster.sh
```

### Example 2: Custom SSH key path
If the master node IP is `192.168.1.15`, with SSH port `22` and SSH user `root`, and the worker node uses a custom SSH key located at `/home/olares/.ssh/id_rsa`, run:
```bash
export MASTER_HOST=192.168.1.15 \
    MASTER_SSH_PRIVATE_KEY_PATH=/home/olares/.ssh/id_rsa
./joincluster.sh
```

### Example 3: Non-root user with password
If the master node is at `192.168.1.15`, with SSH port `22`, and the SSH user is `olares` (a sudo-privileged user) with the password `olares`, run:
```bash
export MASTER_HOST=192.168.1.15 \
    MASTER_SSH_USER=olares \
    MASTER_SSH_PASSWORD=olares
./joincluster.sh
```

## Uninstall a worker node
On the worker node, run the following:
```bash
olares-cli olares uninstall
```

## Handle network changes
Once your cluster is set up, changes in network configurations can disrupt the master-worker communication.
### If the network of master node changes
If the master node moves to a different LAN, the Olares system daemon (olaresd) will detect this and trigger a `changeip` event with `olares-cli`.

The master node will continue working, but worker nodes will lose communication with it and stop functioning.

If the master node's IP changes within the same LAN, the worker nodes will still lose communication because they cannot detect the new IP automatically. To resolve this, use the `olares-cli` command on the worker nodes to update the master node's IP address and restart the dependent services:

```bash
sudo olares-cli olares change-ip -b /home/olares/.olares --new-master-host 192.168.1.18
```
where:
- `-b /home/olares/.olares`: Specifies the base directory for Olares (default: `$HOME/.olares`).
- `--new-master-host 192.168.1.18`: Specifies the new IP address of the master node.
### If the network of worker node changes
If a worker node moves to a different LAN, it will lose communication with the master node and stop functioning.

If the worker node's IP changes within the same LAN, olaresd will automatically report the new IP to the master node, and no manual intervention is required.

## Learn more
- [Olares system architecture](../system-architecture.md#distributed-file-system)
- [The system daemon: olaresd](../../developer/install/installation-overview.md#system-daemon-olaresd)
- [Data](../concepts/data.md#juicefs)
- [Olares CLI](../../developer/install/cli/olares-cli.md).
- [Olares environment variables](../../developer/install/environment-variables.md)
- [Install Olares](../get-started/install-olares.md)