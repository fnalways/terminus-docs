# Olares 环境变量参考

在大多数场景下，你只需通过一行脚本即可完成 Olares 的快速安装和使用。
然而，为了满足更细化的安装需求，Olares 安装脚本也支持通过一系列环境变量来改变默认的配置和行为。

## 使用示例

::: tip 提示
下文示例以 `KUBE_TYPE=k8s`（指定安装 K8S）为例，其他环境变量的用法类似。
:::

- 在执行安装脚本时直接指定：
  
    ```bash
    KUBE_TYPE=k8s bash cn.install.sh
    ```

- 先导出环境变量，再执行脚本：

    ```bash
    export KUBE_TYPE=k8s
    bash install.sh
    ```

- 使用 **&&** 链式命令：

    ```bash
    export KUBE_TYPE=k8s && bash install.sh
    ``` 


当然，你也可以组合多个环境变量来实现更灵活的自定义效果。例如中国大陆的用户通过`cn.olares.sh`获取的安装脚本，就是一个在默认安装脚本之上设置了一系列环境变量的脚本：

```bash
curl -fsSL https://cn.olares.sh
#!/bin/bash

export FRP_ENABLE=1 \
    FRP_SERVER="http://frp-bj.api.jointerminus.cn" \
    FRP_PORT=0 \
    JUICEFS=0 \
    FRP_AUTH_METHOD="jws" \
    REGISTRY_MIRRORS="https://mirrors.joinolares.cn" \
    DOWNLOAD_CDN_URL="https://cdn.joinolares.cn" \
    MARKET_PROVIDER="appstore-china-server-prod.api.jointerminus.cn" \
    TERMINUS_CERT_SERVICE_API="https://terminus-cert.api.jointerminus.cn" \
    TERMINUS_DNS_SERVICE_API="https://terminus-dnsop.api.jointerminus.cn" \
    DID_GATE_URL="https://did-gate-v3.api.jointerminus.cn/" \
    OLARES_SPACE_URL="https://cloud-api.api.jointerminus.cn/" \
    FIREBASE_PUSH_URL="https://firebase-push-test.api.jointerminus.cn/v1/api/push" \
    FRP_LIST_URL="https://terminus-frp.api.jointerminus.cn/" \
    TAILSCALE_CONTROLPLANE_URL="https://controlplane.api.jointerminus.cn"

curl -sSfL https://olares.sh | bash
```

## 环境变量参考

以下列出了安装脚本所支持的全部环境变量，以及它们的默认值、可选值和说明。你可以根据具体需求进行配置。

### KUBE_TYPE
指定要使用的 Kubernetes 发行版。如果需要完整版本的 k8s，请将其设置为 `k8s`。仅在执行 `install.sh` 时生效。  
- **可选值**: `k8s` / `k3s`  
- **默认值**: `k3s`

### REGISTRY_MIRRORS
设置 Docker 镜像加速地址。仅在执行 `install.sh` 时生效。  
  （如果不设置，则默认使用 `https://registry-1.docker.io`）  
- **可选值**: `https://mirrors.joinolares.cn` 或其他镜像源地址  
- **默认值**: `https://registry-1.docker.io`

### PREINSTALL
当该值设为 `1` 时，仅完成预安装阶段（安装系统依赖）。如果未设置或留空，则完整安装 Olares。仅在执行 `install.sh` 时生效。  
- **可选值**: `1`  
- **默认值**: 无



