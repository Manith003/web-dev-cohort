const express = require('express');
const authUserMiddleware = require('../middlewares/auth.middleware');
const chatController = require('../controller/chat.controller');

const router = express.Router();

/* /api/chat */
router.post('/',authUserMiddleware.authUser, chatController.createChat)

module.exports = router;