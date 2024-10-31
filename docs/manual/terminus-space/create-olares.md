---
outline: [2, 3]
---

# Create a cloud-based Olares

Cloud-based Olares offer a convenient deployment option, enabling you to set up a Olares environment without managing hardware directly.
This section provides a step-by-step guide to creating and managing your cloud-based **Olares**. 

::: tip NOTE
- The **Host Service** is currently in an invite-only beta phase. To access the cloud-based Terminus, contact us for an invitation.
- If you are looking for information about setting up a Self-Hosted Terminus, please refer to the [Getting Started Guide](../get-started/index.md).
:::

## Prerequisites

Ensure you get an Orales ID to log in to Orales Space and activate the Orales instance.

## Create an Olares

1. Log in to [Orales Space](https://space.jointerminus.com/) by scanning the QR code using **LarePass**.
2. Navigate to the **Cluster** page and select the second option to start creating.

    ![Basic Configuration](/images/how-to/space/basic_configuration.jpg)
3. Configure the environment for installation as below:
   - **Select Cloud Provider**: Choose a cloud service provider and the data center location closest to your users or workloads.
   - **Hardware Configuration**: Select the instance's CPU, RAM, and storage resources.
   - **Olares Version & Kubernetes Setup**: Choose the appropriate version of Terminus and the Kubernetes/K3S solution to be installed.

    :::tip
    If you intend to host large language models (LLMs), select the **Alibaba Cloud Hong Kong** region. Currently it is the only region that offers instances with shared GPU services.
    :::

4. Review our fees for storage and traffic. 

    ![Storage and Network Fees](/images/how-to/space/storage_and_network.jpg)

    ::: tip NOTE
    Each instance comes with a set amount of free storage and bandwidth. If your usage exceeds these quotas, additional fees will apply based on your cloud provider’s pricing. 
    :::
5. Review your order details, including instance configuration, selected options, and fees.
6. Complete the payment to initiate the installation process.

## Monitor installation

The creation and installation of your cloud-based Terminus typically take around **10 minutes**. During this time, you can monitor the progress and logs in real-time.

### System statuses

The installation follows several key stages, represented by different statuses:

| Status             | Description                                                   |
|--------------------|---------------------------------------------------------------|
| **Unpaid**         | Instance created, awaiting payment. Can be canceled.           |
| **Fetching**       | Payment confirmed, waiting to create resources.                |
| **Queuing**        | Resource creation request has been submitted.                  |
| **Pending**        | Resources created, waiting for OS installation.                |
| **Installing**     | OS installation in progress.                                   |
| **Restoring**      | OS restoration in progress (if using a backup).                |
| **Restore_error**  | Restoration failed, possibly due to an incorrect snapshot password. |
| **Restarting**     | OS is restarting.                                              |
| **Stopping**       | Shutting down the OS machine.                                  |
| **Starting**       | Starting the OS machine.                                       |
| **Running**        | OS is running normally. Can be restarted, stopped, or destroyed.|
| **Stopped**        | OS machine is stopped. Can be restarted or destroyed.          |
| **Errored**        | An error occurred during resource creation or installation.    |
| **Destroying**     | Instance is being destroyed.                                   |
| **Destroyed**      | Instance has been destroyed.                                   |
| **Canceled**       | Instance canceled, either actively or due to unpaid bills.     |
| **Pending Activation** | Waiting for activation. OS will run once activated.         |

### Real-time logs

Click on **Log** to view detailed logs and monitor the installation process in real time.

## Activate Orales  

When the installation enters the **Pending Activation** state, activate Orales as described below:

1. Click the **Activation** button. A pop-up window will display the **Orales ID**, **one-time password**, and a **Wizard URL**.

    ![One Time Password](/images/how-to/space/one_time_password.jpg)

2. Access the wizard URL in your browser, and use the one-time password to log into Olares for the first time. 
3. Change the Orales password via **TermiPass** when prompted. 
4. Follow the on-screen instructions to finish the rest of activation process. 