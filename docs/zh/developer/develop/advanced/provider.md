# Service Provider

APP 的开发者可在 TAC 中配置 ProviderRegistry 或者在其他 Provider 的调用权限申请

## 申明 Provider

```yaml
apiVersion: sys.bytetrade.io/v1alpha1
kind: ProviderRegistry
metadata:
  # provider 名称，需要加入namespace，避免重复
  name: provider-{{ .Release.Namespace }}

  # provider registry需要安装到user-system下面
  namespace: user-system-{{ .Values.bfl.username}}
spec:
  version: v2   #The latest version is v2, but the system remains compatible with v1.

  # provider 的 dataType, it is recommended to add app name to prevent duplication.
  dataType: legacy_{{ .Release.Name }}
  deployment: {{ .Release.Name }}
  description: {{ .Release.Name }} legacy api v2

  # provider 的可访问service. Usually it is <appServiceName>.<appNameSpace>:<servicePort>
  endpoint: {{ .Release.Name }}-svc.{{ .Release.Namespace }}:1234

  # provider 的 group; it is recommended to add the app name to prevent duplication.
  group: api.{{ .Release.Name }}
  kind: provider
  namespace: "{{ .Release.Namespace }}"
  opApis:
    # 提供的接口名称
    - name: AppApi
      # 提供的接口访问路径
      uri: /api  
status:
  state: active
```

## 申请 Privder 的访问权限

可在 [TerminusManifest.yaml](../package/manifest.md#sysdata) 中配置。

```Yaml
sysData:
- appName: providerapp  # The appname of the api provider. Required for ProviderRegistry v2. 
  port: 8888  # The port of the provider service

  # The default domain of provider is <appName>-svc.<appName>-<username>:<port>, if the service name and app namespace is not in default format, you can specify it in following field  
  svc: app-svc  # Name of the service. Optional for ProviderRegistry v2.
  namespace: ns # Namespace of the app. Optional for ProviderRegistry v2.

  version: v2   # version of the ProviderRegistry
  dataType: legacy_{{ .Release.Name }}  # dataType defined in ProviderRegistry
  group: api.{{ .Release.Name }}   # group defined in ProviderRegistry
  ops:
  - AppApi   # name of opApis defined in ProviderRegistry
```

配置后，在 TAC 的 templates 中可引用系统在安装时将为其注入的授权使用的 `access key` 和 `access secret`

```yaml
env:
  - name: OS_SYSTEM_SERVER
    value: system-server.user-system-{{ .Values.bfl.username }}
  - name: OS_APP_SECRET

    # 此处的appname为TAC包中定义的APP名称
    value: "{{ .Values.os.<appnane>.appSecret }}"
  - name: OS_APP_KEY
    value: "{{ .Values.os.<appname>.appKey }}"
```

在代码中可获取这三个环境变量，进行 Provider 调用

以 curl 为例

1. 获取 acess token,有效时间 5 分钟,

token 加密算法：bcrypt(`app key` `timestamp` `app secret`) default cost 10

```sh
now=$(date +%s)
token=$(htpasswd -nbBC 10 USER "${OS_APP_KEY}${now}${OS_APP_SECRET}"|awk -F":" '{print $2}')

curl -X POST http://${OS_SYSTEM_SERVER}/permission/v1alpha1/access -H "content-type: application/json" \
  -d "{ \
  \"app_key\": \"${OS_APP_KEY}\",         \
  \"timestamp\": ${now},                  \
  \"token\": \"${token}\",                \
  \"perm\": {                             \
      \"group\": \"service.bfl\",         \
      \"dataType\": \"app\",              \
      \"version\": \"v1\",                \
      \"ops\": [                          \
      \"InstallDevApp\"                   \
      ]                                   \
  }                                       \
}'
```

系统将返回

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "access_token": "JDJ5JDEwJE5Wbk9vbFpoLjJlSGxhUUpRY1IwRmVZVjFBWmUxUi5LOXNuQWJmVjRnN29xNWVVaFhPWmV5"
  }
}
```

2.这个时候，可用返回的 token 去调用 provider 的接口

```sh
# 地址格式 http://${OS_SYSTEM_SERVER}/system-server/v1alpha1/<dataType>/<group>/<version>/<op>
curl http://${OS_SYSTEM_SERVER}/system-server/v1alpha1/app/service.bfl/v1/InstallDevApp \
  -H "content-type: application/json" \
  -H "X-Access-Token: ${access_token}"  \
  -d '{"data":"post to provider"}'
```
