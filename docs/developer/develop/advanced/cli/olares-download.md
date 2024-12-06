# `olares download`

## Synopsis
Download specific resources required to install Olares on your local machine.

```bash
olares-cli olares download [subcommand] [flags]
```

## Subcommands

| Name        | Shorthand | Usage                                                          |
|-------------|-----------|----------------------------------------------------------------|
| `check`     |           | Check the status of the Olares installation package.           |
| `component` | `c`       | Download the packages and components needed to install Olares. |
| `wizard`    | `w`       | Download the Olares installation wizard.                       |

## Flags

| Name                 | Shorthand | Usage                                                                                                                        |
|----------------------|-----------|------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir`         | `-b`      | Set the base directory for the Olares package. Defaults to `$HOME/.olares`.                                                  |
| `--download-cdn-url` |           | Set the CDN accelerated download URL in the format `https://example.cdn.com`. If not provided, the default URL will be used. |
| `--help`             | `-h`      | Display help information.                                                                                                    |
| `--kube`             |           | Specify the Kubernetes type (e.g., `k3s` or `k8s`). Default is `k3s`.                                                        |
| `--manifest`         |           | Set the path to the package manifest file. Defaults to `{base-dir}/versions/v{version}/installation.manifest`.               |
| `--version`          | `-v`      | Specify the Olares version (e.g., `1.10.0` or `1.10.0-20241109`.                                                             |
