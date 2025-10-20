const express = require("express");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json()); //middleware to parse json bodies
app.use(cookieParser()); //middleware to parse cookies
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true, 
  })); 

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;
