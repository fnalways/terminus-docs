---
outline: [2, 3]
---

# Wise

Wise is your digital backyard. It is a local-first and AI-native modern reader that helps you collect, read, and manage information from various platforms. It allows you to run self-hosted recommendation algorithms to filter and sort online content, thus breaking the information bubble. Together with the TermiPass browser plugin, you can save valuable articles to Terminus with a single click, making it easy to build a personal knowledge base.

**Key Features** <br>
[Decentralized Recommendation](#recommend)<br>
[RSS Subscription](#subscribe-feed)<br>
[Feed Management](#manage-feeds)<br>
[Save Articles and Read It Later ](#articles)<br>
[PDF support](#pdfs)<br>
[Note and Tag](#note-and-tag)<br>

## Recommend

To quickly begin creating your digital backyard, install a recommendation algorithm from the Terminus Market. Terminus uses a decentralized, privacy-protecting, permissionless, and combinable recommendation protocol to help users take back their information flow from tech giants. Learn more about [how the recommendation algorithm works](/overview/protocol/recommend.md).

### Install Recommendation

You can choose your preferred recommendation algorithm from the Recommendation category in the Market. 

The installation process is the same as [installing an application](/how-to/terminus/market/index.md#install-application). Click the **'Get'** button to install the algorithm, wait for a while for the algorithm to complete the recommendation workflow locally, and then you can see the content recommended by the algorithm in Wise.

![Install Recommendation](/images/how-to/terminus/wise/recommend/install-recommendation.jpg)

### View Result

To view recommended content, simply navigate to the 'For You' page in Wise. This page shows the results of all installed recommendation algorithms. You can switch between algorithms by clicking the **'recommendation title'** at the top.

![alt text](/images/how-to/terminus/wise/recommend/view-result.jpg)

**Result List**<br>
The recommended results appears in a list. Each row displays the article's cover, title, summary, source, author, publication time, and tags. Articles you haven't seen are marked with a green sign in the upper left corner of the cover image. Click the article to enter the reading page.

**Info**<br>
The **Info** column, located to the right of the list, displays the basic information of the selected article. It includes the original address, source, tags, notes, and metadata. You can click the **Subscribe this Feed** button to add the source of this article to your **Feeds** page. You can use the button in the upper right corner to hide or show the **Info** column.

**Quick Buttons**<br>
When you hover your mouse over an article, quick buttons on the right allow you to add the article to the **Inbox**, **ReadLater**, or **remove** it from the list.

### Recommendation in Action

To view all workflow tasks running in the recommendation engine, please navigate to the **'Recommendations'** page under the **'Manage'** section. Click on a workflow to view its operation records. For more details and logs, click on the records.

In the workflow example below, the pipeline of the recommendation process is displayed on the left. By clicking on a node in the process chart, you can view the summary and container settings of each step. To examine the operation log of a node, click the **'Logs'** button. From here, you can view, download, or share the log.

![Recommendation log](/images/how-to/terminus/wise/recommend/recommendation-log.jpg)

## Feed

**'Feeds'** can help you create a more personalized reading experience. If you don't want to miss any content from a source, you can add it to your **'Feeds'**. The feed subscription feature in Wise is similar to mainstream RSS readers, making it easy for you to get started.

### Subscribe Feed

- **Subscribe from For You**. The recommendation algorithm in **'For You'** is a shortcut to discover valuable feeds. Here is how to subscribe to the content source of a article:
  > - Click the **'Subscribe this Feed'** button on the **'Info'** column.
  > - Click the **'subscribe button'** on Toolbar on the reading page.

- **Add RSS Link**. You can also manually add an RSS link.Here is 2 way to do so:

  > - On the **'menu'** sidebar, click the **'Add'** button, select **'Subscribe to RSS Feed'** in the drop-down menu, and enter the RSS link in the pop-up dialog.
  > - On the **'Manage Feed'** page, click the **'Add Feed'** button in the upper right corner, and enter the RSS link in the pop-up dialog.

  ![alt text](/images/how-to/terminus/wise/feed/add-rss.jpg)

- **Use TermiPass Browser Extension**. If the page you are browsing includes a subscribable RSS source or an RSSHub route, you can subscribe to it with a single click through TermiPass.

  ![alt text](/images/how-to/terminus/wise/feed/extension-rss.jpg)

  > - Open **'TermiPass Browser Extension'**, click **'Collect'**, select the Feed link you want to subscribe under the RSS Tab, and click subscribe to add it to Wise

### Manage Feeds

On the "RSS Feeds" page, you can view details of all subscribed feeds. These include the feed name, description, number of articles in the feed, and the time the latest article was added. You can use the search function at the top to quickly find specific feeds. On the right side of the list, there are operation buttons for **'Copy Feed RSS Link'**, **'Edit Feed Name or Description'**, and **'Unsubscribe Feed'**.

![alt text](/images/how-to/terminus/wise/feed/manage-feeds.jpg)

### Unsubscribe Feeds

You can unsubscribe a feed in the following 3 ways:
1. From the **'Manage Feed'** page: Go to the **'RSS Feeds'** page, find the Feed you want to unsubscribe from, and click the **'Unsubscribe Feed'** button on the right of the list.
2. From the **'Info'** column: Select any article from the Feed you want to unsubscribe from, and click the **'Unsubscribe'** button.
3. From the reading page: On the reading page of any article in the Feed you want to unsubscribe from, click the **'Unsubscribe'** button in the Toolbar above.

:::warning
Unsubscribing from an RSS Feed will **delete** all articles under the Feed that have not been added to the **Library**. This operation cannot be undone.
:::

## Read

To make your reading more efficient, Wise offers two locations in **'Library'** to store your documents: **'Inbox'** and **'ReadLater'**. By default, newly added documents will go into the Inbox. From there, you can move the documents you wish to read later into the ReadLater folder.

In addition to different locations, you can also filter your content based on the **'Seen/Unseen'** status of a document. Click the button in the upper right corner of the result list to mark all documents on the current list as seen or unseen.

### Articles

You can add articles on website to the Library using the following 4 methods:
1. **Add from Subscription**: On the **'For You'** or **'Feeds'** list page, click the **'Inbox'** or **'ReadLater'** button in Quick Buttons to collect the article.
2. **Add from Reading Page**: On the reading page of any article, click the **'Inbox'** or **'ReadLater'** button in the Toolbar to collect the article.
3. **Add from Menu**: Click the **'Add'** button on the menu sidebar, select the **'Add Page'** option in the drop-down menu, and enter the webpage URL in the pop-up dialog.
4. **Add from TermiPass Browser Extension**: Open the **TermiPass Browser Extension** on the webpage you want to bookmark. Navigate to **'Collect'**, then click on the **'Add'** button under the **'Page'** Tab. This will add the current page to Wise's Inbox.

![alt text](/images/how-to/terminus/wise/read/extension-articles.jpg)

#### Articles Reader

You can click on any document card to enter the reading page. The Toolbar at the top of the page contains frequently used features, while the **'Info'** column on the side displays basic article information.

![alt text](/images/how-to/terminus/wise/read/view-articles.jpg)

Here's a brief introduction to the Toolbar functions:

- Previous: Takes you to the previous article in the result list
- Next: Takes you to the next article in the result list
- Next Unread: Takes you to the next unread article in the result list
- Mark as Read/Unread: Changes the read status of the article
- Inbox: Adds or moves the article to the Inbox
- Read Later: Adds or moves the article to Read Later
- Open Origin: Opens the original url of the article in a new window
- Subscribe/Unsubscribe Feed: Available for articles in **'For You'** and **'Feeds'**, this button lets you subscribe or unsubscribe to the RSS Feed

### PDFs

There are 2 ways to add PDFs to the Library:

1. **Add from Menu**: Click the **'Add'** button on the menu sidebar, select the **'Add Download Link'** option in the drop-down menu, and enter the download address, file name, and download location of the PDF in the pop-up dialog.

2. **Add from TermiPass Browser Extension**: Open the **TermiPass Browser Extension** on the PDF page you want to bookmark. Navigate to **'Collect'**, then click on the **'Add'** button under the **'PDF'** Tab. This will add the current PDF to Wise's Inbox.

![alt text](/images/how-to/terminus/wise/read/extension-pdf.jpg)

The PDFs you collect are listed under the **'PDFs'** page. Each row displays the title, summary, download status, author, addition time, and tags.


![alt text](/images/how-to/terminus/wise/read/pdf-list.jpg)

#### PDF Reader

The layout of Wise's PDF reading page is similar to that of the Article. The functions of each button on the PDF reading page are as follows:

- Page navigation: Enter the page number to jump directly to that page
- Page zoom: Click **'-'** and **'+'** to zoom the page, or enter a custom zoom ratio
- Rotate page: Rotate the current page clockwise or counterclockwise
- Previous: Takes you to the previous PDF in the result list
- Next: Takes you to the next PDF in the result list
- Next Unread: Takes you to the next unread PDF in the result list
- Mark as Read/Unread: Changes the read status of the PDF
- Inbox: Adds or moves the PDF to the Inbox
- Read Later: Adds or moves the PDF to Read Later
- Page Preview: Located on the left side of the reader, you can open or close the page preview by clicking the button above

![alt text](/images/how-to/terminus/wise/read/view-pdf.jpg)

## Note and Tag

Want to capture ideas while reading? Wise provides Note and Tag functions to help you record insights and keep your documents well-organized.

### Note

**Add Note**: Click on the **'Note'** section in the **'Info'** column to add a note to the current document.

**Modify and Delete Note**: Hover your mouse over the Note section in the **'Info'** column and click the **'Edit'** button to modify the Note.

![alt text](/images/how-to/terminus/wise/note/note.jpg)

### Tag

**Add Tag**: On the result list page, click the **'Tag'** button on the document card, then select or create a tag in the input box.
![alt text](/images/how-to/terminus/wise/note/tags.jpg)

**Delete Tag**: There are 2 ways to delete a Tag from an article.

> - Delete a specific Tag from a single document: On the result list page, click the **'Tag'** button on the document card, then click **'x'** in the input box to remove a tag.
> - Delete a specific Tag from all documents: On the **'Tags'** page, delete a Tag. This action will remove this Tag from all documents.

**Manage Tag**: On the Tags page, you can **view**, **edit**, and **delete** Tags. You can see the number of documents marked by a Tag and the last time each Tag was used. Click the **'Edit'** button on the right side of the list to modify the Tag name. You can use the search function at the top of the page to quickly filter specific tags.

![alt text](/images/how-to/terminus/wise/note/manage-tags.jpg)
