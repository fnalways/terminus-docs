---
outline: [2, 3]
---
# 使用 Docker 镜像安装 Olares

通过 Docker 可以在容器化环境中安装和运行 Olares。本文将介绍如何使用 Docker 命令行界面（CLI）进行安装配置、准备环境、激活 Olares 以及管理容器生命周期。

## 系统要求
请确保设备满足以下配置要求：

- CPU：至少 4 核
- 内存：至少 8GB 可用空间
- 存储：至少 64GB 可用空间（推荐 SSD）

## 开始前的准备
开始安装前，请确保：

- 系统中已安装并运行 [Docker](https://www.docker.com/)
- 已通过 LarePass [创建 Olares ID](create-olares-id.md)

## 使用 Docker CLI 运行 Olares

运行以下命令启动最新稳定版本的 Olares：
```bash
docker run --network host -d --privileged -v oic-data:/var --name oic beclab/olares:latest
```
其中：
- `--network host`：与宿主机共享网络栈，使容器可以通过宿主机的网络接口进行通信。
- `-d`：以分离模式（detached mode）启动容器，允许其在后台运行。
- `--privileged`：Grants the container elevated privileges.
- `-v oic-data:/var`：将 Docker 数据卷（`oic-data`）挂载到容器内的 `/var` 目录以持久化数据。
- `--name oic`：将容器命名为 `oic` 方便后续引用。
- `beclab/olares:latest`：指定 Olares Docker 镜像及版本。

:::warning 请勿添加 `--rm` 参数
--rm 参数会在容器停止后自动删除容器。如果发生这种情况，将无法重新启动容器，必须重新安装 Olares 才能再次运行。不使用此参数可以在停止后保留容器，让你能够通过 docker start 命令恢复运行。
:::

## 准备 Olares 安装环境
容器运行后，执行以下命令：
```bash
docker exec -it oic olares-install
```
该命令会执行 Olares 安装的准备阶段。完成后，可以使用手机上的 LarePass 继续安装并激活 Olares。
## 安装并激活 Olares

:::warning 检查网络连接
为避免激活失败，请确保你的手机和 Olares 设备连接到同一网络。
:::

1. 打开 LarePass，在账号激活页面点击**发现附近的 Olares**。LarePass 将列出同一网络中检测到的 Olares 实例。
2. 选择刚刚准备好安装环境的 Olares 设备，点击**立即安装**。
3. 安装完成后，点击**立即激活**。Olares 将开始激活流程，包括初始配置和网络设置。
4. 按照屏幕提示重置 Olares 的登录密码，然后点击**完成**。

激活完成后，LarePass 将显示 Olares 设备的桌面地址，如 `https://desktop.marvin123.olares.cn`。

<!--@include: ./log-in-to-olares.md-->

## 管理 Olares 容器
### 重启容器
容器停止后，使用以下命令重启：
```bash
docker start oic
```

### 停止容器
要停止运行中的容器：
```bash
docker stop oic
```

### 卸载容器
要完全移除容器及其关联数据：
```bash
docker stop oic
docker rm oic
docker volume rm oic-data
```

<!--@include: ./reusables.md{30,34}-->
