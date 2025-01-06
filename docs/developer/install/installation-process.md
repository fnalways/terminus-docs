# Olares installation process

A typical Olares installation begins by running the following script:

```bash
curl -fsSL https://olares.sh | bash -
```

This script automatically downloads and installs the latest `olares-cli` command-line tool, which then launches the Olares cluster installation process. To ensure stability and efficiency, the installation proceeds in four phases: **Precheck**, **Download**, **Prepare**, and **Install**.

This document walks you through each installation phase in detail.

## Precheck

Both installing and running Olares require that your target machine’s operating system meets a series of conditions. Before actual installation, the script executes the `olares-cli olares precheck` command to check these conditions in advance. If any condition is not met, a warning appears, and the installation aborts.

Specific checks include:
- Compatibility with operating system type, version, and CPU architecture
- Ensuring the system uses `Systemd` as its initialization process
- Making sure multiple network ports that Olares needs to expose are available
- Verifying that no conflicting container runtime is installed

Below is an example of a failed precheck. Two checks failed: 
 
 ![Precheck](/images/developer/install/precheck.png)

- Port 9100 required by Olares is already in use;
- An existing container runtime is detected in the system. 

You must fix these issues before trying again.

## Download

During the download phase, `olares-cli` retrieves the necessary wizard files, system dependencies, and container images required for Olares installation.

### Download wizard files

The wizard file is a metadata package for Olares installation. It contains download URLs and configuration details for all Olares components. The installation script extracts this file into the directory:

```bash
HOME/.olares/versions/<version>
```
where:
- `$HOME/.olares` is the base installation directory for Olares where all images, logs, dependencies and other version-related files are stored. See [Olares home overview](olares-home.md) for more details.
- `<version>` refers to the version number of Olares associated with the wizard file (for example, 1.12.0-20241215).

**Example script output**:

```bash
➜  ~ ./install.sh
the KUBE_TYPE env var is not set, defaulting to "k3s
olares-cli already installed and is the expected version

downloading installation wizard...

current: root
2024-12-17T18:01:19.501+0800        [Job] [Download Installation Wizard] start ...
2024-12-17T18:01:19.501+0800        [Module] GreetingsModule
Greetings, Olares
2024-12-17T18:01:19.502+0800        [A] ubuntu: Greetings success (611.77µs)
2024-12-17T18:01:19.502+0800        [Module] DownloadInstallWizard
/home/keven/.olares/versions/v1.12.0-20241215/.env
/home/keven/.olares/versions/v1.12.0-20241215/wizard/config/account/Chart.yaml
```

### Download required components and container images

After the wizard file, `olares-cli` proceeds to download the base software, container images, and dependency packages. These files are stored in `$HOME/.olares/pkg` and `$HOME/.olares/image`.

Unlike the wizard file, these components are generally stable and reusable over time, so they are not stored under a specific version directory. This setup allows incremental downloads for new or updated images on reinstallation, preventing redundant downloads.

**Example script output**:

```bash
downloading installation packages...

current: root
2024-12-17T19:41:36.847+0800        [Job] [Download Installation Package] start ...
2024-12-17T19:41:36.847+0800        [Module] GreetingsModule
Greetings, Olares
2024-12-17T19:41:36.848+0800        [A] ubuntu: Greetings success (512.711µs)
2024-12-17T19:41:36.848+0800        [Module] GenerateOlaresUninstallScript
2024-12-17T19:41:36.879+0800        [A] LocalHost: GenerateOlaresUninstallScript success (31.279866ms)
2024-12-17T19:41:36.879+0800        [Module] PackageDownloadModule
2024-12-17T19:41:36.879+0800        checking local cache ...
2024-12-17T19:41:44.614+0800        5 out of 177 files need to be downloaded
2024-12-17T19:41:44.615+0800        (1/5) downloading package olaresd, file: olaresd-v0.0.50.tar.gz
2024-12-17T19:41:51.814+0800        (2/5) downloading image calico/kube-controllers:v3.23.2, file: 521564c4b60ae73c78899b7b40ae655e.tar.gz
...
```

## Prepare

