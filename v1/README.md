# API EXTENSIONS LOGGER V1

You will need ngrok installed and will need needle installed in your API extensions app.


Run `node app.js`
In another terminal run `ngrok http 8000`

From your extension
`require('needle').post('https://e23f-38-140-119-42.ngrok.io', { message: context.get.order()}, { json: true })`