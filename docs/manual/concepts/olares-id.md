# Olares ID

This document gets you familiar with Olares ID.

## What is an Olares ID?

An Olares ID is a unique identifier within the Olares ecosystem, serving as your digital identity and gateway to various services and features. Each Olares account corresponds to an Olares ID.

## Olares ID structure

An Olares ID consists of two parts: 
- A local name (prefix) 
- A domain name (suffix)

For example, in `alice@olares.com`, *alice* is the local name, and *olares.com* is the domain.

Local names are unique within each domain, ensuring that each Olares ID is unique.

### Domain types
Within Olares, there are three types of Domains:

* Individual domains provide personal identification spaces. Currently, Olares provides the default domain name `olares.com` for individual users.
* Organization domains enable institutional identity management.
* Entity domains represent non-human entities like applications.

### Identify verification for individuals

Olares offers two approaches to create your individual identity:
- **Basic identity creation**<br>You can create an Olares ID by choosing an available name that meets the requirements.
- **Verified identity creation**<br>
This approach uses Verification Credentials (VC) to connect an existing trusted identity (such as email accounts) with the Olares ID. 
When creating a verified identity, Olares:
   * Authenticates the user through established OAuth providers
   * Creates cryptographic links between the social identity and Olares DID

:::tip
To create an individual Olares ID with VC, on the creation page in LarePass, click <i class="material-icons">display_settings</i>, then select **Individual Olares ID**. 

Currently, verification is available through Google OAuth.
:::

## Why do you need an Olares ID?

Your Olares ID corresponds to a **unique domain name**, offering several key benefits:

* **Ease of access**: The system automatically provisions subdomains and access policies for your applications within Olares. You can use the domain name as your personal web address to seamlessly access Olares applications and services from anywhere.
* **Enhanced security with free HTTPS certificate**: Olares domain name comes with a free HTTPS certificate, ensuring secure and encrypted communication for all your digital interactions.
* **Easy to remember and personalized**: Olares ID and the corresponding domain name are easy to remember, share, and personalized for your distinct online identity.

By simply replacing the "@" in your Olares ID with a ".", you get your corresponding domain name. For example,

* **Olares ID**: `alice@olares.com`
* **Domain Name**: `alice.olares.com`

## What's Olares ID's relationship with DID

A Decentralized Identifier (DID) is a unique, cryptographically verifiable identifier that doesn't rely on any centralized authority. While DIDs solve the issue of identity in a decentralized network, they are typically difficult for humans to remember or use in daily situations.

Olares ID acts as a human-readable layer on top of DIDs. It provides a familiar, easy-to-remember format similar to email addresses, while still leveraging the power and security of DIDs.
Each Olares ID is bound to a DID. When a user creates an account using Olares, a DID is created at the same time. Learn more about their relationship in [Stage of Olares account](./account#understand-the-stage-of-account).



## See also

* [Create Olares ID](../get-started/create-olares-id)
* [Snowinning Protocol](https://docs.snowinning.com/protocol/overview.html)
* [Decentralized Identifier (DID)](https://docs.snowinning.com/protocol/did.html)
* [Gmail Issuer Service](https://docs.snowinning.com/verifiable-credential/terminus-name.html#gmail-issuer-service)
