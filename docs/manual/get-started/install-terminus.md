# Install Terminus

Terminus is designed to run on Linux-based systems. However, you can also install it on macOS or Windows for testing or evaluation purposes.

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
Currently, Terminus on Mac has certain limitations including:
- Lack of distributed storage support
- Inability to add local nodes. 
We recommend using it only for development or testing purposes.
:::

1. Make sure your Mac meets the following requirements.
    - Architecture: X86-64 or ARM64
    - RAM: 8GB or above (available memory)
    - Storage: 64GB or above (available disk space)
    - MacOS: Monterey (12) or later
    - [Docker](https://www.docker.com/products/docker-desktop/) and [MiniKube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fhomebrew) installed
      ::: tip
      For MiniKube, it's recommended to install via `homebrew`.
      :::
2. In Docker Desktop, navigate to **Settings** > **Resources**, and configure as below:
    - CPU limit: Set to at least 4 CPUs
    - Memory limit: Set to at least 9 GB

3. Click **Apply & Restart** to implement the changes.
</template>

<template #Windows>

:::info
Currently, Terminus on Windows has certain limitations including:
- Lack of distributed storage support
- Inability to add local nodes.

We recommend using it only for development or testing purposes.
:::

:::info
Before installation, ensure Windows Defender Firewall is disabled temporarily during the installation process. You can re-enable it after installation is complete. This is required for proper WSL communication and initial Terminus setup.
:::

1. Make sure your Windows meets the following requirements.
    - CPU: 4 cores or above
    - RAM: 16 or above (available memory)
    - Storage: 64GB or above (available disk space)
    - Supported Systems:
        - Windows 10 or 11
        - Linux (on WSL2): Ubuntu 20.04 LTS or later; Debian 11 or later
2. Create a `.wslconfig` file in your Windows user directory (typically `C:\Users\{YourUsername}\`) with the following content:

   ```bash
   [wsl2]
   memory=16GB 
   swap=0GB
   ```

3. Open PowerShell as Administrator and run the following commands to install Ubuntu in your WSL environment:

   ```PowerShell
   wsl --install -d Ubuntu-22.04
   wsl --update
   ```

   :::info
   You may need to restart your system after Ubuntu is installed if it's the first time installing WSL.
   :::

4. In PowerShell, run the following command to obtain Windows host IP:

   ```PowerShell
   netsh interface ipv4 show addresses
   ```

   Note the IP Address of your WLAN or Ethernet interface. It should start with `192.xxx`. You will need it when installing Terminus.

5. Set up port forwarding for your WSL server.

   a. Get the IP address of the WSL server.

      ```PowerShell
      wsl ip address show eth0 `| grep inet `| grep -v inet6 `| cut -d ' ' -f 6 `| cut -d '/' -f 1
      # This typically returns an IP address in format of "172.xx.xx.xx"
      ```
   b. Set up port forwarding rules:

      ```PowerShell
      netsh interface portproxy add v4tov4 listenport=80 listenaddress=0.0.0.0 connectport=80 connectaddress=<addr for hostname>
      netsh interface portproxy add v4tov4 listenport=443 listenaddress=0.0.0.0 connectport=443 connectaddress=<addr for hostname>
      netsh interface portproxy add v4tov4 listenport=30180 listenaddress=0.0.0.0 connectport=30180 connectaddress=<addr for hostname>
      
      # Replace <addr for hostname> with the IP address you get from step a.
      ```

6. Configure the Ubuntu environment.

   a. Open the Start menu and search for `Ubuntu-22.04`, and click on the Ubuntu icon to launch your Linux environment.

      ```PowerShell
      wsl -d Ubuntu-22.04
      ```

   b. In Ubuntu, modify the `/etc/wsl.conf` file as specified below.

   ::: tip NOTE
   Make sure you open the file with sudo privileges.
   :::

      ```bash {3,6,7}
      [boot] 
      systemd=true  
      command="mount --make-rshared /"   # Add this line
      [network]
      generateHosts = false
      generateResolvConf = false # Allow manually managing hosts file and DNS settings
      hostname=terminus # Set the hostname for the WSL instance
      ```

   c. Shut down Ubuntu in PowerShell and restart it.

      ```PowerShell
      wsl --shutdown Ubuntu-22.04
      ```

   d. In Ubuntu, modify the hosts file and the `resolv.conf` file:

      ```bash
      sudo sh -c "echo \"127.0.0.1 localhost\n \
      $(ip -4 addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}') $(hostname)\" > /etc/hosts && \
      echo \"nameserver 1.1.1.1\nnameserver 1.0.0.1\" > /etc/resolv.conf"
      ```
   This command binds Ubuntu's local IP with the host name, and configures DNS resolution to use Cloudflare's public DNS servers.

</template>
</Tabs>

## Install Terminus

<Tabs>
<template #Linux-and-Raspberry-Pi>

Run the following command:

- To install the latest version:

    ```bash
    curl -fsSL https://terminus.sh |  bash -
    ```

- To install a specific version:

    ```bash       
    curl -sSfL https://github.com/beclab/Terminus/releases/download/${VERSION}/install.sh | bash -
    ```
</template>
<template #macOS>

In terminal, run the following command:

- To install the latest version:

    ```bash
    curl -fsSL https://terminus.sh |  bash -
    ```

- To install a specific version:

    ```bash       
    curl -sSfL https://github.com/beclab/Terminus/releases/download/${VERSION}/install.sh | bash -
    ```
</template>
<template #Windows>

1. Within the WSL Ubuntu environment, run the following command:

    - To install the latest version:

    ```bash
    curl -fsSL https://terminus.sh |  bash -
    ```

    - To install a specific version:

    ```bash       
    curl -sSfL https://github.com/beclab/Terminus/releases/download/${VERSION}/install.sh | bash -
    ```

2. During installation, enter the Windows host IP (`192.168.xxx.xxx`) you obtained earlier.
3. press **Enter** to proceed.

![Install Windows IP](/images/overview/terminus/install-windows-ip.jpeg)

</template>
</Tabs>

:::info
Replace `${version}` with the current daily build version number. Check the [Terminus repository](https://github.com/beclab/terminus) for the latest version.
:::

:::info
If an error occurs during installation, use the following command to uninstall first:
```bash
bash uninstall_cmd.sh
```
After uninstalling, retry the installation by running the original installation command.
:::

## Enter Terminus Name

At the end of the installation process, you will be prompted to enter domain name and Terminus Name.

![alt text](/images/how-to/terminus/enter_terminus_name.png)
For example, if your full Terminus Name is `alice123@myterminus.com`:
- **Domain name**: Press `Enter` to use the default domain name or type `myterminus.com`.
- **Terminus Name**: Enter the prefix of your Terminus Name. In this example, enter `alice123`.

Upon completion of the installation, the initial system information, including the Wizard URL and the initial login password, will appear on the screen. You will need them later in the activation stage.

![alt text](/images/how-to/terminus/one_time_password.png)

## Next step

- [Activate Terminus](./activate-terminus.md)