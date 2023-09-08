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
  if (fs.statSync(dirContent).isDirectory()) {
    fs.readdirSync(publicFolder).forEach(function (dirContent) {
      dirContent = path.resolve(publicFolder, dirContent);
      filesInPublic.push(dirContent);
    });
  }
  if (fs.statSync(dirContent).isFile()) {
    filesInPublic.push(dirContent);
  }
});

console.log(filesInPublic);

/*
// Function to get current filenames
// in directory with "withFileTypes"
// set to "true"

fileObjs = fs.readdirSync(__dirname, { withFileTypes: true });

console.log('\nCurrent directory files:');
fileObjs.forEach((file) => {
  console.log(file);
});
*/

/*
s.readdirSync(publicFolder).forEach(() => {
  const fileObject = new
  const pathName = path.resolve();
  if (fs.statSync(pathName).isDirectory()) {
    // If it is a directory, recursively call the getFiles function with the directory path and the files array

    getFiles(pathName, filesInPublic);
  } else {
    // If it is a file, push the full path to the files array
    filesInPublic.push(pathName);
  }
  return filesInPublic;
});

*/

/*
    filesInPublic.push(file);
  */

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
