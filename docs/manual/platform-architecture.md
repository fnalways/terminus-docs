---
outline: [2, 3]
---

# Olares architecture

This document provides a comprehensive explanation of the Olares architecture, outlining the purpose and functionality of each layer and its components.

![Olares architecture diagram](/images/manual/olares-architecture-diagram.png)

## Infrastructure

The infrastructure layer forms the foundation of Olares.

### Container orchestration

Olares supports different Kubernetes distributions depending on the underlying environment:
- Linux environments (including WSL, PVE, LXC, Raspberry Pi): Users can choose to install [Kubernetes](https://kubernetes.io/) or the lightweight [K3s](https://k3s.io/), with K3s being the default for its better performance and resource efficiency on local hardware.
- macOS: [minikube](https://minikube.sigs.k8s.io/) is used to deploy Kubernetes within a Linux virtual machine, ensuring a unified experience across platforms.

Regardless of the chosen Kubernetes distribution, users benefit from a consistent set of capabilities, including deployment, scaling, resource allocation, and self-healing.

### Networking

The networking stack ensures seamless communication between containers, nodes, and services. Key components include:

- [CoreDNS](https://coredns.io/): Provides DNS services for the cluster, ensuring efficient name resolution.
- [Calico](https://www.tigera.io/project-calico/): A container networking interface (CNI) that facilitates communication between containers and virtual machines while offering advanced network policy controls.
- [Envoy](https://www.envoyproxy.io/): A high-performance, extensible edge and service proxy. Envoy acts as middleware for communication between services, handling load balancing, service discovery, secure communication, and observability. It can operate as a standalone reverse proxy or an API gateway and is often used as a data plane component in service meshes.

These tools collectively ensure robust, scalable, and secure networking within Olares.

### Storage

Olares provides flexibility in storage solutions tailored to both single-node and multi-node setups:

- Local storage: Ideal for single-node deployments, offering the best read/write performance for local-only data like system logs.
- [S3](https://aws.amazon.com/s3/): A cloud-based storage option for multi-node environments, or any S3-compatible service.
- [MinIO](https://min.io/): A self-hosted S3-compatible storage solution for on-premise deployments. Users can either set up a MinIO cluster through Olares or use an existing one.

This approach ensures that applications have access to the necessary storage mechanisms, whether it's for local or distributed environments.

### Distributed key-value storage

Olares uses [etcd](https://etcd.io/) as its distributed key-value store. etcd is integral for managing critical system data such as cluster state, configuration, and service discovery. Its high availability and strong consistency make it an excellent choice for distributed environments.

### GPU management

With the growing need for AI and ML workloads, Olares provides robust GPU management capabilities, supporting both shared and exclusive GPU usage:

- **Shared mode**: Applications can access the full GPU (compute and memory), while Olares schedules GPU usage to ensure fairness across multiple applications. This is implemented with [nvshare](https://github.com/grgalex/nvshare).
- **Standalone mode**: If an application claims the entire GPU memory, other tasks requiring GPU resources will not execute until it is released.

Starting with Olares v1.11, [CUDA](https://developer.nvidia.com/cuda-toolkit) (12.4 and above) is supported. Changes in the host environment's CUDA configuration can be synchronized with the Olares cluster using `olares-cli`.

### Olares management

The management of Olares is implemented through the following:

- [olares-cli](../developer/install/cli/olares-cli.md): A command-line tool for managing Olares clusters, applications, and hardware nodes.
- [olaresd](../developer/install/installation-overview.md#container-runtime-containerd): A daemon process that monitors hardware and network changes, handles system upgrades, and ensures the integrity of the cluster.

These tools streamline installation, maintenance, and scaling.

## Platform

The platform layer provides middleware services such as databases, messaging systems, file systems, workflow orchestration, secret management, and observability.

### Databases

Olares uses [PostgreSQL](https://www.postgresql.org/) as its primary relational database. All applications share a single PostgreSQL instance, with each having dedicated accounts for isolation. PostgreSQL also serves as a full-text search engine and vector database.

For clustering, [Citus](https://github.com/citusdata/citus) is used, though its production readiness is still under evaluation.

In the future, PostgreSQL is expected to migrate to the infrastructure layer for better resource management.

### Key-value cache

Olares integrates [KVRocks](https://github.com/apache/incubator-kvrocks), a Redis-compatible persistent key-value store built on RocksDB. KVRocks balances memory and disk storage, making it more resource-efficient than Redis clusters, though slightly slower in performance.

### Messaging system

The lightweight and high-performance [NATS.io](https://nats.io/) is used as the messaging system. NATS ensures low resource consumption while delivering reliable message queues for inter-application communication.

### File system

Olares employs [JuiceFS](https://juicefs.com/), a cloud-native distributed file system, to provide POSIX-compatible interfaces for applications. When S3 or MinIO is used as the storage backend, JuiceFS ensures seamless file access across nodes.

### Workflow management

For workflow orchestration, Olares uses [Argo Workflows](https://argoproj.github.io/). This Kubernetes-native tool automates complex tasks, such as those required by Olares' distributed recommendation engine. Currently, this functionality is not available to third-party applications.

### Secret management

Two secret management solutions are integrated into Olares:

- [Vault](https://github.com/beclab/olares/tree/main/apps/vault): Protects sensitive data like accounts, passwords, and mnemonics. It encrypts secrets, ensuring that even if the server is compromised, the data remains secure. Vault is developed by the Olares team based on [Padloc](https://padloc.app/).
- [Infisical](https://infisical.com/): A tool for managing sensitive information and preventing secret leaks within teams.

### Observability

Olares integrates [Prometheus](https://prometheus.io/) for system monitoring and resource usage tracking. Prometheus collects resource metrics for applications like Dashboard and Market.

Additionally, [OpenTelemetry](https://opentelemetry.io/) with eBPF-based monitoring traces request workflows within the system.

### Other middlewares

The Olares application store includes common middleware such as [Grafana](https://grafana.com/) for visualization, [MongoDB](https://www.mongodb.com/) for document storage, and [Chaos Mesh](https://chaos-mesh.org/) for chaos engineering.

## Application framework

The application framework layer provides common functionality and interfaces for system and third-party applications.

### Authentication and identity management

Olares uses [LLDAP](https://lldap.example.com/) to manage user accounts and provide LDAP (Lightweight Directory Access Protocol) services for applications.

Additionally, [Authelia](https://www.authelia.com/) adds authentication and authorization support, including multi-factor authentication and single sign-on (SSO).

### Application governance

Key components for application governance include:
- [app-service](https://github.com/beclab/app-service): Handles application lifecycle management and resource allocation.
- [system-server](https://github.com/beclab/system-server): Manages permissions for inter-application API calls and routes network connections between applications and middleware.
- image-server: Works with app-service to manage container images required by Olares applications.
- [bfl](https://github.com/beclab/bfl): Aggregates backend interfaces and proxies requests for all system services, including user-isolated system and cluster information.

### Network connectivity
Olares supports secure and flexible network connectivity through:
- Reverse proxy: Options include [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/), Olares Tunnel, and self-hosted FRP.
- [Tailscale](https://tailscale.com/): Enables users to securely access the system from anywhere.
- [Headscale](https://github.com/juanfont/headscale): A self-hosted implementation of the Tailscale control server.

### File service
Key components for file service include:
- File server
- [Seafile](https://www.seafile.com/): An open-source alternative to Dropbox for file synchronization. Olares deeply integrates Seafile, enabling users to synchronize files scattered across multiple devices into a unified repository.
- Drive server: Provides integration with external storage services like Google Drive, Dropbox and S3.
- Media server: Streams video files using [ffmpeg](https://github.com/FFmpeg/FFmpeg). 

### Knowledge service
Key components for knowledge service include:
- Knowledge: Stores content such as web pages, videos, audio files, PDFs, and EPUBs that users collect via the browser extension or share from their mobile phones using LarePass. This repository is also utilized by the decentralized recommendation engine to store its results.
- Download: Uses [aria2](https://aria2.github.io/) and [youtube-dlp](https://github.com/yt-dlp/yt-dlp) to download files, magnet links, and online videos.
- Search: Provides full-text search for stored content.
- [RSSHub](https://github.com/DIYgod/RSSHub): Generates RSS feeds for easier content subscription.

### AI service

Olares empowers AI capabilities with:
- Model serving*: Hosts AI models for applications. *(In development)*
- RAG interface*: Provides Retrieval-Augmented Generation (RAG) services for files, articles, images, and videos. *(In development)*
- Agent & workflow orchestration*: Manages agents and tool workflows. *(In development)*

### System service

System services include:
- Notification: Delivers system-wide notifications.
- Analytics: Provides web analytics similar to Google Analytics.
- Backup*: Supports backups for directories, applications, and clusters. *(In development)*
- Upgrade*: Supports automated system upgrades. *(In development)*

## System applications

System applications offer tools for managing files, knowledge, passwords, and the system itself. These applications are pre-installed.

Users can install additional applications via the Market app.

### Files

Manages and synchronizes files across devices, enabling seamless sharing and access.

### Wise

A local-first and AI-native modern reader that helps to collect, read, and manage information from various platforms. Users can run self-hosted recommendation algorithms to filter and sort online content.

### Vault

A secure password manager for storing sensitive information and synchronizing it across devices.

### Market

A decentralized and permissionless app store for installing, uninstalling, and updating applications.

## Settings

A system configuration application.

## Dashboard

An app for monitoring system resource usage.

## Control Hub

The console for Olares, providing precise and autonomous control over the system and its environment.

## Profile

An app to customize the user's profile page.

### DevBox

A development tool for building and deploying Olares applications.