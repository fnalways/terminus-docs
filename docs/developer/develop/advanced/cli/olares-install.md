# `olares install`

## Synopsis
The `olares install` command installs Olares on your system. It supports various flags to customize the installation process, such as specifying directories, Kubernetes types, or Minikube profiles.

```bash
olares-cli olares install [option]
```

## Options

| Name         | Shorthand | Usage                                                                                                                                                                                                                                                   |
|--------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir` | `-b`      | Set the base directory for the Olares.<br> Defaults to `$HOME/.olares`.                                                                                                                                                                                 |
| `--help`     | `-h`      | Display help information.                                                                                                                                                                                                                               |
| `--kube`     |           | Specify the Kubernetes type. <br>Supported types are `k3s` (default) and `k8s`.                                                                                                                                                                         |
| `--manifest` |           | Set the path to the manifest file, which contains metadata about the installation packages and configuration. <br> Defaults to `{base-dir}/versions/v{version}/installation.manifest`.                                                                  |
| `--profile`  | `-p`      | Set the Minikube profile name. Only applicable on macOS. <br> Default is `olares-0`.                                                                                                                                                                    |
| `--version`  | `-v`      | Specify the Olares version. <br>Version values follow the format `x.y.z` (e.g., `1.10.0`) or include a build date (e.g., `1.10.0-20241109`).<br> Refer to the [GitHub Releases page](https://github.com/beclab/Olares/releases) for available versions. |

