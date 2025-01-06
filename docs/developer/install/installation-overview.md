# Olares installation

This document provides a high-level look at how Olares is installed, focusing on its overall architecture and core components.

Typically, when you start the installation using the one-click installation script (`install.sh`), you first install `olares-cli`, a command-line tool designed for installing and maintaining the Olares cluster. `olares-cli` orchestrates the installation of subsequent components, which include:

![Install arch](/images/developer/install/olares-install.png)

- **Operating system layer**: Manages Linux system configurations and installs essential environment dependencies.
- **Container orchestration layer**: Deploys the Kubernetes cluster to enable automated service management and scaling.
- **Containerization layer**: Launches containerized core system services and user applications, providing the final runtime environment.

::: tip Note
To learn the detailed installation procedures, refer to [Olares installation process](installation-process.md)
:::

## Operating system layer

This operating system layer ensures that the underlying Linux environment supports distributed storage, container runtimes, and Kubernetes cluster management. The configuration includes core Linux system settings, file system initialization, container runtime installation, and the deployment of critical system services.

### Environment configuration

The installation first configures the basic Linux installation environment. This includes setting up Domain Name System (DNS), Secure Shell (SSH), and Network Time Protocol (NTP) services to ensure time synchronization and remote management capabilities. Additionally, necessary dependencies such as the GNU Compiler Collection (GCC) and Network Tools (net-tools) are installed to ensure a robust runtime environment.

### File system configuration

The root file system (rootfs) is used to store and access system core components and user data. Depending on the installation mode, Olares supports the following two file systems:

- **LocalFS**: This is the default file system for Olares using the local Linux disk for storage. It is ideal for single-node deployments that require high data throughput without the need for network sharing.

- **JuiceFS**: JuiceFS offers a distributed file system by acting as a file system gateway. It stores file data in locally installed MinIO instances or remote storage buckets such as Amazon S3. This setup allows different storage nodes to share a unified storage view. It is ideal for multi-node cluster deployments where data needs to be accessible across multiple nodes. To install, you must either set the appropriate [environment variables](environment-variables.md#juicefs) for the installation script or use the [`olares-cli` command](./cli/olares-prepare.md#options) with JuiceFS-specific flags.

### Container runtime: Containerd

All core components of Olares are containerized and deployed using Containerd, a lightweight container runtime. It provides the following functionalities:
- Container image management, which 
    - Downloads packaged container images from the Content Delivery Network (CDN)
    - Imports them into Containerd during the environment pre-installation phase
    - Starts the images as container processes during the formal installation phase

- Container lifecycle management: Starts, stops, restarts, and monitors containerized application services.

::: tip Note
If Containerd is already installed on your machine, especially in the form of Docker, it may conflict with the container runtime in Olares. Please uninstall the existing Containerd before installing Olares.
:::

### System daemon service: `olaresd`

`olaresd` is the system daemon for Olares, running continuously in the background as a system service. It provides system management functionalities like:
- Automated configuration updates: Automatically detects and adjusts when IP addresses or related configuration items change.
- Remote system management: Executes remote system operations such as Olares installation, activation, factory reset, and Wi-Fi connection through the LarePass client or command-line requests.

### CUDA support

To ensure local Artificial Intelligence (AI) models and applications can fully utilize the GPU performance, `olares-cli` supports installing the Compute Unified Device Architecture (CUDA) toolkit and drivers in the operating system layer. 

## Container orchestration layer

After completing the operating system configuration, the installation proceeds to the container orchestration Layer. This layer’s primary task is to integrate various system components (core services, auxiliary tools, user applications) into an organized, efficient, and scalable runtime environment. Kubernetes serves as the backbone of this layer, providing the foundational framework for automated deployment, operation, scaling, and management of multi-component services.

### Why Kubernetes?

 Kubernetes is the de-facto standard for container orchestration. Compared to earlier solutions like Docker Compose or Docker Swarm, Kubernetes offers significant advantages in community support, architectural scalability, production-grade reliability, and security. Its robust ecosystem allows a vast array of system applications to be easily integrated into Olares through Helm Charts, Operators, and Custom Resource Definitions (CRDs), offering users a diverse range of options and a cloud-native experience.

### Kubernetes choice for Olares

Olares supports both official Kubernetes and Rancher's lightweight K3s across various Linux environments including:

- Ubuntu/Debian
- Windows Subsystem for Linux (WSL)
- Proxmox Virtual Environment (PVE)
- Raspberry Pi
  
K3s is installed by default to optimize performance and resource efficiency on local hardware. 

For macOS users, Olares deploys Kubernetes through Minikube in a Linux virtual machine to ensure consistency in underlying features and user experience.

## Containerization layer: the app runtime for Olares

The containerization layer represents the final presentation form of the Olares system. All Olares components and user applications run within containers, with the full lifecycle managed via Kubernetes. This ensures that the system remains efficient, stable, and scalable.

You can view the running containers using the ControlHub application in an environment where Olares is already installed:

![Running pods](/images/developer/install/running-pods.png)


## Learn more

- [Olares installation process](installation-process.md)
- [Olares Home](olares-home.md)
- [Olares CLI](../install/cli/olares-cli.md)
- [Olares environment variables](environment-variables.md)