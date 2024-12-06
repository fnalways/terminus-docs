# `olares prepare`

## Synopsis
Prepare the Olares installation environment.

```bash
olares-cli olares prepare [flags]
```

## Flags

| Name                  | Shorthand | Usage                                                                                         |
|-----------------------|-----------|-----------------------------------------------------------------------------------------------|
| `--base-dir`          | `-b`      | Set the base directory for the Olares package. Defaults to `$HOME/.olares`.                                       |
| `--help`              | `-h`      | Display help information.                                                                     |
| `--kube`              |           | Specify the Kubernetes type (e.g., `k3s` or `k8s`). Default is `k3s`.                                              |
| `--manifest`         |           | Set the path to the package manifest file. Defaults to `{base-dir}/versions/v{version}/installation.manifest`.                                        |
| `--profile`           | `-p`      | Set the Minikube profile name. Only applicable on macOS. Default is `olares-0`.                    |
| `---registry-mirrors` | `-r`      | Specify Docker container registry mirrors. Multiple mirrors should be separated by commas.                  |
| `--version`          | `-v`      | Specify the Olares version (e.g., `1.10.0` or `1.10.0-20241109`.                                                                                   |
