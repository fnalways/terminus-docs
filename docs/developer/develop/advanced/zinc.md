# Zinc Search

In addition to database clusters, **Terminus** also provides a local full-text search engine middleware, [Zinc Search](https://github.com/zincsearch/zincsearch).

Any app, including third-party apps, can easily create its own index library for full-text search. To use this feature, simply add the following configuration to the [TerminusManifest.yaml](../package/manifest.md#middleware) file in **TAC**.

```yaml
middleware:
  zincSearch:
    username: zinc
    indexes:
      - name: index0
```

Next, add a file defining the schema of the index to **TAC**. This file should be in `JSON` format, and its name should correspond to the index name configured in the `TerminusManifest.yaml` (in this case, `index0.json`).

:::details index0.json Example
```json
{
  "properties": {
    "title": {
      "type": "text",
      "index": true,
      "store": true,
      "highlightable": true
    },
    "content": {
      "type": "text",
      "index": true,
      "store": true,
      "highlightable": true
    },
    "status": {
      "type": "keyword",
      "index": true,
      "sortable": true,
      "aggregatable": true
    },
    "publish_date": {
      "type": "date",
      "format": "2006-01-02T15:04:05Z07:00",
      "index": true,
      "sortable": true,
      "aggregatable": true
    }
  }
}
```
:::
