require("dotenv").config();
const app = require("./src/app.js");
const connectToDb = require("./src/db/db.js");

connectToDb();

app.get("/", (req, res) => {
  res.send("hello manith");
}); 

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
