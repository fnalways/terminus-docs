# Olares Home

Olares Home 是 Olares 的默认安装目录，用于存储镜像、日志、依赖组件以及版本管理数据。 

## 路径及设置

Olares Home 默认路径为 `~/.olares`。你可以通过以下方式自定义其位置：
- 设置环境变量 [`olares-home`](environment-variables.md)。
- 使用 `olares-cli` 提供的 [`base_dir`](./cli/olares-install.md#options)命令更改路径。

## 目录结构

Olares Home 目录结构如下：

```
./olares
├── images   # 存放下载的镜像文件
│   ├── {镜像文件}.tar.gz
│   └── {镜像文件}.tar.gz
├── logs        # 存放所有日志
├── pkg                    # 存放下载的系统依赖组件
│   ├── cni   # K8s的网络插件
│   ├── components # 存放与K8s无关的Olaers基础软件依赖，如olaresd/JuiceFS/Redis等
│   ├── containerd # CRI runtime
│   ├── crictl # CRI命令行工具
│   ├── etcd  # K8s的持久化数据库
│   ├── helm  # K8s的app管理命令行工具
│   ├── kube  # 存放K8s的核心程序，如kubeadm/kubelet/k3s
│   └── runc # OCI runtime
└── versions             # 存放不同的Olares版本
    ├── v1.10.0-20241001   # olares 安装版本
    │   ├── cli
    │   ├── deploy
    │   ├── files
    │   ├── images
    │   ├── logs  # 存放该Olares版本相关的日志
    │   │   ├── install.log        
    │   │   └── uninstall.log      
    │   └── wizard  # 存放Olares自带的系统及用户应用Helm chart
    └── v1.10.0-20240930    
        ├── cli
        ├── deploy
        ├── files
        ├── images
        ├── logs
        │   ├── install.log        
        │   └── uninstall.log     
        └── wizard
```

## 关键特性

Olares 提供了高效的文件管理和灵活的版本切换能力，帮助用户简化安装和使用流程。
- 不同版本的 Olares 被存储在 `versions` 目录下，每个版本有版本相关的文件和日志。
- 一台机器上只能运行一个 Olares 实例，避免版本冲突。
- 不同版本会共享 `images` 和 `pkg` 目录下的文件，避免重复下载。

## 了解更多

- [`olares-cli` 命令行参考](../install/cli/olares-cli.md)
- [Olares 安装过程](installation-process.md)
- [Olares 环境变量](environment-variables.md)