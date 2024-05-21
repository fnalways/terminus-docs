---
outline: [2, 3]
---

# TerminusManifest Specification

Every **Terminus Application Chart** should include a `TerminusManifest.yaml` file in the root directory. `TerminusManifest.yaml` provides all the essential information about a Terminus App. Both the **Terminus Market protocol** and the **Terminus OS** depend on this information to distribute and install applications.

Here's an example of what a `TerminusManifest.yaml` file might look like:

::: details TerminusManifest.yaml Example

```Yaml
terminusManifest.version: '0.6.0'
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

## terminusManifest.type

- Type: `string`
- Accepted Value: `app`, `recommend`, `model`

Terminus currently supports three types of applications, each requiring different fields. This document uses `app` as an example to explain each field. For information on other types, please refer to the configuration guide accordingly.
- [Recommend Configuration Guide](recommend.md)
- [Model Configuration Guide](model.md)

:::info Example
```Yaml
terminusManifest.type: app
```
:::

## terminusManifest.version

- Type: `string`

As **Terminus** evolves, the configuration specification of `TerminusManifest.yaml` may change. You can identify whether these changes will affect your application by checking the `terminusManifest.version`. The `terminusManifest.version` consists of three integers separated by periods. 

- An increase in the **first digit** indicates the introduction of incompatible configuration items. Applications that haven't updated their `TerminusManifest.yaml` will be unable to distribute or install.
- An increase in the **second digit** signifies changes in the mandatory fields for distribution and installation. However, the **Terminus OS** remains compatible with the application distribution and installation of previous configuration versions. We recommend developers to promptly update and upgrade the application's `TerminusManifest.yaml` file.
- A change in the **third digit** does not affect the application's distribution and installation.

:::info NOET
The current `terminusManifest.version` is `0.6.0`. 
:::

Developers can use 1-3 digit version numbers to indicate the application's configuration version. Here are some examples of valid versions:
```Yaml
TerminusManifest.yaml.version: 1
TerminusManifest.yaml.version: 1.1.0
TerminusManifest.yaml.version: '2.2'
TerminusManifest.yaml.version: "3.0.122"
```

## Metadata

:::info Example
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
:::

### name

- Type: `string`
- Accepted Value: `[a-z][a-z0-9]?`

App’s namespace in **Terminus OS**, lowercase alphanumeric characters only. It can be up to 30 characters, and needs to be consistent with `FolderName` and `name` field in `Chart.yaml`.

### title

- Type: `string`

Your app title that appears in the **Terminus Market**. It can be up to 30 characters.

### description

- Type: `string`

A short description appears below app title in the  **Terminus Market**.

### icon

- Type: `url`

Your app icon that appears in the **Terminus Market**.

The app's icon must be a `PNG` or `WEBP` format file, up to `512 KB`, with a size of `256x256 px`.

### version

- Type: `string`

The **Chart Version** of the application. It should be incremented each time the content in the **Chart** changes. It should follow the [Semantic Versioning 2.0.0](https://semver.org/) and needs to be consistent with the `version` field in `Chart.yaml`.


### categories

- Type: `list<string>`
- Accepted Value: `Blockchain`, `Utilities`, `Social Network`, `Entertainment`, `Productivity`

Used to display your app on different categoiry page in **Terminus Market**.

## Entrances

Specify how to access this app, at least 1 required. It is up to `10`.

:::info Example
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
:::

### name

- Type: `string`
- Accepted Value: `[a-z]([-a-z0-9]*[a-z0-9])?`
  
  Name of the Entrance. It can be up to `63` characters, and needs to be unique in an app.

### port

- Type: `int`
- Accepted Value: `0-65535`

### host

- Type: `string`
- Accepted Value: `[a-z]([-a-z0-9]*[a-z0-9])?`
  
  Ingress name of current entrance, lowercase alphanumeric characters and `-` only. It can be up to `63` characters.

### title

- Type: `string`

Title that appears in the **Terminus** desktop after installed. It can be up to `30` characters.

### icon

- Type: `url`
- Optional

Icon that appears in the **Terminus** desktop after installed. The app's icon must be a `PNG` or `WEBP` format file, up to `512 KB`, with a size of `256x256 px`.

### authLevel

- Type: `string`
- Accepted Value: `public`, `private`
- Default: `private`
- Optional

Auth level of current entrance. Private entrance requires activating tailscale to access.

### invisible

- Type: `boolean`
- Default: `false`
- Optional

When `invisible` is `true`, the entrance will not be displayed on the **Terminus** desktop.

### openMethod

- Type: `string`
- Accepted Value: `default`, `iframe`, `window`
- Default: `default`
- Optional

How to open this entrance in [Desktop](../../../how-to/terminus/desktop.md)

The `iframe` creates a new window within the desktop window through an iframe. The `window` opens a new tab in the browser. The `default` follows the system setting, which is `iframe` by default.

## permission

:::info Example
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
:::

### appCache

- Type: `boolean`
- Optional

Whether the app requires read and write permission to the `Cache` folder. If `.Values.userspace.appCache` is used in the deployment YAML, then `appCache` must be set to `true`.

### appData

- Type: `boolean`
- Optional

Whether the app requires read and write permission to the `Data` folder. If `.Values.userspace.appData` is used in the deployment YAML, then `appData` must be set to `true`.

### userData

- Type: `list<string>`
- Optional

Whether the app requires read and write permission to user's `Home` folder. List all directories that the application needs to access under the user's `Home`. All `userData` directory configued in the deployment YAML, must be included here.

### sysData

- Type: `list<map>`
- Optional

:::info Example
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
:::

All system [providers](../advanced/provider.md) are list below
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
> Additional information about the application, primarily used for display in the **Terminus Market**.

:::info Example
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
:::

## middleware

- Optional
- Type: `map`

The **Terminus OS** provides highly available middleware services. Developers do not need to install middleware repeatedly. Just simply add requried middleware here, You can then directly use the corresponding middleware information in the application's deployment YAML file.

:::info Example
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
:::

Use the middleware information in deployment YAML

```yaml
- name: DB_POSTGRESDB_DATABASE # The database name you configured in TerminusManifest, specified in middleware.postgres.databases[i].name
  value: {{ .Values.postgres.databases.<dbname> }}
