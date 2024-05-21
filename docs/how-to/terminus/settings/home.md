---
outline: [2, 3]
---

# Home

Home is the security center for you.

## Device Management

![alt text](/images/how-to/terminus/home01.png)

This list presents all devices with access to Terminus. It includes information such as the name of each device, connection method, device IP, and the last connection time. 

These devices are divided into two categories:
1. **TermiPass**<br>
These includes mobile phones, computers, and browser plugin versions of TermiPass. These devices require authorization from both the **Vault** and **Account** systems to access Terminus. If the VPN is enabled, These devices need additional authorization.

2. **Desktop**<br>
These devices access Terminus through a browser and only require authorization from the **Account** system.

## Safety

![alt text](/images/how-to/terminus/home02.png)

### Change Password

In the security settings, you can change the login password for Terminus.

### Forcing VPN Access to Private Entrance (Only VPN Mode)

When this feature is enabled, the system will require VPN access for all connections to the [Private Entrance](../../../overview/terminus/network.md#private-entrance).

Please note that at least two devices with TermiPass and VPN enabled are required to activate this feature. Usually, this involves using a computer and a mobile phone, both having TermiPass installed and VPN activated.

You can view the list of TermiPass devices with VPN enabled in the [HeadScale Connection Status](#headscale-connection-status).

For guidance on using the VPN connection in the TermiPass client, please refer to [VPN Connection](../../termipass/manage-terminus.md#vpn-connection).

### Network Authority Policy

![alt text](/images/how-to/terminus/network_authority_policy.png)

By default, Terminus uses 'Two-Factor' mode. This means you must enter both your login password and a two-factor authentication code during [login](../setup/login.md).

When switched to 'One Factor' mode, you only need to enter your login password to complete the process.

:::info
We strongly discourage using the 'One Factor' mode.
:::

### Active Session of the Vault

![alt text](/images/how-to/terminus/active_session_of_the_vault.png)

This section displays the list of **TermiPass** devices that have access to Terminus. Unlike the login process, **TermiPass** requires an additional private key for authorization, making it more secure.

### HeadScale Connection Status

![alt text](/images/how-to/terminus/headScale_connection_status.png)

This section displays all devices that have activated VPN access through **TermiPass**.

### List of SSO Authorization Tokens

![alt text](/images/how-to/terminus/list_of_sso_authorization_tokens.png)

This section displays all valid tokens within the **Account** system, which have been obtained either through [Login](../setup/login.md) or through **TermiPass** login.

You can revoke tokens here. After revocation, devices that hold the token will need to login with password and two-factor authentication code to access Terminus again.


### Login History

![alt text](/images/how-to/terminus/login_history.png)

This section displays the recent login attempts to Terminus using passwords. You may have logged in either through [Login](../setup/login.md) or through **TermiPass**.

:::info NOTE
It will display a successful login attempt here, regardless of whether the user has entered the two-factor authentication code correctly.
:::
