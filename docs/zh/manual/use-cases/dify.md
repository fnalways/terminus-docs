# Dify 定制 AI 助手

Dify 是一个运行在你自托管 Olares 系统上的 AI 应用开发平台。它是 Olares 集成的关键开源项目之一，帮助你构建和管理 AI 应用，同时确保数据完全由自己掌控。

## Dify 如何与 Olares 协同工作
在使用 Dify 提供的标准 AI 开发功能的同时，Dify 还与 Olares 环境深度集成，提供以下功能：
* **统一账户系统**：使用 Olares 的账号即可访问 Dify。
* **内置 AI 助手**：内置可定制的 AI 助手 Ashia，满足你的需求。
* **本地知识库**：通过连接存储在文件管理器应用中的文档，提升 AI 的响应能力。

## 开始之前
要使用本地 AI 模型，请确保你的环境中已配置以下内容：
- Olares 环境中已安装并运行 Ollama。
- 已安装 Open WebUI，并下载了你偏好的语言模型。
  :::tip
  建议使用 `gemma2` 等轻量但功能强大的模型，可在速度和性能间取得良好平衡。
  :::

## 安装 Dify
根据你的角色安装相应应用：
* **管理员**：需要安装“Dify For Cluster”和“Dify”。
* **团队成员**：仅需安装“Dify”，同时确保管理员已安装“Dify For Cluster”。

## 添加 Ollama 作为模型提供者
1. 打开 Dify，进入**设置** > **模型供应商**。
2. 选择 Ollama 作为模型提供者商，并进行以下配置：
    - **模型名称**：填写模型名称，例如：`gemma2`。
    - **基础 URL**：`http://ollama.ollama-{管理员的 Olares ID}:11434`。例如：`http://ollama.ollama-alice123:11434`。
      :::tip
      你可以在 Open WebUI 的**管理员面板** > **设置** > **外部连接**中查看 **Ollama API**。
      :::
      :::info
      其他必填字段可以保留默认值。
      :::
3. 点击**保存**。

## 配置 Ashia
1. 打开 Dify，选择**工作室**选项卡下的 **Ashia**。
2. 在右侧面板中点击 **Configure**。
3. 从下拉列表中选择一个来自 Ollama 的模型。

   ![选择模型](/images/zh/manual/use-cases/dify-select-model.png#bordered)
4. 点击**发布**。现在可以在调试与预览窗口试着和 Gemma2 聊天了。

   ![聊天](/images/zh/manual/use-cases/dify-chat-with-ashia.png#bordered)

## 设置本地知识库
1. 在 Dify 中，进入**知识库**选项卡。
2. 找到默认的知识库。默认知识库的名称与 Olares ID 相同，并会监听文件管理器中的 `/Documents` 文件夹。
3. 将文档上传到 Files 中的 `/Documents` 文件夹，然后返回 Dify，检查这些文档是否已出现在知识库中。

   ![默认知识库](/images/zh/manual/use-cases/dify-default-knowledge-base.png#bordered)
4. 在 Ashia 的编排页面中，点击 **<i class="material-symbols-outlined">add</i>添加**，为 Ashia 添加上下文支持。

   ![添加知识库](/images/zh/manual/use-cases/dify-add-knowledge-base.png#bordered){width=70%}
5. 点击**发布**。