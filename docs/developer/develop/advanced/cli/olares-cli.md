---
outline: [2, 3]
---
# Olares CLI

Olares provides a command line tool called Olares CLI. It is designed for developers or system administrators to customize or troubleshoot the installation process of Olares.

To get started with Olares, you first run a one-liner command that downloads a shell script from [https://olares.sh](https://olares.sh). This script automatically downloads and installs Olares CLI, which is then used to manage the rest of the installation process. The installation source code is available on [GitHub](https://github.com/beclab/Installer).

While the initial script handles downloading `olares-cli`, the tool itself is responsible for the actual installation and configuration of Olares. The process typically involves the following steps:

1. Olares CLI fetches the necessary components.
2. Olares CLI prepares the environment for installation. This stage is referred to as the "Prepare" stage.
3. Olares CLI installs the core services of Olares. This is the "Install" stage.

This page explains the Olares CLI syntax and describes the command operations.

## Syntax
The Olares CLI uses the following syntax:

> `olares-cli command [subcommand] [flag]`

where
- `command`: Specifies the main operation you want to perform. For example, `olares download`.
- `subcommand`: Further specifies the task of `command`. For example, `wizard` or `component`.
- `flag`: Specifies optional flags to modify the behavior of the `command`.
   :::info
   Flags you specify for each command will override default settings or environment variables temporarily, except for `--help` or `-h`, which provide help information.
   :::

To get detailed help for any command, run `olares-cli help`.

## Available CLI commands

| Operation          | Syntax                                            | Description                                                                                                     |
|--------------------|---------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `olares info`      | `olares-cli olares info [flags]`                  | Display general information about the downloaded Olares operating system.                                       |
| `olares download`  | `olares-cli olares download [subcommand] [flags]` | Download a specific resource.                                                                                   |
| `olares prepare`   | `olares-cli olares prepare [flags]`               | Prepare the environment for the installation process, including setting up essential services and configurations of Olares. |
| `olares install`   | `olares-cli olares install [flags]`               | Deploy system-level and user-level components of Olares.                                                        |
| `olares change-ip` | `olares-cli olares change-ip [flags]`             | Change the IP address of the Olares operating system.                                                           |
| `olares release`   | `olares-cli olares release [flags]`               | Package Olares installation resources.                                                                          |
| `olares uninstall` | `olares-cli olares uninstall [flags]`             | Uninstall olares completely, or uninstall Olares to a specific phrase.                                          |

## Global flags
Olares CLI allows you to temporarily override certain Olares default settings. Note that each global flag applies only to the command in which it is used. 

For example, if you use the `--base-dir` flag with `olares-cli olares download`, it will only affect the download process and will not change the base directory for other commands, such as the "install" phase.

### `--base-dir`
Specify the base directory where downloaded components will be stored. The default value is `$HOME/.olares`.

### `--version`
Specify a specific version to perform operations on.





