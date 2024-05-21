# Pods

This page displays a list of all Pods in Terminus OS. It enables you to view and manage at the smallest granularity provided by **Kubernetes**.

## Pod List

![pod list](/images/how-to/terminus/controlhub/pods/01.jpg)

### Filter by Node

To view Pods on a specific node, select a node from the dropdown menu in the upper right corner of the list.

### Search by Name

To search for certain Pods, entering keywords in the search box in the upper right corner of the list.

### View Container Status

You can click on a Pod to access the **'Pod Details Page'**. You can view container logs, access the container environment, view container ports, environment variables, and more. This feature is similar to the [Pod Detail](./browse.md#view-resource-details) in the **Browse** section.

![pod detail](/images/how-to/terminus/controlhub/pods/02.jpg)

Additionally, in the upper right corner of the view, you can open **view yaml** to see the Pod's configuration in yaml format.

![pod yaml](/images/how-to/terminus/controlhub/pods/03.jpg)

:::tip
You are not able to edit the YAML in this dialog. The YAML configuration of a pod is set by the workload template and webhook management by Terminus OS. As a result, manual changes to the Pod's YAML may not take effect.
:::

## Resources

The **'Resources'** section displays a chart of current and historical physical resource consumption from a Node perspective.

You can view the total resource usage for all Pods running on all nodes. Alternatively, select a specific node from the top-right corner of the page to view resource consumption of Pods running on that particular node.

![resources](/images/how-to/terminus/controlhub/pods/04.jpg)