After the download phase, the prepare phase configures the operating system to ensure smooth operation of Kubernetes, container images, and other system services. 
	
### Install and configure system dependencies
- Adjust DNS, NTP, and SSH services to ensure proper network functionality and time synchronization.
- Install essential dependencies (e.g., curl, net-tools, gcc, make) via `apt`.

**Example script output**:

```bash
preparing installation environment...

current: root
2024-12-17T19:46:39.517+0800        [Job] [Prepare the System Environment] start ...
2024-12-17T19:46:39.517+0800        [Module] PreCheckOs
2024-12-17T19:46:39.517+0800        [A] LocalHost: PreCheckSupport success (29.999µs)
2024-12-17T19:46:39.517+0800        [A] LocalHost: PreCheckPortsBindable success (144.035µs)
2024-12-17T19:46:39.517+0800        [A] LocalHost: PreCheckNoConflictingContainerd success (31.009µs)
2024-12-17T19:46:39.517+0800        [A] ubuntu: PatchAppArmor skipped (7.677µs)
2024-12-17T19:46:39.517+0800        [A] ubuntu: RaspbianCheck success (5.796µs)
2024-12-17T19:46:39.517+0800        [A] ubuntu: CorrectHostname success (5.363µs)
nameserver
nameserver
2024-12-17T19:46:41.921+0800        [A] ubuntu: DisableLocalDNS success (2.40336625s)
2024-12-17T19:46:41.921+0800        [INFO] installing and configuring OS dependencies ...
2024-12-17T19:46:41.921+0800        [Module] InstallDeps
Hit:1 http://security.ubuntu.com/ubuntu jammy-security InRelease
Hit:2 https://download.docker.com/linux/ubuntu jammy InRelease
Hit:3 http://hk.archive.ubuntu.com/ubuntu jammy InRelease
...
```
### Install system dependencies and container runtime
- Install and start the previously downloaded dependencies
- Install containerd on the system and start the service
- Import the downloaded container images into containerd

  - **Example script output**:
  
    ```bash
    2024-12-17T19:47:37.510+0800        [Module] InstallContainerModule(k3s)
    2024-12-17T19:47:37.518+0800        [A] ubuntu: ZfsMountReset skipped (7.321811ms)
    2024-12-17T19:47:37.525+0800        [A] ubuntu: CreateZfsMount skipped (7.322591ms)
    2024-12-17T19:47:38.188+0800        [A] ubuntu: SyncContainerd success (662.643982ms)
    2024-12-17T19:47:38.368+0800        [A] ubuntu: SyncCrictlBinaries success (179.758334ms)
    2024-12-17T19:47:38.399+0800        [A] ubuntu: GenerateContainerdService success (31.410118ms)
    2024-12-17T19:47:38.451+0800        [A] ubuntu: GenerateContainerdConfig success (52.047108ms)
    2024-12-17T19:47:38.505+0800        [A] ubuntu: GenerateCrictlConfig success (53.760209ms)
    2024-12-17T19:47:38.857+0800        [A] ubuntu: EnableContainerd success (352.128078ms)
    2024-12-17T19:47:38.857+0800        [Module] PreloadImages
    2024-12-17T19:47:41.665+0800        (1/145) imported image: rancher/mirrored-pause:3.6, time: 194.363948ms
    ...
    ```

### Install system daemon
Install and start `olaresd`, the system daemon for Olares. `olaresd` runs in the background and automatically performs maintenance operations.

**Example script output**:

```bash
024-12-17T19:52:31.862+0800        [A] ubuntu: GenerateOlaresdEnv success (23.829684ms)
2024-12-17T19:52:31.862+0800        template OlaresdService result: [Unit]
Description=olaresd
After=network.target
StartLimitIntervalSec=0

[Service]
User=root
EnvironmentFile=/etc/systemd/system/olaresd.service.env
ExecStart=/usr/local/bin/olaresd
RestartSec=10s
LimitNOFILE=40000
Restart=always

[Install]
WantedBy=multi-user.target

2024-12-17T19:52:31.885+0800        [A] ubuntu: GenerateOlaresdService success (23.050958ms)
2024-12-17T19:52:32.033+0800        [A] ubuntu: EnableOlaresdService success (147.987242ms)
...
```

