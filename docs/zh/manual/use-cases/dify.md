# Dify

Dify is an AI application development platform that runs on your self-hosted Olares system. It's one of the key open-source projects that Olares integrates to help you build and manage AI applications while maintaining full data ownership.

## How Dify works with Olares
While you can use all of Dify's standard AI development features, Dify integrates natively with your Olares environment to provide:
* **Unified account system**: Access Dify using your Olares credentials.
* **Built-in AI assistant**: Get started with Ashia, a customizable AI assistant for your needs.
* **Local Knowledge base**: Enhance your AI responses by connecting to documents stored in the Files app.

## Before you begin
To use local AI models, ensure you have:
- Ollama installed and running in your Olares environment
- Open WebUI installed with your preferred language models downloaded
  :::tip
  For optimal performance, consider using lightweight yet powerful models like `gemma2`, which offer a good balance between speed and capability.
  :::

## Install
Install Dify from Market based on your role:
* **For admin**: Install both "Dify For Cluster" and "Dify".
* **For team members**: Ensure your admin has installed "Dify For Cluster", and install "Dify" only.

## Add Ollama as model provider
1. Open Dify, and navigate to **Settings** > **Model Provider**.
2. Select Ollama as the model provider, with the following configurations:
    - Model Name: Enter the model name. For example: `gemma2`.
    - Base URL: `http://ollama.ollama-{admin's Olares ID}:11434`. For example: `http://ollama.ollama-alice123:11434`.
      :::info
      You could keep default values for other required fields.
      :::
3. Click **Save**.

## Configure Ashia
1. Open Dify and select **Ashia** under the **Studio** tab.
2. Click **Configure** in the right panel.
3. From the dropdown list, select a model from Ollama.
4. Click **Publish**.

## Set up local knowledge base
1. In Dify, navigate to the **Knowledge** tab.
2. Locate your default knowledge base. It will be named after your Olares ID and monitors the `/Documents` folder in Files.
3. Upload documents to `/Documents` in Files, and return to Dify to see if the documents are available in your knowledge base.
4. In Ashia's orchestration page, click **<i class="material-symbols-outlined">add</i>Add** to add context support for Ashia.
5. Click **Publish**.
