---
description: Installing Olares on supported platforms including Linux, PVE, LXC, Raspberry Pi, macOS and Windows WSL using script or Docker methods.
---
:::warning Note for Mainland China users
The steps in this guide differ for users in Mainland China due to regional differences. For a version tailored to your region, please read the Simplified Chinese documentation.
:::
# Install Olares
This page provides an overview of the installation methods for Olares. To run Olares, you must [create an Olares ID](create-olares-id.md), and ensure that both the operating system and hardware meet the minimum requirements.

Olares is recommended for use on **Linux (Ubuntu or Debian) systems**. These platforms provide the best performance and stability for production environments. Other platforms like macOS and Windows (WSL 2) are supported but should only be used for development or testing.

You can install Olares using one of the following approaches:

- **Using the script**: Install Olares directly on your system using a simple installation script.
- **Using Docker image**: Run Olares as a containerized application without installing it directly on your machine.

<!--@include: .installation-troubleshooting.md{4,9}-->