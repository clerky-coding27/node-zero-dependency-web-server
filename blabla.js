import * as fs from 'node:fs';
import path from 'node:path';
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;
let serverdata;

fs.readFile(
  '/Users/claramrkos/projects/node-zero-dependency-web-server/public/index.html',
  'utf8',
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    serverdata = data;
    console.log(data);
  },
);

ttp.createServer((req, res) => {
  res.statusCode = 200;
  res.write(serverdata);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
