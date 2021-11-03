const Comment = require('../../models/comment');
const Reply = require('../../models/reply');
const Joi = require('joi');

exports.list = async (req, res) => {
    try {
        const comments = await Comment.find().exec();
        res.json(comments)
    } catch (error) {
        res.status(400)
    }
}

exports.getComment = async (req, res) => {
    const { commentId } = req.params;
    try {
        const replys = await Reply.find({ comment: commentId }).populate({ path: 'user' }).exec();
        console.log(replys);
        if (replys) {
            const result = await Comment.findByIdAndUpdate(commentId, {
                commentReply: replys,
            }, {
                new: true
            })
        }

        const comment = await Comment.findById(commentId).populate('commentReply').populate('user').exec();
        res.json(comment);
    } catch (error) {
        res.status(400)
    }
}

exports.register = async (req, res) => {
    const { commentContent, commentTitle, user } = req.body;
    try {
        const comment = new Comment({
            commentContent,
            commentTitle,
            user
        })
        await comment.save();
        res.json(comment);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async (req, res) => {
    const { commentId } = req.params;
    const { commentTitle, commentContent } = req.body;
    try {
        const comment = await Comment.findByIdAndUpdate(commentId, {
            commentTitle: commentTitle,
            commentContent: commentContent
        }).exec();
        res.json(comment)
    } catch (error) {
        res.status(400).send(error);
    }
}