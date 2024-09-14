# 应用市场

开发者可利用 Market 提供的 Provider 接口，在自己开发的应用（比如，三方 Market 扩展）中调用`安装` `卸载`接口，安装应用。

Provider 的申请和调用方法可以详细阅读 [Service Provider](./provider.md)

Market 提供的 Provider

| Group            | version | dataType | ops                           |
| ---------------- | ------- | -------- | ----------------------------- |
| service.appstore | v1      | app      | InstallDevApp UninstallDevApp |

- 安装接口

地址："http://$OS_SYSTEM_SERVER/system-server/v1alpha1/app/service.appstore/v1/InstallDevApp"

请求方式

`POST`

请求头

```http
X-Authorization: token          # cookie 中的 auth_token
X-Access-Token: access_token    # provider 授权接口获取的 access token
```

请求体参数 (以 Golang struct 为例)

```go
type InstallOptions struct {
    App string `json:"appName"` //必须
    RepoUrl string `json:"repoUrl"` //必须
    CfgUrl string `json:"cfgUrl"` //非必需
    Version string `json:"version"` //升级时需要
    Source string `json:"source"` //必须
}
```

请求返回

```go
type InstallationResponse struct {
    Code int `json:"code"`
    Msg string `json:"message,omitempty"`
    Data InstallationResponseData `json:"data"`
}

type InstallationResponseData struct {
    UID string `json:"uid"`
}

```

- 卸载接口

地址："http://$OS_SYSTEM_SERVER/system-server/v1alpha1/app/service.appstore/v1/UninstallDevApp"

请求方式

`POST`

请求头

```http
X-Authorization: token          # cookie 中的 auth_token
X-Access-Token: access_token    # provider 授权接口获取的 access token
```

请求体参数 (以 Golang struct 为例)

```go
type UninstallData struct {
    Name string `json:"name"` //必须
}
```

返回

```go
type InstallationResponse struct {
    Code int `json:"code"`
    Msg string `json:"message,omitempty"`
    Data InstallationResponseData `json:"data"`
}

type InstallationResponseData struct {
    UID string `json:"uid"`
}

```
