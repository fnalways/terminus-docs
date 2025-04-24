---
description: Discover how to install ComfyUI, a node-based interface for Stable Diffusion, with ease in Olares. Create reusable workflows, fine-tune image generation, and apply advanced post-processing effects.
---
# ComfyUI

ComfyUI is a powerful node-based interface for Stable Diffusion that transforms AI image generation into a visual programming experience. By connecting different nodes together like building blocks, you gain precise control over every aspect of the generation process - from prompts and models to post-processing effects.

Unlike the straightforward interface of SD Web UI, ComfyUI lets you create custom workflows by connecting nodes that represent different operations. This approach gives you deeper control over the image generation pipeline while making complex operations reusable and shareable.

## What can ComfyUI do?
ComfyUI puts advanced AI image generation capabilities at your fingertips:

* Create reusable workflows by connecting nodes visually
* Fine-tune every aspect of the generation process
* Mix and match different models and techniques
* Save and share your custom workflows with others
* Batch process images with consistent settings
* Apply advanced post-processing effects

## Install ComfyUI Shared

Olares provides ComfyUI Shared, an adapted version that allows multiple users to share models, plugins, and workflow resources across the cluster. It also features ComfyUI Launcher, providing administrator users with a simple way to manage ComfyUI resources and runtime environments.

::: tip Note
Starting from Olares 1.11.6, Shared Applications will replace previous cluster-scoped applications. If you have installed ComfyUI for Cluster and its client, please uninstall them before installing ComfyUI Shared.
:::

The installation of ComfyUI Shared Edition is divided into two phases: administrator installation and regular user installation.

1.  **Administrator installation**. Open Olares Market, find **ComfyUI Shared**, and click **Get**.

    After the administrator installation is complete, two icons  appear on the Olares desktop: one is the access point for ComfyUI, and the other is the access point for ComfyUI Launcher.

    :::tip Start service
    Only after the administrator configures and starts the service in the ComfyUI Launcher can cluster users access the ComfyUI interface and use workflows.
    :::

2. **Member installation**. Open Olares Market, find ComfyUI Shared, and click **Get**.

    After the installation is complete, the member user only sees the ComfyUI icon on the desktop.

    ![Install ComfyUI](/images/manual/tutorials/install-comfyui.png){width=40%}

3. After installation is complete, click the ComfyUI icon from the desktop to open it. Administrators can also enter the ComfyUI interface from the ComfyUI Launcher.

    ![ComfyUI Interface](/images/manual/use-cases/comfyui.png#bordered)

## Learn more

* [Manage ComfyUI using ComfyUI Launcher](comfyui-launcher.md)
* [Krita + ComfyUI Real-time Painting](../tutorials/comfyui-for-krita.md): Learn how to leverage ComfyUI to assist creative workflows in Krita.