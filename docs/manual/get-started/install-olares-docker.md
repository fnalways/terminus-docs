---
outline: [2, 3]
---
# Install Olares using Docker image

You can use Docker to install and run Olares in a containerized environment. This guide explains how to set up Olares using the Docker command line interface (CLI), prepare the installation environment, activate Olares, and manage the container lifecycle.

## System requirements
Make sure your device meets the following requirements.

- CPU: At least 4 cores
- RAM: At least 8GB of available memory
- Storage: At least 64GB of available space (SSD recommended)

## Before you begin
Before you begin, ensure the following:

- [Docker](https://www.docker.com/) is installed and running on your system.
- You have [created an Olares ID via LarePass](create-olares-id.md).

## Run Olares using the Docker CLI

To run the latest stable version of Olares, execute the following command:
```bash
docker run --network host -d --privileged -v oic-data:/var --name oic beclab/olares:latest
```
where:
- `--network host`: Shares the host's network stack with the container, allowing the container to communicate through the host's network interfaces.
- `-d`: Runs the container in detached mode, so it runs in the background.
- `--privileged`: Grants the container elevated privileges.
- `-v oic-data:/var`: Binds a Docker volume (`oic-data`) to the `/var` directory inside the container to persist data.
- `--name oic`: Names the container `oic` for easier reference.
- `beclab/olares:latest`: Specifies the Olares Docker image and version.

:::warning Do not add the `--rm` flag
The `--rm` flag automatically deletes the container after it stops. If this happens, you will not be able to restart the container and will need to uninstall and reinstall Olares to run it again. Without the `--rm` flag, the container persists after it stops, so you can restart it later using the `docker start` command.
:::

## Prepare installation environment for Olares
Once the container is running, run the following:
```bash
docker exec -it oic olares-install
```
This command sets up Olares to the "Prepare" phase. After this step, you can continue installing and activating Olares using LarePass.
## Install and activate Olares

:::warning Same network required
To avoid activation failures, ensure that both your phone and the Olares device are connected to the same network.
:::

1. Open LarePass, on your account activation page, tap **Discover nearby Olares**.
2. Select your self-hosted Olares device, and tap **Install now**.
3. When the installation completes, tap **Activate now**. Olares will enter the activation process, including initial configuration and network setup.
4. Follow the on-screen instructions to reset the login password for Olares, then tap **Complete**.

Once activation is complete, LarePass will display the desktop address of your Olares device, such as `https://desktop.marvin123.olares.com`.

## Log in to Olares

Securely access Olares with a two-step verification process.

1. Enter the Olares desktop address in your browser, and press any key to continue.
2. On the login page, enter your Olares login password.

   ![Log in](/images/manual/get-started/log-in.png)
3. You will be prompted to complete the two-factor verification. You can confirm login on LarePass, or manually enter the 6-digit verification code.
   ::: info
   The verification code is time-sensitive. Ensure you enter it before it expires. If it does, you will need to generate a new code.
   :::

   ![Confirm login](/images/manual/get-started/confirm-login.png)

   Once you've logged in, you'll be directed to the Olares desktop.🎉

## Manage the Olares container
### Restart the container
To restart the container after it has been stopped:
```bash
docker start oic
```

### Stop the container
To stop the running container:
```bash
docker stop oic
```

### Uninstall the container
To completely remove the container and its associated data:
```bash
docker stop oic
docker rm oic
docker volume rm oic-data
```

## Next step: Protect your Olares ID

You're almost ready to start using Olares! Before diving in, it's crucial to ensure your Olares ID is securely backed up. Without this step, you won't be able to recover Olares ID if needed.

- [Back up your mnemonic phrase](back-up-mnemonics.md)
