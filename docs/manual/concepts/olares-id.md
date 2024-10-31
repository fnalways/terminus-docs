---
outline: [2, 3]
---

# Olares ID

This document gets you familiar with Olares ID, why do you need it, and how to create one for your Terminus.

## What is an Olares ID?

An Olares ID is a unique identifier within the Olares ecosystem, serving as your digital identity and gateway to various services and features. Each Olares account corresponds to an Olares ID.

## Format of Olares ID

An Olares ID consists of two parts: a local name (prefix) and a domain name (suffix). Currently, Olares provides the default domain name `olares.com` for individual users. For example, in `alice@olares.com`, *alice* is the Local Name, and *olares.com* is the domain.

Local names are unique within each domain, ensuring that each Olares ID is unique.

## Why do you need an Olares ID?

Your Terminus Name corresponds to a **unique domain name**, offering several key benefits:

* **Ease of access**: The system automatically provisions subdomains and access policies for your applications within Terminus. You can use the domain name as your personal web address to seamlessly access Terminus applications and services from anywhere.
* **Enhanced security with free HTTPS certificate**: Terminus domain name comes with a free HTTPS certificate, ensuring secure and encrypted communication for all your digital interactions.
* **Easy to remember and personalized**: Terminus Name and the corresponding domain name are easy to remember, share, and personalized for your distinct online identity.

By simply replacing the "@" in your Terminus Name with a ".", you get your corresponding domain name. For example,

* **Terminus Name**: `alice@myterminus.com`
* **Domain Name**: `alice.myterminus.com`

## What's Olares ID's relationship with DID

A Decentralized Identifier (DID) is a unique, cryptographically verifiable identifier that doesn't rely on any centralized authority. While DIDs solve the issue of identity in a decentralized network, they are typically difficult for humans to remember or use in daily situations.

Terminus Name acts as a human-readable layer on top of DIDs. It provides a familiar, easy-to-remember format similar to email addresses, while still leveraging the power and security of DIDs.
Each Terminus Name is bound to a DID. When a user creates an account using Terminus, a DID is created at the same time. Learn more about their relationship in [Stage of Terminus Account](../../how-to/termipass/account/#stage-of-account).


## See also

* [Create Terminus Name](../get-started/create-terminus-name.md)
* [Snowinning Protocol](https://docs.snowinning.com/protocol/overview.html)
* [Decentralized Identifier (DID)](https://docs.snowinning.com/protocol/did.html)
* [Types of domains](../../developer/contribute/snowinning/terminus-name.md#domain)
* [Gmail Issuer Service](../../developer/contribute/snowinning/terminus-name.md#gmail-issuer-service)
