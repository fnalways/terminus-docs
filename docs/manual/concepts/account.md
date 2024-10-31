---
outline: [2, 3]
---

# Olares account

Each Olares Account corresponds to an [Olares ID](olares-id.md), which consists of a local name and a domain name. At the same time, each Olares belongs to one Domain. Therefore, Olares users such as `alice@olares.com` will use the local name, `alice`, in the Olares OS.

This document covers concepts and designs related to account system in Olares.

## Account synchronization

Accounts in LarePass, Olares, and Olares Space stay synchronized as described below:

- Creating an Olares requires providing an Olares ID and activate it using the LarePass logged in with that Olares ID.
- To log into Olares Space, you need to scan a QR code with LarePass.

## Understand the stage of account

Each account has three stages:

- **Not bound to an Olares ID**<br>
An unbound account represents the initial stage where you have basic credentials created locally.
This includes your mnemonic phrase, private key, and DID, but no Terminus Name yet. 
During this stage, you can export and back up your mnemonic phrase and access Terminus Space to request an organization domain name. 
However, importing to other TermiPass clients isn't possible at this point.

- **Bound to an Olares ID**<br>
When your account is bound to an Olares ID, the system records the connection between your Terminus Name and DID on the blockchain.
This enables you to request and activate a Terminus through Terminus Space. 
At this stage, you gain the ability to import your account to other devices using your exported mnemonic phrase, supporting unified authentication across applications.

- **Bound to an Olares**<br>
The final stage occurs when your account is linked to an Olares device. You can fully participate in the Terminus ecosystem.


## Unified account system

Olares supports unified authentication for a multi-user system. 

1. After the user logs in on the login page, all future requests automatically include authentication details.

2. Each user request first goes through the Authelia service for authentication.

3. If authentication fails, the application redirects the user to the login page to re-authenticate.

4. If authentication succeeds, the [Backend for Launcher (BFL)](https://github.com/beclab/bfl) attaches the user's basic information and forwards the request to the application service. This relieves the application from handling the authentication itself.

5. For [cluster-scoped applications](./application.md#cluster-scoped-application), developers need to build an additional `Auth Server` to connect the application's account with the BFL account.

## Multi-Factor Authentication (MFA)

Olares integrates a variety of authentication factors with different security levels to ensure the security of user identity authentication in the system.

### Password

When a user is first created, Olares generates a random password for initial setup. After completing identity verification, the user is prompted to replace this initial password with a stronger, custom password.

### One-time password

When users perform sensitive operations such as login, Olares requires users to enter the one-time two-factor authentication code generated in LarePass.

## See also

### Users

- [Manage Olares accounts](../get-started/create-terminus-name.md)
- [Users and roles](../tasks/roles-permissions.md)

### Developers

- [Account System Callback](../../developer/develop/advanced/account.md)