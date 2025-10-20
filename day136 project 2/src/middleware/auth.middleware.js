const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access, please login first.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret);
    const user = await userModel
      .findOne({
        _id: decoded.id,
      })
      .select("-password");
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid token, please login again",
    });
  }
}

module.exports = authMiddleware;
