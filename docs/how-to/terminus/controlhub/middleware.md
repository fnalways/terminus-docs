# Middleware

**Middleware** displays the management interface for middleware deployed in Terminus OS.

:::tip
Only administrators can see the **'Middleware'** page.
:::

## Postgres

![postgres](/images/how-to/terminus/controlhub/middleware/01.jpg)

The detailed information shows Postgres cluster data, including the **cluster name, deployment namespace, access address, and the administrator password**.

The **Databases list** below provides an overview of the PostgreSQL databases utilized by different applications within Terminus OS. It includes details such as **database names, users, and passwords**.

## MongoDB

![mongodb](/images/how-to/terminus/controlhub/middleware/02.jpg)

The detailed information shows MongoDB cluster data, including the **cluster name, deployment namespace, access address, and the administrator password**.

The **Databases list** below provides an overview of the MongoDB databases utilized by different applications within Terminus OS. It includes details such as **database names, users, and passwords**.

## Redis

![redis](/images/how-to/terminus/controlhub/middleware/03.jpg)

The detailed information shows Redis cluster data, including the **cluster name, deployment namespace, access address, administrator password, and the Redis proxy access address.**.

The **Databases list** below provides an overview of the Redis datab utilized by different applications within Terminus OS. It includes details such as **namespaces and passwords**.


## Zinc

![zinc](/images/how-to/terminus/controlhub/middleware/04.jpg)

**Zinc** details display a list of indexes utilized by different applications within Terminus OS. The list shows **index names, document counts, and storage space used**. Buttons for **Schema Configuration** and **Search Testing** can be found on the right.


Clicking the **Schema Configuration** button will open a dialogue displaying the schema configuration in JSON format.

![schema](/images/how-to/terminus/controlhub/middleware/05.jpg)

Clicking the **Search Testing** button opens the Zinc Search dialog. You can perform full-text searches within the indexes using the Zinc Search syntax.

![zinc search](/images/how-to/terminus/controlhub/middleware/06.jpg)

## Bytebase

You can use third-party applications to view data in databases. For example, **Bytebase** is a multipurpose tool for working with databases. In the following section, we will use **Bytebase** to demonstrate how to access database in the middleware.

### Install from the Market

In the Terminus Market, find **Bytebase**, click **'Get'**, then click **'Install'** to install it.

![bytebase](/images/how-to/terminus/controlhub/middleware/07.jpg)

### Adding a PostgreSQL Database
After opening **Bytebase**, click **'Add Instance'**, and select **PostgreSQL**.
- The Instance Name could be `Terminus` or others.
- Choose either `PROD` or `TEST` for the Environment.
- `HOST`, `USERNAME`, `PASSWORD` information can be found in [Control Hub's Middleware](#postgres) section.

![alt text](/images/how-to/terminus/controlhub/middleware/09.jpg)

Once saved and connected, you can view the data in **PostgreSQL**.

![alt text](/images/how-to/terminus/controlhub/middleware/10.jpg)

### Adding a MongoDB Database
After opening **Bytebase**, click **'Add Instance'**, and select **MongoDB**.
- The Instance Name could be `Terminus` or others.
    :::info NOTE
    Do not use duplicate instance names.
    :::
- Choose either `PROD` or `TEST` for the Environment.
- `HOST`, `USERNAME`, `PASSWORD` information can be found in [Control Hub's Middleware](#mongodb) section.

![bytebase1](/images/how-to/terminus/controlhub/middleware/11.jpg)

Once saved and connected, you can view the data in **MongoDB**.

![alt text](/images/how-to/terminus/controlhub/middleware/12.jpg)

### Using the Database

Click **'SQL Editor'** in the upper right corner of **Bytebase** to go to the **Editor** page for further operations.

![bytebase1](/images/how-to/terminus/controlhub/middleware/13.jpg)
