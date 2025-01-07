# Olares versioning

The Olares versioning and release process is designed to provide clear version definitions and stable upgrade paths. This document outlines Olares' versioning rules, release policies, branch management, and upgrade guidelines.

## Versioning rules

Olares primarily follows the [Semantic Versioning Specification](https://semver.org/):
- The format is `Major.Minor.Patch[-PreReleaseVersion]`, for example, `1.11.0-rc.0`.
- Versions are ordered as follows:  
  `1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0`.


## Release policies

Olares offers three types of releases: **Stable**, **Release Candidate (RC)**, and **Dailybuild**.

- **Stable releases**
  - Thoroughly tested versions suitable for production environments.
  - The official installation script (`https://olares.sh`) always defaults to the latest stable version.
  - **Release cadence**: Monthly
  - **Examples**: `v1.10.5`, `v1.11.0`, `v1.11.1`, `v1.12.0`

- **Release Candidate (RC) releases**
  - Pre-release versions for testing prior to a stable release. Once verified, RC versions are promoted to stable releases.
  - **Release cadence**: Based on testing status
  - **Examples**: `v1.11.0.rc.0`, `v1.11.0.rc.1`

- **Dailybuild releases**
  - Automatically generated from the `main` branch every day at 2:00 AM (Beijing Time).
  - Intended for development and testing; may be unstable.
  - **Release cadence**: Daily
  - **Examples**: `v1.12.0-20241201`

---

## Release branch management

During the `1.x` phase, Olares follows a structured monthly release cadence:

1. At the end of each month, a release branch (e.g., `release-1.11`) is created from the `main` branch.

2. An initial RC version (e.g., `v1.11.0.rc.0`) is released from the new release branch. Additional RC versions may follow as testing progresses.

3. The `main` branch transitions to the next version (e.g., from `v1.11` to `v1.12`).

4. Issues identified in the stable version are addressed through patch releases (e.g., `v1.11.1`), based on the corresponding release branch.

Developers can submit pull requests (PRs) to both the `main` branch and the relevant release branch as needed.

---

## Upgrade policies and compatibility

During the `1.x` phase, Olares is in rapid iteration. **Automatic upgrades are not supported across different minor versions**. The upgrade and compatibility rules are as follows:

- **Within the same minor version**:  
  Patch versions within the same minor version (e.g., `1.4.0` to `1.4.2`) are fully compatible and support automatic upgrades.

- **Across minor versions**:
  Different minor versions (e.g., `1.4.x` to `1.5.x`) are not compatible. Manual uninstallation of the current version is required before installing the newer version.

- **Upgrade paths by version type**
  - **Dailybuild**: Can upgrade to newer Dailybuild, RC, or stable versions.
  - **RC**: Can upgrade to newer RC or stable versions.
  - **Stable**: Can only upgrade to newer stable versions.

::: tip Future upgrade policy
Olares plans to fully adopt semantic versioning once the major version exceeds `1`. This will enable seamless automatic upgrades across all versions within the same major version.
:::
