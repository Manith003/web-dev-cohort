const mongoose = require("mongoose");

const messageShema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "model", "system"],
    required: true,
  },
});

const messageModel = mongoose.model("message", messageShema);

module.exports = messageModel;
