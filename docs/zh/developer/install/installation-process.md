# Olares installation process

通常，安装 Olares 会从以下脚本开始，

```bash
curl -fsSL https://cn.olares.sh | bash -
```

该脚本首先会下载并安装最新版的 `olares-cli` 命令行工具，之后即自动开始执行 Olares 集群的安装流程。为了提高稳定性和效率，Olares的安装分为四个阶段：**Precheck（预检）**、**Download（下载）**、**Prepare（预装环境）**、**Install（安装）**。

本文档将为你详细介绍每个安装阶段的步骤与细节。

## Precheck（预检）

Olares的安装及运行都需要宿主系统满足一系列的条件。在实际安装前，脚本将执行 `olares-cli olares precheck` 命令，对这些条件预先进行检查。若条件不满足，则会提供提示信息并退出安装流程。具体来说，会针对以下条件进行预检：
- 操作系统类型、版本号以及处理器架构的兼容性检测
- 系统是否是以 `Systemd` 作为初始化进程启动
- Olares 对外暴露服务所需的网络端口是否可用
- 系统是否已安装了冲突的容器运行时

下图是一个预检不通过的示例，其中有两项检查失败了：
 ![Precheck](/images/developer/install/precheck.png)

- Olares所需的9100端口已被占用
- 系统中存在已有的容器运行时

需解决这些问题后，再次尝试安装。


## Download（下载）

Download 阶段会下载 Olares 安装所需的 wizard 文件及系统所依赖的组件和容器镜像。

### 下载 Wizard 文件

Wizard 文件是 Olares 的安装包的元数据，包含了 Olares 不同组件的下载地址及安装配置。安装脚本会解压该文件到 `$HOME/.olares/versions/<version>` 目录，其中，

-`$HOME/.olares`是 Olares 的基础安装目录，用于存储所有镜像、日志、依赖项以及其他版本相关文件。详细目录结构请参考 [Olares Home 概述](olares-home.md)文档。
- `<version>` 是此 wizard 文件对应的 Olares 版本号，如示例中的 1.12.0-20241215。

**示例脚本输出**：

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

### 下载安装所需组件与容器镜像

完成 Wizard 下载后，olares-cli 会下载 Olares 所需的基础软件、容器镜像和依赖包，这些文件会保存在 `$HOME/.olares/pkg` 和 `$HOME/.olares/image` 下。

和 Wizard 的保存路径不同，大部分组件是通用且长期稳定的，不会保存在具体版本对应的路径下。因此重新安装时仅需对新增或更新的镜像进行增量下载，避免重复下载。

**示例脚本输出**：

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

## Prepare（预装环境）

在完成下载后，安装脚本将对操作系统进行配置，以保证能够顺利运行 Kubernetes、容器镜像等系统服务。

-  **系统依赖安装与配置**
  - 调整 DNS、NTP、SSH 服务，确保机器网络正常、时间同步无误。
  - 通过 apt 安装必要依赖（curl、net-tools、gcc、make 等）。
  - **示例脚本输出**
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
- **依赖组件及容器运行时安装** 
  - 将之前下载的依赖组件安装并启动。
  - 将 containerd 安装到系统中，并启动服务，同时将下载好的容器镜像全部导入到 containerd。
  - **示例脚本输出**：
  
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

