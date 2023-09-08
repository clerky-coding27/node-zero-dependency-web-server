import * as fs from 'node:fs';
import path from 'node:path';
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;
let url = [];
const publicFolder = './public/';
const filesInPublic = [];
let obj;
let searchedForURL;
let searchedForFile;
let searchedForFileURL;
let serverdata;

// loop through array to find keyword
function findKeyword() {
  for (let i = 0; i < filesInPublic.length; i++) {
    const filesInPublicNameWithSlash = `/${filesInPublic[i].name}`;
    if (filesInPublicNameWithSlash === searchedForURL) {
      searchedForFile = filesInPublic[i];
      console.log(
        'found match:' + searchedForURL + ' ' + filesInPublic[i].name,
      );
    }
  }
  return searchedForFile;
}

// Open file
function openFile() {
  fs.readFile(searchedForFileURL, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    serverdata = `${data}`;
    console.log(serverdata);
    return serverdata;
  });
}

// create server

const server = http.createServer((req, res) => {
  // Read all files in public folder and store them in an array
  fs.readdirSync(publicFolder).forEach(function (dirContent) {
    res.statusCode = 200;

    dirContent = path.resolve(publicFolder, dirContent);
    if (fs.statSync(dirContent).isFile()) {
      obj = { path: dirContent };
      obj.name = path.basename(obj.path);
      filesInPublic.push(obj);
    } else if (fs.statSync(dirContent).isDirectory()) {
      fs.readdirSync(dirContent).forEach(function (subDirContent) {
        subDirContent = path.resolve(dirContent, subDirContent);
        const subDirObj = {
          path: subDirContent,
        };
        subDirObj.name = path.basename(subDirObj.path);
        filesInPublic.push(subDirObj);
      });
    }
  });

  console.log(filesInPublic);

  // receive keyword from url request
  searchedForURL = req.url;

  // find match in files
  findKeyword(filesInPublic, searchedForURL);
  // return matched file
  searchedForFileURL = searchedForFile.path;
  console.log(searchedForFileURL);

  //  openFile(searchedForFileURL, serverdata);
  fs.readFile(searchedForFileURL, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    serverdata = data;
    console.log(data);
    res.write(serverdata);
    res.end();
  });
  // end server function ?
  // res.write();

  // res.end();
  return searchedForURL;
});

// server listening
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// open file

function send404(response) {
  response.writeHead(404, { 'Content-Type': 'text/plain' });
  response.write('Error 404: Resource not found.');
}
