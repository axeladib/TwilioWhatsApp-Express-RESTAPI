const express = require('express');
const router = express.Router();
const createMessage = require('../controllers/messageController');


//TODo: Send message from server to client
router.post("/send-message", createMessage);

module.exports = router;