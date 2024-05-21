---
outline: [2, 3]
---

# Create Terminus

To create a Terminus, please first confirm your account type. Visit [account](../account.md#account-type) to learn more about your account information.

:::info NOTE
Since our **Host Service** is in an invite-only beta phase, not all **Terminus Name** can create a cloud-based Terminus.
:::

If you want to use the cloud-based Terminus, please contact us to get an invitation to the **Host Service**. If you are invited, click the second option on the guide page to create a **cloud-based Terminus**.

![alt text](/images/how-to/space/create_terminus.jpg)

If you are not invited to the cloud-based Terminus but have a spare server with more than 8GB of RAM and more than 50GB of disk space, you can try [installing Terminus](../../terminus/setup/install.md).

## Basic Configuration

![alt text](/images/how-to/space/basic_configuration.jpg)

1. Select the cloud service provider and their data center location.
2. Choose the hardware configuration for the instance.
3. Choose the Terminus version and the Kubernetes/K3S solution to be installed.
4. After confirming the details, proceed to the next step.

:::tip
To try Stable Diffusion on Terminus, choose the Alibaba Cloud Hong Kong region. At present, it is the only region that offers shared GPU services.
:::


## Storage and Network

![alt text](/images/how-to/space/storage_and_network.jpg)

Please review our fees for storage and traffic. Each instance includes a certain amount of free storage and traffic. Any usage exceeding these quotas will incur progressively increasing charges.

## Confirm Order

![alt text](/images/how-to/space/confrim.jpg)

Please confirm the order. After you complete the payment, the Terminus will begin to install. Please wait for the installation to complete and follow the guidance to [activate your Terminus](../../terminus/setup/wizard.md).

## Data on Panel During Terminus Creation

![alt text](/images/how-to/space/data_on_panel_during_terminus_creation.jpg)

The creation process takes approximately 10 minutes. During this time, you can view logs and monitor status changes in real-time.

### Status

You can monitor the status of Terminus during the installation process. Usually, it progresses through these main stages: **Queuing**, **Installing**, **Waiting for Activation**, and **Running**.

- If "Waiting for activation" appears, you can start the Terminus device.
- If "Errored" appears, try reinstalling or get in touch with us for help.
- If "Running" appears, the system is on and working fine.

Here is a list of the system status:

| Status           | Description                                 |
| ---------------- | ------------------------------------------- |
| Unpaid           | Created and waiting for payment. Can be canceled. |
| Fetching         | Payment made, waiting to create resources.  |
| Queuing          | Resource creation request submitted.        |
| Pending          | Resources created, waiting for OS installation. |
| Installing       | OS installation in progress.                |
| Restoring        | OS restoration in progress.                 |
| Restore_error    | OS restoration failed (may due to incorrect snapshot password), you can reset password to continue. |
| Restarting       | OS restarting.                              |
| Stopping         | OS machine shutting down.                   |
| Starting         | OS machine starting up.                     |
| Running          | OS running normally. Can be destroyed, restarted, stopped. |
| Stopped          | OS machine stopped. Can be destroyed, started. |
| Errored          | Error, may be due to resource creation or installation error. Can be destroyed. |
| Destroying       | Being destroyed.                            |
| Destroyed        | Destroyed.                                  |
| Canceled         | Canceled, can be actively canceled if unpaid, automatically canceled if the initial bill is not paid on time. |
| Pending activation | Awaiting activation,OS will start running once activated. |

### Log

You can also click on "Log" to monitor detailed installation information in real-time.

### One Time Password

![alt text](/images/how-to/space/one_time_password.jpg)

When Terminus is in the "Pending activation" state, click the **'Activation'** button in the top right corner. A pop-up dialog will display the bound **Terminus Name**, **One Time Password**, and **Wizard URL**.

You can use the **One Time Password** to log into **Terminus**. You need to change your **Terminus** password in the **TermiPass** during activation. See the [activation process](../../terminus/setup/wizard.md) for details.
