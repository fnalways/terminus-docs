# Olares environment variables

In most scenarios, you can install Olares with a single-line script:

```bash
curl -sSfL https://olares.sh | bash
```

To meet more advanced installation requirements, the Olares installation script also supports a range of environment variables that can override default configurations and behaviors. 

## How to use environment variables

You can specify these environment variables in several ways:

::: tip Note
In the examples below, we use `KUBE_TYPE=k8s` to illustrate how to install K8s instead of k3s for Olares. Other environment variables can be used similarly.
:::

- Specify inline while running the installation script:
  
    ```bash
    KUBE_TYPE=k8s bash install.sh
    ```

- Export the variables first, then run the script:

    ```bash
    export KUBE_TYPE=k8s
    bash install.sh
    ```

- Chain commands with `&&`:

    ```bash
    export KUBE_TYPE=k8s && bash install.sh
    ``` 

Of course, you can also combine multiple environment variables for more flexible customization, for example:

```bash
    export KUBE_TYPE=k8s \
        REGISTRY_MIRRORS="https://mirrors.joinolares.cn" \
        FRP_ENABLE=1 && \
    bash install.sh
```

## List of environment variables

The section lists all the environment variables supported by the installation script, along with their default values, optional values, and descriptions. Configure them as needed.

### KUBE_TYPE
- Specifies the Kubernetes distribution to use. If you need the full version of k8s, set this to `k8s`. Only applies when running `install.sh`.  
- **Possible Values**: `k8s` / `k3s`  
- **Default Value**: `k3s`  



### REGISTRY_MIRRORS
- Sets the Docker registry mirror. Only applies when running `install.sh`.  
- **Possible Values**: `https://mirrors.joinolares.cn` or another mirror URL  
- **Default Value**: *(None; if not set, defaults to* `https://registry-1.docker.io`)  



### PREINSTALL
- When set to `1`, only finishes the preinstall phase (installs system dependencies). If unset or empty, Olares will be installed fully. Only applies when running `install.sh`.  
- **Possible Values**: `1`  
- **Default Value**: None 