- name: DB_POSTGRESDB_HOST
  value: {{ .Values.postgres.host }}
- name: DB_POSTGRESDB_PORT
  value: "{{ .Values.postgres.port }}"
- name: DB_POSTGRESDB_USER
  value: {{ .Values.postgres.username }}
- name: DB_POSTGRESDB_PASSWORD
  value: {{ .Values.postgres.password }}


# For mongodb, the corresponding value is as follow
host --> {{ .Values.mongodb.host }}
port --> "{{ .Values.mongodb.port }}"  # The port and password in the yaml file need to be enclosed in double quotes.
username --> {{ .Values.mongodb.username }}
password --> "{{ .Values.mongodb.password }}" # The port and password in the yaml file need to be enclosed in double quotes.
databases --> "{{ .Values.mongodb.databases }}" # The value type of database is a map. You can get the database using {{ .Values.mongodb.databases.<dbname> }}. The <dbname> is the name you configured in TerminusManifest, specified in middleware.mongodb.databases[i].name


# For Redis, the corresponding value is as follow
host --> {{ .Values.redis.host }}
port --> "{{ .Values.redis.port }}"
password --> "{{ .Values.redis.password }}"


# For zincSearch, the corresponding value is as follow
host --> {{ .Values.zinc.host }}
port --> "{{ .Values.zinc.port }}"
username --> {{ .Values.zinc.username }}
passowrd --> "{{ .Values.zinc.password }}"  
indexes  --> {{ .Values.zinc.indexes.<name> }}  # <name> is the index name configured in zincSearch section of TerminusManifest.yaml
```

## options

> Configure system-related options here

### policies
:::info Example
```yaml
options:
  policies:
    - uriRegex: /$
      level: two_factor
      oneTime: false
      validDuration: 3600s
      entranceName: gitlab
```
:::

### clusterScoped

- Optional
- Type: `map`

Whether this app is installed for all users in a **Terminus** cluster.

:::info Example For Server
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
:::

:::info Example For Client
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
:::

### analytics

- Optional
- Type: `map`

:::info Example
```yaml
options:
  analytics:
    enabled: true
```
:::

### dependencies

- Type: `list<map>`

If your app depends on other apps or requires a certain OS version, please specify here.

:::info Example
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
:::

### websocket

- Optional
- Type: `map`

:::info Example
```yaml
options:
  websocket:
    url: /ws/message
    port: 8888
```
:::

### resetCookie

- Optinal
- Type: `map`

:::info Example
```yaml
options:
  resetCookie:
    enabled: true
```
:::

### upload

- Optinal
- Type: `map`

:::info Example
```yaml
upload:
  # The types of files that are allowed to be uploaded, * stands for any type, The type of the uploaded file must be in the list.
  fileType:
    - pdf
  # The path of 'dest' must be a mountPath
  dest: /appdata
  # The maximum size of file, in bytes
  limitedSize: 3729747942
```
:::