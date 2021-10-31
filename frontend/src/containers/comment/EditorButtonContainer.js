import EditorButton from '../../components/comment/EditorButton';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { registerComment, initForm, updateComment, getComment } from '../../modules/comment';
import { useEffect, useState } from 'react';

const EditorButtonContainer = ({ match, history, type }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { commentId } = match.params;
    const dispatch = useDispatch();
    const { comment, commentSucess, commentError } = useSelector(({ comment }) => ({
        comment: comment.comment,
        commentSucess: comment.commentSucess,
        commentError: comment.commentError
    }))
    const [role, setRole] = useState(false);

    const onCancel = () => {
        history.goBack();
    }
    const onSubmit = () => {
        dispatch(registerComment({
            commentTitle: comment.commentTitle,
            commentContent: comment.commentContent,
            user: user._id,
            username: user.username
        }))
    }

    const onUpdate = () => {
        const result = window.confirm('게시글을 수정 하시겠습니까?');
        if (!result) return;
        dispatch(updateComment({
            commentId,
            commentTitle: comment.commentTitle,
            commentContent: comment.commentContent
        }))
        dispatch(getComment({ commentId }))
    }

    useEffect(() => {
        if (commentSucess) {
            dispatch(initForm());
            history.push('/comment')
        }
        if (commentError)
            console.log(commentError)
    })

    useEffect(() => {
        if (user._id === comment.commentUser._id) {
            setRole(true);
        }
    }, [user, comment, role])

    return (
        <EditorButton
            role={role}
            type={type}
            onCancel={onCancel}
            onSubmit={onSubmit}
            onUpdate={onUpdate}
        >
        </EditorButton>
    );
};

export default withRouter(EditorButtonContainer);