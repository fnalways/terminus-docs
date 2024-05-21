# Manage Terminus

## Resource Consumption of Terminus

You can view the resource consumption of **Terminus** in **TermiPass**.

![alt text](/images/how-to/termipass/resource.jpg)

:::info
This feature is supported only on Android and iOS versions.
:::

## VPN Connection

You can enable the VPN connection in the **TermiPass**.

![alt text](/images/how-to/termipass/vpn.jpg)

- Enable VPN on the  **TermiPass Desktop**. Click on the avatar in the upper left corner of the main interface and activate the VPN connection in the pop-up menu.

- Enable VPN on the  **TermiPass Mobile**. Navigate to the **'Settings'** tab, select **Account**, and enable VPN on the **Account** page.

:::info NOTE
If you have enabled VPN in the **TermiPass** client, you will use the VPN to access Terminus, regardless of whether you're using the **TermiPass** client or a browser.
:::
## Connection Status

**TermiPass** will display the connection status of your account with **Terminus**.

Usually, you will see the following statuses:
![alt text](/images/how-to/termipass/connection_status.jpg)

| Status                      | Status Icon | Description                                     |
| --------------------------- | ----------- | ----------------------------------------------- |
| Public Network - Internet   | Internet    | Connected to Terminus via the public network    |
| Local Network - Intranet    | Intranet    | Connected to Terminus via the local network  |
| FRP                         | FRP         | Connected to Terminus via FRP                   |
| VPN Connection - DERP       | DERP        | Connected to Terminus via VPN - DERP            |
| VPN Connection - P2P        | P2P         | Connected to Terminus via VPN - P2P             |

### Public Network Connection - Internet

Displays "Internet" status, indicating that you are connected to **Terminus** through the public network.

### Local Network Connection - Intranet

Displays "Intranet" status, indicating that you are connected to **Terminus** through the local network.

### FRP

Displays "FRP" status, indicating that you are connected to **Terminus** through FRP.

### VPN Connection - DERP

Displays "DERP" status, indicating that you are connected to **Terminus** through VPN - DERP.

### VPN Connection - P2P

Displays "P2P" status, indicating that you are connected to **Terminus** through VPN - P2P.

### Offline Mode

Displays "Offline Mode" status, indicating that you are currently offline and cannot connect to **Terminus**.

## Abnormal Status

![alt text](/images/how-to/termipass/abnormal_status.jpg)

### Network Connection Abnormality

Indicated by an error with _"Network abnormality, please check local network settings"_.<br>
**TermiPass** will continuously monitor your local network. Once the network recovers, it will automatically reconnect and sync data.

### VPN Connection Not Enabled

Indicated by an error with _"Need VPN to connect to Terminus."_.<br>
You can click the status icon or status bar to activate VPN connection.

### SSO Invalid

Indicated by an error with _"Need to log in to Terminus again."_.<br>
You can click the status icon or status bar to log in. After a confirmation, you will need to enter the password.

### SRP Invalid

Indicated by an error with _"Need to reconnect to Terminus"_.<br>
You can click the status icon or status bar to reconnect. After a confirmation, you will need to enter the password to log in again. After logging in, your **Vault** data on **TermiPass** will synchronize and merge with the **Vault** data on **Terminus**. Don't worry, no data will be lost.

### Device is Inactive or Expired

Indicated by an error with _"Need to reactivate Terminus"_.<br>
Here are some possible reasons for the issue, and you can choose your next steps accordingly:
- Due to a transient network issue with **Terminus**, this problem will disappear as soon as **Terminus** returns to normal.
- If your **Terminus** has been destroyed, it needs to be reactivated. If so, reactivate it in the same way as the [initial activation](../terminus/setup/wizard.md#activate-terminus).
- If you're unable to determine the situation, seek help from your administrator.
- You can enable offline mode to ignore this status bar.


| Abnormal Status       | Description                                                                                       | Notification |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| Offline Mode          | You can manually switch to offline mode, continue editing offline. The data will sync with the server later. | Offline Mode |
| Network Connection Exception    | The current network connection is poor, please check your local network settings                  | Banner Tip   |
| VPN Connection Not Enabled | Need VPN to connect to Terminus.	| Banner Tip   |
| SSO Invalid | Need to log in to Terminus again.	| Banner Tip   |
| SRP Invalid | Need to reconnect to Terminus.	| Banner Tip   |
| Device is Inactive or Expired | The Terminus device is not activated, or the device has been destroyed. | Banner Tip   |
