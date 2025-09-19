const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();
/*

/register
/login
/user
/logout

*/

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const isUser = await userModel.findOne({
    username: username,
  });

  if (!isUser) {
    const user = await userModel.create({
      username,
      password,
    });

    console.log(user);

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);
    
    res.status(201).json({
      message: "user registered successfully",
      users: user,
    });
  } else {
    return res.status(401).json({
      message: "Entered username is already have an account, please login",
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username: username,
  });

  if (!user) {
    return res.status(401).json({
      message: "user account not found",
    });
  }

  const isPasswordValid = password == user.password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "invalid password",
    });
  }

  res.status(200).json({
    message: "user loggedin successfully",
    user,
  });
});

router.get("/user", async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized, token not found",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userExist = await userModel
      .findOne({
        _id: decoded.id,
      })
      .select("-password");

    res.status(200).json({
      message: "user data fetched successfully",
      userExist,
    });
  } catch (err) {
    return res.status(401).json({
      message: err,
    });
  }
});

module.exports = router;
