import React, { useEffect } from 'react';
import ReplyForm from '../../components/reply/ReplyForm'
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initForm, registerReply } from '../../modules/reply';
import { getComment } from '../../modules/comment';
import { withRouter } from 'react-router';

const ReplyContainer = ({ match }) => {
    const { commentId } = match.params;
    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();
    const { reply, replySuccess, replyError, comment, loading } = useSelector(({ reply, comment }) => ({
        reply: reply.reply,
        replySuccess: reply.replySuccess,
        replyError: reply.replyError,
        comment: comment.comment,
        loading: comment.loading
    }))

    const onChange = e => {
        const { name, value } = e.target;
        dispatch(changeField({
            key: name,
            value
        }))
    }
    const onSubmit = e => {
        e.preventDefault();
        if (reply.replyContent === "") return alert('댓글을 입력해주세요');

        dispatch(registerReply({
            replyContent: reply.replyContent,
            user: user._id,
            comment: commentId
        }))
    }
    useEffect(() => {
        dispatch(initForm());
    }, [dispatch])

    useEffect(() => {
        if (replySuccess) {
            dispatch(getComment({ commentId }))
            dispatch(initForm());
        }
        if (replyError) {
            console.log(replyError)
        }
    }, [replyError, replySuccess, dispatch, commentId])

    return (
        <ReplyForm
            onSubmit={onSubmit}
            onChange={onChange}
            reply={reply}
            comment={comment}
            loading={loading}
        />
    );
};

export default withRouter(ReplyContainer);