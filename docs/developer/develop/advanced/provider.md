# Service Provider

App developers can define the `ProviderRegistry` in **TAC** or request permission to call other providers.

## Define Provider

```yaml
apiVersion: sys.bytetrade.io/v1alpha1
kind: ProviderRegistry
metadata:
  # Provider name. A namespace is required to prevent duplication.
  name: provider-{{ .Release.Namespace }}

  # provider registry needs to be installed under user-system
  namespace: user-system-{{ .Values.bfl.username}}
spec:
  # dataType of provider
  dataType: app
  deployment: demo
  description: demo provider in app

  # accessible service of the provider
  endpoint: app-svc

  # group of the provider
  group: service.app
  kind: provider
  namespace: "{{ .Release.Namespace }}"
  opApis:
    # name of the provided API
    - name: AppApi

      # URL of the API
      uri: /api
  version: v1
status:
  state: active
```

## Request Permission to Call Provider

You can configure it in the [TerminusManifest.yaml](../package/manifest.md#sysdata) as follows:

```Yaml
sysData:
- group: service.bfl
  dataType: app
  version: v1
  ops:
  - InstallDevApp
```
Once configured, you can add the `access key` and `access secret` to the templates in **TAC**. They will be injected during installation for authorized usage.

```yaml
env:
  - name: OS_SYSTEM_SERVER
    value: system-server.user-system-{{ .Values.bfl.username }}
  - name: OS_APP_SECRET

    # The appname is defined in the TAC
    value: "{{ .Values.os.<appnane>.appSecret }}"
  - name: OS_APP_KEY
    value: "{{ .Values.os.<appname>.appKey }}"
```

You can use these three environment variables in the code to call the **Provider**. Take `curl` as an example:

1. Get the `access token`, which has a valid duration of 5 minutes. Token encryption algorithm: bcrypt(`app key` `timestamp` `app secret`), default cost 10.

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

2. You will receive a response like:
    ```json
    {
      "code": 0,
      "message": "success",
      "data": {
        "access_token": "JDJ5JDEwJE5Wbk9vbFpoLjJlSGxhUUpRY1IwRmVZVjFBWmUxUi5LOXNuQWJmVjRnN29xNWVVaFhPWmV5"
      }
    }
    ```

3. You can then use the token to call the provider's API

    ```sh
    # API URL format http://${OS_SYSTEM_SERVER}/system-server/v1alpha1/<dataType>/<group>/<version>/<op>
    curl http://${OS_SYSTEM_SERVER}/system-server/v1alpha1/app/service.bfl/v1/InstallDevApp \
      -H "content-type: application/json" \
      -H "X-Access-Token: ${access_token}"  \
      -d '{"data":"post to provider"}'
    ```
