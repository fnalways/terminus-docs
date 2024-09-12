# Configuration Guideline for model

每一个 LLM 的 Chart 根目录下都必须有一个 modelConfig.yaml 文件，且该文件名必须是`modelConfig.yaml`。
modelConfig.yaml描述了一个LLM所需要的基本信息

一个 modelConfig.yaml 文件的示例如下：

::: details modelConfig.yaml 样例


```Yaml
source_url: https://huggingface.co/TheBloke/Yarn-Mistral-7B-128k-GGUF/resolve/main/yarn-mistral-7b-128k.Q4_K_M.gguf
id: yarnmistral7b
object: model
name: Yarn Mistral 7B Q4
version: '1.0'
description: Yarn Mistral 7B is a language model for long context and supports a 128k token context window.
format: gguf
settings:
  ctx_len: 4096
  prompt_template: |-
    {prompt}
parameters:
  temperature: 0.7
  top_p: 0.95
  stream: true
  max_tokens: 4096
  stop: []
  frequency_penalty: 0
  presence_penalty: 0
metadata:
  author: NousResearch, The Bloke
  tags:
  - 7B
  - Finetuned
  size: 4370000000
engine: nitro
```

:::

### source_url

- Type: `string`

模型下载源地址, 它可以是外部 url 或本地文件路径
The model download source. It can be an external url or a local filepath.

### id

- Type: `string`

模型的唯一标识符, 可以在 API 端点中引用
The model identifier, which can be referenced in the API endpoints.

### object

- Type: `string`
- Default: `model`

对象的类型
The type of the object.

### name

- Type: `string`

模型的名称, 用于 UI 的可读名称
Human-readable name that is used for UI.

### version

- Type: `string`

模型的版本号
The version of the model.

### description

- Type: `string`

模型的描述

### format

- Type: `string`

模型的格式
The format of the model.

## settings

模型的设置
The model settings.

配置示例

```Yaml
settings:
  ctx_len: 4096
  prompt_template: |-
    {prompt}
```

### ctx_len

- Type: `int`

模型的上下文长度

### prompt_template

- Type: `string`

模型的提示模板，用于生成模型输入的提示部分


## parameters

参数

配置示例

```Yaml
parameters:
  temperature: 0.7
  top_p: 0.95
  stream: true
  max_tokens: 4096
  stop: []
  frequency_penalty: 0
  presence_penalty: 0
```

### temperature

- Type: `float`

模型生成文本时的情感温度参数

### top_p

- Type: `float`

模型生成文本时的top-p参数，控制输出的概率分布范围

### stream

- Type: `bool`

指示模型是否以流式方式生成文本

### max_tokens

- Type: `int`

模型生成的最大令牌数

### stop

- Type: `array`
  
停止词列表

### frequency_penalty

- Type: `int`

频率惩罚参数，用于调整生成文本中词汇的频率

### presence_penalty

- Type: `int`

存在惩罚参数，用于调整生成文本中词汇的存在概率


## metadata

记录model的元信息
Metadata of the model.

配置示例

```Yaml
metadata:
  author: NousResearch, The Bloke
  tags:
  - 7B
  - Finetuned
  size: 4370000000
```

### author

- Type: `string`

模型的作者名称

### tags

- Type: `array`

标签列表，用于描述模型的属性或特征

### size

- Type: `int`

模型的大小


### author

- Type: `string`

模型的作者名称

---

### engine

- Type: `string`

使用的模型引擎
The model engine.