---
outline: [2, 3]
---

# Dashboard

The Dashboard functions similarly to Windows Explorer. It shows the system's physical resource usage, the remaining resource quota for the user, and applications with high resource usage under the user name. It enables you to monitor the system's resource status and observe the running status of Terminus without needing to understand the technical details.


## Overview

The **'Dashboard'** offers an overview of your Terminus system. It displays the [physical resource usage](#physic-resources) of the cluster hosting your Terminus, your remaining [user resource quota](#user-usage), the list of [top resources-consuming applications](#application-usage-ranking), and [network traffic analysis](#analytics).

### Physical Resources

[Terminus OS](/overview/terminus/overview.html) manages various physical resources based on Kubernetes, enabling the use of multiple virtual or physical machines in a cluster to run Terminus OS. The physical resource monitoring feature on the Dashboard provides an overview of your device cluster's operational status and establishes standards for regular resource consumption and cluster performance.

On the **'Overview'** page, you can see the current and historical usage of the 4 most important physical resources: **CPU**, **memory**, **disk**, and **pod**. The chart below shows the usage trend over the last 10 minutes. You can click the resource card to switch the chart content accordingly.

![alt text](/images/how-to/terminus/dashboard/overview.jpg)

#### Usage Details

Click on **'More Details'** to access the usage details page for various physical resources. You can switch between different time ranges using the drop-down menu in the upper right corner. Clicking the refresh button next to it will immediately update the monitoring data.


![alt text](/images/how-to/terminus/dashboard/resource-detail.jpg)

You can view the cluster monitoring data for the past 7 days, including CPU usage, memory usage, average CPU load, disk usage, inode usage, disk throughput, IOPS, network bandwidth, and pod status. Here is a brief introduction to each monitoring metric:

- **CPU Usage**: CPU usage reflects the amount of CPU resources used over a specific timeframe. If CPU usage spikes for a prolonged period, it could slow down the cluster. Therefore, it's essential to promptly identify and stop any application that excessively consumes CPU resources.
- **Memory Usage**: Memory usage is shown as a percentage of the memory in use. The availability of memory determines whether a program can operate correctly and its performance. When memory is insufficient, it may impact application data loading, thread concurrency, and I/O buffering.
- **Average CPU Load**: The average CPU load refers to the average number of active processes, and it's not directly related to CPU utilization. Ideally, the average load should match the number of CPUs. If the average load exceeds the number of CPUs, it suggests that the system is overloaded.
- **Disk Usage**: Many applications on Terminus rely on persistent volumes, a type of backend storage that depends on disks. Real-time disk usage monitoring is crucial for data reliability. Timely attention to disk usage can prevent file systems from being overused or misused. When disk usage is high, you may need to clean up unnecessary images or containers to free up space.
- **Inode Usage**: Each file has an inode that stores its metadata, such as the creator and creation date. Inodes also occupy disk space. A large number of small cache files can lead to inode resource exhaustion. In such cases, new files cannot be created on the disk, even if it's not full. Monitoring the inode usage rate using the Dashboard can help detect such situations in advance.
- **Disk Throughput**: Measures the speed of data flow (both read and write) on the disk in MB/s, important for transferring large, non-sequential data blocks.
- **IOPS**: Stands for Input/Output Operations Per Second. It is a essential aspect of disk monitoring, crucial when transferring small, non-sequential data blocks.
- **Network Bandwidth**: A measure of network data transfer rate or capacity, critical for understanding network speed and quality.
- **Pod Status**: Pods serve as containers for running various applications. The Dashboard shows the total number of pods in different states, including running, completed, and warning. Pods marked as completed are usually tasks (Jobs) or scheduled tasks (CronJobs). If a large number of warning pods appear, you should investigate the cluster's operation promptly.

### User Usage

Terminus supports multiple users sharing a cluster's physical resources, with quotas allocated by the cluster administrator.

On the **'Overview'** page, you can view the current and historical usage of resources under your account. If your user resource quota is insufficient, your Terminus may operate slowly, hinder new application installations, or even suspend some running applications with high resource overhead.

![alt text](/images/how-to/terminus/dashboard/user-usage.jpg)

### Application Usage

On the **'Overview'** page, you can quickly identify applications that are consuming significant CPU and memory resources by viewing the top 5 resource-consuming applications. Click **'More'** to view the complete [list of application usage](#application).

![alt text](/images/how-to/terminus/dashboard/usage-ranking.jpg)

### Analytics

The **'Analytics'** section on the **'Overview'** page summarizes the 24-hour traffic variations for all applications using Analytics. Click **'More'** to access each application's detailed [Analytics Statistics](#analytics).

![alt text](/images/how-to/terminus/dashboard/analytics.jpg)

## Applications

### Application Status

On the **'Applications'** page, you can view the operational status of all applications on Terminus. Each application is represented in a card format, providing essential information at a glance:

- **Application Entrance**: Displays the entrance, title, and running status of the application. A [public entrance](../../../overview/terminus/network.md#public-entrance) will be indicated with a **public** tag. If an application has multiple entrances, you can click the icon to switch.

- **Resource Usage**: The chart on the card provides the physical resource usage of this application, including CPU usage, memory usage, network usage, and number of pods. You can see the specific CPU and memory usage at any given moment by hovering over the chart.

![alt text](/images/how-to/terminus/dashboard/applications.jpg)

### Search & Sort

The **'Applications'** page allows you to sort applications by  **CPU Usage**, **Memory Usage**, **Inbound Traffic** and **Outbound Traffic**. This feature helps you quickly identify resource-intensive applications. You can use the drop-down list in the upper right corner to select resources and arrange them in ascending or descending order.



## Analytics

:::tip Prerequisites
Only applications that have declared the analytics function in the [TerminusManifest.yaml](../../../developer/develop/package/manifest.md#analytics) can see Analytic Data in the Dashboard.
:::

Terminus OS offers built-in website analysis functionality, powered by [umami](https://umami.is/). The **'Analytics'** page displays **'Page View'**, **'Unique Visitors'**, and **'Average Visit Time statistics'** for each application over the past 24 hours. For more detailed analysis, please click on the application card.

![alt text](/images/how-to/terminus/dashboard/analytics-2.jpg)

You can find the analytic data within 1 year on the details page. To analyze data from different periods, click the dropdown list in the upper right corner. To update the data immediately, click the refresh button.

Here's a brief introduction to the analytical metrics found on the detail page:

**Views**<br>
Page views refer to the number of times a webpage is accessed by users. If a user accesses the same page multiple times, each access is counted separately. This metric helps analyze webpages with high traffic to improve content accordingly.

**Visitor**<br>
Unique Visitors are individuals who have accessed the website at least once. Even if a user visits the website multiple times within a certain period,that will be only counted as one visitor. This metric is vital in analyzing website traffic, as it helps gauge the effectiveness of website promotion and the size of the user group.

**Average visit time**<br>
Also known as Average visit duration, this metric represents the average time users spend on the website during a session. It's a crucial measure of user engagement.

**Referrer**<br>
It tracks the source of your website visitors' clicks. It is the webpage that a person was on right before they landed on your page. You can use this metric to understand the source of your website traffic.

**Visitor info**<br>
Analytics capture basic details about visitors, such as their device, browser, operating system, and location. This information can be used to build user personas for your website.

![alt text](/images/how-to/terminus/dashboard/analytics-3.jpg)
