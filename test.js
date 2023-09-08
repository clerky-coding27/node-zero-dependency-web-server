import * as fs from 'node:fs';
import path from 'node:path';
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;
const url = [];
const publicFolder = './public/';
const filesInPublic = [];

fs.readdirSync(publicFolder).forEach(function (dirContent) {
  dirContent = path.resolve(publicFolder, dirContent);
  if (fs.statSync(dirContent).isFile()) {
    filesInPublic.push(dirContent);
  } else if (fs.statSync(dirContent).isDirectory()) {
    fs.readdirSync(dirContent).forEach(function (subDirContent) {
      subDirContent = path.resolve(dirContent, subDirContent);
      filesInPublic.push(subDirContent);
    });
  }
});

console.log(filesInPublic);

/*
const server = http
  .createServer((req, res) => {
    url.push(req.url);
    console.log(req.url)
    fs.readFile('/public' + req.url, function (err, filedata) {
      if (err) {
        //   Handling error
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      //   serving file to the server
      res.writeHead(200);
      res.end(filedata);
    });
  })
  .listen(80, 'localhost');

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