### Optional installations
  
If you want to enable distributed shared storage (e.g., JuiceFS, Redis, MinIO) or GPU support (CUDA), you can set corresponding [environment variables](environment-variables.md) when running the installation script.

## Install

During this phase, the script primarily completes the following steps:
- Deploy and start Kubernetes.
- Install and configure KubeSphere for cloud-native management and observability.
- Install the Olares account.
- Deploy built-in apps (e.g., storage, backup, account system, file services) and bring all Olares environment modules online.

### Deploy Kubernetes

By default, Olares installs K3s, a lightweight Kubernetes distribution. This step includes:
1.	Starting the etcd database.
2.	Starting and configuring K3s.
3.	Installing a Container Network Interface (CNI) plugin for cluster networking.
4.	Copying the `kubeconfig` file to the current user’s directory, enabling interaction with the cluster via kubectl.

You can also choose to install the official Kubernetes. The script will install using kubeadm, an official tool that assists you in creating a minimum viable cluster. On macOS, the scripts uses Minikube, which will skip the above installation steps.

**Example script output**:

```bash
[certs] Generating "ca" certificate and key
[certs] admin-ubuntu serving cert is signed for DNS names [etcd etcd.kube-system etcd.kube-system.svc etcd.kube-system.svc.cluster.local lb.kubesphere.local localhost ubuntu] and IPs [127.0.0.1 ::1 192.168.1.16]
[certs] member-ubuntu serving cert is signed for DNS names [etcd etcd.kube-system etcd.kube-system.svc etcd.kube-system.svc.cluster.local lb.kubesphere.local localhost ubuntu] and IPs [127.0.0.1 ::1 192.168.1.16]
[certs] node-ubuntu serving cert is signed for DNS names [etcd etcd.kube-system etcd.kube-system.svc etcd.kube-system.svc.cluster.local lb.kubesphere.local localhost ubuntu] and IPs [127.0.0.1 ::1 192.168.1.16]
2024-12-17T19:52:36.957+0800        [A] LocalHost: GenerateETCDCerts success (263.237575ms)
2024-12-17T19:52:37.263+0800        [A] ubuntu: SyncCertsFile success (306.213676ms)
2024-12-17T19:52:37.264+0800        [A] ubuntu: SyncCertsFileToMaster skipped (20.351µs)
2024-12-17T19:52:37.264+0800        [Module] InstallETCDBinaryModule
2024-12-17T19:52:37.698+0800        [A] ubuntu: InstallETCDBinary success (434.014395ms)
2024-12-17T19:52:37.728+0800        [A] ubuntu: GenerateETCDService success (30.732882ms)
2024-12-17T19:52:37.728+0800        [A] ubuntu: GenerateAccessAddress success (23.491µs)
2024-12-17T19:52:37.728+0800        [Module] ETCDConfigureModule
2024-12-17T19:52:37.728+0800        [A] ubuntu: ExistETCDHealthCheck skipped (9.903µs)
2024-12-17T19:52:37.753+0800        [A] ubuntu: GenerateETCDConfig success (24.125665ms)
2024-12-17T19:52:37.773+0800        [A] ubuntu: AllRefreshETCDConfig success (20.321235ms)
2024-12-17T19:52:40.048+0800        [A] ubuntu: RestartETCD success (2.274541565s)
2024-12-17T19:52:40.068+0800        [A] ubuntu: AllETCDNodeHealthCheck success (20.251062ms)
2024-12-17T19:52:40.094+0800        [A] ubuntu: RefreshETCDConfigToExist success (26.207599ms)
2024-12-17T19:52:40.129+0800        [A] ubuntu: AllETCDNodeHealthCheck success (34.462881ms)
2024-12-17T19:52:40.129+0800        [Module] ETCDBackupModule
2024-12-17T19:52:40.185+0800        [A] ubuntu: BackupETCD success (56.639923ms)
2024-12-17T19:52:40.230+0800        [A] ubuntu: GenerateBackupETCDService success (44.727929ms)
2024-12-17T19:52:40.273+0800        [A] ubuntu: GenerateBackupETCDTimer success (42.839457ms)
2024-12-17T19:52:40.396+0800        [A] ubuntu: EnableBackupETCDService success (122.621074ms)
2024-12-17T19:52:40.396+0800        [Module] InstallKubeBinariesModule
2024-12-17T19:52:41.188+0800        [A] ubuntu: SyncKubeBinary(k3s) success (791.866964ms)
2024-12-17T19:52:41.218+0800        [A] ubuntu: GenerateK3sKillAllScript success (30.442837ms)
2024-12-17T19:52:41.253+0800        [A] ubuntu: GenerateK3sUninstallScript success (34.802683ms)
2024-12-17T19:52:41.268+0800        [A] ubuntu: ChmodScript(k3s) success (14.640733ms)
2024-12-17T19:52:41.268+0800        [Module] K3sInitClusterModule
2024-12-17T19:52:41.334+0800        [A] ubuntu: GenerateK3sService success (66.556896ms)
2024-12-17T19:52:41.379+0800        [A] ubuntu: GenerateK3sServiceEnv success (44.492752ms)
2024-12-17T19:52:41.414+0800        [A] ubuntu: GenerateK3sRegistryConfig success (34.814475ms)
2024-12-17T19:52:46.511+0800        [A] ubuntu: EnableK3sService success (5.097800474s)
2024-12-17T19:52:46.572+0800        [A] ubuntu: CopyKubeConfig success (60.33887ms)
...
```

