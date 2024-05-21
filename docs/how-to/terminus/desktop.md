---
outline: [2, 3]
---

# Desktop

In Terminus OS, you can use and manage installed applications through the Desktop.

![alt text](/images/how-to/terminus/desktop.jpg)

## Dock & Launchpad

Click on the **'LaunchPad'** icon on the Dock to display all installed applications.

![alt text](/images/how-to/terminus/desktop_lauchpad.jpg)

Interact with them as you would on a computer:
- Click an icon to open an application.
- Drag icons to rearrange their order in the Launchpad.
- Drag icons to the Dock for faster access in the future.

### Edit Mode

Press and hold an application icon to enter edit mode, where you can uninstall apps.

![alt text](/images/how-to/terminus/desktop_application2.jpg)

:::info
If an application icon does not have an **'X'** in the upper left corner, it indicates that the application is a built-in system app and cannot be uninstalled.
:::

### Application Icons

As shown in the image, applications show different effects depending on their status:

- Dev applications show the app's name along with a dedicated icon.
- Applications being installed show a dynamic spinning circle on their icon.
- Installed applications display only the app icon.
- Uninstallable applications will have an **'X'** icon in the upper left corner in edit mode. You can click to uninstall the app.

![alt text](/images/how-to/terminus/desktop_application.jpg)

### Application Windows

By default, applications open in `iframe` mode, embedded on the desktop tab as an `iframe window`. You can interact with them just like other GUI OS:
- Drag the title bar to move the window.
- Drag the window's edges to resize it.
- Click the **'minimize'** button in the title bar to minimize the window, and click the **Dock** icon to reopen it.
- Click the **'maximize'** button in the title bar to maximize the window.
- Click the **'close'** button in the title bar to close the window.

Additionally, you can use the **browser** button in the title bar to open the current application in a new browser tab.

![alt text](/images/how-to/terminus/desktop_window.jpg)

:::info
In addition to `iframe` mode, we also provide `window` mode to open applications. This opens the app in a new browser tab instead of a embedded `iframe` on the desktop.

Developers can set this through the `openMethod` attribute in [Entrance](../../developer/develop/package/manifest.md#entrances), and for some [Community Applications](../../overview/terminus/application.md#community-application) that restrict front-end `iframe` access, we recommend setting this attribute to `window` mode.
:::

### Changing Wallpaper
You can change the wallpaper in the **'Settings'**-[**'Change Wallpaper'**](./settings/wallpaper.md)

## Search

Our interaction and capabilities were inspired by [Raycast](https://www.raycast.com/). Although currently limited to opening applications, we plan to add file searching, agent communication capabilities, and open up for third-party extensions.

![alt text](/images/how-to/terminus/desktop_search.jpg)

## Next Steps

We recognize that compared to user expectations, the desktop is still quite basic. We plan to:

1. Separate the desktop's front-end and back-end to facilitate developers in creating custom desktops.
2. Expand the search function.
3. Integrate a notification system.
4. Support a mobile version.
5. Allow developers to create custom Widgets.
6. Support custom themes.
