---
outline: [2, 3]
---

# Install, uninstall and update
This guide helps users understand how to install, update, and uninstall applications through the Market. We'll also cover how to install custom applications.

## Before you start
Before you start, it is recommended to familiarize yourself with a few concepts for Terminus applications:

- [System application](../concepts/application.md#system-applications)
- [Community application](../concepts/application.md#community-applications)
- [Cluster-scoped application](../concepts/application.md#cluster-scoped-applications)
- [Authorized application](../concepts/application.md#authorized-applications)
- [Dependencies](../concepts/application.md#dependencies)
- [Entrance](../concepts/network.md#entrance)

## Find applications
The Terminus Market offers various ways to discover and browse applications:

On **Discover** page:
* **Featured Applications**: Curated by the editorial team, showcasing trending and seasonally relevant apps.
* **Community's Choices**: Most loved and recommended apps by the Terminus community.
* **Top Applications**: Apps with the highest usage and download rates.
* **Latest Releases**: Recently added applications to the market.

You can also browse applications based on their functionality:
* **Productivity**: Apps for work scenarios and improving efficiency, such as OnlyOffice, Gitlab, and AFFiNE.
* **Utilities**: Tools for solving specific problems or completing tasks.
* **Entertainment**: Apps for leisure and enjoyment.
* **Social Networks**: Platforms for connecting with others.
* **Blockchain**: Applications related to blockchain technology.
* **Recommend**: Decentralized content recommendation algorithms for Wise.
    :::info
    For information on using the recommendation feature in Wise, refer to [discover themed content](./recommend).
    :::

## Install applications

1. Open the Market app from the Dock or Launchpad.
2. Navigate to the app you want, and click **Get**.
3. When the operation button changes to **Install**, click it to start the installation.
4. Once finished, the button will change to **Open**.

:::tip
To cancel an installation, hover over the operation button and click **Cancel** when it appears.
:::

### Install cluster-scoped and authorized applications

Cluster-scoped applications are a special type of community application that:
* Can only be installed by Terminus admin
* Allow only one instance per cluster
* Require Terminus user to access them through authorized application

In this context, a cluster refers to a server cluster within the Terminus system that provides shared resources and services to multiple users. Cluster-scoped applications serve the entire cluster, while authorized applications allow individual users to access these services.

Therefore, to make sure a cluster-scoped service is running normally, follow the general process:

1. Install the cluster-scoped application first (for Terminus admin).
    Once installation is complete, the operation button will display **Running**.
2. Install the corresponding authorized application (for all Terminus user).

After installation, users can access the cluster-scoped application's services by running the authorized application.

### Install custom applications

1. Prepare a Terminus Application Chart (TAC) file (in `.zip`, `.tgz`, `.tar`, or `.gz` format).
2. Open the Market app from the Dock or Launchpad.
3. Click **My Terminus** > **Custom** to see all custom applications.
4. Click **Upload custom chart** and select your TAC file.

## Update applications
1. Open the Market app from the Dock or Launchpad.
2. Click for update notifications besides **My Terminus** from the left sidebar.
    If there is an available update, you should see a label marked with number.
3. Click **My Terminus** > **Available updates** to see all updatable applications.
4. Click **Update all** to update all applications at once, or update each application individually.

## Uninstall applications

### Uninstall from Market
1. Open the Market app from the Dock or Launchpad.
2. Click **My Terminus** from the left sidebar to view all installed apps.
3. Click <i class="material-icons">keyboard_arrow_down</i> next to the application's operation button, and select **Uninstall**.

### Uninstall from Launchpad
1. In Terminus, click Launchpad icon in the Dock to display all installed apps.
2. Click and hold the app icon until all the apps begin to jiggle.
3. Click <i class="material-icons">cancel</i> on the app icon to uninstall it.


## FAQ

### Why can't I install an application?
If you can't install an application, it might be due to:
* **Insufficient system resources**: Try freeing up system resources, or increasing your resource quota.
* **Missing dependencies**: Check the **Dependency** section on the application details page and make sure all required apps are installed.
* **Incompatible system version**: Try upgrading Terminus to the latest version.
* **Cluster-scoped application restrictions** (for Terminus member): Install the authorized app, and contact your Terminus admin to install the corresponding cluster-scoped application.


