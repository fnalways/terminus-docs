# Install Olares on Raspberry Pi
<OSTabs
  :tabs="[
    { id: 'linux', label: 'Linux', href: '/manual/get-started/install-olares' },
    { id: 'raspberry-pi', label: 'Raspberry Pi', href: null },
    { id: 'macos', label: 'macOS', href: '/manual/get-started/install-olares-mac' },
    { id: 'windows', label: 'Windows', href: '/manual/get-started/install-olares-windows' }
  ]"
  default-tab="raspberry-pi"
/>
Olares is designed to run on Linux-based systems. However, you can also install it on macOS or Windows for testing or evaluation purposes.

## System compatibility
Make sure your Raspbian device meets the following requirements.
- Hardware: Raspberry Pi 4B or Raspberry Pi 5 with 8GB memory
- Operating System: Raspbian 12
- Storage: 64GB (SSD Recommended)

## Set up system environment
1. Configure the Raspbian environment to enable necessary features:

      ```bash
      echo "$(head -1 /boot/firmware/cmdline.txt) cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1" | sudo tee /boot/firmware/cmdline.txt

      echo "kernel=kernel8.img" | sudo tee -a /boot/firmware/config.txt
      ```
2. Bind your local IP to your Ubuntu hostname for stable DNS resolution:

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

3. Reboot your Raspbian device to apply the change.

   ```bash
   sudo reboot
   ```
## Install Olares
Run the following command:

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

1. Enter the root user password.

   ![Enter password](/images/manual/get-started/enter-root-user-password.png)
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