const express = require('express');
const router = express.Router();
const {createMessage, replyMessage} = require('../controllers/messageController');


//TODo: Send message from server to client
router.post("/send-message", createMessage);

//TODO: Reply the incoming message from client
router.post("/reply", replyMessage );

module.exports = router;