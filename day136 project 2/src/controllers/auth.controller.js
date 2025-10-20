const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");

async function registerController(req, res) {
  const { username, password } = req.body;

  const isUserPresent = await userModel.findOne({ username });

  if (isUserPresent) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  const newUser = await userModel.create({
    username,
    password: await bycrypt.hash(password, 10),
  });

  const token = jwt.sign(
    {
      id: newUser._id,
    },
    process.env.jwt_secret
  );

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  return res.status(201).json({
    message: "User registered successfully",
    user: newUser,
  });
}

async function loginController(req, res) {
  const { username, password } = req.body;

  const userExist = await userModel.findOne({ username });

  if (!userExist) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const isPasswordCorrect = await bycrypt.compare(password, userExist.password);

  if (!isPasswordCorrect) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: userExist._id,
    },
    process.env.jwt_secret
  );

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.status(200).json({
    message: "Login successful",
    user: userExist,
  });
}

async function logoutController(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "Logout successful",
  });
}

async function userController(req, res) {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({
      message: "unauthorized token not found. login first",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret);
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
}

module.exports = {
  registerController,
  loginController,
  logoutController,
  userController,
};
