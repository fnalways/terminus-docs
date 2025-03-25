---
outline: [2, 3]
---
# Olares CLI

The Olares CLI is a versatile command-line tool designed to help developers and system administrators manage and troubleshoot Olares systems. It offers a wide range of features, from installation and configuration to resource management and diagnostics.

With the Olares CLI, you can streamline tasks such as verifying system compatibility, downloading resources, managing nodes, collecting logs, and more. This guide provides an overview of the CLI's syntax and details the commands available for different operations.

:::info Root privileges required
Most `olares-cli` commands require root privileges. Use the root user or prepend commands with `sudo`.
:::

## Syntax
The Olares CLI uses the following syntax:

> `olares-cli command [subcommand] [option]`

where
- `command`: Specifies the main operation you want to perform. For example, `olares download`.
- `subcommand`: Further specifies the task for commands that support additional operations. For example, `wizard` or `component`.
- `option`: Optional arguments that modify the behavior of the `command`. Options include flags and options with arguments.

Olares CLI allows you to temporarily override certain Olares default settings. Each option applies only to the command in which it is used.

For example, if you use the `--base-dir` option with `olares-cli olares download wizard`, it will only affect the wizard downloading process and will not change the base directory for other commands, such as during the "install" phase.

To get detailed help for any command, run `olares-cli help`.

## Available CLI commands

| Operation          | Syntax                                             | Description                                                                                                                  |
|--------------------|----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| `gpu`              | `olares-cli gpu <subcommand> [option]`             | Manages GPU-related operations.                                                                                              |
| `info`             | `olares-cli olares info <subcommand> [option]`     | Displays general information about the operating system of the current device.                                               |
| `node`             | `olares-cli node <subcommand> [option]`            | Manages node-related operations.                                                                                             |
| `olares backups`   | `olares-cli olares backups <subcommand> [option]`  | Manages backup-related operations.                                                                                           |
| `olares change-ip` | `olares-cli olares change-ip [option]`             | Changes the IP address of the Olares OS.                                                                                     |
| `olares download`  | `olares-cli olares download <subcommand> [option]` | Downloads specific resources.                                                                                                |
| `olares info`      | `olares-cli olares info [option]`                  | Displays general information about the downloaded Olares OS.                                                                 |
| `olares install`   | `olares-cli olares install [option]`               | Deploys system-level and user-level components of Olares.                                                                    |
| `olares logs`      | `olares-cli olares logs [option]`                  | Collects logs from Olares system components for debugging and troubleshooting.                                               |
| `olares precheck`  | `olares-cli olares precheck [option]`              | Verifies whether the system environment meets all requirements for Olares installation.                                      |
| `olares prepare`   | `olares-cli olares prepare [option]`               | Prepares the environment for the installation process, including setting up essential services and configurations of Olares. |
| `olares release`   | `olares-cli olares release [option]`               | Packages Olares installation resources for distribution or deployment.                                                       |
| `olares start`     | `olares-cli olares start [option]`                 | Starts Olares services and components.                                                                                       |
| `olares stop`      | `olares-cli olares stop [option]`                  | Stops Olares services and components.                                                                                        |
| `olares uninstall` | `olares-cli olares uninstall [option]`             | Uninstalls Olares completely, or roll back the installation to a specific phase.                                             |

