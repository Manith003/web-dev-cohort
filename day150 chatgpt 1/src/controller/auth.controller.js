const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const {
    fullName: { firstName, lastName },
    email,
    password,
  } = req.body;

  const isUserExist = await userModel.findOne({ email });

  if (isUserExist) {
    return res.status(400).json({
      message: "User already exists! Please login.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new userModel({
    fullName: {
      firstName: firstName,
      lastName: lastName,
    },
    email: email,
    password: hashedPassword,
  });

  await newUser.save();

  const token = jwt.sign(
    {
      id: newUser._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: newUser,
  });
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  const userExist = await userModel.findOne({
    email,
  });

  if (!userExist) {
    return res.status(400).json({
      message: "invalid email",
    });
  }

  const isPasswordCorrect = await bcrypt.compare(password, userExist.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({
      message: "invalid password",
    });
  }

    const token = jwt.sign({
        id: userExist._id,
    },process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(200).json({
        message: "User logged in successfully",
        user: userExist,
    });

}

module.exports = {
  registerUser,
  loginUser
};
