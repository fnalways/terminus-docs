---
description: Overview on how to get started with Olares on Linux.
---
:::warning Note for Mainland China users
The steps in this guide differ for users in Mainland China due to regional differences. For a version tailored to your region, please read the Simplified Chinese documentation.
:::
# Install Olares

This page provides an overview of installing Olares on Linux.

**Linux (Ubuntu or Debian)** is the recommended platform for running Olares, as it offers the best performance and stability in production environments.

Before installing, make sure to [create an Olares ID](create-olares-id.md) and verify that your operating system and hardware meet the minimum requirements.

::: tip Support for other platforms
Olares also supports platforms such as macOS, Windows (WSL 2), PVE, and Raspberry Pi,but these are intended **only for development or testing**. For instructions on these environments, see [Additional installation methods](/developer/install/additional-installation-methods).
:::

You can install Olares on Linux using one of the following approaches:

- **Using the script**: Install Olares directly on your system using a simple installation script.
- **Using Docker image**: Run Olares as a containerized application without installing it directly on your machine.

<!--@include: ./installation-troubleshooting.md{4,9}-->