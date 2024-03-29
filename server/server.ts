const http = require("http"),
  serverApp = require("./app"),
  errorHandler = require("./middlewares/error");

const normalizePort = (
    val: number | string | false
  ): number | string | false => {
    let port = parseInt(val.toString(), 10);
    return isNaN(port) ? val : port >= 0 && port;
  },
  port: number | string | false = normalizePort(
    (process.env.PORT as string) || (process.env.ORIGINALPORT as string)
  );

serverApp.set("port", port);

const server = http.createServer(serverApp);

server.on("error", (e: NodeJS.ErrnoException) => {
  console.error(e);
  process.exit(1);
});
server.on("listening", () => {
  let address = server.address(), // Permet de récuperer l'addresse IP et le numéro de port que le serveur écoute
    addressType: string | number =
      "string" === typeof address ? "pipe " + address : "port " + port; //Si l'addresse est de type "string", on récupèreune addresse de type "pipe" et la variable
  // prends la valeur "pipe suivi de l'adresse", si non elle prends la valeur "port suivi le numéro de port"
  console.log(`Listening on ${addressType}`);
}),
  serverApp.use(errorHandler);

server.listen(port);  
