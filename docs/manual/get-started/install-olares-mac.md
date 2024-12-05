

Olares is designed to run on Linux-based systems. However, you can also install it on macOS or Windows for testing or evaluation purposes.

:::info
Currently, Olares on Mac has certain limitations including:
- Lack of distributed storage support.
- Inability to add local nodes.

We recommend using it only for development or testing purposes.
:::
## System compatibility
Make sure your Mac meets the following requirements.
- Architecture: X86-64 or ARM64
- RAM: 8 GB or above (available memory)
- Storage: 90 GB or above (available disk space)
- MacOS: Monterey (12) or later

## Before you begin
Ensure you have the following installed:
- [Docker](https://www.docker.com/products/docker-desktop/)
- [MiniKube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fhomebrew)
    ::: tip
    It's recommended to install via `homebrew`.
    :::

## Set up system environment
1. In Docker Desktop, navigate to **Settings** > **Resources**, and configure as below:
    - **CPU limit**: Set to at least 4 CPUs
    - **Memory limit**: Set to at least 9 GB
    - **Virtual disk limit**: Set to at least 80 GB

   ![Update resource settings (example)](/images/manual/get-started/docker-resources-settings.png)
2. Click **Apply & restart** to implement the changes.
## Install Olares
In terminal, run the following command:

 ```bash
 curl -fsSL https://olares.sh |  bash -
 ```
:::info
If an error occurs during installation, use the following command to uninstall first:
```bash
bash olares-uninstall.sh
```
After uninstalling, retry the installation by running the original installation command.
:::
## Prepare Wizard URL
At the end of the installation process, you will be prompted to enter domain name and Olares ID:
1. When prompted, enter your Mac's IP address for the network gateway (e.g., `192.168.x.x`).
   ::: tip
   Find your IP in **System Settings** > **Network**.
   :::
2. Enter your domain name and Olares ID.

   ![Enter domain name and Olares ID](/images/manual/get-started/enter-olares-id.png)

   For example, if your full Olares ID is `alice123@olares.com`:
    - **Domain name**: Press `Enter` to use the default domain name or type `olares.com`.
    - **Olares ID**: Enter the prefix of your Olares ID. In this example, enter `alice123`.

Upon completion of the installation, the initial system information, including the Wizard URL and the initial login password, will appear on the screen. You will need them later in the activation stage.

![Wizard URL](/images/manual/get-started/wizard-url-and-login-password.png)

## Next step
Now that you have installed Olares, the next step is to activate your system for use, similar to setting up a new smartphone:
- [Activate Olares](./activate-olares)