# Install Olares on Windows

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
- Storage: SSD with 64GB or more of available space
- Supported systems:
    - Windows 10 or 11
    - Linux (on WSL2): Ubuntu 20.04 LTS or later; Debian 11 or later
## Set up system environment
1. Enable the required Windows features for virtualization.

   a. Open **Control Panel**, then go to **Programs** > **Programs and Features** > **Turn Windows features on or off**.

   b. In the **Windows Features** window, check:
    - **Hyper-V** (not required for Windows 10 Home and Windows 11 Home)
    - **Windows Subsystem for Linux**
    - **Virtual Machine Platform**

   c. Click **OK** and restart your computer when prompted.

2. Temporarily disable Windows Defender Firewall. You can re-enable it after installation is complete.

   a. Open **Control Panel** > **System and Security** > **Windows Defender Firewall**.

   b. In the navigation pane, click **Turn Windows Defender Firewall on or off**.

   c. Select **Turn off Windows Defender Firewall** for both private and public networks, then click **OK**.

   ![Turn off Windows Defender Firewall](/images/manual/get-started/disable-firewall.png)
3. Set the execution policy for the current user.

   a. Open PowerShell as administrator, then run the following command:
    ```powershell
    Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
    ```
   b. When prompted to check whether to change the execution policy, type `A` and press **Enter** to confirm.

    ```powershell
    Execution Policy Change
    The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose
    you to the security risks described in the about_Execution_Policies help topic at
    https:/go.microsoft.com/fwlink/?LinkID-135170. Do you want to change the execution policy?
    [Y] Yes [A] Yes to All [N] No [L] No to All [S] Suspend [?] Help (default is "N"):
    ```

## Install Olares
1. Click https://windows.olares.sh to download the installation script `publicInstall.latest.ps1`.

