---
outline: [2, 3]
---

# Install, uninstall and update
This guide helps users understand how to install, update, and uninstall applications through the Market. We'll also cover how to install custom applications.

## Before you start
Before you start, it is recommended to familiarize yourself with a few concepts for Olares applications:

- [System application](../concepts/application.md#system-applications)
- [Community application](../concepts/application.md#community-applications)
- [Cluster-scoped application](../concepts/application.md#cluster-scoped-applications)
- [Authorized application](../concepts/application.md#authorized-applications)
- [Dependencies](../concepts/application.md#dependencies)
- [Entrance](../concepts/network.md#entrance)

## Find applications
The Olares Market offers various ways to discover and browse applications:

On **Discover** page:
* **Featured Applications**: Curated by the editorial team, showcasing trending and seasonally relevant apps.
* **Community's Choices**: Most loved and recommended apps by the Olares community.
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
* Can only be installed by Olares admin
* Allow only one instance per cluster
* Require Olares user to access them through authorized application

In this context, a cluster refers to a server cluster within the Olares system that provides shared resources and services to multiple users. Cluster-scoped applications serve the entire cluster, while authorized applications allow individual users to access these services.

Therefore, to make sure a cluster-scoped service is running normally, follow the general process:

1. Install the cluster-scoped application first (for Olares admin).
    Once installation is complete, the operation button will display **Running**.
2. Install the corresponding authorized application (for all Olares user).

After installation, users can access the cluster-scoped application's services by running the authorized application.

### Install custom applications

1. Prepare an Olares Application Chart file (in `.zip`, `.tgz`, `.tar`, or `.gz` format).
2. Open the Market app from the Dock or Launchpad.
3. Click **My Olares** > **Custom** to see all custom applications.
4. Click **Upload custom chart** and select chart files.

## Update applications
1. Open the Market app from the Dock or Launchpad.
2. Click for update notifications besides **My Olares** from the left sidebar.
    If there is an available update, you should see a label marked with number.
3. Click **My Olares** > **Available updates** to see all updatable applications.
4. Click **Update all** to update all applications at once, or update each application individually.

## Uninstall applications

### Uninstall from Market
1. Open the Market app from the Dock or Launchpad.
2. Click **My Olares** from the left sidebar to view all installed apps.
3. Click <i class="material-icons">keyboard_arrow_down</i> next to the application's operation button, and select **Uninstall**.

### Uninstall from Launchpad
1. In Olares, click Launchpad icon in the Dock to display all installed apps.
2. Click and hold the app icon until all the apps begin to jiggle.
3. Click <i class="material-icons">cancel</i> on the app icon to uninstall it.


## FAQ

### Why can't I install an application?
If you can't install an application, it might be due to:
* **Insufficient system resources**: Try freeing up system resources, or increasing your resource quota.
* **Missing dependencies**: Check the **Dependency** section on the application details page and make sure all required apps are installed.
* **Incompatible system version**: Try upgrading Olares to the latest version.
* **Cluster-scoped application restrictions** (for Olares member): Install the authorized app, and contact your Olares admin to install the corresponding cluster-scoped application.


