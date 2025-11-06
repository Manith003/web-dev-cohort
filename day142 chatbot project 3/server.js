require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateContent = require("./src/services/ai.service");

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("A user connected");



  socket.on("userMessage", async (msg) => {
    const result = await generateContent(msg);
    console.log("AI Response:", result);
    socket.emit("aiResponse", result);
  });



    socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

httpServer.listen(3000, () => {
  console.log("server is running on port 3000");
});
