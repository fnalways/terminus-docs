---
outline: [2, 4]
---

# VC Service

本文的目的是希望在帮助你了解如何配置各类 Schema 后, 通过 Terminus 提供的 [verifiable-credential-gate](https://github.com/Above-Os/verifiable-credential-gate)，[did-gate](https://github.com/Above-Os/did-gate) 和 tbd 团队提供的 [SSI Service](https://github.com/TBD54566975/ssi-service) ，打造自己场景的 Issuer 和 Verifier。

:::tip
如果你想从事更底层的开发，可以结合 [SSI SDK](https://github.com/TBD54566975/ssi-sdk) 的源代码阅读 [协议标准](#reference)
:::

## 介绍

在 [VC](concepts.md#verifiable-credential) 一节中，我们介绍了 VC 申请的基本流程。

在实际的 Wallet，Verifier 和 Issuer 的沟通过程中，会接触到更多名词，我们在这里梳理下：

| Term                    | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Holder                  | Holders are entities that have one or more verifiable credentials in their possession. Holders are also the entities that submit proofs to Verifiers to satisfy the requirements described in a Presentation Definition.                                                                                                                                                                                                                                                                                                        |
| Issuer                  | A role an entity can perform by asserting claims about one or more subjects, creating a verifiable credential from these claims, and transmitting the verifiable credential to a holder.                                                                                                                                                                                                                                                                                                                                        |
| Verifier                | Verifiers are entities that define what proofs they require from a Holder (via a Presentation Definition) in order to proceed with an interaction.                                                                                                                                                                                                                                                                                                                                                                              |
| Verifiable Credential   | Is a tamper-evident credential that has authorship that can be cryptographically verified. Verifiable credentials can be used to build Verifiable Presentations, which can also be cryptographically verified. The claims in a credential can be about different subjects. PEX accepts Verifiable credential in 3 forms: 1. JSON_LD which is know in our system as IVerifiableCredential, 2. JWT-Wrapped VC which is known in our system as JwtWrappedVerifiableCredential or string which is a valid Verifiable credential jwt |
| Verifiable Presentation | s a tamper-evident presentation encoded in such a way that authorship of the data can be trusted after a process of cryptographic verification.                                                                                                                                                                                                                                                                                                                                                                                 |
| Manifest                | Credential Manifests are used to describe which credentials are available for issuance.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Application             | Holder 提交给 Issuer 的格式，里面包含了                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Presentation Definition | Presentation Definitions are objects that articulate what proofs a Verifier requires.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Presentation            | Data derived from one or more verifiable credentials, issued by one or more issuers                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Submission              | 待续                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Definition              | 待续                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Schema                  | 不同的 Manifest，Application，Credential，Presentation，Definition 都需用通过 JSON 格式定义 Schema。服务通过 Schema 来校验提交的数据格式是否正确。之后才会进入业务流程。                                                                                                                                                                                                                                                                                                                                                        |

## Issuer Service

![alt text](image-1.png)

流程

1. Holder 从 Issuer 处 Get Manifest
2. Holder 自己 Sign and Submit Application
3. Issuer 自动或者手动 Review Application
4. Holder 从 Issuer 拿到 Review 的结果，如果通过，会获取到 VC，反之拿到被拒绝的理由

### Manifest

这个文件会返回给 Holder。
outputDescriptors 这个参数是用来告诉钱包如何展示 VC 的。
presentationDefinition 实际上是后续 manifest_presentation 文件，用来确认用户提交上来的 Application 的格式

```json
{
  "name": "Facebook Verifiable Credential Manifest",
  "description": "Facebook Verifiable Credential Manifest",
  "issuerDid": "",
  "issuerName": "",
  "outputDescriptors": [
    {
      "id": "",
      "schema": "",
      "name": "Facebook Verifiable Credential Manifest",
      "description": "Facebook Verifiable Credential Manifest",
      "display": {
        "title": {
          "path": ["$.credentialSubject.name", "$.vc.credentialSubject.name"],
          "schema": { "type": "string" }
        },
        "subtitle": {
          "path": ["$.credentialSubject.title", "$.vc.credentialSubject.title"],
          "schema": { "type": "string" }
        },
        "description": {
          "path": [
            "$.credentialSubject.description",
            "$.vc.credentialSubject.description"
          ],
          "schema": { "type": "string" }
        },
        "properties": [
          {
            "path": ["$.credentialSubject.id", "$.vc.credentialSubject.id"],
            "schema": { "type": "string" },
            "label": "ID"
          },
          {
            "path": [
              "$.credentialSubject.email",
              "$.vc.credentialSubject.email"
            ],
            "schema": { "type": "string" },
            "label": "Email"
          }
        ]
      },
      "styles": {
        "background": {
          "color": "#FFFFFF"
        },
        "text": {
          "color": "#000000"
        }
      }
    }
  ],
  "format": {
    "jwt_vc": {
      "alg": ["EdDSA"]
    }
  },
  "presentationDefinition": {}
}
```

### Manifest Presentation

issuer 会用这个文件校验 Holder 提交的 Application 格式是否合法

```json
{
  "name": "Facebook Manifest Presentation Definition",
  "purpose": "Provide your token required to Facebook",
  "inputDescriptors": [
    {
      "id": "token",
      "name": "Access Token",
      "purpose": "Provide your token required to Facebook",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.token"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    }
  ],
  "author": ""
}
```

### Application Verifiable Credential

用户虽然在客户端构造 vc 数据时只要 manifest_presentation，但是服务器需要一个 schema 来校验 manifest_presentation 是否符合格式要求。
这个文件会返回给 Holder 让 Holder 知道需要提交验证的数据格式。
在 Facebook，Twiiter，Gmail 这种场景下，用户在客户端登录，获得 acesstoken，然后将 acesstoken 提交给 Issuer 服务器进行，Issuer 服务器通过 acesstoken 到 Facebook 等服务器上获取用户的基本信息。所以用户只要提交 token 即可，内容简单。
但如果是 KYC 场景，用户则需要提交姓名，身份证照片甚至验证视频等，这个文件的字段就会复杂很多

```json
{
  "author": "",
  "name": "Facebook Verifiable Credential Request Schema",
  "schema": {
    "$id": "facebook-schema-1.0",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "description": "Facebook Verifiable Credential Schema",
    "type": "object",
    "properties": {
      "token": {
        "type": "string"
      }
    },
    "required": ["token"],
    "additionalProperties": true
  },
  "sign": false
}
```

### Verifiable Credential

Issuer 返回给 Holder 的 VC 格式

```json
{
  "author": "",
  "name": "Facebook Verifiable Credential Schema",
  "schema": {
    "$id": "facebook-schema-1.0",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "description": "Facebook Verifiable Credential Schema",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "title": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },

      "facebook_name": {
        "type": "string"
      },
      "profile_image": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "facebook_id": {
        "type": "string"
      },
      "picture_is_silhouette": {
        "type": "boolean"
      }
    },
    "required": ["name", "title", "description", "facebook_name"],
    "additionalProperties": true
  },
  "sign": false
}
```

## Verifer Service

流程可以参考[Presentation Exchange](https://identity.foundation/presentation-exchange/)
![alt text](image-2.png)

### Presentation Definition

Verifer 会把文件返回给 Holder，Holder 根据要求将 VC 内容填写进去后打包成符合格式要求的 Submission 返回给 Verifer

```json
{
  "name": "Facebook Basic Info Presentation Definition",
  "purpose": "Provide your facebook basic info",
  "inputDescriptors": [
    {
      "id": "name",
      "name": "Name",
      "purpose": "Provide vc name",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.name"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },
    {
      "id": "title",
      "name": "Title",
      "purpose": "Provide vc title",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.title"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },
    {
      "id": "description",
      "name": "description",
      "purpose": "Provide vc description",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.description"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },

    {
      "id": "facebook_name",
      "name": "Provide your facebook name",
      "purpose": "Provide your facebook name",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.facebook_name"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },
    {
      "id": "profile_image",
      "name": "Provide your facebook profile image",
      "purpose": "Provide your facebook profile image",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.profile_image"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },
    {
      "id": "email",
      "name": "Provide your facebook email email info",
      "purpose": "Provide your facebook email info",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.email"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },
    {
      "id": "facebook_id",
      "name": "Provide your facebook id",
      "purpose": "Provide your facebook id",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.facebook_id"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },
    {
      "id": "picture_is_silhouette",
      "name": "Provide your facebook Picture is Silhouette",
      "purpose": "Provide your facebook picture_is_silhouette",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.picture_is_silhouette"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    }
  ],
  "author": ""
}
```

## 启动服务

TODO

## Reference

以下引用来自 [SSI SDK](https://github.com/TBD54566975/ssi-sdk) 项目

### Specifications

Here are a set of references to specifications that this library currently supports. It is a dynamic set that will change as the library evolves.

- [Decentralized Identifiers (DIDs) v1.0](https://www.w3.org/TR/did-core/) W3C Proposed Recommendation 03 August 2021
- [Verifiable Credentials Data Model v1.1](https://www.w3.org/TR/vc-data-model/) W3C Recommendation 09 November 2021
  - Supports [Linked Data Proof](https://www.w3.org/TR/vc-data-model/#data-integrity-proofs) formats.
  - Supports [VC-JWT and VP-JWT](https://www.w3.org/TR/vc-data-model/#json-web-token) formats.
- [Verifiable Credentials JSON Schema Specification](https://w3c-ccg.github.io/vc-json-schemas/v2/index.html) Draft Community Group Report, 21 September 2021
- [Presentation Exchange 2.0.0](https://identity.foundation/presentation-exchange/) Working Group Draft, March 2022
- [Wallet Rendering Strawman](https://identity.foundation/wallet-rendering/), June 2022
- [Credential Manifest](https://identity.foundation/credential-manifest/) Strawman, June 2022
- [Status List 2021](https://w3c-ccg.github.io/vc-status-list-2021/) Draft Community Group Report 04 April 2022

### Signing Methods

> - [Data Integrity 1.0](https://w3c.github.io/vc-data-integrity/) Draft Community Group Report
> - [Linked Data Cryptographic Suite Registry](https://w3c-ccg.github.io/ld-cryptosuite-registry/) Draft Community Group Report 29 December 2020
> - [JSON Web Signature 2020](https://w3c-ccg.github.io/lds-jws2020/) Draft Community Group Report 09 February 2022
>   - [VC Proof Formats Test Suite, VC Data Model with JSON Web Signatures](https://identity.foundation/JWS-Test-Suite/) Unofficial Draft 09 March 2022 This implementation's compliance with the JWS Test Suite can be found here.
>   - Supports both JWT and Linked Data proof formats with [JOSE compliance](https://jose.readthedocs.io/en/latest/).
