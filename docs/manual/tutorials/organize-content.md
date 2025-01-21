
# Build your knowledge hub using Wise

Wise is a local-first, AI-powered modern reader. Seamlessly integrated with the LarePass browser extension and mobile app, it enables you to effortlessly collect, organize, and access content across platforms.

This tutorial will guide you on how to use Wise and LarePass to collect scattered content sources and build your personal knowledge hub.

## Learning objectives

By the end of this tutorial, you will learn how to:

- Install the LarePass browser extension
- Collect web articles, videos, and audio
- Upload local documents to Wise
- Subscribe to RSS feeds
- Search through your personal knowledge base

## Before you begin

Before you begin, make sure the following conditions are met:

- An activated Olares
- Olares ID backed up with mnemonic
- Wise (built-in app)
- LarePass mobile app

## Install the LarePass browser extension

The LarePass browser extension is the core tool for content discovery and collection. Currently, only Chrome is supported.

### Install the LarePass extension 

Install the LarePass extension using one of the following ways:

- **Install from Chrome Web Store**:
  1. Search for **LarePass** in the Chrome Web Store.
  2. Open the details page, and click **Add to Chrome** to install.

- **Install offline**
  1. Visit the [LarePass page](https://www.olares.xyz/larepass) to manually download the installation file of the LarePass extension and unzip it.
  2. In the URL bar, enter `chrome://extensions/` to access the extension management page.
  3. Enable **Developer mode** in the upper right corner.
  4. Click the **Load unpacked** option, and select the unzipped LarePass extension folder to finish installing.

### Log in with your Olares account
Log into the LarePass extension by importing your Olares account:

  1. Open the LarePass extension, and click **Import an account**.
  2. Import your Olares ID using the corresponding mnemonic.
  3. Enter your Olares password to complete the login.

You can check the **Settings** tab to ensure that the Olares is connected correctly. If it’s not connected, check whether your Olares host is accessible.

## Collect web content

LarePass provides flexible and efficient ways to collect online content, including web articles, videos, podcasts, and more. 

### Collect via the LarePass extension

::: tip Uploading cookies for better experience
Some websites restrict access for anonymous users. You can upload your cookies to Olares to improve your experience.

1. Log into the website.
2. Open the LarePass extension, go to **Collect > Cookie**, and click **Upload**. You can unselect a specific cookie item by clicking the **X** button if you don't want to upload it.
:::

To collect web content using the LarePass extension:

1. Open the content page, for example, a CNN article.
2. Open the LarePass extension. The extension will automatically detect the collectable content on the page.
   ![Collect web content](/images/manual/tutorials/wise-collect-web-content.png)
3. In **Collect** > **Page**, click the <i class="material-symbols-outlined">add_box</i> button next to the title to add the page to the Wise library.

Once collected, you can find the content in **Library** > **Articles** in Wise. The audio, video, and images on the page will also be downloaded locally.

### Collect via the LarePass mobile client

You can share web links to the LarePass mobile client for content collection. For example, to save an article from the Chrome browser on your phone:

1. Tap the **Share** button in the browser, then select **LarePass** as the sharing destination.
2. Open the LarePass app. LarePass will automatically detect the collectable content on the shared page and prompt whether to add it to Wise.
3. Tap **Confirm** to add it to the Wise library.

![LarePass share](/images/manual/tutorials/wise-share-to-larepass.png)

::: tip 
Alternatively, you can copy the URL directly and open LarePass. LarePass will automatically detect the URL in the clipboard and the collectable content as well.
:::

The added content can be found in **Wise** > **Library** > **Articles**.

## Upload PDF/E-book content to Wise

You can upload local PDF or EPUB e-books to Wise for centralized knowledge management:

1. Open **Wise**, click <i class="material-symbols-outlined">add_circle</i> in the menu bar, and select **Upload**.
2. Choose the file you wish to upload, specify the upload directory, and click **Confirm**.

View your PDFs under **Library > PDFs** and EPUBs under **Library > Books**.

![View and manage PDF](/images/manual/tutorials/wise-pdf.png)

::: tip
You can efficiently organize your documents using the tags and notes features in Wise.
:::

## Subscribe to RSS feeds

Wise's RSS functionality makes it easy to subscribe to all RSS-enabled podcasts and blogs. Additionally, you can use this feature to automatically download your favorite videos from video platforms like YouTube.

### Subscribe via the LarePass extension

To subscribe an RSS feed using the LarePass extension:

1. Open the RSS page you want to subscribe to, for example, the "Paranormal Mysteries" podcast: `https://www.spreaker.com/podcast/paranormal-mysteries--2321086`
2. Open the LarePass extension. It will automatically detect the RSS source on the page and show the **RSS** tab.
   ![Subscribe to podcast](/images/manual/tutorials/wise-sub-podcast.png)
3. In the **RSS** tab, find the correct subscription source and click <i class="material-symbols-outlined">bookmark_add</i> to complete the subscription.


### Manually add an RSS source

To manually add an RSS source to Wise:

1. Copy the RSS subscription link, such as [https://hnrss.org/frontpage](https://hnrss.org/frontpage), an RSS feed for HackerNews frontliners.
2. In Wise, click <i class="material-symbols-outlined">add_circle</i> in the menu bar, and select **RSS feed**. 
3. Paste the URL. Wise will automatically detect the available RSS source.
   ![Manually add RSS](/images/manual/tutorials/wise-add-rss.png)
4. Click **Add** to complete the subscription.

### Automatically download videos

In addition to regular RSS subscriptions, you can use the LarePass extension and Wise to automatically download videos from your playlist on video platforms. Here's how to do it on YouTube:

1. Log into your YouTube account.
2. In LarePass extension, go to **Collect** > **Cookie**, and click **Upload** to upload the cookies to Olares. Olares needs the cookies of the site to access your subscription and download videos.
   
   ::: tip Enable Auto-Sync
   Cookie data may expire. You can enable the **Auto-Sync** feature in the Cookies page to ensure your cookies are updated automatically each time you visit the site.
   :::
3. Under the video you want to watch, click <i class="material-symbols-outlined">more_horiz</i> the button, select **Save**, and then click **Create New Playlist**. As an example, we created a playlist called Save to Wise.
4. Enter your playlist. The LarePass extension will automatically detect the available RSS feeds and show the **RSS** tab.
5. In the **RSS** tab, select the RSS feed link starting with `https://www.youtube.com/feeds/` and click <i class="material-symbols-outlined">bookmark_add</i> to subscribe.
    ![Subscribe to YouTube playlist](/images/manual/tutorials/wise-youtube-rss.png)

Wise will automatically download all the videos saved to this playlist.

::: tip Download videos from a specific channel
You can use LarePass extension similarly on your favorite YouTuber’s channel. Once you get the corresponding RSS feed and subscribe to it, Wise will automatically download all the videos in the channel.
:::

### Access your RSS content

To access your RSS content in Wise:
1. From the left-hand menu bar, navigate to **Subscriptions** > **Feeds**.
2. Select an unread RSS item and enter it to watch the video, listen to the podcast, or simply read the article. 

![Access RSS](/images/manual/tutorials/wise-access-rss.png)

::: tip Smart content recommendations
In addition to regular RSS subscriptions, Wise offers a fully local, 100% privacy-protected intelligent content recommendation system. You can download the recommended algorithms from the Olares app market. Learn more in [Discover themed content](../tasks/recommend.md).
:::

## Search through collected content

Once you've collected your content in Wise, you can search for particular content themes or entries using aggregated search in Olares.

![Seach in Wise](/images/manual/tutorials/wise-search.png)

::: info Search formats
Currently, only document-type content (PDF, web articles, and ePUB) is searchable. Other formats will be supported in the future.
:::

1. Click <i class="material-symbols-outlined">search</i>in the Dock to open the search window.
2. Specifies the search scope to Wise, and enter the keywords to search.

## Learn more

- [Wise basics](../tasks/wise-basics.md)
- [Discover themed content](../tasks/recommend.md)
- [Subscribe and manage feeds](../tasks/subscribe.md)

