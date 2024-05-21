---
outline: [2, 3]
---

# ControlHub

**ControlHub** is the system console for Terminus OS.

For Terminus OS users, especially developers, **ControlHub** provides a more precise and autonomous control over the system's operation and underlying environment.

## Features

We offer 3 different perspectives to help you monitor the status of programs:

- [Browse](./browse.md): This provides an **application perspective**. It allows you to quickly locate various resource usages related to an application. All application-related resources are gathered in one view for easy viewing and management.
- [Namespace](./namespace.md): This provides a **user perspective**. It gives you detailed insights into resource consumption of each application by each user.
- [Pods](./pods.md): This provides a **node perspective**. It delivers a detailed list of pods at the finest granularity.
- [Resource](./resource.md): View the usage of system resources.
  - [Networks](./resource.md#network): Examine the network security policies in the system and understand the network connectivity of each namespace.
  - [CRDs](./resource.md#crds): Manage various custom resource declarations in the system.
- [Middleware](./middleware.md): View the usage of various middleware in Terminus OS.
  - [Postgres](./middleware.md#postgres): Display detailed information about the PostgreSQL database in cluster.
  - [MongoDB](./middleware.md#mongodb): Display detailed information about the MongoDB database in cluster.
  - [Redis](./middleware.md#redis): Display detailed information about the Redis database in cluster.
  - [Zinc](./middleware.md#zinc): Display information about the indexing service that Zinc Search provides for applications in the system.