### JUICEFS
当该值设为 `1` 时，安装 [JuiceFS](https://juicefs.com/)，默认不安装。仅在执行 `install.sh` 时生效。  
- **可选值**: `1`  
- **默认值**: 无



### TERMINUS_OS_DOMAINNAME
在安装前预先设置域名，可跳过安装过程中的交互式提示。  
- **可选值**: 任意有效域名  
- **默认值**: 无



### TERMINUS_OS_USERNAME
在安装前预先设置用户名，会跳过安装过程中的对应交互式提示。  
- **保留关键词**（不可使用以下关键词作为用户名）：  
    ```
    user, system, space, default, os, kubesphere, kube, kubekey, kubernetes,
    gpu, tapr, bfl, bytetrade, project, pod
    ```  
- **可选值**: 任意有效用户名（长度 2～250，且不与保留关键词冲突）  
- **默认值**: 无

### TERMINUS_OS_EMAIL
在安装前预先设置邮箱地址，会跳过安装过程中的交互式提示。如果未设置，将自动生成一个临时邮箱。  
- **可选值**: 任意有效邮箱地址  
- **默认值**: 自动生成的邮箱地址

### TERMINUS_OS_PASSWORD
在安装前预先设置密码，会跳过安装过程中的交互式提示。  
- **可选值**: 6～32 个字符  
- **默认值**: 随机生成 8 位密码

### TERMINUS_IS_CLOUD_VERSION
明确将此机器标记为云端实例（cloud instance）。  
- **可选值**: `true`  
- **默认值**: 无

### LOCAL_GPU_ENABLE
指定是否启用 GPU 并安装相关驱动。  
- **可选值**: `0`（关闭） / `1`（开启）  
- **默认值**: `0`（关闭）

### LOCAL_GPU_SHARE
指定是否启用 GPU 共享功能。仅在已启用 GPU 时生效。  
- **可选值**: `0`（关闭） / `1`（开启）  
- **默认值**: `0`（关闭）


### CLOUDFLARE_ENABLE
指定是否启用 Cloudflare 代理。  
- **可选值**: `0`（关闭） / `1`（开启）  
- **默认值**: `0`（关闭）


### FRP_ENABLE
指定是否启用 FRP 内网穿透。如果使用自定义 FRP 服务器，还需额外设置 `FRP_SERVER`、`FRP_PORT` 等相关变量。  
- **可选值**: `0`（关闭） / `1`（开启）  
- **默认值**: `0`（关闭）

### FRP_SERVER
指定 FRP 服务端地址。  
- **可选值**: 任意有效的 FRP 服务地址  
- **默认值**: *(无，例如 `yoursfrpserver.com`)*

### FRP_PORT
设置 FRP 服务端监听端口。如果未指定或为 `0`，则默认使用 7000。  
- **可选值**: 整数范围 `1～65535`  
- **默认值**: `0`


### FRP_AUTH_METHOD
设置 FRP 的认证方式。如果将其设置为 `token`，则必须提供 `FRP_AUTH_TOKEN`；如果留空，则不使用任何认证。  
- **可选值**: `jws` / `token` / *(空字符串)*  
- **默认值**: `jws`

### FRP_AUTH_TOKEN
当 `FRP_AUTH_METHOD=token` 时，用于指定服务器通信所需的 Token。  
- **可选值**: 任意非空字符串  
- **默认值**: 无



### TOKEN_MAX_AGE
设置 Token 的最大有效时长（单位：秒）。  
- **可选值**: 任意整数（单位：秒）  
- **默认值**: `31536000`（365 天）



### MARKET_PROVIDER
指定应用市场（Market）后端服务所使用的域名，可根据网络环境选择合适的域名以优化访问速度。  
- **可选值**:  
  - `appstore-server-prod.bttcdn.com`  
  - `appstore-china-server-prod.api.jointerminus.cn`  
- **默认值**: `appstore-server-prod.bttcdn.com`



### TERMINUS_CERT_SERVICE_API
指定 Olares HTTPS 证书服务的地址。若在中国大陆地区使用，推荐 `https://terminus-cert.api.jointerminus.cn`。  
- **可选值**:  
  - `https://terminus-cert.snowinning.com`  
  - `https://terminus-cert.api.jointerminus.cn`  
- **默认值**: `https://terminus-cert.snowinning.com`



### TERMINUS_DNS_SERVICE_API
指定 Olares DNS 服务的地址。若在中国大陆地区使用，推荐 `https://terminus-dnsop.api.jointerminus.cn`。  
- **可选值**:  
  - `https://terminus-dnsop.snowinning.com`  
  - `https://terminus-dnsop.api.jointerminus.cn`  
- **默认值**: `https://terminus-dnsop.snowinning.com`



### DID_GATE_URL
指定 DID 网关服务的地址。若在中国大陆地区使用，推荐 `https://did-gate-v3.api.jointerminus.cn/`。  
- **可选值**:  
- `https://did-gate-v3.bttcdn.com/`  
- `https://did-gate-v3.api.jointerminus.cn/`  
- **默认值**: `https://did-gate-v3.bttcdn.com/`



### OLARES_SPACE_URL
指定 Olares Space 服务的地址。若在中国大陆地区使用，推荐 `https://cloud-api.api.jointerminus.cn/`。  
- **可选值**:  
- `https://cloud-api.bttcdn.com/`  
- `https://cloud-api.api.jointerminus.cn/`  
- **默认值**: `https://cloud-api.bttcdn.com/`



### FIREBASE_PUSH_URL
指定 Firebase 推送服务的地址。若在中国大陆地区使用，推荐 `https://firebase-push-test.api.jointerminus.cn/v1/api/push`。  
- **可选值**:  
  - `https://firebase-push-test.bttcdn.com/v1/api/push`  
  - `https://firebase-push-test.api.jointerminus.cn/v1/api/push`  
- **默认值**: `https://firebase-push-test.bttcdn.com/v1/api/push`



### FRP_LIST_URL
指定 Olares FRP 信息服务的地址。若在中国大陆地区使用，推荐 `https://terminus-frp.api.jointerminus.cn`。  
- **可选值**:  
  - `https://terminus-frp.snowinning.com`  
  - `https://terminus-frp.api.jointerminus.cn`  
- **默认值**: `https://terminus-frp.snowinning.com`



### TAILSCALE_CONTROLPLANE_URL
指定 Olares Tailscale 控制平面（control-plane）服务的地址。若在中国大陆地区使用，推荐 `https://controlplane.api.jointerminus.cn`。  
- **可选值**:  
  - `https://controlplane.snowinning.com`  
  - `https://controlplane.api.jointerminus.cn`  
- **默认值**: `https://controlplane.snowinning.com`