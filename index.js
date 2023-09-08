/*
import * as fs from 'node:fs';
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;
const url = [];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  url.push(req.url);

  console.log(url);

  // console.log(`http://localhost:3000${url}`);

  fs.open(`./public${url[0]}`, 'r', function (err, f) {
    console.log(`./public${url[0]}`);
    /*
    fs.readFile(`./public${url[0]}`, 'utf8', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`./public${url[0]}`);

  });

  return res.end();
});

// console.log(url);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/