2. Execute the script.
   
   a. Open PowerShell as administrator, then navigate to the folder where the script is located. For example, if the script is in the `Downloads` folder, run the following command:
   ```powershell
   cd C:\Users\<YourUsername>\Downloads
   ```
   
   b. Once in the correct folder, run the following command:
   ```powershell
   .\publicInstall.latest.ps1
   ```
  
   :::warning Administrator privileges required 
   Running PowerShell without administrator privileges will cause the installation to fail. See [How to make sure I am using PowerShell as administrator](#how-to-make-sure-i-am-using-powershell-as-administrator).
   :::

3. When prompted with security warning, type `R` and press **Enter** to run the script once. The installation process for Olares will start.

   ```powershell
   Security warning
   Run only scripts that you trust. While scripts from the internet can be useful, this script can potentially harm your computer. If you trust this script, use the Unblock-File cmdlet to allow the script to run without this warning message. Do you want to run
   publicInstall.latest.ps1?
   [D] Do not run [R] Run once [S] Suspend [?] Help (default is "D"):
   ```

:::tip Root user password
During the installation, you may be prompted to enter your root password.
:::

:::info Errors during installation?
If an error occurs during installation, use the following command to uninstall first:
```powershell
wsl --unregister ubuntu
```
After uninstalling, retry the installation by running the original installation command.
:::
## Prepare Wizard URL
At the end of the installation process, you will be prompted to enter your domain name and Olares ID.

![Enter domain name and Olares ID](/images/manual/get-started/enter-olares-id.png)

For example, if your full Olares ID is `alice123@olares.com`:
- **Domain name**: Press `Enter` to use the default domain name or type `olares.com`.
- **Olares ID**: Enter the prefix of your Olares ID. In this example, enter `alice123`.

Upon completion of the installation, the initial system information, including the Wizard URL and the initial login password, will appear on the screen. You will need them later in the activation stage.

![Wizard URL](/images/manual/get-started/wizard-url-and-login-password.png)

## Activate Olares

Use the Wizard URL and initial one-time password to activate. This process connects the Olares device with your Olares ID using LarePass.

1. Enter the Wizard URL in your browser. You will be directed to the welcome page. Press any key to continue.

   ![Open wizard](/images/manual/get-started/open-wizard.png)
2. Enter the one-time password and click **Continue**.

   ![Enter password](/images/manual/get-started/wizard-enter-password.png)
3. Select the system language.

   ![Select language](/images/manual/get-started/select-language.png)
4. Activate Olares using LarePass app.

   a. Open LarePass app, and tap **Scan QR code** to scan the QR code on the Wizard page and complete the activation.
   :::warning Same network required
   To avoid activation failures, ensure that both your phone and the Olares device are connected to the same network.
   :::
   ![Activate Olares](/images/manual/get-started/activate-olares.png)

   b. Reset the login password for Olares by following the on-screen instructions on LarePass.

After successful setup, the LarePass app will automatically go to the home screen, and the Wizard will redirect you to the login page.

## Log in to Olares

Securely access Olares with a two-step verification process.

1. On the login page, enter your Olares login password.

   ![Log in](/images/manual/get-started/log-in.png)
2. You will be prompted to complete the two-factor verification. You can confirm login on LarePass, or manually enter the 6-digit verification code.
     ::: info
     The verification code is time-sensitive. Ensure you enter it before it expires. If it does, you will need to generate a new code.
     :::

   ![Confirm login](/images/manual/get-started/confirm-login.png)

   Once you've logged in, you'll be directed to the Olares desktop.🎉

## Protect your Olares ID

You're almost ready to start using Olares! Before diving in, it's crucial to ensure your Olares ID is securely backed up. Without this step, you won't be able to recover Olares ID if needed.

- [Back up your mnemonic phrase](./back-up-mnemonics.md)

## FAQ

### How to make sure I am using PowerShell as administrator?
You can confirm that PowerShell is running as an administrator if you see "Administrator: Windows PowerShell" in the title bar of the PowerShell window.

![Confirm run Powershell as administrator](/images/manual/get-started/confirm-run-powershell-as-admin.png#bordered)

If not, use one of the following methods:
- Search for "PowerShell" in the **Start** menu, right-click it, and select **Run as administrator**.
- Or press **Win** + **R**, type `powershell`, and press **Ctrl** + **Shift** + **Enter** to open PowerShell as an administrator.

### How to configure the CPU and memory for WLS?
When installing Olares in WSL, the default memory allocation is `12GB`. But you can configure the memory before Olares installation, or adjust both memory and CPU settings after installation.

**Adjust the memory setting before installation**

For example, to allocate 16GB of memory:

1. Add a user variable with the following:
   - **Variable name**: `WSL_MEMORY`
   - **Variable value**: `16`

   ![Add user variable](/images/manual/get-started/add-user-variable.png)

2. Click **OK** to apply changes.

   :::tip
   If you already have a PowerShell window open, changes to environment variables will not take effect in the current session. To ensure the updated environment variables are loaded, open a new PowerShell terminal as administrator, and then run the installation script.
   :::

**Adjust memory and CPU settings after installation**

After installation, a configuration file named `.wslconfig` will be created in the current user's home directory (`C:\Users\<YourUsername>\`). This file allows you to adjust memory and CPU settings. The default configuration looks like this:

```bash
[wsl2]
memory=12GB
swap=0GB
```

For example, to use 4 CPU cores:
1. Add the `processors` parameter to the file:
   ```bash
   [wsl2]
   memory=12GB
   processors=4
   swap=0GB
   ```
2. Save the `.wslconfig` file with your custom changes. 
3. Close all running virtual machines by running the following command in PowerShell:
   ```powershell
   wsl --shutdown
   ```
4. Restart Olares by running:
   ```powershell
   wsl -d Ubuntu
   ```
It will take a few minutes for Olares services to restart.

### How to reactivate Olares after the PC restarts?
Run the following command in PowerShell to restart the Olares service:
```powershell
wsl -d Ubuntu
```
### How to uninstall Olares?
Run the following command in PowerShell:
```powershell
wsl --unregister ubuntu
```