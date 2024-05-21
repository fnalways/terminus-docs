---
outline: [2, 4]
---

# Application

You can manage installed applications here. In the list, you can see:

- [User System Application](../../../overview/terminus/application.md#user-system-application)
- [Community Application](../../../overview/terminus/application.md#community-application)
- [Cluster Scoped Application](../../../overview/terminus/application.md#cluster-scoped-application) (if you are an admin)

![alt text](/images/how-to/terminus/application.png)

## App Management

You can view common [application status](../../../overview/terminus/application.md#用状态) here.

![alt text](/images/how-to/terminus/application_details.png)

:::info
[Community Application](../../../overview/terminus/application.md#community-application) can be suspended to free up resources.
:::

## Entrance Management

You can learn more about [Entrance](../../../overview/terminus/network.md#entrance) here.

![alt text](/images/how-to/terminus/application_entrance.png)

### Setup Endpoint

You can set the [Entrance Endpoint](../../../overview/terminus/network.md#endpoint) for the application here.

![alt text](/images/how-to/terminus/application_domain_setup.png)

#### Setup Custom Route id

You can replace the default route id with a custom **Route id**. For example, replace `de463205` with `wordpress`.

![alt text](/images/how-to/terminus/application_third_level_domain.png)

#### Setup Custom Domain

You can assign a **Custom Domain** to the Entrance.

![alt text](/images/how-to/terminus/application_third_party_domain.png)

After entering the domain, follow the instructions in the pop-up dialog to add a CNAME record on the domain hosting website.

![alt text](/images/how-to/terminus/application_activation_third_party_domain.png)

Once the DNS record is activated, the status will change to **'Activated'**, indicating that the setup is complete.

:::info
If you want your friends to access this URL without logging in, set its AuthLevel to "Public." (See [AuthLevel](#authlevel))
:::

### Setup Access Policies

Each application can have more specific access policies for different paths within it.

For instance, sensitive operations might require a [One Time Password](../../../overview/terminus/account.md#multi-factor-authentication) when making a call.

#### AuthLevel

Set the access level for the entire application. There are two options: Public and Private. You can find their meanings [here](../../../overview/terminus/network.md#entrance).

#### Second Factor Model

If the AuthLevel of the application is set to Private, you can configure the following settings:

- **One time**:<br>
  Set to **True**: A [One Time Password](../../../overview/terminus/account.md#multi-factor-authentication) is required to access the application, even when logged in.
  <br>
  Set to **False**: Once logged in through [Login](../setup/login.md), the application can be accessed directly.

- **Valid duration**: <br>
  When **One Time** is set to **True**, this specifies the validity period of the [One Time Password](../../../overview/terminus/account.md#multi-factor-authentication). Within this period, it does not need to be entered again. A value of 0 means it needs to be entered for each access.

#### Policies

Policies allow you to set different access policies for subpaths within the application.

![alt text](/images/how-to/terminus/application_add_sub_policies.png)

Click the **'+'** icon to add sub policies. In the dialog, you can use a `regular expression` to matching certain subpaths that will be effected by this policie. Then, you can choose the access mode for this subpath rule.
- **Public** means this subpath can be accessed without authorization, completely open.
- **One Factor** means this path requires only the login password to be entered during [Login](../setup/login.md).
- **Two Factor** means this path requires both the login password and a second verification code to be entered during [Login](../setup/login.md).

If you choose the Two Factor option, please refer to the [Second Factor Model](#second-factor-model) for the definitions of **One time** and **Valid duration**.
