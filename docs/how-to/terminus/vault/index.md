# Vault

![image](/images/how-to/terminus/vault2.jpg)

## Introduction

Vault is a password manager designed for the Web3 era, developed based on [Padloc](https://padloc.app/).

You can store **private keys**, **account and passwords** for websites and apps. You can also manage your own **DID**, **Terminus Name**, **OTP**, and **daily passwords** too. Vault facilitates the easy sharing and management of sensitive data within families, businesses, or any organizational type. Additionally, it features advanced search and filtering options, such as by tags, favorites, and recent use, enabling users to quickly locate specific **Vault Items**.

## Architecture

Vault's architecture is split into two components:
- **Server**:

  Runs on Terminus. It synchronizes data across multiple client devices of a single user. Data is encrypted with a private key during transmission and storage.  Even if the encrypted data is intercepted during these phases, the user's confidential data will not be disclosed.

  Before we publish the security whitepaper, you can refer to the [Padloc Security Whitepaper](https://docs.padloc.app/docs/security/).

  Vault is also a [Cluster Scoped Application](../../../overview/terminus/application.md#cluster-scoped-application), which allows various users on the same Terminus instance to share data through **Shared Vaults**.

- **Client**:

  Vault is available on **4 platforms** in **6 versions**: web, mobile, desktop, and browser extensions. Mobile, desktop, and browser versions are distributed with **TermiPass**, while the web version is a default system application released with Terminus.

  Each client offers a consistent user experience with minor differences in the native password autofill processes across platforms. This section will guide you through:

  1. Activation of the web version of Vault
  2. Common concepts
  3. Daily use of Vault
  4. Management and use of Vault within teams

  For details on using **TermiPass** for password autofill, see the [Password Autofill](../../termipass/password-autofill.md) section.

## Glossary

### Vault

Named for its role as a secure repository, Vault encrypts and stores user's confidential data, akin to a physical vault.

Each user may have one Main Vault and several Shared Vaults.
- **Main Vault**: Automatically created at account activation and used as the user's private vault, encrypted with the user's mnemonic.
- **Shared Vault**: a shared vault within Terminus, where you can refer to the [Padloc Security Whitepaper](https://docs.padloc.app/docs/security/) to understand the encryption mechanism.

### Vault Item

Each Vault comprises multiple Vault Items, each representing a secured secret. Each Vault Item consists of: **Name**, **Tags**, **Field**, **History**, **Attachment**, **Expiration**.

### Field
Fields within a Vault Item allow you to store different types of data. 

![image](/images/how-to/terminus/vault_add_fields.jpg)

You can add different Fields. Current supported Field types include: **Username**, **Password**, **Mnemonic**, **Email Address**, **URL**, **Date**, **Month**, **Credit Card Number**, **Phone Number**, **PIN**, **Plain Text**, and **One-Time Password**.

We will continue to add new Field types and support customization of Field type names in the future.