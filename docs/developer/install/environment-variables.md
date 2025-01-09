# Olares environment variables

Olares provides a highly customizable installation process through the use of environment variables. These variables can override default settings, enabling advanced configurations to suit your specific requirements.

## Usage examples

To customize the installation process, you can set the environment variables before running the installation command. For example:

```bash
# Specify Kubernetes (k8s) instead of k3s
export KUBE_TYPE=k8s \
&& curl -sSfL https://olares.sh | bash -
```
Or, if you have already downloaded the installation script `install.sh`:

```bash
# Specify Kubernetes (k8s) instead of k3s
export KUBE_TYPE=k8s && bash install.sh
```
Both methods achieve the same result. The environment variable `KUBE_TYPE` will be passed to the script, and the script will use it to modify its behavior.

## Environment variables reference

The section lists all the environment variables, along with their default values, optional values, and descriptions. Configure them as needed.

### `KUBE_TYPE`
Determines the Kubernetes distribution to install.
- **Valid values**: 
   - `k8s` (full Kubernetes)
   - `k3s` (lightweight Kubernetes)
- **Default**: `k3s`
- **Usage**: Must be used with `install.sh` or with the installation command.

### `REGISTRY_MIRRORS`
Specifies a custom Docker registry mirror for faster image pulls.
- **Valid values**: `https://mirrors.joinolares.cn` or any other valid URL
- **Default**: `https://registry-1.docker.io`
- **Usage**: Must be used with `install.sh` or with the installation command.

### `PREINSTALL`
Runs only the pre-installation phase (system dependency setup) without proceeding with the full Olares installation.  
- **Valid values**: `1`  
- **Default**: None (full installation is performed if not set).
- **Usage**: Must be used with `install.sh` or with the installation command.

