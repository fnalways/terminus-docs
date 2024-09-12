# Terminus OS

## Directory structure

```
terminus
|-- apps                  # terminus built-in apps
|   |-- agent
|   |-- analytic
|   |-- market
|   |-- market-server
|   |-- argo
|   |-- desktop
|   |-- devbox
|   |-- vault
|   |-- files
|   |-- knowledge
|   |-- nitro
|   |-- notifications
|   |-- profile
|   |-- rss
|   |-- search
|   |-- settings
|   |-- system-apps
|   |-- wise
|   |-- wizard
|-- build                 # terminus installer
|   |-- installer
|   |-- manifest
|-- frameworks            # system runtime frameworks
|   |-- app-service
|   |-- backup-server
|   |-- bfl
|   |-- GPU
|   |-- l4-bfl-proxy
|   |-- osnode-init
|   |-- system-server
|   |-- tapr
|-- libs                  # toolkit libs
|   |-- fs-lib
|-- scripts               # scripts for build or package the terminus installer
|-- third-party           # third party libs or apps integrated in terminus
|   |-- authelia
|   |-- headscale
|   |-- infisical
|   |-- juicefs
|   |-- ks-console
|   |-- ks-installer
|   |-- kube-state-metrics
|   |-- notification-mananger
|   |-- predixy
|   |-- redis-cluster-operator
|   |-- seafile-server
|   |-- seahub
|   |-- tailscale
```

## How to install

```
curl -fsSL https://terminus.sh |  bash -
```

## How to build

```
git clone https://github.com/beclab/terminus

cd terminus

bash scripts/build.sh

```

Run the above scripts, you will get the debug version installer package `install-wizard-debug.tar.gz`

## How to install debug version

```
mkdir -p /path/to/unpack && cd /path/to/unpack

tar zxvf /path/to/terminus/install-wizard-debug.tar.gz

make install VERSION=0.0.0-DEBUG

```

## How to uninstall

```
cd /path/to/terminus && make uninstall

```
