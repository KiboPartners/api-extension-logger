const http = require('http');
const port = 8000;
const host = 'localhost';
const server = http.createServer(function (req, res) {
  let body = ''

  req.on('data', chunk =>{
    body += chunk.toString()
  })

  req.on('end', () => {
    console.log(JSON.parse(body))
  })
  res.end()
});
server.listen(port, host, function () {});