# Olares account

Each Olares Account corresponds to an [Olares ID](olares-id.md), which consists of a local name and a domain name. At the same time, each Olares belongs to one Domain. Therefore, Olares users such as alice@olares.com will use the local name, alice, in the Olares OS.

This document covers concepts and designs related to account system in Olares.

## Account synchronization

Accounts in LarePass, Olares, and Olares Space stay synchronized as described below:

- Creating an Olares requires providing an Olares ID and activate it using the LarePass logged in with that Olares ID.
- To [log into Olares Space](../terminus-space/manage-accounts.md#log-in-to-olares-space), you need to scan a QR code with LarePass.

## Understand the stage of account

Each account has three stages:

- **Not bound to an Olares ID**

  Account created locally with mnemonic phrase, private key, DID, but no Terminus Name
  Mnemonic phrase can be exported and backed up
  Can log into Terminus Space to apply for org domain name.
  Cannot be imported to other TermiPass clients via mnemonic phrase

- **Bound to an Olares ID**

  The mapping between the Terminus Name and DID is recorded on the blockchain.
  Can apply for a Terminus on Terminus Space and activate the Terminus.
  After the mnemonic phrase is exported, it can be imported to TermiPass on other devices.

- **Bound to an Olares**

  If your account is bound to an Olares, you'll have full access to all the features on LarePass.


## Unified account system

Olares supports unified authentication for a multi-user system. 

1. After the user logs in on the [login page](../get-started/log-in-to-terminus.md), all future requests automatically include authentication details.

2. Each user request first goes through the Authelia service for authentication.

3. If authentication fails, the application redirects the user to the login page to re-authenticate.

4. If authentication succeeds, the [Backend for Launcher (BFL)](https://github.com/beclab/bfl) attaches the user’s basic information and forwards the request to the application service. This relieves the application from handling the authentication itself.

5. For [Cluster Scoped Applications](./application.md#cluster-scoped-application), developers need to build an additional `Auth Server` to connect the application's account with the BFL account.

## Multi-Factor Authentication (MFA)

Olares integrates a variety of authentication factors with different security levels to ensure the security of user identity authentication in the system.

### Password

When a user is first created, Olares generates a random password for initial setup. After completing identity verification, the user is prompted to replace this initial password with a stronger, custom password.

### One-time password

When users perform sensitive operations such as [login](../get-started/log-in-to-terminus.md), Olares requires users to enter the `one-time two-factor authentication code` generated in LarePass.

## See also

### Users

- [Manage Olares accounts](../get-started/create-terminus-name.md)
- [Users and roles](../tasks/roles-permissions.md)

### Developers

- [Account System Callback](../../developer/develop/advanced/account.md)