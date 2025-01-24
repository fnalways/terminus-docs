# Update Olares
Olares regularly releases new versions with feature improvements and usability enhancements. This guide explains how to check for and install system updates.

:::info Olares admin required
Only Olares admin can perform system updates. Updates will apply to all members within the same Olares cluster.
:::

:::tip
For details on Olares versioning practices and the current limitations regarding cross-minor version upgrades (e.g. `1.10.5` to `1.11.0`), see [Olares versioning](../../developer/install/versioning.md).
:::

## Check and install updates
:::tip
Review the release notes before updating to learn about new features and important changes.
:::

1. Open Settings, and click **System** > **Version**. 
2. Click **Upgrade now** when there is an available new version.

You'll see a confirmation message when update completed.

## Update `olaresd` manually

`olaresd` is the core daemon process of the Olares system responsible for various key management functions. In some cases, upgrading Olares may require manually updating `olaresd` to address issues where certain services fail to function properly.

To confirm if this step is required, refer to the [Release notes](https://github.com/beclab/Olares/releases/).

To update `olaresd` manually:

1. Log in to your Olares host machine.
2. Execute the following command in the terminal:
   ```bash
   curl -SsfL https://dc3p1870nn3cj.cloudfront.net/upgrade_1_11_3.sh | bash -
   ```

:::tip Note
- The script suffix `1_11_3` means to upgrade `olaresd` and `olares-cli` to version `1.11.3`.
- Currently, only the v1.11.3 upgrade script is available, which resolves the issue of being unable to mount external hard drives after upgrading from `1.11.2` to `1.11.3`.
:::