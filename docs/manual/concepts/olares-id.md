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

## Types of domain
Within Terminus, there are three types of Domains:

### Individual
Intended for individual use, similar to email addresses with suffixes like `gmail.com`.

Currently, Terminus uses `myterminus.com` as the suffix for Individual Domains.

### Organization
Intended for organizational use, like corporate emails.

When users join an organization, they can apply for a Terminus Name under the organization. When they leave, the administrator can reclaim the Terminus Name.

Organization administrators can apply for the organization's Domain through a Web2 domain.

Once the Domain is registered, manage users under the organization.

### Entity
Let's revisit the definition of DID:

> A DID refers to any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) as determined by the controller of the DID.

Abstract entities, like a movie, cannot be categorized under Individual or Organization. However, they still require a DID to represent them, for which we designed the Entity Domain.

For example, Movie, Application, Otmoic Market Maker are different types of Entity Domains.

The main use case of the Entity Domain is to help protocols build reputation. We hope to see more protocols utilizing the Entity Domain to build the Web3 versions of IMDb, Yelp, LinkedIn, and more.

Currently, the registration of Entity Domains is approved by the Terminus team, with the applicant responsible for subsequent management.

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
Each Terminus Name is bound to a DID. When a user creates an account using Terminus, a DID is created at the same time. Learn more about their relationship in [Stage of Terminus Account](./account#understand-the-stage-of-account).


## See also

* [Create Terminus Name](../get-started/create-terminus-name.md)
* [Snowinning Protocol](https://docs.snowinning.com/protocol/overview.html)
* [Decentralized Identifier (DID)](https://docs.snowinning.com/protocol/did.html)
* [Gmail Issuer Service](https://docs.snowinning.com/verifiable-credential/terminus-name.html#gmail-issuer-service)
