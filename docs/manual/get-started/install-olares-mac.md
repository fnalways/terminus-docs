# Install Olares on Mac

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
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
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
At the end of the installation process, you will need to provide some information:
1. Check your Mac's IP address for the network gateway (e.g., `192.168.x.x`). 

   If the automatically retrieved IP address is correct, press `Y`. To enter a different one, press `R` and provide the correct address.
   ::: tip Identify your IP address
   To identify the IP address of a Mac, you can use either the Graphical User Interface (GUI) or the Command Line (CLI).
   - With GUI: Navigate to the **System Settings** (or **System Preferences**) > **Network**, and check the connection's details for the active network connection.
   - With CLI: Open a new Terminal window and use the command `ipconfig getifaddr en0` for Wi-Fi or `ipconfig getifaddr en1` for Ethernet.
   :::
2. Enter your domain name and Olares ID.

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