### JUICEFS
- When set to `1`, installs [JuiceFS](https://juicefs.com/). By default, it is not installed. Only applies when running `install.sh`.  
- **Possible Values**: `1`  
- **Default Value**: None 



### TERMINUS_OS_DOMAINNAME
- Presets the domain name before installation, skipping the interactive prompt.  
- **Possible Values**: Any valid domain name  
- **Default Value**: None 



### TERMINUS_OS_USERNAME
- Presets the username before installation, skipping the interactive prompt.  
  **Reserved keywords:**
    ```
    user, system, space, default, os, kubesphere, kube, kubekey, kubernetes,
    gpu, tapr, bfl, bytetrade, project, pod
    ```
- **Possible Values**: Any valid username (length 2–250; no conflicts with reserved keywords)  
- **Default Value**: None 



### TERMINUS_OS_EMAIL
- Presets the email address before installation, skipping the interactive prompt. If not set, a temporary email is automatically generated.  
- **Possible Values**: Any valid email address  
- **Default Value**: Automatically generated email address



### TERMINUS_OS_PASSWORD
- Presets the password before installation, skipping the interactive prompt.  
- **Possible Values**: 6–32 characters  
- **Default Value**: A randomly 8-digit password 



### TERMINUS_IS_CLOUD_VERSION
- Explicitly marks this machine as a cloud instance.  
- **Possible Values**: `true`  
- **Default Value**: None 



### LOCAL_GPU_ENABLE
- Specifies whether to enable GPU and install drivers.  
- **Possible Values**: `0` (disable)/ `1`(enable)  
- **Default Value**: `0` (disable)



### LOCAL_GPU_SHARE
- Specifies whether to enable GPU sharing. Only available when GPU is already enabled.  
- **Possible Values**: `0` (disable)/ `1`(enable)  
- **Default Value**: `0` (disable)



### CLOUDFLARE_ENABLE
- Specifies whether to enable the Cloudflare proxy.  
- **Possible Values**: `0` (disable)/ `1`(enable)  
- **Default Value**: `0` (disable)



### FRP_ENABLE
- Specifies whether to enable FRP for internal network tunneling. If you use a custom FRP server, you must also set `FRP_SERVER`, `FRP_PORT`, and other FRP-related variables.  
- **Possible Values**: `0` (disable)/ `1`(enable)  
- **Default Value**: `0` (disable)



### FRP_SERVER
- Specifies the FRP server address.  
- **Possible Values**: Any valid FRP server address  
- **Default Value**: None


### FRP_PORT
- Sets the FRP server’s listening port. If not specified (or `0`), it defaults to 7000.  
- **Possible Values**: Integer in the range `1–65535`  
- **Default Value**: `0`



### FRP_AUTH_METHOD
- Sets the FRP authentication method. If set to `token`, you must also provide `FRP_AUTH_TOKEN`. If left blank, no authentication is used.  
- **Possible Values**: `jws` / `token` / (empty) 
- **Default Value**: `jws`



### FRP_AUTH_TOKEN
- When `FRP_AUTH_METHOD=token`, specifies the token for server communication.  
- **Possible Values**: Any non-empty string  
- **Default Value**: None 



### TOKEN_MAX_AGE
- Sets the maximum valid duration for the token (in seconds).  
- **Possible Values**: Any integer (in seconds)  
- **Default Value**: `31536000` (365 days)



### MARKET_PROVIDER
- Specifies the backend domain used by the application marketplace (Market). Choose an appropriate domain for optimal network access.  
- **Possible Values**: 
  - `appstore-server-prod.bttcdn.com` / 
  - `appstore-china-server-prod.api.jointerminus.cn`  
- **Default Value**: `appstore-server-prod.bttcdn.com`



### TERMINUS_CERT_SERVICE_API
- Specifies the endpoint for the Olares HTTPS certificate service. For better connectivity within mainland China, use `https://terminus-cert.api.jointerminus.cn`.  
- **Possible Values**:
  - `https://terminus-cert.snowinning.com`
  - `https://terminus-cert.api.jointerminus.cn`
- **Default Value**: `https://terminus-cert.snowinning.com`



### TERMINUS_DNS_SERVICE_API
- Specifies the endpoint for the Olares DNS service. For better connectivity within mainland China, use `https://terminus-dnsop.api.jointerminus.cn`.  
- **Possible Values**:
  - `https://terminus-dnsop.snowinning.com`
  - `https://terminus-dnsop.api.jointerminus.cn`
- **Default Value**: `https://terminus-dnsop.snowinning.com`



### DID_GATE_URL
- Specifies the endpoint for the DID gateway. For better connectivity within mainland China, use `https://did-gate-v3.api.jointerminus.cn/`.  
- **Possible Values**:
  - `https://did-gate-v3.bttcdn.com/`
  - `https://did-gate-v3.api.jointerminus.cn/`
- **Default Value**: `https://did-gate-v3.bttcdn.com/`



### OLARES_SPACE_URL
- Specifies the endpoint for the Olares Space service. For better connectivity within mainland China, use `https://cloud-api.api.jointerminus.cn/`.  
- **Possible Values**:
  - `https://cloud-api.bttcdn.com/`
  - `https://cloud-api.api.jointerminus.cn/`
- **Default Value**: `https://cloud-api.bttcdn.com/`



### FIREBASE_PUSH_URL
- Specifies the endpoint for Firebase push services. For better connectivity within mainland China, use `https://firebase-push-test.api.jointerminus.cn/v1/api/push`.  
- **Possible Values**:
  - `https://firebase-push-test.bttcdn.com/v1/api/push`
  - `https://firebase-push-test.api.jointerminus.cn/v1/api/push`
- **Default Value**: `https://firebase-push-test.bttcdn.com/v1/api/push`



### FRP_LIST_URL
- Specifies the endpoint for the Olares FRP information service. For better connectivity within mainland China, use `https://terminus-frp.api.jointerminus.cn`.  
- **Possible Values**:
  - `https://terminus-frp.snowinning.com`
  - `https://terminus-frp.api.jointerminus.cn`
- **Default Value**: `https://terminus-frp.snowinning.com`



### TAILSCALE_CONTROLPLANE_URL
- Specifies the endpoint for the Olares Tailscale control-plane service. For better connectivity within mainland China, use `https://controlplane.api.jointerminus.cn`.  
- **Possible Values**:
  - `https://controlplane.snowinning.com`
  - `https://controlplane.api.jointerminus.cn`
- **Default Value**: `https://controlplane.snowinning.com`