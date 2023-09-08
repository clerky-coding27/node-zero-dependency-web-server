import * as fs from 'node:fs';
import path from 'node:path';
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;
let url = [];
const publicFolder = './public/';
const filesInPublic = [];

// Read all files in public folder and store them in an array

fs.readdirSync(publicFolder).forEach(function (dirContent) {
  dirContent = path.resolve(publicFolder, dirContent);
  if (fs.statSync(dirContent).isFile()) {
    const obj = { path: dirContent };
    filesInPublic.push(obj);
  } else if (fs.statSync(dirContent).isDirectory()) {
    fs.readdirSync(dirContent).forEach(function (subDirContent) {
      subDirContent = path.resolve(dirContent, subDirContent);
      const subDirObj = {
        path: subDirContent,
      };
      filesInPublic.push(subDirObj);
    });
  }
});
console.log(filesInPublic);

// create server & receive keyword from url request
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  url.push(req.url);
  const subArr = filesInPublic.findIndex(() => filesInPublic.includes(url));
  console.log(subArr);

  console.log(url);
  res.end();
  return;
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
// look for keyword in array
let subArr = filesInPublic.findIndex((element) => element.includes(url));
console.log(subArr);
*/
