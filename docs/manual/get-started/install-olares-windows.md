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

    - **Hyper-V**
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
   Running PowerShell without administrator privileges may cause the installation to fail. 
   :::

3. When prompted, click **Open** to proceed.
4. Type `R` and press **Enter** to run the script. The installation process for Olares will start.

   ![Run installation script](/images/manual/get-started/run-installation-script.png)

5. Set up the firewall rules. Type `yes` to automatically configure them, or type `no` to skip this step. <br>
   If you choose to skip, follow the on-screen instructions to manually add TCP inbound rules for ports `80`, `443`, and `30180`.

   ![Set up firewall rules](/images/manual/get-started/set-up-firewall-rules.png)

:::tip Root user password
During the installation, you may be prompted to enter your root password.
:::

:::info Errors during installation?
If an error occurs during installation, use the following command to uninstall first:
```bash
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