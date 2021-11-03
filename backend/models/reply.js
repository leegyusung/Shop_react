const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReplySchema = new Schema({
    replyContent: String,
    publishedDate: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: true
    }
})

const Reply = mongoose.model("Reply", ReplySchema);

module.exports = Reply;