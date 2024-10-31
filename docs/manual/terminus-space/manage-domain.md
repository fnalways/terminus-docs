---
outline: [2, 3]
---

# Manage your domain

You must [create a domain](host-domain.md) before managing it. Once your domain is set up, you can **configure email invitation rules for organization members** and invite members to bind their own organization **Olares ID** via email.

## Set email invitation rules

Most companies use a standard domain suffix for their team members' emails, like A@myteam.com for person A or B@myteam.com for person B. However, sometimes, team members might use emails in different domains. To accommodate these scenarios, Orales provides two types of rules for adding organization members' emails:

![alt text](/images/how-to/space/set_rule.jpg)

- **Fixed email suffix**: In this case, your organization uses a corporate domain suffix for all team member emails, and you can enter that suffix as specified in the rule. Any emails that match the specified suffix will be eligible to bind as the organization's **Olares ID**.

- **Specified email address**: If your organization doesn't have a corporate email suffix, you can use this rule. You need to manually add the email address for each member of the organization.

:::info NOTE
- Currently, **only Gmail is supported** for both rule types.
- Members and emails that have been bound to the **Olares IDs** will appear in the member list and cannot be deleted.
- Emails that are manually added and have not been bound to the **Olares ID** will also be displayed in the list, shown as unbound status. Unbound emails can be deleted.
:::

## Manage members

After setting email rules, you can add or remove members under your organization.

![alt text](/images/how-to/space/management_members.jpg)

### Add a member

To add a member:

1. On the domain management page, add members to the organization by entering their email address.
2. Notify the corresponding users to use their email addresses to [bind as the organization's Olares ID](../get-started/create-terminus-name.md#).

### Remove a member

If a member's email is unbound from the **Olares ID**, you can remove it from the list. However, if a member has finished binding to the organization's Olares ID, you won't be able to remove it.