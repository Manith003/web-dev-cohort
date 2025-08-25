const express = require("express");
const app = express();

app.use(express.json()); // this is middleware

let notes = [];
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "note added sucessfully",
    notes: notes,
  });
});

app.listen(3000, () => {
  console.log("server running on 3000");
});
