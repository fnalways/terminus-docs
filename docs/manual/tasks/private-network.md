# Access Terminus applications on other devices via VPN
Terminus provides built-in VPN services using TailScale and HeadScale, enabling secure remote access to your applications from various devices. This feature allows you to interact with your Terminus applications as if they were running directly on your device, even when you're away from your local network.

## Understand connection status
TermiPass displays the connection status between your account and Terminus, helping you understand or diagnose your current network connection.

| Status       | Description |
|--------------|-------------|
| Internet     | Connected to Terminus via the public internet |
| Intranet     | Connected to Terminus via the local network |
| FRP          | Connected to Terminus via FRP |
| DERP         | Connected to Terminus via VPN using DERP relay |
| P2P          | Connected to Terminus via VPN using P2P connection |
| Offline mode | Currently offline, unable to connect to Terminus |

:::info
When accessing private entrances from an external environment through VPN, if the status shows "DERP", it indicates that the VPN cannot directly connect to Terminus via P2P and must use Tailscale's relay servers. This status may affect connection quality. If you consistently encounter this situation, please contact Terminus support for assistance.
:::

## Set up VPN access
:::tip
For different TermiPass download options, visit [the official page](https://www.jointerminus.com/termipass).
:::

### On Terminus mobile client
1. Open TermiPass, go to **Settings** > **Account**.
2. Turn on the VPN switch.

### On Terminus desktop client
1. Open TermiPass, click on the avatar area in the top left corner of the main interface.
2. Turn on the switch for **Enable VPN connection** in the pop-up panel.

Once enabled, you can also access your applications using the format: `https://[RouteID].local.[TerminusDomainName]`.

Devices with activated VPN will use the VPN connection to access Terminus, whether through the TermiPass client or a browser.

:::info
iOS or macOS versions of TermiPass will require adding a VPN configuration file to the system when turning on the VPN. Follow the prompts to complete the setup.
:::

## Enforce access using VPN
For maximum security, Terminus allows you to enforce VPN mode and ensure that all connections to your private Terminus applications go through the VPN, regardless of the device or network you're using.

### Enable enforced VPN mode

1. Enable VPN connections on at least two devices (typically a computer and a mobile phone) with TermiPass installed. See [Set up VPN access](#set-up-vpn-access).
2. Open the Settings app from the Dock or Launchpad.
3. Click on your profile picture in the top-left corner, and scroll down to **Security** settings.
4. Turn on the switch for **Enforce VPN access to private entrance**.

When successful, you'll see a confirmation message at the bottom of the screen.

## Troubleshoot connection issues
If you encounter connection problems, TermiPass will display diagnostic messages to help you resolve the issue. Here are some common scenarios and how to address them:

| Status message                                               | Possible cause and recommended actions                                                                                                                                                                                                                                                                                                                                 |
|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Network issue detected. Please check local network settings. | **Local network issue** <br> 1. Wait for automatic reconnection. The system will detect network recovery and sync data. <br> 2. Check your local network settings if the issue persists.                                                                                                                                                                               |
| VPN connection to Terminus required.                         | **VPN not enabled** <br> Click the notification banner and follow prompts to enable VPN connection.                                                                                                                                                                                                                                                                    |
| Terminus re-login required.                                  | **Session expired or authentication issue** <br> Click the notification banner and follow prompts to log in.                                                                                                                                                                                                                                                           |
| Terminus reconnection required.                              | **Connection interrupted or timed out** <br> Click the notification banner and follow prompts to log in. After re-login, Vault data will sync and merge with the server.                                                                                                                                                                                               |
| No running Terminus detected.                                | **Temporary network issue or Terminus is restarting or shutting down** <br> Wait for automatic recovery. This usually resolves shortly. <br> **Terminus instance no longer exists** <br> 1. Click the notification banner and follow prompts to reactivate Terminus, enable offline mode or ignore notification. <br> 2. Contact Terminus Admin if the issue persists. |
