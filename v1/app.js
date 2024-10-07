const http = require('http');
const port = 8000;
const host = 'localhost';
const server = http.createServer(function (req, res) {res.end()});
server.listen(port, host, function () {});