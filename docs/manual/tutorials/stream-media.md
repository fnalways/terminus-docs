---
outline: [2, 3]
---

# Stream your media library from anywhere with Olares
Olares makes it easy to access and enjoy your personal media library from anywhere, whether you're at home or on the go. With built-in VPN support and media management tools like Jellyfin, you can stream your favorite movies and TV shows securely and seamlessly. This tutorial will guide you through the process of setting up Olares VPN, accessing media files, and configuring Jellyfin for advanced streaming capabilities.

## Objectives
In this tutorial, you will learn how to:
- Configure Olares VPN to securely access your media library from anywhere with LAN-like performance.
- Explore and play video files stored in Olares Files using the LarePass client or a web browser.
- Install and set up Jellyfin for media streaming.

## Enable Olares VPN connection
To achieve smooth streaming over external networks, enable the Olares VPN connection in LarePass. This ensures all traffic from devices with LarePass installed routes through the dedicated network, providing LAN-like speed and performance.
:::tip
For different LarePass download options, visit [the official page](https://www.olares.xyz/larepass).
:::

### On LarePass mobile client
1. Open LarePass, go to **Settings** > **Account**.
2. Turn on the VPN switch.
   ![Enable VPN on LarePass mobile](/images/manual/use-cases/vpn-mobile.png#bordered)
### On LarePass desktop client
1. Open LarePass, click on the avatar area in the top left corner of the main interface.
2. Turn on the switch for **VPN connection** in the pop-up panel.
   ![Enable VPN on LarePass desktop](/images/manual/use-cases/vpn-desktop.png#bordered)

Once enabled, you can also access your applications using the format: `https://[RouteID].local.[OlaresDomainName]`.

Devices with activated VPN will use the VPN connection to access Olares, whether through the LarePass client or a browser.

:::info
iOS or macOS versions of LarePass will require adding a VPN configuration file to the system when turning on the VPN. Follow the prompts to complete the setup.
:::

## Access media files in LarePass
After enabling VPN, you can browse media files stored on Olares.

### Access via LarePass Client
1. Open LarePass, and navigate to your media directory containing movies and TV shows in Files.
2. Click on any file to start playback on your computer or mobile device.

### Access from browser
1. Open files from your Olares desktop, or directly using the local address: `https://files.local.[OlaresDomainName]`.
2. Locate your media directory, and click on video files to begin playback.

## Access media files using Jellyfin
For advanced media management features like subtitle support and multi-channel audio, install Jellyfin.

1. Open the Market app in Olares and go to the **Entertainment** category.
2. Locate and download Jellyfin.
3. Launch Jellyfin and complete first-time setup:
   - Set administrator password.
   - Configure media library directories.
4. Wait for Jellyfin to scan and index your media library. It will automatically fetch metadata including:
   - Movie posters 
   - Descriptions 
   - Cast information 

![Jellyfin](/images/manual/use-cases/jellyfin.png#bordered)
## Access your media library through Jellyfin clients
To stream your media on various devices:

1. Configure Jellyfin authentication. 
    
   a. Open Settings, and navigate to **Applications** > **Jellyfin** > **Entrances**.

   b. Set **Authentication level** to **Internal**.
2. Download and install [Jellyfin's official client](https://jellyfin.org/downloads/).
3. Connect clients to your Jellyfin server in Olares. 

   a. In your Jellyfin client, auto-discovery should locate your server for devices on the same network.

   b. If auto-discovery fails, manually enter the server address from Olares.

4. Log in to Jellyfin client with your credentials.
:::tip
Keep the VPN connection active for optimal streaming performance when accessing your media library remotely.
:::
