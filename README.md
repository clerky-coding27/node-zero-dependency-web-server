# Node.js Web Server

Welcome to my Node.js command line program that creates a web server with zero dependencies, leveraging only the UpLeveled ESLint config dependencies in "dependencies" or "devDependencies" in package.json. This lightweight server is designed to serve the content of all files within a directory called "public."

👷 **This project is still under construction** 👷

## Features

- **Zero Dependencies:** This Node.js program is developed with no external dependencies, ensuring a minimalistic and lightweight solution.

- **Web Server:** The program creates a web server that runs on localhost.

- **Dynamic Content:** The server returns the content of all files in the "public" directory.

## Usage

Assuming the server is running on localhost:3000 and the "public" directory has files such as:

- memes/index.htm
- memes/1.jpg
- index.html
- index.css

The server should exhibit the following behavior:

- [http://localhost:3000](http://localhost:3000) and [http://localhost:3000/index.html](http://localhost:3000/index.html) return the webpage in the "index.html" file.

- [http://localhost:3000/index.css](http://localhost:3000/index.css) returns the text content of the "index.css" file.

- [http://localhost:3000/memes](http://localhost:3000/memes) and [http://localhost:3000/memes/index.htm](http://localhost:3000/memes/index.htm) return the webpage in the "index.htm" file within the "memes" folder.

- [http://localhost:3000/1.jpg](http://localhost:3000/1.jpg) displays the "1.jpg" image.

- [http://localhost:3000/non-existent-file.txt](http://localhost:3000/non-existent-file.txt) returns a 404 status code and a message about the file not being found.

Feel free to add any files and folders to the "public" directory, and the server will handle them accordingly.

## Tip for Replit Users

If you're using Replit, the running server can be observed by listening on 0.0.0.0 instead of localhost.

## How to Run

To run the server, simply execute the following command:

```bash
node server.js
