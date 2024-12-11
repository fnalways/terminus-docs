# `olares uninstall`

## Synopsis
Uninstall Olares from your machine.

```bash
olares-cli olares uninstall [option]
```

## Options

| Name         | Shorthand | Usage                                                                                                                                                                                                                      |
|--------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--all`      |           | Uninstall Olares completely, including dependencies downloaded during the "prepare" phase.                                                                                                                                 |
| `--base-dir` | `-b`      | Set the base directory for the Olares.<br> Defaults to `$HOME/.olares`.                                                                                                                                                    |
| `--help`     | `-h`      | Display help information.                                                                                                                                                                                                  |
| `--phase`    |           | Uninstall from a specific phase and revert to the previous one. <br> For example, `--phase install` removes tasks performed during the "install" phase, reverting the system to the "prepare" stage. Default is `install`. |
| `--quiet`    |           | Enable quiet mode (suppress output). <br> Defaults to `false`.                                                                                                                                                             |
| `--version`  | `-v`      | Specify the Olares version to uninstall. <br>Use `olares-cli olares info` to check the downloaded version first.                                                                                                           |
