# Namespace

The **'Namespace'** in **ControlHub** allows you to monitor resource usage and workload conditions on Terminus OS from a user perspective.

![namespace](/images/how-to/terminus/controlhub/namespace/01.jpg)

## Usage Ranking

**Usage Ranking** organizes system resource consumption by namespace, enabling you to view statistics based on various metrics.

### Sorting
**Usage Ranking** offers several metrics for sorting, each available in ascending or descending order:
- CPU Usage
- Memory Usage
- Pods
- Outbound Traffic
- Inbound Traffic

### Filter by User

As shown in the image above, you can filter namespaces by user using the dropdown menu in the top-right corner of the interface.

### Search

Additionally, in the same upper-right area, you can enter keywords to search for certain namespaces.

### Namespace Details

By clicking on a namespace, you can access the **'Namespace Details page'**:

![namespace list](/images/how-to/terminus/controlhub/namespace/02.jpg)

On the details page, you can view all Pods within the namespace, along with their respective resource usage. You can sort the pods based on four types of resource consumption. Keyword search is also supported

You can click on a Pod to access the **'Pod Details Page'**. This page lists all containers within the pod and displays the resource usage for each one.

![container list](/images/how-to/terminus/controlhub/namespace/03.jpg)

## Resources

The **'Resources'** section displays a chart of current and historical physical resource consumption from a Namespace perspective.

You can view the total resource usage by all users. Alternatively, select a specific user from the top-right corner of the page to view individual resource consumption.

![resources](/images/how-to/terminus/controlhub/namespace/04.jpg)
