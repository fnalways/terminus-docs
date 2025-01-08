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
- Storage: 64 GB or above (available disk space)
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

2. Set the execution policy for the current user.

   a. Open PowerShell as administrator, then run the following command:
    ```powershell
    Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
    ```
   b. Type `A` and press **Enter** to change the execution policy.

   ![Change execution policy](/images/manual/get-started/change-execution-policy.png)

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
   Run only scripts that you trust. While scripts from the internet can be useful, this script can potentially harm your computer. If you trust this script, use the Unblock-File mdlet to allow the script to run without this warning message. Do you want to run
   publicInstall.latest.ps1?
   [D] Do not run [R] Run once [S] Suspend [?] Help (default is "D"):
   ```

4. When prompted with the firewall rules setup, type `yes` to automatically configure them, or type `no` to skip this step. <br>
   If you choose to skip, either [disable Windows Firewall Defender](#how-to-disable-windows-defender-firewall), or [manually add TCP inbound rules](#how-to-manually-set-firewall-rules).

   ```powershell
   Accessing Olares requires setting up firewall rules, specifically adding TCP inbound rules for ports 80, 443, and 30180.
   Do you want to set up the firewall rules? (yes/no):
   ```

:::tip Root user password
During the installation, you may be prompted to enter your root password.
:::

:::info Errors during installation?
If an error occurs during installation, use the following command to uninstall first:
```powershell
olares-cli.exe olares uninstall
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
- Or press Win + R, type `powershell`, and press Ctrl + Shift + Enter to open PowerShell as an administrator.

### How to configure the CPU and memory for WLS?
When installing Olares in WSL, the default memory allocation is `12GB`.

To adjust the memory allocated to WSL _before installation_, add a user environment variable `WSL_MEMORY`. For example, to allocate 16GB, simply set the variable to `16`.
   :::tip
   If you already have a PowerShell window open, changes to environment variables will not take effect in the current session. To ensure the updated environment variables are loaded, open a new PowerShell terminal as administrator, and then run the installation script.
   :::

After installation, a configuration file named `.wslconfig` will be created in the current user's home directory (`C:\Users\<YourUsername>\`). This file allows you to adjust memory and CPU settings. The default configuration looks like this:

```bash
[wsl2]
memory=12GB
swap=0GB
```

For example, to use 4 CPU cores, add the `processors` parameter to the file:
```bash
[wsl2]
memory=12GB
processors=4
swap=0GB
```

To apply these changes:

1. Save the `.wslconfig` file with your custom changes. 
2. Close all running virtual machines by running the following command in PowerShell:
   ```powershell
   wsl --shutdown
   ```
3. Restart Olares by running:
   ```powershell
   wsl -d Ubuntu
   ```
It will take a few minutes for Olares services to restart.

### How to reactivate Olares after the PC restarts?
Run the following command in PowerShell to restart the Olares service:
```powershell
wsl -d Ubuntu
```

### How to disable Windows Defender Firewall?
:::tip
You can turn on Windows Defender Firewall when the Olares installation completes.
:::
To completely disable the firewall:
1. Open **Control Panel** > **System and Security** > **Windows Defender Firewall**.
2. In the navigation pane, click **Turn Windows Defender Firewall on or off**.
3. Select **Turn off Windows Defender Firewall** for both private and public networks, then click **OK**.

### How to manually set firewall rules?
If you choose not to configure firewall rules during installation, follow these steps to set them manually:
1. Open **Control Panel** > **System and Security** > **Windows Defender Firewall**.

   ![Navigate to Windows Defender Firewall](/images/manual/get-started/select-firewall.png)

2. In the navigation pane, select **Advanced settings**.

   ![Select Advanced settings](/images/manual/get-started/select-advanced-settings.png)
3. In the navigation pane, right-click **Inbound Rules** and select **New Rule**.

   ![Add new rule](/images/manual/get-started/add-new-rule.png#bordered)
4. In the **New Inbound Rule Wizard**, select **Port** and click **Next**.

   ![Select Port](/images/manual/get-started/select-port.png#bordered)
5. In **Specific local ports**, enter `80`, `443`, `30180`, and click **Next**.

   ![Sepecify Port](/images/manual/get-started/specify-port.png#bordered)
6.  Select **Allow the connection** and click **Next**.

   ![Allow the connection](/images/manual/get-started/allow-the-connection.png#bordered)

7. Confirm the rules apply to **Domain**, **Private**, and **Public**, then click **Next**.

   ![Confirm rules](/images/manual/get-started/confirm-rules.png#bordered)
8. Provide a name for the rule and click **Finish**.

   ![Name the rule](/images/manual/get-started/name-the-rule.png#bordered)

### How to uninstall Olares?
Run the following command in PowerShell:
```powershell
olares-cli.exe olares uninstall
```