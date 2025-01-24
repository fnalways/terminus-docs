---
outline: [2, 3]
---
# Install Olares using Docker image

You can use Docker to install and run Olares in a containerized environment. This guide explains how to set up Olares using the Docker command line interface (CLI), prepare the installation environment, activate Olares, and manage the container lifecycle.
:::warning
Currently, installing Olares via the Docker image:
- has only been tested and verified on Linux platforms.
- does not support GPU enablement.  
:::
## System requirements
Make sure your device meets the following requirements.

- Architecture: AMD64
- CPU: At least 4 cores
- RAM: At least 8GB of available memory
- Storage: At least 64GB of available space (SSD recommended)

## Before you begin
Before you begin, ensure the following:

- [Docker](https://www.docker.com/) is installed and running on your system.
- You know the IP address of the current device.
- You have [created an Olares ID via LarePass](create-olares-id.md).

## Run Olares using the Docker CLI

To pull the image of Olares, execute the following command.

Replace `<host ip>` with your device's IP address and `<olares version>` with the desired version of Olares:
```bash{2,7}
docker run -d --privileged -v oic-data:/var \
  -e HOST_IP=<host ip> \
  -p 80:80 \
  -p 443:443 \
  -p 30180:30180 \
  --name oic \
  beclab/olares:<olares version>
```
where:
- `-d`: Starts the container in detached mode to allow it to run in the background.
- `--privileged`: Grants the container elevated privileges.
- `-v oic-data:/var`: Binds a Docker volume (`oic-data`) to the `/var` directory inside the container to persist data.
- `-e HOST_IP=<host ip>`: Specifies the host device's IP address as an environment variable.
- `-p 80:80`: Maps port `80` on the host to port `80` in the container.
- `-p 443:443`: Maps port `443` on the host to port `443` in the container.
- `-p 30180:30180`: Maps port `30180` on the host to port `30180` in the container.
- `--name oic`: Names the container `oic` for easier reference.
- `beclab/olares:<olares version>`: Specifies the Olares Docker image and version. For example: `beclab/olares:1.11.3`.

When the container is running, you will see a container ID output.
:::
:::warning Do not add the `--rm` flag
The `--rm` flag automatically deletes the container after it stops. If this happens, you will not be able to restart the container and will need to reinstall Olares to run it again. Omitting this flag preserves the container after stoppage, enabling you to resume it with the`docker start` command.
:::

## Install Olares
Once the container is running, run the following:
```bash
docker exec -it oic olares-install
```

<!--@include: ./reusables.md{20,33}-->

<!--@include: ./activate-olares.md-->

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