- **系统守护进程（olaresd）**
  
  预安装阶段还会安装并启动 [olaresd](installation-overview.md#系统守护进程olaresd)，Olares 的系统守护进程服务。olaresd 会在后台运行并自动执行系统维护操作，如变更 IP 地址时自动更新配置。

    **示例脚本输出**

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

- 可选安装项目
  
  如果你想启用分布式共享存储（JuiceFS、Redis 以及MinIO）或 GPU 支持（CUDA），可在执行安装脚本时设置相应的[环境变量](environment-variables.md#olares-环境变量参考)。

## Install (安装)

此阶段主要通过以下步骤完成：
- 部署并启动 Kubernetes。 
- 安装并配置 KubeSphere，提供云原生管理能力与可视化工具集。
- 安装 Olares 账户。
- 部署内置应用（如存储、备份、账号系统、文件服务等），完成 Olares 环境的所有功能模块。

### 部署 Kubernetes
Olares 默认安装 K3s，一款轻量级的 Kubernetes 发行版。此步骤将：
1. 启动 etcd 数据库；
2. 启动并配置 K3s；
3. 安装容器网络界面（CNI）插件以提供集群网络能力；
4. 将 `kubeconfig` 文件复制到当前用户路径，以便使用 `kubectl` 与集群交互。

如果你选择安装官方的 Kubernetes，脚本将使用 `kubeadm` 完成部署。`kubeadm` 是 Kubernetes 提供的官方工具，可帮助你创建最低可行集群。在 macOS 上，脚本会使用 Minikube 来进行安装，不会执行上述安装步骤。

**示例脚本输出**

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

### 安装并集成 KubeSphere

Olares 会基于 Kubernetes 安装 KubeSphere。 Olares 集成了一部分 KubeSphere 的功能，主要用于系统监控、告警、工作空间管理等。此过程会创建一系列命名空间与 CRD（自定义资源定义）对象，并启动 KubeSphere 的后台服务。

### 安装 Olares 账户

在KubeSphere安装完成后，命令行会提示用户输入自己的 Olares ID。 这将创建一个系统账号用于登录 Olares，并且在后台完成多处访问与权限配置。

- Olares 域名: 默认为 `olares.cn`，可以自定义）。
- Olares ID: 输入 Olares ID 中的用户名部分。  

**示例脚本输出**：

```bash
Enter the domain name ( olares.cn by default ):
2024-12-17T20:58:15.690+0800        using Domain Name: olares.cn

Enter the Olares ID (which you registered in the LarePass app): marvin113
2024-12-17T20:58:52.584+0800        using Olares Local Name: marvin113
2024-12-17T20:58:52.584+0800        using Olares ID: marvin113@olares.com
2024-12-17T20:58:52.584+0800        using password: 2uO5PZ2X
```

### 安装 Olares 组件与内置应用

此步骤会会通过 Helm 部署 Olares 系统的核心功能与常用服务：

- 核心系统服务（`os-system` 命名空间）：如备份（Velero）、存储（OpenEBS）、Redis、Nats、MinIO 等关键组件。
- 用户应用（`user-space-xxx` 命名空间）：如文件管理器、桌面、设置、知识库应用、和其他自托管应用等。

日志中会显示 `[helm] app installed success` 以及一系列 `xxx created` 的提示，表示对应的 Helm Chart 或 Kubernetes 资源安装成功。

**示例脚本输出**：
```bash
2024-12-17T19:53:18.382+0800        [A] ubuntu: InitKsNamespace success (2.678362348s)
2024-12-17T19:53:18.382+0800        [Module] DeploySnapshotController
customresourcedefinition.apiextensions.k8s.io/volumesnapshotclasses.snapshot.storage.k8s.io created
customresourcedefinition.apiextensions.k8s.io/volumesnapshotcontents.snapshot.storage.k8s.io created
customresourcedefinition.apiextensions.k8s.io/volumesnapshots.snapshot.storage.k8s.io created
2024-12-17T19:53:18.924+0800        [helm] app installed success        {"NAME": "snapshot-controller", "LAST DEPLOYED": "Tue Dec 17 19:53:18 2024", "NAMESPACE": "kube-system", "STATUS": "deployed", "REVISION": 1}
2024-12-17T19:53:18.924+0800        [A] ubuntu: CreateSnapshotController success (541.656132ms)
2024-12-17T19:53:18.924+0800        [Module] DeployRedis
secret/redis-secret created
2024-12-17T19:53:19.057+0800        [A] ubuntu: CreateRedisSecret success (133.123121ms)
2024-12-17T19:53:19.189+0800        [A] ubuntu: BackupRedisManifests success (132.045425ms)
2024-12-17T19:53:19.339+0800        [A] ubuntu: DeployRedisHA success (149.251633ms)
local (default)   openebs.io/local   Delete          WaitForFirstConsumer   false                  31s
local (default)   openebs.io/local   Delete   WaitForFirstConsumer   false   31s
2024-12-17T19:53:19.971+0800        [helm] app installed success        {"NAME": "redis", "LAST DEPLOYED": "Tue Dec 17 19:53:19 2024", "NAMESPACE": "kubesphere-system", "STATUS": "deployed", "REVISION": 1}
...
```

### 安装成功

待所有组件启动并运行后，脚本会输出类似下面的汇总信息：

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

打开浏览器，输入提供的 URL，并使用得到的初始密码登录 Olares 引导页面。按照屏幕提示即可完成系统激活。安装流程至此结束。

## 了解更多

- [`olares-cli` 命令行参考](../install/cli/olares-cli.md)
- [Olares 安装过程](installation-process.md)
- [Olares 环境变量](environment-variables.md)





    
    
  

















 









    
    
  

















 

