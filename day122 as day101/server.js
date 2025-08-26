const express = require("express");
const connectToDb = require("./src/db/db");
const noteModel = require("./src/models/note.model");

connectToDb();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("welcome to the backend page");
});

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  noteModel.create({
    title: title,
    content: content,
  });
  res.json({
    message: "notes added successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.json({
    notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  await noteModel.findOneAndDelete({
    _id: noteId,
  });
  res.json({
    message: "notes deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  const { content } = req.body;
  await noteModel.findOneAndUpdate(
    {
      _id: noteId,
    },
    {
      content: content,
    }
  );
  res.json({
    message: "notes update successfully",
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
