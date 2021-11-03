const express = require('express');
const commentCtrl = require('./commentCtrl');

const comment = express.Router();

comment.get('/', commentCtrl.list)
comment.post('/@:username', commentCtrl.register)
comment.get('/:commentId', commentCtrl.getComment);
comment.put('/:commentId', commentCtrl.update)

module.exports = comment;