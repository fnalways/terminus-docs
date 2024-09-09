---
outline: [2, 3]
---

# Configuration Guideline for Apps

每一个 Terminus App 的 Chart 根目录下都必须有一个 TerminusManifest.yaml 文件，且该文件名必须是`TerminusManifest.yaml`。TerminusManifest.yaml 描述了一个 Terminus App 的所有基本信息，Terminus Market 协议和 Terminus 系统依赖这些关键信息来正确的分发和安装应用。

一个 TerminusManifest.yaml 文件的示例如下：

::: details TerminusManifest.yaml 样例

```Yaml
terminusManifest.version: 0.6.0
terminusManifest.type: app
metadata:
  name: helloworld
  title: Hello World
  description: app helloworld
  icon: https://file.bttcdn.com/appstore/default/defaulticon.webp
  version: 0.0.1
  categories:
  - Utilities
entrances:
- name: helloworld
  port: 8080
  title: Hello World
  host: helloworld
  icon: https://file.bttcdn.com/appstore/default/defaulticon.webp
  authLevel: private
permission:
  appCache: true
  appData: true
  userData:
  - Home/Documents/
  - Home/Pictures/
  - Home/Downloads/BTDownloads/
spec:
  versionName: 0.0.1
  featuredImage: https://link.to/featured_image.webp
  promoteImage:
  - https://link.to/promote_image1.webp
  - https://link.to/promote_image2.webp
  fullDescription: |
    A full description of your app.
  upgradeDescription: |
    Describe what is new in this upgraded version.
  developer: Developer's Name
  website: https://link.to.your.website
  sourceCode: https://link.to.sourceCode
  submitter: Submitter's Name
  language:
  - en
  doc: https://link.to.documents
  supportArch:
  - amd64
  limitedCpu: 1000m
  limitedMemory: 1000Mi
  requiredCpu: 50m
  requiredDisk: 50Mi
  requiredMemory: 12Mi

options:
  dependencies:
  - name: terminus
    type: system
    version: '>=0.1.0'
```

:::

## TerminusManifest.yaml identifier

### terminusManifest.type

- Type: `string`
- Accepted Value:: `app`,`recommend`,`model`

应用程序的 terminusManifest.type 应为 app。你可以点击链接查看不同类型扩展的配置指南

- [recommend 配置指南](recommend.md)
- [model 配置指南](model.md)

配置示例

```Yaml
terminusManifest.type: app
```

### terminusManifest.version

- Type: `string`

terminusManifest.version 由 3 位英文句点分隔的整数组成。随着 Terminus 的发展，TerminusManifest.yaml 的配置方式可能会有所变化。

- 第 1 位数字增加意味着引入了不兼容的配置项，未升级对应 TerminusManifest.yaml 的应用将无法分发或安装
- 第 2 位数字增加意味着分发和安装必须字段存在变化，但 Terminus 系统仍兼容之前所有版本配置的应用分发与安装。我们建议开发者尽快更新升级应用的 TerminusManifest.yaml 文件。
- 第 3 位数字的改变，不影响应用分发和安装。

Terminus 系统当前的 terminusManifest.version 为`0.6.0`。开发者可以使用 1-3 位的版本号来标识该应用遵循的配置版本。以下是有效版本的一些示例：

```Yaml
TerminusManifest.yaml.version: 1
TerminusManifest.yaml.version: 0.1
TerminusManifest.yaml.version: 1.1.0
TerminusManifest.yaml.version: '2.2'
TerminusManifest.yaml.version: "3.0.122"
```

## Metadata

记录应用的元信息

配置示例

```Yaml
metadata:
  name: nextcloud
  title: Nextcloud
  description: The productivity platform that keeps you in control
  icon: https://file.bttcdn.com/appstore/nextcloud/icon.png
  version: 0.0.2
  categories:
  - Utilities
  - Productivity
```

### name

- Type: `string`
- Accepted Value: `[a-z][a-z0-9]?`

App’s namespace in Terminus system, lowercase alphanumeric characters only.不超过 30 个字符.需要与 FolderName、Chart.yaml-name 一致

### title

- Type: `string`

Your app title that appears in the app market.长度不超过 30 个字符.

### description

- Type: `string`

A short description appears below app title in the app market.

### icon

- Type: `url`

Your app icon that appears in the app market.
The app's icon must be a PNG or WEBP format file, up to 512 KB, with a size of 256x256 px.

### version

- Type: `string`

