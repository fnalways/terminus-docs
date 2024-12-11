

Olares is designed to run on Linux-based systems. However, you can also install it on macOS or Windows for testing or evaluation purposes.

## System compatibility

Make sure your Linux device meets the following requirements.

- CPU: 4 cores or above
- RAM: 8GB or above (available memory)
- Storage: 64GB or above (available disk space)
- Supported Systems:
  - Ubuntu 22.04 LTS or later
  - Debian 11 or later

## Install Olares

Run the following command:

```bash
curl -fsSL https://olares.sh |  bash -
```

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
