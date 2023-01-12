const http = require("http"),
  app = require("./app");
const errorHandler = require("./middlewares/error");

app.use(errorHandler);

const normalizePort = (val) => {
    let port = parseInt(val, 10);
    return isNaN(port) ? val : port >= 0 && port;
  },
  port = normalizePort(process.env.PORT || process.env.ORIGINALPORT);

app.set("port", port);

const server = http.createServer(app);

server.on("error", (e) => {
  console.error(e);
  process.exit(1);
});
server.on("listening", () => {
  let e = server.address(),
    r = "string" == typeof e ? "pipe " + e : "port " + port;
  console.log(`Listening on ${r}`);
}),
  server.listen(port);
