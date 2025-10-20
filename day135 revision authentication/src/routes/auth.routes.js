const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const userExist = await userModel.findOne({
    username: username,
  });

  if (!userExist) {
    const user = await userModel.create({
      username: username,
      password: password
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.SCRET_KEY
    );

    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000), // 8 hours
    });

    res.status(201).json({
      message: "user registered successfully",
      user,
    });
  } else {
    return res.status(401).json({
      message: "username is already taken!",
    });
  }
});

router.get("/user", async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "unauthorized token not found",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SCRET_KEY);
    const user = await userModel.findById(decoded.id).select("-password");
    res.status(200).json({
      message: "user data found",
      user,
    });
  } catch (err) {
    return res.status(401).json({
      message: "invalid token",
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username: username,
  });

  if (!user) {
    return res.status(404).json({
      message: "invalid username",
    });
  }

  const ispasswordMatch = user.password == password;

  if (!ispasswordMatch) {
    return res.status(401).json({
      message: "invalid password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.SCRET_KEY
  );

  res.cookie("token", token, {
    expires: new Date(Date.now() + 8 * 3600000), // 8 hours
  });

  res.status(200).json({
    message: "user logged in successfully",
    user,
  });
});

router.get("/logout",(req,res)=>{
  res.clearCookie("token");
  res.status(200).json({
    message:"user logged out successfully"
  })
});

module.exports = router;
