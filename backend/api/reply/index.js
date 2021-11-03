const express = require('express');
const replyCtrl = require('./replyCtrl');

const reply = express.Router();

reply.get('/', replyCtrl.getReply)
reply.post('/', replyCtrl.register)

module.exports = reply;