
Olares is designed to run on Linux-based systems. However, you can also install it on macOS or Windows for testing or evaluation purposes.

:::info
Currently, Olares on Windows has certain limitations including:
- Lack of distributed storage support
- Inability to add local nodes.

We recommend using it only for development or testing purposes.
:::
## System compatibility
Make sure your Windows meets the following requirements.
- CPU: 4 cores or above
- RAM: 16 or above (available memory)
- Storage: 64 GB or above (available disk space)
- Supported Systems:
    - Windows 10 or 11
    - Linux (on WSL2): Ubuntu 20.04 LTS or later; Debian 11 or later
## Set up system environment
1. Enable Hyper-V, which is required for virtualization. See [Install Hyper-V on Windows](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v).

2. Temporarily disable Windows Defender Firewall. You can re-enable it after installation is complete. See [Turn Microsoft Defender Firewall on or off](https://support.microsoft.com/en-us/windows/turn-microsoft-defender-firewall-on-or-off-ec0844f7-aebd-0583-67fe-601ecf5d774f).

3. Set the execution policy for the current user.

   a. Open PowerShell as Administrator, then run the following command:
    ```powershell
    Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
    ```
   b. Type `A` and press **Enter** to change the execution policy.

   ![Change execution policy](/images/manual/get-started/change-execution-policy.png)
## Install Olares
1. Click https://windows.olares.sh to download the installation script `publicInstall.latest.ps1`.
2. Once downloaded, double-click the `publicInstall.latest.ps1` file or right-click and select **Run with PowerShell**.
3. When prompted, click **Open** to proceed.
4. Type `R` and press **Enter** to run the script.

   ![Run installation script](/images/manual/get-started/run-installation-script.png)

The script will then start installing Olares.
:::info
If an error occurs during installation, use the following command to uninstall first:
```bash
bash olares-uninstall.sh
```
After uninstalling, retry the installation by running the original installation command.
:::
## Prepare Wizard URL
At the end of the installation process, you will be prompted to enter domain name and Olares ID:
Enter your domain name and Olares ID.

![Enter domain name and Olares ID](/images/manual/get-started/enter-olares-id.png)

For example, if your full Olares ID is `alice123@olares.com`:
- **Domain name**: Press `Enter` to use the default domain name or type `olares.com`.
- **Olares ID**: Enter the prefix of your Olares ID. In this example, enter `alice123`.

Upon completion of the installation, the initial system information, including the Wizard URL and the initial login password, will appear on the screen. You will need them later in the activation stage.

![Wizard URL](/images/manual/get-started/wizard-url-and-login-password.png)

## Next step
Now that you have installed Olares, the next step is to activate your system for use, similar to setting up a new smartphone:
- [Activate Olares](./activate-olares)