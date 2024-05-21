---
outline: [2, 3]
---

# Application

## Motivation

We intend to develop a sandbox environment for applications on Terminus OS, akin to those found in Android and iOS systems, to enable:

- Separation between user applications and system applications.
- Distinct network and storage isolation for different applications.
- Regulation of application resource consumption.

This sandbox mechanism significantly limits the potential damage from malicious programs, facilitating a viable ecosystem for unlicensed Community Applications.

In the context of Kubernetes, a namespace serves as a mechanism to segment cluster resources into several discrete sections.

We have expanded on the basic concept that each Community Application belongs to an independent namespace:

- [Calling mechanism](#service-provider) between Community Application and system
- [Communication mechanism](#service-provider) between Community Applications
- [Collaboration mechanism](#cluster-application) when different users use the same Community Application

## Application identifier

Applications in Terminus OS have two identifiers: application name and application ID.

### Application Name

Under [Market Protocol](../protocol/market.md), application names are assigned by Indexer.

For example, the address of the Indexer maintained by the Terminus official team is [apps](https://github.com/beclab/apps), which stipulates that the directory name of the application under the repository is the application name.

### Application ID

The application ID is the first 8 digits of the application name `MD5`. For example, if the application name of an application is "hello", then the application ID is "b1946ac9".

The application ID will appear in [Endpoint](./network.md#endpoint).

Since the application name is submitted by the developer himself, Indexer mainly resolves conflict issues, so this will cause potential fairness and fraud, so we considered introducing a semantic-free application ID to solve this problem.

## Application classification

You can view the applications existing in the system through [ControlHub](../../how-to/terminus/controlhub/browse.md) and distinguish application types according to `namespace`:

### System Application

System Application includes Kubernetes, Kubesphere and Terminus OS's own components, as well as necessary hardware drivers. The following `namespaces` belong to system applications:

```
os-system
kubesphere-monitoring-federated
kubesphere-controls-system
kubesphere-system
kubesphere-monitoring-system
kubekey-system
default
kube-system
kube-public
kube-node-lease
gpu-system
```

`os-system` is a component developed by Terminus OS. Cluster-level applications and various database middleware provided by the system are installed under this namespace.

It is only allowed to be accessed by applications in the user's `user-space` and does not allow any Community Application to have access.

### User System Application

Terminus OS is a multi-user system. Whether it is Admin or Member, there are two User System Application Namespaces, namely:

```
user-system-'Local Name'
user-space-'Local Name'
```

:::info
You can view the definition of Local Name by viewing [Terminus Name](../snowinning/terminus-name.md)
:::

**user-space**

Installed system applications that users use daily, such as: [Files](../../how-to/terminus/files/), [Settings](../../how-to/terminus/settings/) , [Control Hub](../../how-to/terminus/controlhub/), [Dashboard](../../how-to/terminus/dashboard/), [Market](../. ./how-to/terminus/market/), [Profile](../../how-to/terminus/profile.md), [Vault](../../how-to/terminus/vault /)

The reason we put these applications into a special namespace is:

- Requires some calling permissions to the system's underlying interfaces. For example, call the `api-server` interface of Kubernetes.
- There are many calls among applications.
- Protect these applications from malicious programs under the sandbox mechanism.

**user-system**

System applications and user built-in applications are not allowed to be directly accessed by third-party APPs. However, if the database cluster and built-in APP provide certain interfaces [Provider](../../developer/develop/advanced/provider.md). Then the Community Application can access these resources after [declaring the need to obtain these access permissions](../../developer/develop/package/manifest.md#sysdata).

In this case, the system provides network proxies for these resources under the `namespace` of `user-system` and authenticates these Application network request calls from third parties.

### Community Application

The namespace of Community Application consists of two parts, [Application Name](#application-name) and the user's [Local Name](../snowinning/terminus-name.md), for example:

```
n8n-alice
gitlab-client-bob
```

Terminus OS has chosen to inherit the existing web software ecosystem completely: the technology stack required to develop applications is exactly the same as traditional web software. Not only can new applications be developed, but existing web software can also be integrated into Terminus OS with slight modifications.

Developers can refer to [Document](../../developer/develop/index.md) to develop applications, and [Submit] (../ ../developer/develop/submit/index.md), other users can view and install it through [Market](../../how-to/terminus/market/).

Building the Terminus ecosystem together with developers will always be our most important thing.

### Cluster Scoped Application

`Cluster Scoped Application` is a special type of Community Application. This type of Application will be somewhat different

- Only Admin can install
- Only one instance of each `Cluster Scoped Application` can be installed in the entire cluster.
- Users need to use `Cluster Scoped Application` through `Reference Application` authorized by `Cluster Scoped Application`

Typically a `Cluster Scoped Application` will:

1. Listen to [user event callback](../../developer/develop/advanced/account.md), to synchronize users in the system
2. Implement [Auth Server](./account.md#unified-account) so that users do not need to log in additionally

You can refer to some transplants done by the Terminus team: [Gitlab Fusion Client](https://github.com/beclab/apps/tree/main/gitlabfusionclient), [Gitlab Fusion](https://github.com/beclab/apps/tree/main/gitlabfusion)

## Call among apps

### Service Provider

We provide a `Service Provider`[] mechanism, for Community Application to call system applications or other services provided by Community Application.

![alt text](/images/overview/terminus/image3.jpeg)

as the picture shows:

- Developers need to [Declare as Provider](../../developer/develop/advanced/provider.md#申明-provider)a service interface of an application. At the same time, the system also has some built-in Providers.
- When other Applications want to call this interface, they need to [apply for Provider permissions](../../developer/develop/advanced/provider.md#申请-privder-的访问权限))
- When the call actually occurs, the `system-server` service under `user-system` will serve the agent responsible for the request and perform permission checks

### Intent

(TODO)

## Market

In Terminus's [Market](../../how-to/terminus/market/), not only can you install applications, but it also contains a wealth of `intelligent recommendations` and `AI models` for users to choose and install.

In the Market, whether you install `applications`, `intelligent recommendations` or `AI models`, the installation experience is exactly the same. Users only need to click `Get` in the Market, wait for the system to complete the installation, and then open and use it. When the system handles these installations, it is expanded based on Helm's installation [Chart](../../developer/develop/package/chart.md) package to achieve a completely unified installation process.

For developers, submitting three-party `applications`, `intelligent recommendations` and `AI models` to the Terminus Market also adopts the same [submission review process](../../developer/develop/submit/index.md)

For advanced users of the system, the Market also provides an entrance to `custom installation`. Users can refer to our `TAC` format to package any application and manually upload it to the system.

## Application status

The life cycle of an application will have the following states:

- `pending` means waiting in queue
- `installing` is installing
- `running` application installation completed
- `suspend` The application is suspended and the number of replicas is set to 0
- `uninstalling` is uninstalling
- `upgrading` is upgrading

The change flow chart of the declaration cycle is as follows:

```
+---------+     +------------+     +--------------+     +---------+     +----------+
| pending | --> | installing | --> |              | --> | suspend | --> | resuming |
+---------+     +------------+     |              |     +---------+     +----------+
                                   |              |                       |
                  +--------------> |   running    | <---------------------+
                  |                |              |
                +------------+     |              |
                | upgrading  | <-- |              |
                +------------+     +--------------+
                                     |
                                     |
                                     v
                                   +--------------+
                                   | uninstalling |
                                   +--------------+

```

## Resource Limit

Application developers should fill in the application's reasonable resource consumption limits in [TerminusManifest.yaml](../../developer/develop/package/manifest.md#spec) in the TAC.

- requiredMemory: minimum memory requirement, unit Mi / Gi
- limitedMemory: memory limit, unit Mi / Gi
- requiredDisk: minimum hard disk usage, unit Mi / Gi
- limitedDisk: upper limit of hard disk occupancy, unit Mi / Gi
- requiredCpu: Minimum number of CPU cores required, available decimals
- limitedCpu: the upper limit of the number of CPU cores, available decimals

When a developer submits an application for review, it will be reviewed whether the total resource usage of all containers configured in the TAC template exceed the declarared amount in TerminusManifest.yaml.

When users install an application, they will check whether the remaining resources of the current Terminus OS meet the resource requirements declared by the application. If not met, the installation will be refused.

## Learn More

- User

  [Manage apps using Market](../../how-to/termipass/account/index.md)<br>
  [Manage applications using Settings](../../how-to/terminus/settings/application.md)<br>

- Developer

  [Learn to develop applications on Terminus](../../developer/develop/index.md)<br>
