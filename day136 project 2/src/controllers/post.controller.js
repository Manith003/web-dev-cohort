const postModel = require("../models/post.model");
const generateCaption = require("../services/ai.service");
const uploadFile = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");

// async function createPostController(req, res) {
//   const file = req.file;
//   const base64Image = Buffer.from(file.buffer).toString("base64");

//   const aiResponse = await generateCaption(base64Image);
//   const captionText =
//     typeof aiResponse === "string"
//       ? aiResponse.trim()
//       : aiResponse?.text?.trim() || "No caption generated.";

//   const result = await uploadFile(file.buffer, `${uuidv4()}`);
//   const newPost = await postModel.create({
//     image: result.url,
//     caption: captionText,
//     user: req.user._id,
//   });
//   res.status(201).json({
//     message: "Post created successfully",
//     post: {
//       image: newPost.image,
//       caption: captionText,
//     },
//   });
// }

async function createPostController(req, res) {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No image file uploaded." });
    }

    const base64Image = Buffer.from(file.buffer).toString("base64");

    // Generate caption from AI
    const aiResponse = await generateCaption(base64Image);
    const captionText =
      typeof aiResponse === "string"
        ? aiResponse.trim()
        : aiResponse?.text?.trim() || "No caption generated.";

    // Upload image to your storage (e.g., Cloudinary, Firebase, etc.)
    const result = await uploadFile(file.buffer, `${uuidv4()}`);

    // Save post to DB
    const newPost = await postModel.create({
      image: result.url,
      caption: captionText,
      user: req.user._id,
    });

    // Send clean data to frontend
    res.status(201).json({
      message: "Post created successfully",
      post: {
        image: newPost.image,
        caption: captionText, // 👈 always a string now
      },
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({
      message: "Error generating post caption.",
      error: error.message,
    });
  }
}

module.exports = { createPostController };
