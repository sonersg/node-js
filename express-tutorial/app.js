// // WITH HTTP MODULE

// const http = require("http");
// const fs = require("fs");

// const homePage = fs.readFileSync("./navbar-app/index.html");
// const styles = fs.readFileSync("./navbar-app/styles.css");
// const logo = fs.readFileSync("./navbar-app/logo.svg");
// const logic = fs.readFileSync("./navbar-app/browser-app.js");

// const server = http.createServer((req, res) => {
//   console.log("user hit tthe server");

//   const url = req.url;

//   if (url === "/") {
//     // home
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(homePage);
//     res.end();
//   }

//   // about
//   else if (url === "/about") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>about page</h1>");
//     res.end();
//   }
//   // styles
//   else if (url === "/styles.css") {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.write(styles);
//     res.end();
//   }
//   // logo
//   else if (url === "/logo.svg") {
//     res.writeHead(200, { "content-type": "image/svg+xml" });
//     res.write(logo);
//     res.end();
//   }
//   // logic
//   else if (url === "/browser-app.js") {
//     res.writeHead(200, { "content-type": "text/javascript" });
//     res.write(logic);
//     res.end();
//   }
//   // 404 not found
//   else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.write("<h1>page not found</h1>");
//     res.end();
//   }
// });

// server.listen(5555);

// // *************************************************************************

// // EXPRESS EXAMPLE 1

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   console.log("user hit the home page");
//   res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//   console.log("user hit the about page");
//   res.send("About Page");
// });

// app.all("*", (req, res) => {
//   console.log("not found page");
//   res.status(404).send("resouce not found");
// });

// app.listen(5555, () => {
//   console.log("Server is listening on port 5555...");
// });

// // app.get()
// // app.post()
// // app.put()
// // app.delete()
// // app.all()
// // app.use()
// // app.listen()

// // *************************************************************************

// // // EXPRESS EXAMPLE 2

// const express = require("express");
// const path = require("path");

// const app = express();

// app.use(express.static("./public")); // sets up static and middleware

// // app.get("/", (req, res) => {
// //   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// // });

// app.all("*", (req, res) => {
//   res.status(404).send("resouce not found");
// });

// app.listen(5555, () => {
//   console.log("Server is listening on port 5555...");
// });

// // app.get()
// // app.post()
// // app.put()
// // app.delete()
// // app.all()
// // app.use()
// // app.listen()

// // *************************************************************************

// // // EXPRESS EXAMPLE 3 - SENDING JSON DATA

// const express = require("express");

// const { products } = require("./data.js");

// const app = express();

// app.get("/", (req, res) => {
//   // res.json([{ name: "soner" }, { name: "sKerim" }]);
//   res.json(products);
// });

// app.listen(5555, () => {
//   console.log("Server is listening on port 5555...");
// });

// // *************************************************************************

// // // EXPRESS EXAMPLE 4

// const express = require("express");

// const { products } = require("./data.js");

// const app = express();

// app.get("/", (req, res) => {
//   res.send(`<h1>Home Page</h1>
//     <a href="/api/products">products</a>`);
// });

// app.get("/api/products", (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product;
//     return { id, name, image };
//   });
//   res.json(newProducts);
// });

// app.get("/api/products/:productID", (req, res) => {
//   // console.log(req)
//   // console.log(req.params)

//   const { productID } = req.params;

//   const singletProduct = products.find(
//     (product) => product.id === Number(productID)
//   );

//   if (!singletProduct) return res.status(404).send("not found");

//   return res.json(singletProduct);
// });

// app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
//   console.log(req.params);
//   res.send("review id");
// });

// app.listen(5555, () => {
//   console.log("Server is listening on port 5555...");
// });

// // *************************************************************************

// // // EXPRESS EXAMPLE 5 - QUERY

// const express = require("express");
// const { products } = require("./data");

// const app = express();

// app.get("/api/query", (req, res) => {
//   // console.log(req.query);
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];

//   if (search) {
//     sortedProducts = sortedProducts.filter((product) =>
//       product.name.startsWith(search)
//     );
//   }

//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit));
//   }

//   if (sortedProducts.length < 1) {
//     return res.status(200).send("item not found");
//   }

//   res.status(200).send(sortedProducts);
// });

// app.listen(5555, () => {
//   console.log("Server is listening on port 5555...");
// });

// // *************************************************************************

// // // EXPRESS MIDDLEWARE 1

// // req => middleware => res

// const express = require("express");

// const app = express();

// const logger = (res, req, next) => {
//   const method = req.method;
//   const url = req.url;
//   const date = new Date().getFullYear();
//   console.log(method, url, date);
//   next();
// };

// app.get("/", logger, (req, res) => {
//   res.send("home");
// });

// app.get("/about", (req, res) => {
//   res.send("about");
// });

// app.listen(5555, () => {
//   console.log("Server is listening on port 5555...");
// });

// // *************************************************************************

// // // EXPRESS MIDDLEWARE 2

// // req => middleware => res

const express = require("express");

const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date);
  next();
};

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "soner") {
    req.user = { name: "soner", id: 1 };
    next();
    console.log("authorize");
  } else {
    res.status(401).send("unauthorized");
  }
};

// app.use(logger)
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  console.log(req.user);
  res.send("about");
});

app.listen(5555, () => {
  console.log("Server is listening on port 5555...");
});
