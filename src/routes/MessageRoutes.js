const express = require('express');
const MessageController = require('../controllers/MessageController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/send', authMiddleware, MessageController.sendMessage);
router.get('/messages', authMiddleware, MessageController.getMessages);

module.exports = router;
