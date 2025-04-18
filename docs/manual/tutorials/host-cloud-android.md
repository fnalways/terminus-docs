---
outline: [2, 3]
description: Deploy a cloud Android emulator using redroid on Olares, and access the Android host from macOS and Windows via adb and scrcpy.
---

# Host your cloud Android with redroid

redroid (Remote Android) is a GPU-accelerated Android-in-Cloud (AIC) solution that integrates seamlessly with Olares. You can easily host high-performance Android instances on your Olares and access them anytime to run Android games, apps, or even automation tests.

This tutorial walks you through installing redroid on Olares and accessing the Android instance from Windows and macOS.

## Objectives

By the end of this tutorial, you will learn how to:
- Install the required Linux kernel modules on the Olares host.
- Install the redroid app on Olares and get the service URL.
- Connect and operate the Android instance from Windows and macOS, using `adb` and `scrcpy`.
- Install APK apps on the Android instance.

## Before you begin

Make sure the following requirements are met:
- Olares is installed and running.
    :::tip Recommended Specs
    redroid is resource-intensive. We recommend running Olares on a machine with at least 8-core CPU and 16GB of RAM.
    :::

- Your device and Olares are on the same local network.

    :::tip Remote access
    If your device is on a different network, use [LarePass](https://olares.xyz/larepass) to enable a private network connection to Olares.
    :::

## Install dependent kernel modules

redroid requires specific kernel modules to run on Linux. For details, refer to the [official redroid docs](https://github.com/remote-android/redroid-doc/blob/master/deploy/README.md).

For example, on Ubuntu, you can install the required kernel modules by running the following commands in the terminal:

```bash
sudo apt install linux-modules-extra-`uname -r`
sudo modprobe binder_linux devices="binder,hwbinder,vndbinder"
# This command might fail on newer kernels; the error can be safely ignored.
sudo modprobe ashmem_linux
```

## Install redroid on Olares

redroid runs as a headless backend on Olares. To install redroid:

1. In Olares Market, find redroid under "System Tools", and click **Get**. redroid will launch automatically after installation.

2. Get the URL to access the redroid service:

    a. From Olares Desktop, navigate to **Settings** > **Application** > **redroid**.

    b. In **Entrances** > **Set up endpoint**, get the base domain of redroid, e.g., `beb583c3.<olares_id>.olares.com`.

    c. In **Permissions** > **Export Ports**, find the exported port of redroid (e.g., `46878`) and append it to the base domain.

    As redroid only allows local access, the domain should also include `.local`. Here is an example of our final URL to access the redroid service: `beb583c3.local.olares01.olares.com:46878`.

## Connect to the redroid service

To access the Android instance on Olares, you'll need to connect to the redroid service using `adb` and render the UI using `scrcpy`.

<tabs> 
<template #Windows>
 
 The Windows version comes bundled with `adb`, so you don't need to install it seperately.

1. Download the Windows version of `scrcpy` from the [project website](https://github.com/Genymobile/scrcpy/blob/master/doc/windows.md) and extract it to a specific folder.

    ::: tip adb version conflict
    If another version of `adb` is installed, it may cause conflicts between `adb` servers. Uninstall the old version or replace it with the bundled version in `scrcpy`.
    :::

2. Open PowerShell in the `scrcpy` directory:

    ```powershell
    # Replace with the acutal version
    cd .\scrcpy-win64-v3.1
    ```

3. Use `adb` to connect to the redroid service via the URL obtained earlier:

    ```powershell
    .\adb.exe connect beb583c3.local.<olares_id>.olares.cn:46878

    # Example output:
    already connected to beb583c3.local.<olares_id>.olares.cn:46878
    ```

    The connection is successful if you see the example output.

4. Render UI and audio using `scrcpy`:

    ```powershell
    .\scrcpy.exe -s beb583c3.local.<olares_id>.olares.cn:46878 --audio-codec=aac --audio-encoder=OMX.google.aac.encoder
    ````
    
    Upon successful execution, the command line outputs the device and rendering info. And the Android screen pops up.  
</template>
<template #macOS>

On macOS, `scrcpy` does not include `adb` by default, so you'll need to install them separately. Using Homebrew is the recommended approach.

1. Install `scrcpy`:

    ```bash
    brew install scrcpy
    Install adb
    ```
2. Install `adb`:

    ```bash
    brew install --cask android-platform-tools
    ```

3. Verify the installation:

    ```bash
    scrcpy --version
    adb version
    ```
    Installation is successful when you see the version info of the two.

    :::tip Gatekeeper alert
    If blocked by macOS security, go to **System Settings** > **Privacy & Security** > **Security**, find the corresponding item, and click **Allow Anyway**. You will be promoted to enter your password when re-running the command.
    :::

4. Connect to the redroid service URL obtained earlier via `adb`:

    ```bash
    adb connect beb583c3.local.<olares_id>.olares.cn:46878

    # Example output:

    already connected to beb583c3.local.<olares_id>.olares.cn:46878
    ```

    The connection is successful if you see the example output.

5. Render UI and audio using `scrcpy`:

    ```bash
    scrcpy -s beb583c3.local.<olares_id>.olares.cn:46878 --audio-codec=aac --audio-encoder=OMX.google.aac.encoder
    ```
    Upon success, the command line outputs the device information. The Android screen pops up.
</template> 
</tabs>

   ![Render video](/images/manual/tutorials/render-android.png#bordered)

## Install APK

Once connected, you can use `adb` to install third-party APK apps on the Android instance. 

<tabs> 
<template #Windows>

1. Get the details of all connected devices: 

    ```powershell
    .\adb.exe devices -l

    # Example output
    List of devices attached
    beb583c3.local.<olares_id>.olares.com:46878 device product:ziyi model:23031PN0DC device:ziyi transport_id:4
    ```

    Get the `transport_id` of the device, which is 4 in our case.

2. Install the APK to the specified device. Use `-t` to specify the transport ID.

    ```powershell
    .\adb.exe -t 4 install C:\Users\YourName\Downloads\your_app.apk

    # Expected output
    Performing Streamed Install
    Success
    ```
</template>   
<template #macOS>

1. Get the details of all connected devices:

    ```bash
    adb devices -l

    # Example output
    List of devices attached
    beb583c3.local.<olares_id>.olares.cn:46878 device product:ziyi model:23031PN0DC device:ziyi transport_id:4
    ```

     Get the `transport_id` of the device, which is 4 in our case.

2. Install the APK to the specified device. Use `-t` to specify the transport ID.

    ```bash
    adb -t 4  install ~/Downloads/your_app.apk

    # Expected output
    Performing Streamed Install
    Success
    ```
</template>  
</tabs>

After installation, run `scrcpy` again to render the Android screen. Swipe up to see the installed APK.

## Common `adb` commands

:::tip Note
The following commands are for macOS and Linux. On Windows, Use `adb.exe` instead of `adb` 
:::

```bash
# Start adb server
adb start-server

# Connect to a device
adb connect <url>:<port>

# List connected devices
adb devices

# Disconnect a device
adb disconnect <url>:<port>

# Install an APK by transport_id
adb -t 3 install your_app.apk

# View real-time logs
adb logcat

# Export logs to a file
adb logcat -v time > log.txt

# Push a file to the device
adb push <local_path> <device_path>

# Pull a file from the device
adb pull <device_path> <local_path>

# List directory contents on device
adb shell ls <path>

# View file contents
adb shell cat <file_path>

# Reboot the device
adb shell reboot

# Shut down the device
adb shell reboot -p
```