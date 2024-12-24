# FAQs

## What license is Olares using?

Olares consists of a series of projects using a hierarchical authorization approach. The basic principles are:

- Projects running on blockchain use Apache 2.0, such as [Snowinning Protocol](https://github.com/beclab/olaresdid-contract-system).
- Projects related to protocols use Apache 2.0, such as [r4](https://github.com/beclab/r4).
- Projects around Olares and LarePass use the [Olares License](https://github.com/beclab/Olares/blob/main/LICENSE.md).
- For third-party applications running on Olares, it is up to the developer to decide whether they want them open source or not and choose the license accordingly.

For more details, visit our projects on [GitHub](https://github.com/beclab).

## Is the Olares License an open source license?

Olares's choice of license for its major projects is inspired by [fair code](https://faircode.io/). The [Olares License](https://github.com/beclab/Olares/blob/main/LICENSE.md) also follows these principles:

> - Is generally free to use and can be distributed by anybody
> - Has its source code openly available
> - Can be extended by anybody in public and private communities
> - Is commercially restricted by its authors

## Why can't I restore my account if the mnemonics goes missing?

From 1Password’s MasterKey to crypto wallet’s mnemonic phrase, for more than ten years, the problem of mnemonic storage has not been well solved.

The mnemonic phrase of Olares will be encrypted and stored on all devices that install LarePass. Generally, you only lose the mnemonic phrase if you lose all the devices with LarePass installed at the same time.

Safety is the most important principle in designing our system. We will continue to improve it in the future to provide you with a better solution that balances convenience and safety.

## Is there a difference between Olares and the current operating systems running on NAS?

At the inception of Olares (formerly Terminus), the market already had excellent NAS operating systems such as [Synology](https://www.synology.com/en-global/dsm/packages), [CasaOS](https://github.com/IceWhaleTech/CasaOS), and [Umbrel](https://github.com/getumbrel/umbrel). They have indeed inspired us.

But we do think the operating system running on Edge should be able to:

- Orchestrate resources for multiple hardware
- Manage applications in sandboxes

This is difficult to achieve with the above-mentioned NAS operating systems built on Docker Compose.

Meanwhile, Olares aims to provide a one-stop self-hosted solution, which goes beyond the scope of general NAS operating systems.

## Do I need to pay for Olares?

When you're self-hosting, you can essentially use Olares for free.

But for the following two features, we may introduce reasonable charges due to the cost (currently both are provided for free):

- **Backup**

  We provide 10G of free backup space for each Olares ID on Olares Space. When the archive size exceeds this limit, we will charge you a certain fee to cover the cloud provider fee.

- **Network Traffic**

  We provide 2G of free public network traffic for each Olares ID every month.

  If you don't provide service via the public Internet, almost all of your traffic can be routed peer-to-peer through the VPN, and you won't be charged for it. However, we are not sure how the TailScale DERP service is billed.

  If you need to provide service via the public Internet, we will charge you for the additional traffic generated with reference to the bills from cloud providers.

Meanwhile, we believe that cold backup and CDN are resource types that are relatively easy to DePinize, and we look forward to solutions based on Otmoic Protocol.

## When are other languages available?

Right now we only support English and Simplified Chinese.

In fact, we have completed i18n replacement in all front-end projects. However, we lack the experience in maintaining translation resources for a fast iterating project through the open source community. We are still learning.

## What are the differences among the different "passwords"?

Olares does have various passwords to ensure its security, including:

- Private key
- The password of LarePass:
    - On mobile phones, biometrics can be used for login
    - On computers and browser plug-ins, manual input is required
- Password for first activation of Olares
- Password for Olares login
- Second verification code when logging in to Olares

Don't panic! For daily use, what you need to enter is the two-step verification code when logging in to Olares.

## How to deploy multi-user applications?

It depends on whether you want to provide external service or simply let internal Olares users use it.

- To provide services to the public, you can select the Entrance to access the application as **Public**. This allows the application to manage its own user registration and authentication.
- To provide internal access only, you can deploy the Cluster-scoped version of such products on Olares.

For Gitlab, we provide two versions of porting: [Gitlab Pure](https://github.com/beclab/apps/tree/main/gitlabpure) and [Gitlab Fusion](https://github.com/RLovelett/gitlab-fusion).
