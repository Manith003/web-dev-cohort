require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateContent = require("./src/services/ai.service");

const httpServer = createServer(app);
const io = new Server(httpServer,{
  cors:{
    origin: "http://localhost:5173",
  }
});

const chatHistory = [];

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", async (data) => {
    chatHistory.push({
      role: "user",
      parts: [{ text: data }],
    });

    const result = await generateContent(chatHistory);
    socket.emit("ai-response", result);

    chatHistory.push({
      role: "model",
      parts: [{ text: result }],
    });
    
    chatHistory.forEach((mess) => {
      console.log(`${mess.role.toUpperCase()}: ${mess.parts[0].text}`);
    });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

httpServer.listen(3000, () => {
  console.log("server is running on port 3000");
});
