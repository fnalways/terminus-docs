---
description: 使用 ComfyUI 启动器轻松启动和管理 ComfyUI，包括模型管理、插件配置、环境设置与网络检查等。
---
# 使用 ComfyUI 启动器管理 ComfyUI

ComfyUI 启动器（ComfyUI Launcher）是 ComfyUI 共享版为**管理员用户**提供的核心管理工具。你可以通过启动器来控制 ComfyUI 后台服务的运行状态，并轻松管理模型、插件、运行环境和网络配置。 

本章节将指导你如何使用 ComfyUI 启动器进行服务的管理和日常维护。

## 启动和停止 ComfyUI 服务

你可以使用启动器右上角的按钮控制 ComfyUI 后台服务的运行状态。

![启动停止服务](/images/zh/manual/use-cases/comfyui-start.png#bordered)

- **启动 ComfyUI 服务**：点击启动器右上角的**启动**按钮启动 ComfyUI 后台程序。
    ::: tip 首次运行
    - 首次启动需要进行环境初始化，通常需要等待 10-20 秒。
    - 如果系统提示缺少必要的基础模型，你可以点击**仍然启动**继续。但请注意，如果缺少基本模型，工作流可能无法正常运行。建议首次安装后先下载必要的基础模型包。
    :::

- **停止 ComfyUI 服务**：如果暂时不使用 ComfyUI，可点击启动器右上角的**停止**按钮暂停服务。这会释放 ComfyUI 占用的显存和内存资源。

## 管理模型

:::tip 注意
在安装模型之前，请确保您的主机能够正确访问 Github 和 HuggingFace，详细请参考[检查和设置网络](#检查和设置网络环境)。
:::

ComfyUI 启动器提供灵活、丰富的模型安装方式。你可以一键安装运行所需基础模型，也可根据需求从内置模型库手动安装或从外部复制。

### 一键安装基础模型

基础模型即 ComfyUI 运行必要的基础模型，包括SD大模型、VAE、预览解码器和辅助工具模型。首次运行时建议先安装基础模型包。
1. 通过以下任一方式进入基础模型包安装页面。
   - 在首次启动服务时弹出的"缺少基础模型"提示窗口里，点击**安装模型**。
   - 在启动器首页的**资源包安装**区域，找到**基础模型包**，并点击**下载**。

2. 在基础模型安装页面，点击**安装资源包**开始自动安装。可以通过下方进度条查看安装进度。
    ![安装资源包](/images/zh/manual/use-cases/comfyui-install-model.png#bordered)
   
### 手动下载模型
除了基础模型之外，启动器也内置了 HuggingFace 模型库，让你轻松查找并下载所需模型：

1. 从启动器左侧导航栏进入**模型管理**。
2. 在**可用模型**部分按类别或关键词查找所需模型。
3. 点击 <i class="material-symbols-outlined">download</i> 按钮完成下载。

    ![手动下载](/images/zh/manual/use-cases/comfyui-download-model.png#bordered)

:::tip 上传外部模型
如在内置模型库无法找到所需模型，你也可以将外部下载的文件通过文件管理器上传至以下模型目录：

 `外部设备/ai/model`。
:::

### 删除模型
要删除指定模型：

1. 从启动器左侧导航栏进入**模型管理**。
2. 在**已安装模型**单元下，找到待删除模型，并点击右侧 <i class="material-symbols-outlined">delete</i> 按钮以删除。

## 管理插件

您可以通过 ComfyUI 内置的 ComfyUI-Manager 管理插件，也可以使用启动器的**插件管理**页面进行安装、更新和卸载。

![管理插件](/images/zh/manual/use-cases/comfyui-manage-plugin.png#bordered)

1. 从启动器左侧导航栏进入**插件管理**。
2. 在**插件库** > **可用插件** 下，选择目标插件：
   - 点击 <i class="material-symbols-outlined">pause</i> 按钮禁用当前运行的插件，点击 <i class="material-symbols-outlined">play_circle</i> 按钮恢复运行。
   - 点击 <i class="material-symbols-outlined">delete</i> 按钮删除插件。
   - 点击 <i class="material-symbols-outlined">download</i> 按钮下载插件。
   - 点击 <i class="material-symbols-outlined">visibility</i> 按钮查看插件详情。
   - 点击**更新全部插件**按钮更新插件。

## 管理 Python 环境

ComfyUI 的运行依赖复杂的 Python 环境。你可以在**环境管理**页中管理 ComfyUI 容器中的Python 依赖库，包括安装新依赖库、管理已安装依赖库、分析插件依赖状态并修复安装错误。

![管理 Python 环境](/images/zh/manual/use-cases/comfyui-manage-python.png#bordered)

### 安装新依赖库

1. 在 **Python 依赖库**页签下，点击**安装新库**按钮。
2. 输入库的名称和版本号（可选），点击**安装**。

### 管理已安装依赖库
1. 在 **Python 依赖库** > **已安装 Python 库**下，找到需要操作的 Python 库。
2. 点击右侧 <i class="material-symbols-outlined">arrow_upward</i> 按钮以升级库， <i class="material-symbols-outlined">delete</i> 按钮以删除库。

### 分析依赖库安装
1. 在**依赖分析**页签下，点击**立即分析**按钮。
2. 在插件栏，找到并点击红色高亮的问题插件。
3. 在**依赖库列表**里，找到缺失的库，并点击右侧**安装**按钮。你也可以点击**一键修复**自动安装所有缺失库。
![分析依赖](/images/zh/manual/use-cases/comfyui-analyze-dependency.png#bordered)

## 故障排除和维护

启动器还提供了一些工具帮助诊断和维护 ComfyUI 服务。

### 检查和设置网络环境

网络连接问题可能影响模型和插件的下载。使用 ComfyUI 前可在启动器主页查看对 Github、PyPI 和 HuggingFace 的连接状态。

![检查网络状态](/images/zh/manual/use-cases/comfyui-view-network.png#bordered)

如有网站无法访问：

1. 从启动器左侧导航栏进入**网络配置**页面。
2. 在列表里切换网站的可访问地址，直至网络状态变为"可访问"。

![切换网络](/images/zh/manual/use-cases/comfyui-change-network.png#bordered)

### 查看运行日志

你可以导出日志来诊断 ComfyUI 当前的运行状态：

![查看日志](/images/zh/manual/use-cases/comfyui-log.png#bordered)


1. 在启动器首页右上角点击<i class="material-symbols-outlined">more_vert</i>，再点击**查看日志**以查看当前运行日志。
2. 点击日志下方<i class="material-symbols-outlined">refresh</i>以刷新日志，<i class="material-symbols-outlined">download</i>以下载日志。

### 还原 ComfyUI 配置

如果你希望将 ComfyUI 还原到初始状态：

![重置 ComfyUI](/images/zh/manual/use-cases/comfyui-reset.png#bordered)

1. 在启动器首页右上角点击<i class="material-symbols-outlined">more_vert</i>，选择**抹掉并还原**。二次确认后，将启动器将开始抹掉和还原程序。
   
    :::warning 谨慎操作
    还原 ComfyUI 是不可逆的操作，请谨慎选择。
    :::

2. 还原操作完成后，重启 ComfyUI 以生效。

## 灵感发现

你可以从左侧导航栏进入**灵感发现**页面，查看 [civit.ai](civit.ai) 上最新、最热门的 ComfyUI 模型和工作流。

::: tip 注意
请确认你的网络可以正常访问 [civit.ai](civit.ai)。
:::



