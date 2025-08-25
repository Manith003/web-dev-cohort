const express = require("express");
const app = express();

app.use(express.json());

let notes = [];
app.get("/", (req, res) => {
  res.send("welcome to cohort");
});

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "notes added successfully",
    note: notes,
  });
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  notes.splice(index, 1);
  res.json({
    message: "notes deleted sucessfully",
    note: notes,
  });
});

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const { title } = req.body;

  notes[index].title = title;

  res.send("notes updates sucessfully");
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
