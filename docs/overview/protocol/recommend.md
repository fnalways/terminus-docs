---
outline: deep
---

# Open Information Distribution Protocol

The vision of the Open Information Distribution Protocol is to **create a privacy-protective/open/practical/general/composable information distribution protocol that frees users from the information cocoons of centralized giants**. It has the following objectives:

- Privacy Protection: Usage data of users will not be leaked
- Openness: Any third party can participate. The protocol is not controlled by any party, not even Terminus
- Practicality: The recommendation algorithm must be effective
- Generality: In addition to text content, it can also accommodate videos, music, and products for recommendations
- Composability: Supports protocol modularization to reduce redundant computation while enhancing personalization

You can try out the demo-level recommendation algorithm provided by the Terminus team at [Wise](../../how-to/terminus/wise/index.md#recommend).

## Design Philosophy

### A New Paradigm for Recommendation

In essence, the protocol divides the recommendation process into two stages:

1. Content Providers in the cloud collect and vectorize global content, subsequently packaging it for user download.
2. After Terminus downloads the data, it employs locally-executed algorithms and leverages local user interaction data (clicks and readings) for content recommendation.

As each Terminus device receives identical data from Content Providers and operates recommendation algorithms locally without internet, user feedback remains confidential.

![alt text](/images/overview/protocol/recommend1.jpeg)

### Local Recommend Framework

The recommendation framework running on Terminus orchestrates the `Recommendation algorithms` installed from the Market, ensuring these algorithms operate in a network-free sandbox environment.

![alt text](/images/overview/protocol/recommend2.jpeg)

### Proof of Intelligent Contribution

Looking ahead, we aim to establish a Proof of Work mechanism that fairly rewards users who actively contribute gradient data for model training, thereby advancing algorithms through federated learning.

![alt text](/images/overview/protocol/recommend3.jpeg)

## Spec

Todo

## Open Source Repo

- [recommend-system-module](https://github.com/beclab/recommend-system-module): This is the internal recommendation system framework running within Terminus.

- [r4](https://github.com/beclab/r4): This is a demo algorithm developed by the Terminus team to illustrate the workflow of the framework.

- [article-extractor](https://github.com/beclab/article-extractor): This module is responsible for extracting body texts from web pages.