应用的 Chart Version，每次改变 Chart 目录里的内容时应递增。需遵循[语义化版本规范](https://semver.org/)，需要与 Chart.yaml 中的 version 字段一致

### categories

- Type: `list<string>`
- Accepted Value: `Blockchain`,`Utilities`,`Social Network`,`Entertainment`,`Productivity`

Used to display your app on different categoiry page in app market

## Entrances

Specify how to access this app, at least 1 required.每个应用至少需要 1 个入口，至多 10 个

配置示例

```Yaml
entrances:
- name: a
  host: firefox
  port: 3000
  title: Firefox
  authLevel: public
  invisible: false
- name: b
  host: firefox
  port: 3001
  title: admin
```

### name

- Type: `string`
- Accepted Value: `[a-z]([-a-z0-9]*[a-z0-9])?`
  entrance 的名称,长度不超过 63 个字符.一个应用内不能重复.

### port

- Type: `int`
- Accepted Value: `0-65535`

### host

- Type: `string`
- Accepted Value: `[a-z]([-a-z0-9]*[a-z0-9])?`
  Ingress name of current entrance., 只包含小写字母和数字和中划线`-`,长度不超过 63 个字符

### title

- Type: `string`

Title that appears in the Terminus desktop after installed. 长度不超过 30 个字符.

### icon

- Type: `url`
- Optional

Icon that appears in the Terminus desktop after installed. The app's icon must be a PNG or WEBP format file, up to 512 KB, with a size of 256x256 px.

### authLevel

- Type: `string`
- Accepted Value: `public`,`private`
- Default: `private`
- Optional

Auth level of current entrance. Private entrance requires activating tailscale to access. 应用的 entrance 默认为 private.

### invisible

- Type: `boolean`
- Default: `false`
- Optional

当 invisible 为 true 时，该 entrance 不会显示在 Terminus 桌面上。默认为 false

### openMethod

- Type: `default | iframe | window`
- Default: `default`
- Optional

Entrance 在 [Desktop](../../../how-to/terminus/desktop.md) 中窗口的打开方式。

`iframe` 代表在 Desktop 的窗口内通过 iframe 新建一个窗口，`window` 代表在浏览器新的 Tab 页打开。`default` 代表跟随系统的默认选择，系统默认的选择是`iframe`

## permission

记录应用所需的权限信息

配置示例

```Yaml
permission:
  appData: true
  sysData:
  - group: api.intent
    dataType: legacy_api
    version: v1
    ops:
    - POST
```

### appCache

- Type: `boolean`
- Optional

是否需要在 Cache 目录创建应用的目录。如需要在 deployment yaml 中使用`.Values.userspace.appCache`, 则 appCache 必须等于, true

### appData

- Type: `boolean`
- Optional

是否需要在 Data 目录创建应用的目录。如需要在 deployment yaml 中使用`.Values.userspace.appData`, 则 appData 必须等于, true

### userData

- Type: `string`
- Optional

声明应用需要访问用户 Home 下的哪些目录。

### sysData

- Type: `list<map>`
- Optional

字段配置

```Yaml
  sysData:
  - group: service.bfl
    dataType: app
    version: v1
    ops:
    - InstallDevApp
  - group: service.bfl
    dataType: app
    version: v1
    ops:
    - InstallDevApp
```

应用需要的系统数据权限，数据权限列表如下
| Group | version | dataType | ops |
| ----------- | ----------- | ----------- | ----------- |
| service.appstore | v1 | app | InstallDevApp, UninstallDevApp
| message-disptahcer.system-server | v1 | event | Create, List
| service.desktop | v1 | ai_message | AIMessage
| service.did | v1 | did | ResolveByDID, ResolveByName, Verify
| api.intent | v1 | legacy_api | POST
| service.intent | v1 | intent | RegisterIntentFilter, UnregisterIntentFilter, SendIntent, QueryIntent, ListDefaultChoice, CreateDefaultChoice, RemoveDefaultChoice, ReplaceDefaultChoice
| service.message | v1 | message | GetContactLogs, GetMessages, Message
| service.notification | v1 | message | Create
| service.notification | v1 | token | Create
| service.search | v1 | search | Input, Delete, InputRSS, DeleteRSS, QueryRSS, QuestionAI
| secret.infisical | v1 | secret | CreateSecret, RetrieveSecret
| secret.vault | v1 | key | List, Info, Sign

## spec

记录额外的应用信息，主要用于应用商店的展示。

这里补一个类似 umbrel 的截图
![spec字段对应图](https://camo.githubusercontent.com/bda18de74526b1df286b4278be6ab2e08459679237cc67122444e8d1df3b545f/68747470733a2f2f692e696d6775722e636f6d2f30436f7250524b2e706e67)

组成版本号的整数应满足以下几条规则

- 整数必须介于 0 到 65,535 之间（含 0 和 65,535）。
- 非零整数不能以 0 开头。例如，032 无效，因为它以零开头。
- 它们不能都为零。例如，0 和 0.0.0.0 是无效的，而 0.1.0.0 是有效的。

配置示例

```Yaml
spec:
  versionName: 10.8.11
  featuredImage: https://file.bttcdn.com/appstore/jellyfin/promote_image_1.jpg
  promoteImage:
  - https://file.bttcdn.com/appstore/jellyfin/promote_image_1.jpg
  - https://file.bttcdn.com/appstore/jellyfin/promote_image_2.jpg
  - https://file.bttcdn.com/appstore/jellyfin/promote_image_3.jpg
  fullDescription: |
    Jellyfin is the volunteer-built media solution that puts you in control of your media. Stream to any device from your own server, with no strings attached. Your media, your server, your way.
  upgradeDescription: |
    upgrade descriptions
  developer: Jellyfin
  website: https://jellyfin.org/
  doc: https://jellyfin.org/docs/
  sourceCode: https://github.com/jellyfin/jellyfin
  submitter: Terminus
  language:
  - en
  requiredMemory: 256Mi
  limitedMemory: 512Mi
  requiredDisk: 128Mi
  limitedDisk: 256Mi
  requiredCpu: 0.5
  limitedCpu: 1
  legal:
  - text: Community Standards
    url: https://jellyfin.org/docs/general/community-standards/
  - text: Security policy
    url: https://github.com/jellyfin/jellyfin/security/policy
  license:
  - text: GPL-2.0
    url: https://github.com/jellyfin/jellyfin/blob/master/LICENSE
  supportClient:
  - android: https://play.google.com/store/apps/details?id=org.jellyfin.mobile
  - ios: https://apps.apple.com/us/app/jellyfin-mobile/id1480192618
```

## middleware

- Optional
- Type: `map`

系统提供了高可用的中间件服务，开发者无需重复安装中间件，只需在此填写对应的中间件信息即可。
配置示例

```Yaml
middleware:
  postgres:
    username: postgres
    databases:
    - name: db
      distributed: true
  redis:
    password: password
    namespace: db0
  mongodb:
    username: mongodb
    databases:
    - name: db0
    - name: db1
  zincSearch:
    username: zinc
    indexes:
    - name: index0
```

假设你在 TerminusManifest.yaml 中填写了 middleware，你就不用自己再创建对应的中间件。直接在应用的 yaml 中填写对应的中间件信息。

```yaml
- name: DB_POSTGRESDB_DATABASE
  # 为你在middleware指定创建的dadtabase, dbname为你指定的库名
  value: {{ .Values.postgres.databases.<dbname> }}
- name: DB_POSTGRESDB_HOST
  value: {{ .Values.postgres.host }}
- name: DB_POSTGRESDB_PORT
  value: "{{ .Values.postgres.port }}"
- name: DB_POSTGRESDB_USER
  value: {{ .Values.postgres.username }}
- name: DB_POSTGRESDB_PASSWORD
  value: {{ .Values.postgres.password }}


// 对于其它的类型的中间件mongodb, 对应的值为
// port, password在yaml文件中需加上双引号
host --> {{ .Values.mongodb.host }}
port --> "{{ .Values.mongodb.port }}"
username --> {{ .Values.mongodb.username }}
password --> "{{ .Values.mongodb.password }}"
# databases是一个map, 获取对应数据库 {{ .Values.postgres.databases.<dbname> }}
databases --> "{{ .Values.mongodb.databases }}"

# Redis
host --> {{ .Values.redis.host }}
port --> "{{ .Values.redis.port }}"
password --> "{{ .Values.redis.password }}"


// 获取zincSearch 对应的值
host --> {{ .Values.zinc.host }}
port --> "{{ .Values.zinc.port }}"
username --> {{ .Values.zinc.username }}
passowrd --> "{{ .Values.zinc.password }}"
// <name>为在TerminusManifest.yaml中zincSearch indexes中的名称
indexes  --> {{ .Values.zinc.indexes.<name> }}
```

## options

可以在此部分配置系统相关的选项，例如验证 policy, 访问数据分析等

### policies

```yaml
options:
  policies:
    - uriRegex: /$
      level: two_factor
      oneTime: false
      validDuration: 3600s
      entranceName: gitlab
```

### clusterScoped

- Optional
- Type: `map`

Whether this app is installed for all users in a Terminus cluster.

For server

```yaml
metadata:
  name: gitlab
options:
  appScope:
    clusterScoped: true
    appRef:
      - gitlabclienta #app name of clients
      - gitlabclientb
```

For client

```yaml
metadata:
  name: gitlabclienta
options:
  dependencies:
    - name: terminus
      version: ">=0.3.6-0"
      type: system
    - name: gitlab #app name of server
      version: ">=0.0.1"
      type: application
```

### analytics

- Optional
- Type: `map`

```yaml
options:
  analytics:
    enabled: true
```

### dependencies

- Type: `list<map>`

If your app depends on other apps or requires a certain OS version, please specify here.

```yaml
options:
  dependencies:
    - name: terminus
      version: ">=0.3.6-0"
      type: system
  websocket:
    url: /ws/message
    port: 8888
```

### websocket

- Optional
- Type: `map`

```yaml
options:
  websocket:
    url: /ws/message
    port: 8888
```

### resetCookie

- Optinal
- Type: `map`

```yaml
options:
  resetCookie:
    enabled: true
```

### upload

- Optinal
- Type: `map`

```yaml
upload:
  # 允许上传的文件类型，*为任意类型， 上传时会指定file_type，必须在允许的文件类型中
  fileType:
    - pdf
  # dest的路径必须为某一个mountPath
  dest: /appdata
  # 文件上传的最大大小，单位为字节
  limitedSize: 3729747942
```
