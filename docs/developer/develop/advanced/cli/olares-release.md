# `olares release`

## Synopsis
Build a release version based on a local Olares repository. This command should be run in the root directory of the Olares repository.

```bash
olares-cli olares release [flags]
```

## Flags

| Name                       | Shorthand | Usage                                                                                                                                                                                        |
|----------------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir`          | `-b`      | Set the base directory for the Olares package. Defaults to `$HOME/.olares`.                                       |
| `--download-cdn-url`       |           | Set the CDN URL used for downloading checksums of dependencies and images. Defaults to h`ttps://dc3p1870nn3cj.cloudfront.net`.                                                                           |
| `--extract`                | `-e`      | Extract the release to the `--base-dir` after the build. Set to `false` if only the release file itself is needed. Defaults to `true`.                                                               |
| `--help`                   | `-h`      | Display help information.                                                                                                                                                                    |
| `---ignore-missing-images` |           | Ignore missing images when downloading checksums from the CDN. Disable this only if no new images are added, as the build may fail if the image is not uploaded to the CDN yet. Defaults to `true`. |
| `--version`                | `-v`      | Set the Olares version for this release. Defaults to `0.0.0-local-dev-{yyyymmddhhmmss}`.                                                                                                          |

