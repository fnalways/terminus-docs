---
outline: [2,3]
description:
---
# Enable remote access to LAN Devices via LarePass VPN

LarePass VPN allows you to access your Olares device and its local network devices from a different network segment or a remote location. By enabling SSH access and subnet routing, you can remotely manage devices like PCs, printers, or NAS systems in your Olares LAN.

## Enable LarePass VPN

:::tip
For different LarePass download options, visit [the official page](https://www.olares.xyz/larepass).
:::

### On LarePass mobile client
1. Open LarePass, go to **Settings** > **Account**.
2. Turn on the VPN switch.

### On LarePass desktop client
1. Open LarePass, click on the avatar area in the top left corner of the main interface.
2. Turn on the switch for **Enable VPN connection** in the pop-up panel.

Devices with activated VPN will use the VPN connection to access Olares, whether through the LarePass client or a browser.

:::info
iOS or macOS versions of LarePass will require adding a VPN configuration file to the system when turning on the VPN. Follow the prompts to complete the setup.
:::

## Allow SSH connections via VPN
This enables SSH access to your Olares device through the LarePass VPN, even when you are in a different network or working remotely.

1. Open the Settings app, and select **System** > **VPN**.
2. Toggle on **Allow SSH Access via VPN**. Port **22** (SSH) is automatically added to the configuration.

## Allow subnet routing
This feature allows you to access other devices in the same local network as your Olares through the VPN.

1. Open the Settings app, and select **System** > **VPN**.
2. Toggle on **Enable subnet routes**.