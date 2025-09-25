require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/db/db");

connectToDb();

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
