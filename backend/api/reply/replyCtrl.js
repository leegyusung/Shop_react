const Reply = require('../../models/reply');
const Comment = require('../../models/comment');

exports.getReply = async (req, res) => {
    try {
        const replys = await Reply.find().populate('user').exec();
        res.json(replys);
    } catch (error) {
        return res.status(400).send(error);
    }
}

exports.register = async (req, res) => {
    const { replyContent, user, comment } = req.body;
    try {
        const reply = new Reply({
            replyContent: replyContent,
            user: user,
            comment: comment
        })
        await reply.save();
        // const result = await Comment.findByIdAndUpdate(comment, {
        //     commentReply: reply._id,
        // }, {
        //     new: true,
        // }).exec();
        res.json(reply);
    } catch (error) {
        return res.status(400).send(error);
    }
}