// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("check localhost 5000");
//   res.end();
// });

// **************************************************************

// // EXAMPLE 2

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("home page");
//   } else if (req.url === "/about") {
//     res.end("about page");
//   } else {
//     res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page you are looking for</p>
//         <a href="/">back home</a>
//       `);
//   }
// });

// server.listen(5000);

// **************************************************************

// // EXAMPLE 3

const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("../express-tutorial/navbar-app/index.html");
const styles = fs.readFileSync("../express-tutorial/navbar-app/styles.css");
const logo = fs.readFileSync("../express-tutorial/navbar-app/logo.svg");
const logic = fs.readFileSync("../express-tutorial/navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  console.log("user hit tthe server");

  const url = req.url;

  if (url === "/") {
    // home
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }

  // about
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  // styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(styles);
    res.end();
  }
  // logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(logo);
    res.end();
  }
  // logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(logic);
    res.end();
  }
  // 404 not found
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5555, () => console.log("server is listening on port 5555..."));
