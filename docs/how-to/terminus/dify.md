---
outline: [2, 3]
---

# Dify

Terminus OS has integrated [Dify](https://dify.ai/). Building upon the original features of **Dify**, Terminus OS enhances its functionality by:
- Unifying the account systems of both platforms, eliminating the need for users to create new accounts or log in separately.
- Created a dedicated Agent, **Ashia**, to each account.
- Incorporating **Dify** into the model management system, which allows Agents to use local models directly.
- Linking the Market with **Dify**, enabling users to install Agents directly.
- Connecting **TermiPass** with the **Dify** Agent interface, allowing users to activate Agents within TermiPass.
- Merging **Dify**'s **Dataset** and [**Knowledge Base**](../../how-to/terminus/settings/knowledge.md), which lets Agents respond to user queries based on local files.

For more features of **Dify**, please refer to the [official documentation](https://docs.dify.ai/).

## Setup Ashia

**Ashia** is your personal AI assistant in Terminus. On the **Dify** page, select **'Studio'** and then **Ashia** to access the setup page for Ashia.

![alt text](/images/how-to/terminus/dify/01.jpg)

If you're using this for the first time, you'll notice that the Agent's model isn't configured yet. This prevents further actions. **You need to specify a large language model at this point**. You can use either a [Remote Model](#using-remote-model) or a [Self-hosted Model](#using-self-hosted-model).


On the left side, you can set prompts, variables, context, and add tools to the Agent via the UI. Tools are supplementary functions that can be attached to an Agent. **Dify** offers a wide range of available tools.

![alt text](/images/how-to/terminus/dify/02.jpg)

:::tip
Even without any configuration, a newly created Agent will set OpenAI's GPT-4 as the model name. However, the Agent will not function properly at this stage.
:::

## Using Remote Model

Let's use GPT-4 as an example to demonstrate how to set up a **remote model**.

First, click on the username in the upper right corner, then click **'Settings'** to enter the settings page. Click on **'Model Provider'** in the left menu and select the supplier for the remote model.

![alt text](/images/how-to/terminus/dify/04.jpg)

Hover over OpenAI and click the **'Setup'** button to enter the OpenAI configuration page. Here, enter the API Key and other necessary information to configure access to a range of models from OpenAI.

![alt text](/images/how-to/terminus/dify/05.jpg)

Afterwards, you can select the model on **Ashia**'s settings page and configure the model parameters. Click the **'Publish'** button in the upper right corner to deploy the update, and **Ashia Agent** with the loaded model is now ready for use.

![alt text](/images/how-to/terminus/dify/18.jpg)

## Using Self-hosted Model

### Install from Market

You can install an appropriate **Self-hosted Model** in the **Market**. Click the **'Get'** button to install a large language model in Terminus.

![alt text](/images/how-to/terminus/dify/08.jpg)

Once the installation progress is complete, you can go to the **'My Terminus'** page in the lower left corner to **'Load'** a installed model. Once loaded, the model status will change to **'Running'**. you can **Unload** a running model on this page later. You can learn more about installing and managing models in the Market [here](../terminus/market/index.md#models).

![alt text](/images/how-to/terminus/dify/09.jpg)

:::tip
You will only see the relevant pages and be able to perform the operations if your Terminus has an accessible GPU.
:::

:::info NOTE
Only one model can be in the "Running" state at any given time.
:::

### Add Local Model

After loading the model, return to the **Model Provider** page on the **Dify**, where you can find a system-level **OpenAI-API-compatible model** named **'nitro'** has already been configured.

![alt text](/images/how-to/terminus/dify/10.jpg)

Then, on the **Ashia Agent** configuration page, you'll see that the model has been automatically set to **'nitro'**. You can adjust the detailed parameters of nitro here.

![alt text](/images/how-to/terminus/dify/13.jpg)

::: tip
The automatically configured nitro will be removed when the model is unloaded.  If you want to switch to another model, you will need to manually configure it on the Agent page
:::

## Create Knowledge

You can add **Knowledge** to an Agent to answer questions within a specific context. At the top of the **Dify** page, there's a **'Knowledge'** tab. Upon entering, you'll see a default **Knowledge** named **_YourTerminusName_'s Document** already set up. By default, this **Knowledge** monitors the **Documents** folder in Terminus's **Files**.

![alt text](/images/how-to/terminus/dify/14.jpg)

Let's upload some files in the **Documents** folder, and then return to **Knowledge**, you can see the uploaded files have been automatically synchronized and indexed. Once all documents become **Available**, which may take some time, you can proceed to configure the **Context** for the **Agent**.

![alt text](/images/how-to/terminus/dify/15.jpg)
![alt text](/images/how-to/terminus/dify/16.jpg)

Return to the configuration page of Ashia Agent, click **'Add'** at the **'Context'** section on the left, you can choose a  **Knowledge** to add customized contexts for the **Agent**.

![alt text](/images/how-to/terminus/dify/17.jpg)

With the knowledge base data management function, you can build more knowledge bases by yourself. By setting the folders monitored by each knowledge base, you can provide context for different Agents with different knowledge bases.

## Explore Dify

You can refer to the official manual of Dify to further explore how to [create a Dify application](<https://docs.dify.ai/user-guide/creating-dify-apps/creating-an-application>)
