const postModel = require("../models/post.model");
const generateCaption = require("../services/ai.service");

async function createPostController(req, res) {
  const file = req.file;
  const base64Image = Buffer.from(file.buffer).toString("base64");

  const caption = await generateCaption(base64Image);
  console.log("Generated caption:", caption);
  res.status(201).json({ caption });
}

module.exports = { createPostController };
