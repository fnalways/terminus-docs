---
outline: [2, 3]
---

# Market

The Market is built on a decentralized and permissionless [application distribution protocol](/overview/protocol/market.html). It is an open market where you can one-click install various applications, recommendation algorithms, and large language models from Terminus and third-party developers.

![Discover](/images/how-to/terminus/market/discover.jpg)

## Discover

#### **Applications Lists**

You can discover applications that interest you through the lists on the **'Discover'** page. The **'Discover'** page displays overall ranking lists, and each category page also features its own list. You can click the **'See All'** button to view the complete list. 

There are 4 types of lists available: Featured Applications, Community's Choices, Top, and Latest.

- **Featured Applications**: Our editorial team curates this list in the Terminus Market to showcase outstanding Terminus apps. It focuses on new apps, as well as those with significant updates or seasonal moments.
- **Community's Choices**: This includes apps most loved and recommended by the Terminus community. If you're unsure where to start with your Terminus system, try the apps from this list!
- **Top**: This list contains apps that have recently experienced a significant increase in downloads and installations. It's sorted by the number of downloads on DockerHub over the past month, from most to least.
- **Latest**: This list displays the most recently launched Terminus apps, sorted by the time the app was submitted or updated, from newest to oldest.

#### **Categories**

The menu on the left categorizes apps by type and purpose. This makes it easier for you to find the applications you need based on your use case.

The applications are grouped into the following categories:

- **Productivity**: Includes various applications used in work scenarios, and those that make specific processes or tasks more organized or efficient, such as: [OnlyOffice](https://market.jointerminus.com//app/onlyoffice), [Gitlab](https://market.jointerminus.com//app/gitlabfusion), [Nocodb](https://market.jointerminus.com//app/nocodb), [Bytebase](https://market.jointerminus.com//app/bytebase), [AFFiNE](https://market.jointerminus.com//app/affine)

- **Utility**: Applications that help users solve problems or complete specific tasks. For example: [Home Assistant](https://market.jointerminus.com//app/homeassistant), [qBittorrent](https://market.jointerminus.com//app/qbittorrent), [Radicale](https://market.jointerminus.com//app/radicale), [Obsidian LiveSync](https://market.jointerminus.com//app/obsidian), [ShowDoc](https://market.jointerminus.com//app/showdoc).

- **Entertainment**: Contains interactive apps that meet users' entertainment or information needs with text, images, audio, video, or other content. For example: [Jellyfin](https://market.jointerminus.com//app/jellyfin), [Lidarr](https://market.jointerminus.com//app/lidarr), [Navidrome](https://market.jointerminus.com//app/navidrome), [PhotoPrism](https://market.jointerminus.com//app/photoprism), [Calibre](https://market.jointerminus.com//app/calibre).

- **Social Network**: Contains apps that connect people through text, sound, photos, videos, and help communities grow. For example: [Mastodon](https://market.jointerminus.com//app/mastodon), [WordPress](https://market.jointerminus.com//app/wordpress), [Ghost](https://market.jointerminus.com//app/ghost), [SealCaster](https://market.jointerminus.com//app/sealcaster).

- **Blockchain**: Contains apps that utilize blockchain technology. Such as: [Ethereum](https://market.jointerminus.com//app/geth), [IPFS](https://market.jointerminus.com//app/ipfs), [Otmoic LP](https://market.jointerminus.com//app/otmoiclp).

- **Recommendation**: Contains decentralized recommendation algorithms that can run on Terminus, covering different content topics. For example: [World New](https://market.jointerminus.com//recommend/r4world), [Sport](https://market.jointerminus.com//recommend/r4sport), [Business](https://market.jointerminus.com//recommend/r4business), [Entertainment](https://market.jointerminus.com//recommend/r4entertainment).

- **Model**: Contains large language models that can run on Terminus. For example: [Mistral Instruct](https://market.jointerminus.com//model/mistralins7bq4), [Llama 2](https://market.jointerminus.com//model/llama2chat7bq4), [Openchat-3.5](https://market.jointerminus.com//model/openchat7b).

## Install Application

**Install**: Click the **'Get'** button on an application. Once the **'Install'** text appears, click it again to proceed. When multiple applications are being installed at the same time, they will queue up in the order of clicks.

**Cancel Installation**: During the queuing or installation process, `hover` your mouse over the **'operation button'** to reveal the **'Cancel'** text. Click on it to cancel the installation.

> You can check the status of all installed and installing applications on **'My Terminus'** page.

## Application Details

You can explore an application more thoroughly by viewing its details. To do so, click on the app card on the list page, which will take you to the application's detail page.

![alt text](/images/how-to/terminus/market/application-details.jpg)

### Basics

At the top of the page, you can see the app's icon, title, brief description, and basic information, including:

- Developer: The developer of the application.
- Language: The languages supported by the app.
- Resource Requirements: Memory, disk, CPU, and GPU resources required to install the app.
- Application Type: [Cluster applications](../../../overview/terminus/application.md#cluster-scoped-application) will have an additional label here.

### Operation Button

Below the app title, you'll find the **'operation button'**. It helps you understand the current status of the app and the actions you can take.

- A **'Get'** button indicates that you can [install this application](#install-application).
- A **'Spinning Symbol'** button indicates that the operation is awaiting processing, such as queuing for installation. When you hover your mouse over the operation button, it changes to 'Cancel'. Click on it to cancel the operation.
- An **'Installing/Updating/Uninstalling'** button indicates that the operation is in progress. If an operation, like installation, can be interrupted, the operation button will change to 'Cancel' when you hover your mouse over it.
- An **'Installed'** button indicates that the application has been installed.
- A **'Running/Open'** button indicates that the application is functioning.
- If the button is grayed out, it indicates that the application cannot be installed.

### Screenshots

You can view promotional screenshots of the application to get a quick understanding of its features and interface style. If there are multiple images, you can slide through them by clicking the left and right arrows. You can also click on an image to view it in full size.

### Descriptions

The **'ABOUT THIS APP'** section provides a comprehensive introduction to the app, including its key points and a brief list of its features. When developers update the application, the **'WHAT'S NEW'** section displays the added features, content, and bug fixes.

![alt text](/images/how-to/terminus/market/application-details-2.jpg)

### Permissions

You can see the system permissions required by the app in the **'Permissions'** section. The permissions are grouped into the following categories:

| Permission Type      | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Files                | Directory access permissions for the app                                                                                                                                               |
| Internet             | Whether the app needs internet connection while installing and running                                                                                                                                                                   |
| Entrance             | Number of different types of app entries.<br> - Visible entrances are displayed on the Terminus desktop with icons<br> - Invisible entrances run in the background, often used to cooperate with other apps<br> - Public entrances can be accessed by anyone on the internet<br> - Private entrances require activation of tailscale to access |
| Notifications        | Whether the app can send notifications to you                                                                                                                                                                                  |
| Analytics            | Whether the app has enabled [web analytics features](../../../developer/develop/advanced/analytic.md)                                                                                                                                |
| Websocket            | Whether the app uses [Websocket features](../../../developer/develop/advanced/websocket.md)                                                                                                                                     |
| Secret               | Whether the app uses Terminus's [secret management feature](../../../overview/terminus/secret.md) to store its sensitive information                                                                                                |
| Knowledgebase        | Whether the app uses your local [knowledge base](../settings/knowledge.md) to enhance the user experience                                                                                                      |
| Search               | Whether the app uses Terminus's [Zinc middleware](../../../overview/terminus/data.md#eszincsearch) for full-text search                                                                                                              |
| Relational Database  | Whether the app uses Terminus's [PostgreSQL middleware](../../../overview/terminus/data.md#postgresql) as a relational database                                                                                                        |
| Document Database    | Whether the app uses Terminus's [MongoDB middleware](../../../overview/terminus/data.md#mongodb) as a document database                                                                                                               |
| Key-Value Database   | Whether the app uses the Terminus's [Redis middleware](../../../overview/terminus/data.md#redis) as a KV database                                                                                                                 |
| Cluster App          | Whether the application is a [cluster application](../../../overview/terminus/application.md#cluster-scoped-application) |


### Information

This displays additional information about the application.

- For more information about the application and its user manual, refer to the **'Documents'** and the developer's **'Website'**. For open-source applications, you can access the source code via the **'Source Code'** link.

- The **'App Version'** refers to the application version contained in the Chart, while **'Chart Version'** refers to the version of the Terminus Application Chart(TAC). These two versions may not correspond and can increase independently or synchronously. The **'Version History'** provides a record of the **'Chart Version'** changelogs.

- The application's category, the name of developer and submitter, application license, legal documents, and other relevant information are displayed for your reference.

### Client

Some Terminus applications can work with clients on mobiles and desktops to achieve multi-platform synchronization, audio and video streaming, and other functions. For example, [Mastodon](<https://market.jointerminus.com//app/mastodon>), [Home Assistant](<https://market.jointerminus.com//app/homeassistant>), [Jellyfin](<https://market.jointerminus.com//app/jellyfin>). You can download the official clients for these applications directly from the **'GET A CLIENT'** section.

### Dependency

Some applications require other applications to function correctly. Before installing these applications, please make sure all applications listed in the **'Dependency'** section are already installed.

### Reference App

Typically, [cluster applications](../../../overview/terminus/application.md#cluster-scoped-application) authorizes certain trusted client apps to connect to the itself via the network. If you want to use a cluster application, you can install the app from this list.

### Unable to Install Issues

The Market may not be able to install some applications due to the following situations:

- **Insufficient system resources**: If your Terminus cluster resources or your user resource quota are less than what the application requires,  you will not be able to install. To resolve this, try freeing up resources, expanding cluster resources, or increasing resource quotas.

- **Lack of dependencies**: This means that the applications this program depends on have not been installed. To resolve this issue, try installing all dependent apps.

- **Incompatible system version**: This application is not compatible with the current version of your Terminus OS. You can upgrade Terminus OS to the latest version and then try to install.

- **Cluster application**: This application is a cluster application, only administrators can install it. You can contact your administrator to install the application.

## Manage Application

You can view the status and basic information of all your applications on Terminus on the My Terminus page. Applications are categorized based on their installation source, divided into 'Market' and 'Custom' tabs. 'Market' tab includes applications installed from the Terminus Market, while 'Custom' tab includes those [installed through custom installation](#custom-application).

![alt text](/images/how-to/terminus/market/myterminus.jpg)

### Apps

You can see the status of all apps on the **'My Terminus'** page and manage it. You can click the **'Open'** button to launch the application from Market.

When you want to **uninstall the application**, you can use either of the following methods:
1. On the **'My Terminus'** page: <br>
click the extension arrow next to the **'Operation Button'** and select **'Uninstall'** from the dropdown menu.

2. On the **'Launchpad'** on the Desktop: <br>
press and hold the application icon, then click the **'x'** button.

### Recommends

You can see the status of all recommendation algorithm on the **'My Terminus'** page and manage it.

:::tip
The recommendation algorithm will automatically start and enter the Running state after installation.
:::

When you want to **uninstall the recommended algorithm**, you just need to click the extension arrow on the **'Operation Button'** on the **'My Terminus'** page, and select **'Uninstall'** from the dropdown menu.

### Models

:::info
- Only administrator users can install and manage models
- A Terminus cluster can only load **one** large language model at the same time. When loading the model, it will automatically **'Unload'** the previous model.
:::

You can see the status of all large language model on the **'My Terminus'** page and manage it.
- An installation progress will be displayed while the model is installing. The button will change to **'Installed'** upon completion.
- To use a model, you must first load it. Click the extension arrow on the **'Operation Button'** and select **'Load'** from the dropdown menu.
- If you no longer need a model and want to free up resources, you can unload it. Click the extension arrow on the **'Operation Button'** and select **'Unload'** from the dropdown menu to stop a running model.

When you want to **uninstall the model**, you just need to click the extension arrow on the **'Operation Button'** on the **'My Terminus'** page, and select **'Uninstall'** from the dropdown menu.

[Learn more about the details of using AI in Terminus](../../../overview/terminus/ai.md)

## Update Application

When the developer updates an application, a badge will appear next to **'My Terminus'** in the menu sidebar. Enter **'My Terminus'**, click on '**Available Updates'** to see all updatable applications. 
- You can use the **'Update All'** button in the upper right corner to update all applications at once. 
- Alternatively, you can click the **'Update'** button to update each application individually.

![alt text](/images/how-to/terminus/market/update.jpg)

## Custom Application

### Install

If you wish to test your self-developed Terminus application, or use a test version of an application not yet released on the Terminus Market, you can install the application in a custom way.

:::tip Prerequisites
Prepare a valid [Terminus Application Chart (TAC)](../../../developer/develop/package/chart.md) packaged in .zip, .tgz or tar.gz format.
:::

**Installation steps**
1.  Open **'Market'**, go to the **'My Terminus'** page
2.  Switch to the **'Custom'** tab
3.  Click the **'Upload Custom Chart'** button in the upper right corner to upload the TAC package from your local computer
4.  Wait for the installation to complete. The **'Market'** will check the TAC upon upload. If the TAC meets the format specifications, the installation process will begin. If the TAC fails the check, an error message will be displayed.
![Upload Custom Chart](/images/how-to/terminus/market/upload-custom-chart.jpg)

### Manage

Managing custom applications is like managing Market-installed apps. You can refer to [Manage Applications](#manage-application).

### Update

Custom applications cannot be updated through push. If you need to update a Custom Application, please upload the new TAC package for the application. After it passes the format check, the Market will update the application according to the configuration of the new TAC package.

:::tip
Terminus will distinguish applications from different installation sources. Therefore, if you installed an custom application, even if there is an application with the same name in the Market, you cannot upgrade it through the Market. Similarly, you cannot update an application installed from the Market by uploading a TAC package.
:::

## Logs

You can view the operation logs of the application by clicking the **'Log'** button in the upper right corner of MyTerminus. The application log records the type of operation of the application, the time of operation, the status of operation, and the message.

![alt text](/images/how-to/terminus/market/logs.jpg)

Common application operation exceptions include:

1.  **Application installation timeout**: This indicates that the application's container couldn't finish initialization within the allotted time. This is typically due to an inability to connect to the mirror service or slow mirror download speeds. You can try again when the mirror service is available or the network is stable.

2.  **Insufficient resources**: This suggests that there aren't enough cluster resources to complete the container's initialization during the application installation. You could free up occupied resources, expand the cluster resources, or increase resource quotas and try again.

3.  **Configuration error**: This implies that there are problems with the application's configuration file, which are preventing Terminus from installing the application correctly. You can report this error to the application submitter or developer in the community, then wait for them to resolve the configuration file issue.
