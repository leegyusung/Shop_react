const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema({
    commentTitle: String,
    commentContent: String,
    // commentReply: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Reply',
    // }],
    //commentReply: [Schema.Types.Mixed],
    commentReply: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reply',

        }
    ],
    publishedDate: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;