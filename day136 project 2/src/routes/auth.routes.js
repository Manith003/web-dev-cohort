const express = require("express");
const { registerController, loginController, logoutController, userController } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);
router.get("/user", userController);

module.exports = router;
