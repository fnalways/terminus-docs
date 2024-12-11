# `olares change-ip`
:::warning When manually changing IP address is required
- **macOS**: Olares runs in containers and relies on stable IPs. If your Mac's network settings change (e.g., switching Wi-Fi), Olares won't adjust the IP automatically, which may disrupt DNS resolution. You will need to manually update the IP.

- **Windows (WSL)**: Olares runs in WSL, and while the CLI can manage IP changes for Linux, the virtualized system may experience IP changes. In such cases, manual IP updates are needed.

- **Linux**: IP changes are automatically handled. Manual IP updates are generally not required.
  :::

## Synopsis
Change the local IP address for all Olares components.

```bash
olares-cli olares change-ip [option]
```

## Options

| Name             | Shorthand | Usage                                                                                                                                                                                                                                                   |
|------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir`     | `-b`      | Set the base directory for the Olares.<br> Defaults to `$HOME/.olares`.                                                                                                                                                                                 |
| `--distribution` | `-d`      | Set the WSL distribution name. Only applicable on Windows. <br> Defaults to `Ubuntu`.                                                                                                                                                                   |
| `--help`         | `-h`      | Display help information.                                                                                                                                                                                                                               |
| `--profile`      | `-p`      | Set the Minikube profile name. Only applicable on macOS. <br> Defaults to `olares-0`.                                                                                                                                                                   |
| `--version`      | `-v`      | Specify the Olares version. <br>Version values follow the format `x.y.z` (e.g., `1.10.0`) or include a build date (e.g., `1.10.0-20241109`).<br> Refer to the [GitHub Releases page](https://github.com/beclab/Olares/releases) for available versions. |

## Examples
- For macOS (after network changes):
```bash
# Specify the Minikube profile name and change the IP
olares-cli olares change-ip --profile olares-0
```
- For Windows WSL (after virtual IP changes)
```bash
# Specify the Linux distribution in WSL and change the IP
olares-cli olares change-ip --distribution Ubuntu
```