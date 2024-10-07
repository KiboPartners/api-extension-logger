# API EXTENSION LOGGER V2

Souped up version of the above which logs messages and context to a local Sqlite database.

Run `node app.js`

Add the contents of `manifest.js` to the existing manifest file.

Then add this to log everything about the request and context. Message is the last field. Second to last field is a key for identifying the message.

```global.arcLog(context, "http.commerce.catalog.storefront.shipping.requestRates.before", "start", {
    var1: value1
    var2: value2
})
```

Then open arclogs.sqlite3 in DB Browser for SQLite, sort by timestamp descending. This will show you the request, response, headers, exec functions available.