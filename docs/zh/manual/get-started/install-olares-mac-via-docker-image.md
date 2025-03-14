---
outline: [2, 3]
description: 使用 Docker 容器部署运行 Olares 的完整步骤，包括镜像配置和容器设置说明。
---
# 使用 Docker 镜像在 Windows 上安装 Olares

通过 Docker 可以在容器化环境中安装和运行 Olares。本文将介绍如何使用 Docker 命令行界面（CLI）进行安装配置、准备环境、激活 Olares 以及管理容器生命周期。
:::info
Mac 版 Olares 目前存在以下限制：
- 不支持分布式存储
- 无法添加本地节点

建议仅用于开发或测试环境。
:::
## 系统要求
Mac 设备需满足以下条件：
- 处理器架构：X86-64 或 ARM64
- 内存：可用内存 8 GB 及以上
- 存储空间：可用磁盘空间 90 GB 及以上
- MacOS 版本：Monterey（12）及以上

## 开始前的准备
开始安装前，请确保：
- 系统中已安装 Docker。
- 已知当前设备的 IP 地址。
- 已通过 LarePass [创建 Olares ID](create-olares-id.md) 且使用默认的 `olares.cn` 域名。

## 运行 `olaresd-proxy`

<tabs>
<template #Intel>

1. 下载`olaresd-proxy`：https://cdn.joinolares.cn/olaresd-proxy-v0.1.0-darwin-amd64.tar.gz 。
2. 解压文件，启动 `olaresd-proxy`。
   :::info 保持 `olaresd-proxy` 在后台运行
   在 Olares 安装和激活期间，保证 `olaresd-proxy` 在后台运行。
   :::
</template>

<template #Apple-Silicon>

1. 下载`olaresd-proxy`：https://cdn.joinolares.cn/olaresd-proxy-v0.1.0-darwin-arm64.tar.gz 。
2. 解压文件，启动 `olaresd-proxy`。
   :::info 保持 `olaresd-proxy` 在后台运行
   在 Olares 安装和激活期间，保证 `olaresd-proxy` 在后台运行。
   :::
</template>
</tabs>

## 添加镜像源
以 Docker Desktop 为例：
1. 打开 Docker Desktop，选择 **Settings** > **Docker Engine**。
2. 修改 Docker daemon 的 json 文件，添加镜像源：
   ```json{9-11}
   {
     "builder": {
       "gc": {
         "defaultKeepStorage": "20GB",
         "enabled": true
       }
     },
     "experimental": false,
     "registry-mirrors": [
       "https://mirrors.joinolares.cn"
     ]
   }
   ```
3. 点击 **Apply & restart** 保存变更。

## 使用 Docker CLI 运行 Olares

执行以下命令来拉取 Olares 的镜像。

将 `<host ip>` 替换为设备的 IP 地址，将 `<olares version>-cn` 替换为想要使用的 Olares 版本：
```bash{2,7}
docker run -d --privileged -v oic-data:/var \
  -e HOST_IP=<host ip> \
  -p 80:80 \
  -p 443:443 \
  -p 30180:30180 \
  --name oic \
  beclab/olares:<olares version>-cn
```
其中：
- `-d`：以分离模式（detached mode）启动容器，允许其在后台运行。
- `--privileged`：授予容器完整的系统权限。
- `-v oic-data:/var`：将 Docker 数据卷（`oic-data`）挂载到容器内的 `/var` 目录以持久化数据。
- `-e HOST_IP=<host ip>`：设置主机设备的 IP 地址作为环境变量
- `-p 80:80`：将主机的 `80` 端口映射到容器的 `80` 端口。
- `-p 443:443`：将主机的 `443` 端口映射到容器的 4`43` 端口。
- `-p 30180:30180`：将主机的 `30180` 端口映射到容器的 `30180` 端口。
- `--name oic`：将容器命名为 `oic` 方便后续引用。
- `beclab/olares:<olares version>-cn`：指定 Olares Docker 镜像及版本，例如`beclab/olares:1.11.3-cn`。

容器启动后，你会看到一个容器 ID。
:::warning 请勿添加 `--rm` 参数
`--rm` 参数会在容器停止后自动删除容器。如果发生这种情况，将无法重新启动容器，必须重新安装 Olares 才能再次运行。不使用此参数可以在停止后保留容器，让你能够通过 docker start 命令恢复运行。
:::

<!--@include: ./install-and-activate-olares.md-->

## 管理 Olares 容器

### 停止容器
要停止运行中的容器：
```bash
docker stop oic
```

### 重启容器
容器停止后，使用以下命令重启：
```bash
docker start oic
```
容器重启后，所有服务可能需要 6–7 分钟才能完全初始化。在此时间内请耐心等待。

### 卸载容器
要完全移除容器及其关联数据：
```bash
docker stop oic
docker rm oic
docker volume rm oic-data
```

<!--@include: ./reusables.md{30,34}-->
