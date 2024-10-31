# Stream your media library from anywhere with Terminus
Want to enjoy your movies and TV shows from anywhere? Here's how to access your personal media library remotely through Terminus.

## Enable Terminus VPN connection
To achieve smooth streaming over external networks, enable the Terminus VPN connection in TermiPass. This ensures all traffic from devices with TermiPass installed routes through the dedicated network, providing LAN-like speed and performance.
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

## Access media files in TermiPass
After enabling VPN, you can browse media files stored on Terminus.

### Access via TermiPass Client
1. Open TermiPass, and navigate to your media directory containing movies and TV shows in Files.
2. Click on any file to start playback on your computer or mobile device.

### Access from browser
1. Open files from your Terminus desktop, or directly using the local address: `https://files.local.[TerminusDomainName]`.
2. Locate your media directory, and click on video files to begin playback.

## Access media files using Jellyfin
For advanced media management features like subtitle support and multi-channel audio, install Jellyfin.

1. Open the Market app in Terminus and go to the **Entertainment** category.
2. Locate and download Jellyfin.
3. Launch Jellyfin and complete first-time setup:
   - Set administrator password.
   - Configure media library directories.
6. Wait for Jellyfin to scan and index your media library. It will automatically fetch metadata including:
   - Movie posters 
   - Descriptions 
   - Cast information

## Access your media library through Jellyfin clients
To stream your media on various devices:

1. Configure Jellyfin authentication. 
    
   a. Open Settings, and navigate to **Applications** > **Jellyfin** > **Entrances**.

   b. Set **Authentication level** to **Internal**.
2. Download and install [Jellyfin's official clients](https://jellyfin.org/downloads/).
3. Connect clients to your Jellyfin server in Terminus. 

   a. In your Jellyfin client, auto-discovery should locate your server for devices on the same network.

   b. If auto-discovery fails, manually enter the server address from Terminus.

4. Log in to Jellyfin client with your credentials.
:::tip
Keep the VPN connection active for optimal streaming performance when accessing your media library remotely.
:::
