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
- `-d`: Starts the container in detached mode to allow it to run in the background.
- `--privileged`: Grants the container elevated privileges.
- `-v oic-data:/var`: Binds a Docker volume (`oic-data`) to the `/var` directory inside the container to persist data.
- `--name oic`: Names the container `oic` for easier reference.
- `beclab/olares:latest`: Specifies the Olares Docker image and version.

:::warning Do not add the `--rm` flag
The `--rm` flag automatically deletes the container after it stops. If this happens, you will not be able to restart the container and will need to reinstall Olares to run it again. Omitting this flag preserves the container after stoppage, enabling you to resume it with the`docker start` command.
:::

## Prepare installation environment for Olares
Once the container is running, run the following:
```bash
docker exec -it oic olares-install
```
This command executes the preparation phase for Olares installation. After this step, you can continue installing and activating Olares using LarePass on your phone.
## Install and activate Olares

:::warning Same network required
To avoid activation failures, ensure that both your phone and the Olares device are connected to the same network.
:::

1. Open LarePass, on your account activation page, tap **Discover nearby Olares**.  LarePass will list the detected Olares instances in the same network.
2. Select the target self-hosted Olares device, and tap **Install now**.
3. When the installation completes, tap **Activate now**. Olares will enter the activation process, including initial configuration and network setup.
4. Follow the on-screen instructions to reset the login password for Olares, then tap **Complete**.

Once activation is complete, LarePass will display the desktop address of your Olares device, such as `https://desktop.marvin123.olares.com`.

<!--@include: ./log-in-to-olares.md-->

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

<!--@include: ./reusables.md{35,39}-->
