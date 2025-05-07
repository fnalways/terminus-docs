---
description: Administrators' guide on how to manage ComfyUI on Olares using ComfyUI Launcher, covering controling the service, managing models, plugins, and python environments, troubleshooting and maintenance.
---

# Manage ComfyUI using ComfyUI Launcher

ComfyUI Launcher is the core management tool of ComfyUI for **administrator users**. You can use it to control the running status of the ComfyUI service within the cluster, while easily managing models, plugins, runtime environment, and network configurations.

This document guides you on how to use ComfyUI Launcher for ComfyUI service management and routine maintenance.

## Start and stop the ComfyUI service

Only after you start the ComfyUI service can you and other members access it using the ComfyUI client interface.

![Start/Stop ComfyUI service](/images/manual/use-cases/comfyui-start.png#bordered)

* **Start the ComfyUI Service**: Click the **Start** button in the upper-right corner to start the ComfyUI service. 
    
    ::: tip First run
    * Initial startup of the launcher requires environment initialization, which typically takes 10-20 seconds.
    * If the system prompts that necessary basic models are missing, you can click **Start anyway** to continue. However, note that workflows may not run correctly if basic models are missing. It is recommended to download the necessary basic model package after the initial installation.
    :::

* **Stop the ComfyUI Service**: If you are not using ComfyUI for the moment, click the **Stop** button to pause the service. This will release the VRAM and memory resources occupied by ComfyUI.

## Manage models

:::tip Note
Before installing models, ensure your host can access GitHub and HuggingFace. For details, refer to [Check and set network](#check-and-set-network).
:::

ComfyUI Launcher provides flexible ways to install models. You can install the essential models with one click, manually install from the built-in model library, or copy from external sources.

### Install essential models with one click

Essential models are basic models required for ComfyUI to run, including SD large models, VAE, preview decoders, and auxiliary tools models. It is recommended to install the essential package when running for the first time.

1. Access the essential model package installation page using either of the following:
    - In the **Missing essential models** prompt window that appears when starting the service for the first time, click **Install models**.
    * In the **Package installation** section on the homepage, find **Essential model package**, and click **Download**.

2. On the essential model installation page, click **Install models** to start the automatic installation. You can view the installation status via the progress bar below.
    ![Install Resource Package](/images/zh/manual/use-cases/comfyui-install-model.png#bordered)

### Manually download models

In addition to basic models, ComfyUI Launcher also includes a built-in HuggingFace model library, allowing you to easily find and download the models you need.

1. Navigate to **Model management** from the left sidebar.
2. Scroll down to the **Available models** section, and find the desired model by category or keyword.
3. Click the <i class="material-symbols-outlined">download</i> button to download and install the model.

    ![Manually download](/images/manual/use-cases/comfyui-download-model.png#bordered)

:::tip Upload external models
If you can't find the desired model in the built-in model library, you can also use **Files** to upload externally downloaded models to the following model directory:

 `External Devices/ai/model`
:::

### Delete models

To delete a specific model:

1.  Navigate to **Model management** from the left sidebar.
2.  Under the **Installed models** section, find the model you want to delete, and click the <i class="material-symbols-outlined">delete</i> button on the right to delete it permanently.

## Manage plugins

You can manage plugins through ComfyUI's built-in ComfyUI-Manager, or use **Plugin management** in the Launcher.

![Manage Plugins](/images/zh/manual/use-cases/comfyui-manage-plugin.png#bordered)

1.  Navigate to **Plugin management** from the left sidebar.
2.  Under **Plugin Library** > **Available Plugins**, select the target plugin:
    * Click the <i class="material-symbols-outlined">pause</i> button to disable the currently running plugin, and click the <i class="material-symbols-outlined">play_circle</i> button to resume running.
    * Click the <i class="material-symbols-outlined">delete</i> button to delete the plugin.
    * Click the <i class="material-symbols-outlined">download</i> button to download the plugin.
    * Click the <i class="material-symbols-outlined">visibility</i> button to view plugin details.
    * Click the **Update all plugins** button to update plugins.

## Manage Python environment

ComfyUI's operation relies on a set of complex Python dependency libraries. You can manage these libraries easily on the **Environment Management** page, including installing new libraries, updating or removing installed libraries, analyzing plugin dependency status, and fixing installation errors.

![Manage Python Environment](/images/zh/manual/use-cases/comfyui-manage-python.png#bordered)

### Install new dependency libraries

1.  Under the **Python dependency libraries** tab, click **Install new library**.
2.  Enter the library name and version number (optional), and then click **Install**.

### Manage installed dependency libraries

1.  Under **Python dependency libraries** > **Installed Python libraries**, find the Python library you want to manage.
2.  Click the <i class="material-symbols-outlined">arrow_upward</i> button on the right to update the library, or the <i class="material-symbols-outlined">delete</i> button to remove it.

### Analyze dependency installation status

1.  Under the **Dependency analysis** tab, click **Analyze now** to start analyzing.
2.  From the plugins list, find the problematic plugin highlighted in red, and click on it.
3.  From the **Dependency library list**, find the missing library for the plugin, and click the **Install** button on the right. You can also click **Fix all** to automatically install all missing libraries.
    ![Analyze dependencies](/images/zh/manual/use-cases/comfyui-analyze-dependency.png#bordered)

## Troubleshooting and maintenance

ComfyUI Launcher also provides tools to help diagnose and maintain the ComfyUI service.

### Check and configure network

Network connection issues can affect the download of models and plugins. Before using ComfyUI, it's recommended to check the connection status to GitHub, PyPI, and HuggingFace on the Launcher homepage.

![Check network status](/images/zh/manual/use-cases/comfyui-view-network.png#bordered)

If a website, GitHub for example, is inaccessible:

1.  Navigate to the **Network Configuration** page from the left sidebar.
2.  In the list, switch the provided URLs for the website until the network status becomes "Accessible".

![Switch network](/images/zh/manual/use-cases/comfyui-change-network.png#bordered)

### Export ComfyUI logs

You can export logs to diagnose the current running status of ComfyUI:

![Export Logs](/images/zh/manual/use-cases/comfyui-log.png#bordered)

1.  In the upper-right corner of the Launcher homepage, click <i class="material-symbols-outlined">more_vert</i>, then click **View logs** to view the current running logs.
2.  Below the logs, click the <i class="material-symbols-outlined">refresh</i> button to refresh the logs, and the <i class="material-symbols-outlined">download</i> button to download the logs.

### Reset ComfyUI configuration

To reset ComfyUI to its initial state:

![Reset ComfyUI](/images/zh/manual/use-cases/comfyui-reset.png#bordered)

1. In the upper-right corner of the Launcher's homepage, click <i class="material-symbols-outlined">more_vert</i>, and select **Wipe and restore**. After a second confirmation, the Launcher will begin the wiping and restoration process.

    :::warning Exercise caution
    Restoring ComfyUI is an irreversible operation. Please operate carefully.
    :::

2. After the restoration operation is complete, restart ComfyUI for the changes to take effect.

## Discover inspirations

Enter the **Discover** page from the left sidebar to view the latest and most trending ComfyUI models and workflows on [civit.ai](civit.ai).

::: tip Note
Please ensure your network can properly access [civit.ai](civit.ai).
:::