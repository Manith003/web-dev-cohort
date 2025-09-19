require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/db/db");

connectToDb();

app.get("/", (req, res) => {
  res.send("hello express js");
});

app.listen(3000, () => {
  console.log("server runnning on port 3000");
});
