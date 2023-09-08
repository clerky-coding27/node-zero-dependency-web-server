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

// Read all files in public folder and store them in an array

fs.readdirSync(publicFolder).forEach(function (dirContent) {
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

// create server & receive keyword from url request
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // url.push(req.url);
  searchedForURL = req.url;
  console.log(searchedForURL);

  res.end();
  return searchedForURL;
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
function matchKeywords() {
  for (let i = 0; i < filesInPublic.length; i++) {
    console.log(filesInPublic.name[i]);
    if (filesInPublic.name[i] === searchedForURL) {
      console.log(
        'found match:' + searchedForURL + ' ' + filesInPublic.name[i],
      );
    }
  }
}

matchKeywords();

*/

// loop through array to find keyword

/*
// look for keyword in array
let subArr = filesInPublic.findIndex((element) => element.includes(url));
console.log(subArr);
*/
