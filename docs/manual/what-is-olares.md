# What is Olares

Olares is a open-source self-hosted solution that enables users to convert their personal edge devices into sovereign clouds, offering a powerful alternative to traditional public cloud services. Built on Kubernetes, Olares deliver cloud-level capabilities while ensuring user privacy and ease of use.

## BEC architecture 

Olares introduces a next-generation decentralized Internet framework through its Blockchain-Edge-Client (BEC) architecture. BEC decentralizes data storage and enhances security by distributing information across suitable platforms. 

![BEC](/images/overview/snowinning/network-topology.jpeg)

- **Edge**: The decentralized web node for users, hosting personal data such as documents, chat logs, and photos on private edge servers. Data remains within the user’s control on the edge, ensuring privacy and local data sovereignty. 
- **Blockchain**: Storage of high-value data, including decentralized identifiers (DIDs) and transactions on the blockchain via smart contracts. This enables transparency, immutability, and enhanced discoverability of data.
- **Client**: The identity wallet app that ensures users can securely manage their identities and interact with their self-hosted systems while maintaining ownership and privacy over their digital credentials.

## Core components of Olares

Corresponding to the BEC architecture, Olares comprises the following core components:

- [**Snowinning Protocol**](https://docs.snowinning.com/protocol/overview.html): A decentralized identity and reputation system that integrates decentralized identifiers (DIDs), verifiable credentials (VCs), and reputation data. It enhances trust by enabling transparent and verifiable interactions within decentralized environments.
- [**Olares OS**](https://github.com/beclab/Olares): A comprehensive, self-hosted operating system designed for edge devices. It allows users to host and manage their own data and applications, transforming personal edge devices into robust, sovereign cloud systems.
- **LarePass**: A secure, unified interface software that connects users to their Olares systems. It offers key functionalities, including identity management, remote access, device management, and data storage, ensuring seamless interactions with Olares.
