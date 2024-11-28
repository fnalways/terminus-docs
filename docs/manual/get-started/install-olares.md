# Install Olares

Olares is designed to run on Linux-based systems. However, you can also install it on macOS or Windows for testing or evaluation purposes.

## Set up system environment

<Tabs>
<template #Linux>

1. Make sure your Linux device meets the following requirements.
    - CPU: 4 cores or above
    - RAM: 8GB or above (available memory)
    - Storage: 64GB or above (available disk space)
    - Supported Systems:
        - Ubuntu 20.04 LTS or later
        - Debian 11 or later
2. Bind your local IP to your Ubuntu hostname for stable DNS resolution:

   ```bash
   sudo apt install net-tools
   ifconfig
   # Get your local IP. Make sure it starts with `192.168`.
   ```

   ```bash {2}
   sudo nano /etc/hosts
   192.168.xx.xx   linux  # Add this line
   # Replace with your actual local IP and your host name.
   ```

3. Reboot your Ubuntu to apply the change.

   ```bash
   sudo reboot
   ```
</template>

<template #Raspberry-Pi>

1. Make sure your Raspbian device meets the following requirements.
    - Hardware: Raspberry Pi 4B or Raspberry Pi 5 with 8GB memory
    - Operating System: Raspbian 12
    - Storage: 64GB (SSD Recommended)
2. Configure the Raspbian environment to enable necessary features:

      ```bash
      echo "$(head -1 /boot/firmware/cmdline.txt) cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1" | sudo tee /boot/firmware/cmdline.txt

      echo "kernel=kernel8.img" | sudo tee -a /boot/firmware/config.txt
      ```
3. Bind your local IP to your Ubuntu hostname for stable DNS resolution:

   ```bash
   sudo apt install net-tools
   ifconfig
   # Get your local IP. Make sure it starts with `192.168`.
   ```

   ```bash {2}
   sudo nano /etc/hosts
   192.168.xx.xx   raspberrypi  # Add this line
   # Replace with your actual local IP and your host name.
   ```

4. Reboot your Raspbian device to apply the change.

   ```bash
   sudo reboot
   ```
</template>

<template #macOS>

:::info
Currently, Olares on Mac has certain limitations including:
- Lack of distributed storage support.
- Inability to add local nodes. 

We recommend using it only for development or testing purposes.
:::

1. Make sure your Mac meets the following requirements.
    - Architecture: X86-64 or ARM64
    - RAM: 8 GB or above (available memory)
    - Storage: 90 GB or above (available disk space)
    - MacOS: Monterey (12) or later
    - [Docker](https://www.docker.com/products/docker-desktop/) and [MiniKube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fhomebrew) installed
      ::: tip
      For MiniKube, it's recommended to install via `homebrew`.
      :::
2. In Docker Desktop, navigate to **Settings** > **Resources**, and configure as below:
    - **CPU limit**: Set to at least 4 CPUs
    - **Memory limit**: Set to at least 9 GB
    - **Virtual disk limit**: Set to at least 80 GB
   
     ![Update resource settings (example)](/images/manual/get-started/docker-resources-settings.png)
3. Click **Apply & restart** to implement the changes.
</template>

<template #Windows>

:::info
Currently, Olares on Windows has certain limitations including:
- Lack of distributed storage support
- Inability to add local nodes.

We recommend using it only for development or testing purposes.
:::

:::info
Before installation, ensure Windows Defender Firewall is disabled temporarily during the installation process. You can re-enable it after installation is complete. This is required for proper WSL communication and initial Olares setup.
:::

1. Make sure your Windows meets the following requirements.
    - CPU: 4 cores or above
    - RAM: 16 or above (available memory)
    - Storage: 64 GB or above (available disk space)
    - Supported Systems:
        - Windows 10 or 11
        - Linux (on WSL2): Ubuntu 20.04 LTS or later; Debian 11 or later

2. Set the execution policy for the current user.

   a. Open PowerShell as Administrator, then run the following command:
    ```powershell
    Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
    ```
   b. Type `A` and press **Enter** to change the execution policy.

   ![Change execution policy](/images/manual/get-started/change-execution-policy.png)
</template>
</Tabs>

## Install Olares

<Tabs>
<template #Linux-and-Raspberry-Pi>

Run the following command:

 ```bash
 curl -fsSL https://olares.sh |  bash -
 ```

</template>
<template #macOS>

In terminal, run the following command:

 ```bash
 curl -fsSL https://olares.sh |  bash -
 ```

</template>
<template #Windows>

1. Click https://windows.olares.sh to download the installation script `publicInstall.latest.ps1`.
2. Once downloaded, double-click the `publicInstall.latest.ps1` file or right-click and select **Run with PowerShell**.
3. When prompted, click **Open** to proceed.
4. Type `R` and press **Enter** to run the script.

   ![Run installation script](/images/manual/get-started/run-installation-script.png)

The script will then start installing Olares.
</template>
</Tabs>

:::info
If an error occurs during installation, use the following command to uninstall first:
```bash
bash olares-uninstall.sh
```
After uninstalling, retry the installation by running the original installation command.
:::

## Enter Olares ID

At the end of the installation process, you will be prompted to enter domain name and Olares ID:
<Tabs>
<template #Linux-and-Raspberry-Pi>

1. Enter the root user password.

   ![Enter password](/images/manual/get-started/enter-root-user-password.png)
2. Enter your domain name and Olares ID.

   ![Enter domain name and Olares ID](/images/manual/get-started/enter-olares-id.png)

   For example, if your full Olares ID is `alice123@olares.com`:
   - **Domain name**: Press `Enter` to use the default domain name or type `olares.com`.
   - **Olares ID**: Enter the prefix of your Olares ID. In this example, enter `alice123`.
</template>
<template #macOS>

1. When prompted, enter your Mac's IP address for the network gateway (e.g., 192.168.x.x).
::: tip
Find your IP in **System Settings** > **Network**.
:::
2. Enter your domain name and Olares ID.

   ![Enter domain name and Olares ID](/images/manual/get-started/enter-olares-id.png)

   For example, if your full Olares ID is `alice123@olares.com`:
   - **Domain name**: Press `Enter` to use the default domain name or type `olares.com`.
   - **Olares ID**: Enter the prefix of your Olares ID. In this example, enter `alice123`.

</template>

<template #Windows>

Enter your domain name and Olares ID.

![Enter domain name and Olares ID](/images/manual/get-started/enter-olares-id.png)

For example, if your full Olares ID is `alice123@olares.com`:
   - **Domain name**: Press `Enter` to use the default domain name or type `olares.com`.
   - **Olares ID**: Enter the prefix of your Olares ID. In this example, enter `alice123`.

</template>
</Tabs>

Upon completion of the installation, the initial system information, including the Wizard URL and the initial login password, will appear on the screen. You will need them later in the activation stage.

![Wizard URL](/images/manual/get-started/wizard-url-and-login-password.png)

## Next step
Now that you have installed Olares, the next step is to activate your system for use, similar to setting up a new smartphone:
- [Activate Olares](./activate-olares)