### `JUICEFS`
Installs [JuiceFS](https://juicefs.com/) alongside Olares.
- **Valid values**: `1`  
- **Default**: None (JuiceFS is not installed if not set).
- **Usage**: Must be used with `install.sh` or with the installation command.

### `TERMINUS_OS_DOMAINNAME`
Sets the domain name before installation and skip the interactive prompt.
- **Valid values**: Any valid domain name  
- **Default**: None (prompts for domain name if not set).

### `TERMINUS_OS_USERNAME`
Sets the username before installation and skip the interactive prompt.

- **Valid values**: Any valid username (2–250 characters, excluding reserved keywords)
- **Default**: None (prompts for username if not set).
- **Validation**: Reserved keywords are `user`, `system`, `space`, `default`, `os`, `kubesphere`, `kube`, `kubekey`, `kubernetes`,
    `gpu`, `tapr`, `bfl`, `bytetrade`, `project`, `pod`.

### `TERMINUS_OS_EMAIL`
Specifies the email address instead of the generated one.  
- **Valid values**: Any valid email address  
- **Default**: None (a temporary email is auto-generated if not set).

### `TERMINUS_OS_PASSWORD`
Specifies the password instead of the generated one.
- **Valid values**: A valid password with 6–32 characters  
- **Default**: A randomly 8-digit password 

### `TERMINUS_IS_CLOUD_VERSION`
Marks the machine explicitly as a cloud instance.
- **Valid values**: `true`  
- **Default**: None

### `LOCAL_GPU_ENABLE`
Enables GPU support and installs necessary drivers.
- **Valid values**: 
  - `0` (disable)
  - `1` (enable)  
- **Default**: `0`

### `LOCAL_GPU_SHARE`
Enables GPU sharing (only applicable if GPU is enabled).
- **Valid values**:
  - `0` (disable)
  - `1` (enable)
- **Default**: `0`

### `CLOUDFLARE_ENABLE`
Enables the Cloudflare proxy.
- **Valid values**:
  - `0` (disable)
  - `1` (enable)
- **Default**: `0`

### `FRP_ENABLE`
Enables FRP for internal network tunneling. Requires additional FRP-related variables if using a custom server.
- **Valid values**:
  - `0` (disable)
  - `1` (enable)
- **Default**: `0`

### `FRP_SERVER`
Specifies the FRP server address.
- **Valid values**: Any valid FRP server address  
- **Default**: None

### `FRP_PORT`
Specifies the FRP server's listening port.
- **Valid values**: Integer in the range `1–65535`  
- **Default**: `7000` if not set or set to `0`.

### `FRP_AUTH_METHOD`
- Sets the FRP authentication method.
- **Valid values**:
  - `jws`
  - `token` (requires `FRP_AUTH_TOKEN`)
  - (empty) – No authentication
- **Default**: `jws`.

### `FRP_AUTH_TOKEN`
Specifies the token for FRP communication (required if `FRP_AUTH_METHOD=token`).
- **Valid values**: Any non-empty string  
- **Default**: None

### `TOKEN_MAX_AGE`
Sets the maximum duration for a token's validity (in seconds).
- **Valid values**: Any integer (in seconds)  
- **Default**: `31536000` (365 days)

### `MARKET_PROVIDER`
Specifies the backend domain used by the application marketplace (Market).
- **Valid values**: 
  - `appstore-server-prod.bttcdn.com` 
  - `appstore-china-server-prod.api.jointerminus.cn` (Recommended for mainland China users with better connectivity) 
- **Default**: `appstore-server-prod.bttcdn.com`

### `TERMINUS_CERT_SERVICE_API`
Specifies the endpoint for the Olares HTTPS certificate service.
- **Valid values**:
  - `https://terminus-cert.snowinning.com`
  - `https://terminus-cert.api.jointerminus.cn` (Recommended for mainland China users with better connectivity)
- **Default**: `https://terminus-cert.snowinning.com`



### `TERMINUS_DNS_SERVICE_API`
Specifies the endpoint for the Olares DNS service.  
- **Valid values**:
  - `https://terminus-dnsop.snowinning.com`
  - `https://terminus-dnsop.api.jointerminus.cn` (Recommended for mainland China users with better connectivity)
- **Default**: `https://terminus-dnsop.snowinning.com`

### `DID_GATE_URL`
Specifies the endpoint for the DID gateway.
- **Valid values**:
  - `https://did-gate-v3.bttcdn.com/`
  - `https://did-gate-v3.api.jointerminus.cn/` (Recommended for mainland China users with better connectivity)
- **Default**: `https://did-gate-v3.bttcdn.com/`

### `OLARES_SPACE_URL`
Specifies the endpoint for the Olares Space service. 
- **Valid values**:
  - `https://cloud-api.bttcdn.com/`
  - `https://cloud-api.api.jointerminus.cn/`  (Recommended for mainland China users with better connectivity)
- **Default**: `https://cloud-api.bttcdn.com/`

### `FIREBASE_PUSH_URL`
Specifies the endpoint for Firebase push services.
- **Valid values**:
  - `https://firebase-push-test.bttcdn.com/v1/api/push`
  - `https://firebase-push-test.api.jointerminus.cn/v1/api/push`  (Recommended for mainland China users with better connectivity)
- **Default**: `https://firebase-push-test.bttcdn.com/v1/api/push`

### `FRP_LIST_URL`
Specifies the endpoint for the Olares FRP information service.
- **Valid values**:
  - `https://terminus-frp.snowinning.com`
  - `https://terminus-frp.api.jointerminus.cn`  (Recommended for mainland China users with better connectivity)
- **Default**: `https://terminus-frp.snowinning.com`

### `TAILSCALE_CONTROLPLANE_URL`
Specifies the endpoint for the Olares Tailscale control-plane service.
- **Valid values**:
  - `https://controlplane.snowinning.com`
  - `https://controlplane.api.jointerminus.cn`  (Recommended for mainland China users with better connectivity)
- **Default**: `https://controlplane.snowinning.com`