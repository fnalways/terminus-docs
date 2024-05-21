---
outline: [2, 3]
---

# Network

## Motivation

The network configuration of the server has always been an extremely cumbersome task, meaning:

1. Externally, issues such as domain name, certificate, reverse proxy, intranet penetration, etc. need to be dealt with
2. Internally, it is necessary to manage independent routing, domain names and security policies for each application

Currently, no other product on the market does well in both safety and ease of use.

Terminus OS hopes to provide individual users with a barrier-free but secure and versatile solution.

## Entrance

Entrance is the gateway for applications, and users need to access the application through Entrance.

Each application has one or more Entrances. There are two types of Entrances: Public and Private. For example, WordPress includes two Entrances: public page (Public Entrance) and management backend (Private Entrance).

### Public Entrance

Positioning is to provide services that are open to the outside world. Such as blogs, social media, etc.

Traffic accessing Public Entrance does not need to go through [authentication](./account.md#mfa). We get basic security by routing Public Entrance traffic through Cloudflare.

- When Terminus has a public IP, traffic enters Terminus through Cloudflare
- When Terminus does not have a public IP, there are two ways:
  - Traffic enters Terminus through Cloudflare Tunnel
  - Traffic passes through Cloudflare and is forwarded to FRP before entering Terminus

### Private Entrance

Its positioning is to provide services that only users can access. For example, blog management background, [Desktop](../../how-to/terminus/desktop.md), etc.

Traffic accessing Private Entrance needs to go through [authentication](./account.md#mfa). Private Entrance traffic routing depends on whether the user has activated ["Only VPN"](../../how-to/terminus/settings/home.md#forcing-vpn-access-to-private- entrance-only-vpn-mode):

- When not activated, when a user activates VPN access in TermiPass(../../how-to/termipass/manage-terminus.md#vpn-connection)
  - After activation, all traffic is accessed through VPN(TailScale)
  - Not activated, traffic routing is the same as Public Entrance
- After activation, only traffic through VPN(TailScale) can access Private Entrance

### Endpoint

Users have two ways to access the application in the browser (Entrance of the application):

- By default, you can use the form `https://[RouteID].[DomainName]`.

  For example, `https://vault.bob.myterminus.com`, RouteID also has two situations:

  - Default RouteID

    - In order to make it easier to remember, we have set an easy-to-remember RouteID for all pre-installed system applications. For example `desktop`, `market`, etc.

    - Other applications use [Application ID](./application.md#application-id) + Entrance Index, which is a 10-bit string of lowercase English letters and numbers. For example, '92d76a11' is the Application ID, the Entrance Index is 1, and together the RouteID is '92d76a1101'

  - Users can [customize RouteID](../../how-to/terminus/settings/application.md#custom-routeid) in Settings

- You can also give Entrance [set third-party domain name](../../how-to/terminus/settings/application.md#custom-domain)

:::info
DomainName is adopted from [Terminus Name](../snowinning/terminus-name.md#domainname)

Entrance Index refers to the position of Entrance in multiple Entrances defined in [TerminusManifest.yaml](../../developer/develop/package/manifest.md)
:::

## Setup Domain

Terminus Space will assist users to complete [DomainName](../snowinning/terminus-name.md#domainname) setup when Terminus [activates](../../how-to/terminus/setup/wizard.md).

### DNS

During the process, we will configure DNS for the domain name of the Individual or Organization so that users can access Terminus through the URL after the installation is completed.

:::info
For the Admin of the Organization, you need to refer to [Domain Settings Tutorial](../../how-to/space/domain/index.md) to hand over the domain name to Terminus Space for hosting.
:::

### HTTPS Certificate

In order to ensure the privacy of data transmission when users access Terminus, we apply for a free SSL certificate for users. This certificate is issued by Google Trust Services LLC and will be automatically renewed when the certificate expires.

At the same time, in order to improve the speed and security of access to Terminus, we use Cloudflare to perform layer 7 acceleration on Terminus. The corresponding SSL certificate is issued by Google and managed by Cloudflare.

### Setup Reverse Proxy

For Terminus users who do not have a public IP, they need to set up a reverse proxy during activation. There are currently two ways:

1. One is to choose Cloudflare’s Tunnel
2. One is to choose an FRP node. In order to speed up access, it is recommended to choose an FRP node that is close to the physical location of Terminus.

## Access via local

Users can access applications on Terminus through `https://[RouteID].local.[DomainName]`, such as `https://vault.local.bob.myterminus.com` in two situations.

### Intranet

When the user's device and Terminus are on the same intranet, such as connected to the same WIFI.

### VPN access

At Terminus, we have built-in VPN services for our users based on [TailScale](https://tailscale.com/) and [HeadScale](https://headscale.net/).

When VPN access is enabled on TermiPass, all traffic to Terminus from a device with that TermiPass installed goes through the VPN. The advantages of VPN access are:

- safer
- Get faster access

We provide the [Only VPN](../../how-to/terminus/settings/home.md#forcing-vpn-access-to-private-entrance-only-vpn-mode) switch in the settings, turn it on Afterwards, the system will require that all access to Private Entrance must be through VPN.

## TermiPass connection status

You can check the current connection status of TermiPass and Terminus through [TermiPass Connection Status](../../how-to/termipass/manage-terminus.md#connection-status)

## Terminus internal network

The Terminus system adopts a multi-layer proxy routing design on the gateway architecture, which is distributed layer by layer from `cluster` -> `user` -> `application` -> `service component`.

![alt text](/images/overview/terminus/image4.jpeg)

Inside the application. Terminus has multiple layers of security.

- Each application has its own namespace, and all resources are placed in a namespace for exclusive use. All applications are not allowed to bind ClusterRole on the ServiceAccount, that is, the application does not have permission to access resources across namespaces.

- A Network Policy will be added to each Namespace. Except for cluster applications and applications on the user's own system, network requests from other APPs are not allowed to enter. All applications and networks are isolated between users. The third-party applications installed by each user will also be network isolated to prevent malicious APPs from attacking other applications.

- All Pods deployed by the application are not allowed to have service of hostNetwork or NodePort. Only when the Entrance Service is declared, the system will provide an entry proxy for access traffic. The Pod declared as Entrance will be forced to join Envoy's sandbox Sidecar to authenticate and authorize each incoming traffic.

## Learn More

- User

  Using Settings [Management Entrance](../../how-to/terminus/settings/application.md)

- Developer

  Learn more about Entrance properties via [TerminusManifest.yaml](../../developer/develop/package/manifest.md#entrances)
