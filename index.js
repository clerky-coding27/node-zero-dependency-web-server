import * as fs from 'node:fs';
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write(req.url);
  console.log(req.url);
  console.log(`http://localhost:3000${req.url}`);

  fs.readFile(`http://localhost:3000${req.url}`, 'utf8', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
