# Edit resources via Control Hub
This guide shows you how to edit resource for your Terminus environment.

:::warning
Modifying system resources can significantly impact system stability and performance. Only proceed with modifications under proper guidance and instructions.
:::
## Edit the YAML file

To edit the YAML file of a workload resource:

1. In Control Hub, navigate to the application's **Deployments** list, and click a resource to expand its details view.
2. In the top right corner, click **<i class="material-icons">more_vert</i>** > **Edit YAML** to open the YAML editor.
3. Edit the YAML configuration of the workload as needed.
4. Click **OK** to save your changes and apply them.

   ![edit yaml](/images/how-to/terminus/controlhub/browse/10.jpg)

## Modify Pod replicas

To modify the number of running Pod replicas:

1. In Control Hub, navigate to a Pod's resource details page, and locate the number of Pod replicas at the top.
2. Click **<i class="material-icons">add</i>** or **<i class="material-icons">remove</i>** to adjust the number of Pod replicas.

   ![replicas](/images/how-to/terminus/controlhub/browse/09.jpg)

:::warning
Many applications in Terminus OS do not support multi-replica mode. Increasing the number of replicas for these Pods may cause exceptions. Therefore, it's important to read the documentation thoroughly and adjust the number of replicas with caution.
:::


### View container status
The Pods page provides a comprehensive view of all Pods in your Terminus environment, allowing you to manage them at the smallest granularity offered by Kubernetes.
Click on a Pod in the list takes you to the Pod details page, where you can:
- View container logs.
- Access the container environment.
- View container ports and environment variables.
- Open the Pod's YAML configuration in a read-only view.
  :::tip
  You cannot edit the YAML configuration directly from this view. The YAML is managed by Terminus through workload templates and webhooks.
  :::
![pod detail](/images/how-to/terminus/controlhub/pods/02.jpg)

