const connect = require("connect");
const serveStatic = require("serve-static");
const path = require("path");

/**
 * Construct path to main index.html
 * @type {string}
 */
const distPath = path.join(__dirname, "..", "Front-end", "dist");

/**
 * Connect to server
 */
connect()
  .use(serveStatic(distPath))
  .listen(8080, () => console.log("Server running on 8080..."));