### Install and integrate KubeSphere

This process installs KubeSphere on top of Kubernetes. Olares integrates part of KubeSphere’s functionality, mainly for system monitoring, alerts, workspace management, and more. It creates various namespaces and CRDs (Custom Resource Definitions), and starts KubeSphere’s backend services.

### Install Olares account

After KubeSphere installation is complete, the command line prompts you to enter your Olares ID. This creates a system account for logging in to Olares and completes several background access and permission configurations.
- **Olares domain name** (default olares.com, can be customized)
- **Olares ID**: Enter the username part of your Olares ID

**Example script output:**

```bash
Enter the domain name ( olares.com by default ): olares.cn
2024-12-17T20:58:15.690+0800        using Domain Name: olares.cn

Enter the Olares ID (which you registered in the LarePass app): terminus
2024-12-17T20:58:52.584+0800        using Olares Local Name: marvin113
2024-12-17T20:58:52.584+0800        using Olares ID: marvin113@olares.com
2024-12-17T20:58:52.584+0800        using password: 2uO5PZ2X
```

### Install Olares components and built-in applications

In this step, core Olares functions and common services are deployed via Helm:
- Core system services (in the `os-system` namespace), such as backups (Velero), storage (OpenEBS), Redis, Nats, MinIO, and other key components
- User applications (in namespaces like `user-space-xxx`), including file management like Files, system tools like Desktop and Settings, and other self-hosted apps.

During installation, the log will display messages such as `[helm] app installed success` and `xxx created`, indicating that the respective Helm charts or Kubernetes resources have been installed successfully.

### Installation completes

Once all components start and run properly, the script outputs a summary similar to the following:

```bash
2024-12-17T21:00:58.086+0800        [INFO] Installation wizard is complete
2024-12-17T21:00:58.086+0800        [INFO] All done

------------------------------------------------

2024-12-17T21:00:58.086+0800        Olares is running at:
2024-12-17T21:00:58.086+0800        http://192.168.1.16:30180

2024-12-17T21:00:58.086+0800        Open your browser and visit the above address
2024-12-17T21:00:58.086+0800        with the following credentials:

2024-12-17T21:00:58.086+0800        Username: marvin113
2024-12-17T21:00:58.086+0800        Password: 2uO5PZ2X
```

Open your browser and enter the provided URL and log in to the activation wizard with initial password. Then, follow the on-screen prompt to finish the activation. That's all for the installation. 

## Learn more

- [Olares CLI reference](./cli/olares-cli.md)
- [Olares installation overview](installation-process.md)





    
    
  

















 

