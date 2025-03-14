---
outline: [2, 3]
description: 了解如何使用 Docker Compose 在 Linux 服务器上部署 Olares。本安装指南涵盖系统要求、配置、安装、激活以及容器管理的相关内容。
---
# 使用 Docker Compose 在 Linux 上安装 Olares
通过 Docker 可以在容器化环境中安装和运行 Olares。本文将介绍如何使用 Docker 设置 Olares、准备安装环境、完成激活过程以及管理容器生命周期。

## 系统要求

请确保设备满足以下配置要求：

- CPU：4 核及以上
- 内存：不少于 8GB 可用内存
- 存储：建议使用 SSD，且可用磁盘空间不少于 64GB
- 支持的系统版本：
   - Ubuntu 20.04 LTS 及以上
   - Debian 11 及以上

::: tip 版本兼容性
虽然以上版本已经过验证，但其他版本也可能正常运行 Olares。根据你的环境可能需要进行调整。如果你在这些平台上安装时遇到任何问题，欢迎在 [GitHub](https://github.com/beclab/Olares/issues/new) 上提问。
:::

## 开始之前
开始安装前，请确保：
- 系统中已安装并运行 [Docker](https://docs.docker.com/engine/install/) 和 [Docker Compose](https://docs.docker.com/compose/install/)。
- 已知当前设备的 IP 地址。
- 已通过 LarePass [创建 Olares ID](create-olares-id.md) 且使用默认的 `olares.cn` 域名。

## 创建文件夹
创建文件夹存储 Olares 的配置文件。例如，用如下命令创建名为 `olares-config` 的文件夹：

```bash
mkdir ~/olares-config
cd ~/olares-config
```
## 准备 `docker-compose.yaml`
1. 在 `olares-config` 目录中创建 `docker-compose.yaml` 文件：
   ```bash
   nano docker-compose.yaml
   ```
2. 添加以下内容：
   ::: code-group
   ```yaml  [无 GPU]
   services:
    olares:
    image: beclab/olares:${VERSION}
    privileged: true
    volumes:
    - oic-data:/var
    ports:
      - "80:80"    
      - "443:443"    
      - "30180:30180"    
      - "18088:18088"    
      - "41641:41641/udp"
      environment:
      - HOST_IP=${HOST_IP}
    
    olaresd-proxy:
    image: beclab/olaresd:proxy-v0.1.0
    network_mode: host
    depends_on:
    olares:
    condition: service_started
    
    volumes:
    oic-data:
   ```
   ```yaml [支持 GPU]
    services:
    olares:
    image: beclab/olares:${VERSION}
    privileged: true
    volumes:
    - oic-data:/var
    ports:
      - "80:80"    
      - "443:443"    
      - "30180:30180"    
      - "18088:18088"    
      - "41641:41641/udp"
      environment:
      - HOST_IP=${HOST_IP}
      deploy:
      resources:
      reservations:
      devices:
      - driver: nvidia
      count: 1
      capabilities: [gpu]
    
    olaresd-proxy:
    image: beclab/olaresd:proxy-v0.1.0
    network_mode: host
    depends_on:
    olares:
    condition: service_started
    
    volumes:
    oic-data:
   ```
   :::
3. 依次按下 `CTRL+O`、`ENTER` 及 `CTRL+X` 保存文件。

## 更新 Docker 的镜像源
添加 Olares 的镜像源，提高镜像拉取速度：
1. 打开 `/etc/docker/daemon.json` 文件：
   ```bash
   sudo nano /etc/docker/daemon.json
   ```
   :::info
   如果文件不存在，nano 会自动创建一个新的文件。
   :::
2. 编辑文件，加上以下内容：
   ```json
   {
    "registry-mirrors": [
        "https://mirrors.joinolares.cn"
    ],
   "features": {
   "containerd-snapshotter": false
   }
   }
   ```
3. 重启 Docker 服务以应用更改。
   ```bash
   sudo systemctl restart docker
   ```
4. 验证配置文件是否修改成功：
   ```bash
   docker info
   ```
   在输出的结果中，如输出结果包含如下内容，表示修改成功：

   ```bash
    Registry Mirrors:
   https://mirrors.joinolares.cn/
   ```
## 设置环境变量并启动容器

1. 在 `olares-config` 目录，运行以下命令设置环境变量并启动容器。
   将 `<olares version>-cn` 替换为想要使用的 Olares 版本，将 `<host ip>` 替换为设备的 IP 地址。

   ```bash
   VERSION=<olares version> HOST_IP=<host ip> docker compose up -d
   ```
   其中：
   - `<olares version>`：指定 Olares Docker 镜像及版本。例如：`1.11.5-cn`。
   - `<server ip>`: 指定当前主机设备的 IP 地址。
   
   运行完成后，输出结果如下：
   ```bash
   [+] Running 20/20
   ✔ olaresd-proxy Pulled                                                                           67.8s
   ✔ 688513194d7a Pull complete                                                                    6.8s
   ✔ bfb59b82a9b6 Pull complete                                                                    6.9s
   ✔ efa9d1d5d3a2 Pull complete                                                                    9.5s
   ✔ a62778643d56 Pull complete                                                                    9.6s
   ✔ 7c12895b777b Pull complete                                                                    9.6s
   ✔ 3214acf345c0 Pull complete                                                                   13.6s
   ✔ 5664b15f108b Pull complete                                                                   14.1s
   ✔ 0bab15eea81d Pull complete                                                                   14.2s
   ✔ 4aa0ea1413d3 Pull complete                                                                   15.0s
   ✔ da7816fa955e Pull complete                                                                   15.1s
   ✔ 9aee425378d2 Pull complete                                                                   15.1s
   ✔ 701c983262e9 Pull complete                                                                   36.2s
   ✔ 221438ca359c Pull complete                                                                   36.3s
   ✔ f3d0ed3b32e0 Pull complete                                                                   36.4s
   ✔ 70d5c1f325f6 Pull complete                                                                   43.2s
   ✔ olares Pulled                                                                                5863.6s
   ✔ 2d5815038f40 Pull complete                                                                 5759.0s
   ✔ 13788179ee16 Pull complete                                                                 5831.6s
   ✔ 5a9b10c3302f Pull complete                                                                 5831.7s
    ```

2. 确认容器是否正常运行：
   ```bash
   docker ps
   ```
   输出结果如下：
   ```bash
    CONTAINER ID   IMAGE                       COMMAND                  STATUS          PORTS
    <container_id> beclab/olares:<version>     "/start.sh"             Up 2 minutes   0.0.0.0:80->80/tcp, ...
    <container_id> beclab/olaresd:proxy-v0.1.0 "/proxy.sh"             Up 2 minutes   Host
   ```

<!--@include: ./install-and-activate-olares.md-->

## 管理 Olares 容器
在运行任何命令之前，请确保你位于包含 `docker-compose.yaml` 文件的目录中。
### 停止容器
要停止当前正在运行的容器：
```bash
docker compose stop
```

### 重启容器
容器停止后，使用以下命令重启：
```bash
docker compose start
```
容器重启后，所有服务可能需要 6–7 分钟才能完全初始化。在此时间内请耐心等待。

### 卸载容器
要完全删除容器：
```bash
docker compose down
```

<!--@include: ./reusables.md{30,34}-->
   
   

