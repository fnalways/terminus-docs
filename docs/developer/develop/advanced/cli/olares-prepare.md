# `olares prepare`

## Synopsis
The `olares prepare` command sets up the environment required for Olares to function. This includes installing core services, importing container images, and starting the Olares daemon (`olaresd`).
```bash
olares-cli olares prepare [option]
```

## Options

| Name                  | Shorthand | Usage                                                                                                                                                                                                                                                   |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir`          | `-b`      | Set the base directory for the Olares.<br> Defaults to `$HOME/.olares`.                                                                                                                                                                                 |
| `--help`              | `-h`      | Display help information.                                                                                                                                                                                                                               |
| `--kube`              |           | Specify the Kubernetes type. <br>Supported types are `k3s` (default) and `k8s`.                                                                                                                                                                         |
| `--manifest`          |           | Set the path to the manifest file, which contains metadata about the installation packages and configuration. <br> Defaults to `{base-dir}/versions/v{version}/installation.manifest`.                                                                  |
| `--profile`           | `-p`      | Set the Minikube profile name. Only applicable on macOS. <br> Default is `olares-0`.                                                                                                                                                                    |
| `---registry-mirrors` | `-r`      | Specify Docker container registry mirrors. <br> Multiple mirrors should be separated by commas.                                                                                                                                                         |
| `--version`           | `-v`      | Specify the Olares version. <br>Version values follow the format `x.y.z` (e.g., `1.10.0`) or include a build date (e.g., `1.10.0-20241109`).<br> Refer to the [GitHub Releases page](https://github.com/beclab/Olares/releases) for available versions. |
