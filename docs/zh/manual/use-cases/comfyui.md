---
description: ComfyUI 在 Olares 上的使用指南，通过节点式界面精确控制 AI 图像生成过程，创建可重用的工作流程。
---
# ComfyUI

ComfyUI 是一款基于节点的 Stable Diffusion 图形界面工具。它把 AI 绘图过程变成了可视化编程，让使用者能像搭建积木一样，通过连接各种功能节点来实现完整的绘图流程。从提示词编写、模型选择到后期处理，每个环节都能精确把控。

与 Stable Diffusion WebUI 简单直观的界面不同，ComfyUI 让你通过组合代表不同功能的节点，可以构建出自己的工作流程。这不仅让你能更好地掌控绘图过程，还可以把常用的复杂操作保存下来重复使用，也方便与他人分享。

## ComfyUI 能做什么？
通过 ComfyUI，你可以实现以下功能：
  
* 用可视化方式搭建和复用工作流
* 对绘图流程进行精细调优
* 自由组合不同模型和技术
* 导出导入工作流，方便分享
* 使用相同配置批量处理图片
* 添加高级图像后期效果

## 安装 ComfyUI 共享版
Olares 应用商店提供 ComfyUI 共享版，可允许同一 Olares 集群上的多个用户共享 ComfyUI 的模型、插件和工作流资源。它还提供了一个启动器（ComfyUI Launcher），帮助管理员用户管理 ComfyUI 资源和运行环境。

::: tip 注意
自 1.11.6 版本起，Olares 会使用 ComfyUI 共享版取代之前的集群范围应用。如果安装过 ComfyUI For Cluster 和对应的 ComfyUI 客户端，请卸载后再安装共享版。
::: 

ComfyUI 共享版的安装分为管理员安装和普通用户安装两个阶段。

1. 管理员安装。打开 Olares 的应用商店，找到并点击 ComfyUI 共享版，并点击**获取**。
 
    管理员安装完成后，将在 Olares 桌面上看到两个图标：一个是 ComfyUI 的使用入口，另一个是 ComfyUI 启动器的入口。
    
    :::tip 启动服务
    只有管理员在 ComfyUI Launcher 里配置并启动 ComfyUI 服务后，集群用户才能通过 ComfyUI 入口打开 ComfyUI 界面，使用工作流。
    :::

2. 成员安装。打开 Olares 的应用商店，找到并点击 ComfyUI 共享版，并点击获取。
   
   安装完成后，该用户将在 Olares 桌面上看到 ComfyUI 的使用入口图标。

    ![安装 ComfyUI](/images/manual/tutorials/install-comfyui.png){width=40%}

3. 安装完成后，从桌面启动 ComfyUI。管理员也可以从 ComfyUI 启动器进入 ComfyUI 桌面。

    ![ComfyUI](/images/manual/use-cases/comfyui.png#bordered)

## 了解更多

- [使用 ComfyUI 启动器管理 ComfyUI](comfyui-launcher.md)
- [Krita + ComfyUI 实时绘画](../tutorials/comfyui-for-krita.md)：了解如何利用 ComfyUI 助力 Krita 中的创意工作流。