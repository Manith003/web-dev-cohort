require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");
const http = require("http");
const { initSocketServer } = require("./src/sockets/socket.server");

connectDB();
const httpServer = http.createServer(app);
initSocketServer(httpServer);

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
