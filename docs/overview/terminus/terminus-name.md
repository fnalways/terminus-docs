---
outline: [2, 3]
---

# Terminus Name

This document gets you familiar with Terminus Name, why do you need it, and how to create one for your Terminus.

## What is a Terminus Name?

A Terminus Name is a unique identifier within the Terminus ecosystem, serving as your digital identity and gateway to various services and features. Each Terminus Account corresponds to a Terminus Name, which consists of a local name and a domain. For example, in `alice@myterminus.com`, *alice* is the Local Name, and *myterminus.com* is the domain.

## Why do you need a Terminus Name?

Your Terminus Name corresponds to a **unique domain name**, offering several key benefits:

* **Ease of access**: The system automatically provisions subdomains and access policies for your applications within Terminus. You can use the domain name as your personal web address to seamlessly access Terminus applications and services from anywhere. 
* **Enhanced security with free HTTPS certificate**: Terminus domain name comes with a free HTTPS certificate, ensuring secure and encrypted communication for all your digital interactions.
* **Easy to remember and personalized**: Terminus Name and the corresponding domain name are easy to remember, share, and personalized for your distinct online identity.

By simply replacing the "@" in your Terminus Name with a ".", you get your corresponding domain name. For example,

* **Terminus Name**: `alice@myterminus.com`
* **Domain Name**: `alice.myterminus.com`

## How to get a Terminus Name?

Creating a Terminus Name is your starting point of using Terminus. This process includes setting up your Terminus account and binding it to a Terminus Name. Depending on your preference, you can choose from two creation modes:
  - [Fast creation (default mode)](../../how-to/termipass/account/index.md#create-without-vc-binding-default-mode): Recommended for individual users who prefer a quick setup without binding a verification credential (VC). 
  - [Advanced creation](../../how-to/termipass/account/index.md#create-with-vc-advanced-mode): Recommended for individual and organizational users that require enhanced security through VC binding. 

Refer to [Create a Terminus Name](../../how-to/termipass/account/#create-a-terminus-name) for detailed steps.

## What's Terminus Name's relationship with DID

A Decentralized Identifier (DID) is a unique, cryptographically verifiable identifier that doesn't rely on any centralized authority. While DIDs solve the issue of identity in a decentralized network, they are typically difficult for humans to remember or use in daily situations. 

Terminus Name acts as a human-readable layer on top of DIDs. It provides a familiar, easy-to-remember format similar to email addresses, while still leveraging the power and security of DIDs.
Each Terminus Name is bound to a DID. When a user creates an account using Terminus, a DID is created at the same time. Learn more about their relationship in [Stage of Terminus Account](../../how-to/termipass/account/#stage-of-account).


## Learn more

* [Manage Accounts with TermiPass](../../how-to/termipass/account/#create-terminus-name)
* [Snowinning Protocol](../../developer/contribute/snowinning/overview.md)
* [Understanding Decentralized Identifier (DID)](../../developer/contribute/snowinning/concepts.md)
* [Types of domains](../../developer/contribute/snowinning/terminus-name.md#domain)
* [Gmail Issuer Service](../../developer/contribute/snowinning/terminus-name.md#gmail-issuer-service)
