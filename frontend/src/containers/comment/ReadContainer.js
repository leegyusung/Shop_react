import React, { useEffect } from 'react';
import ReadForm from '../../components/comment/ReadForm';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { getComment, changeField } from '../../modules/comment';

const ReadContainer = ({ type, match }) => {
    const { commentId } = match.params;
    const dispatch = useDispatch();
    const { comment } = useSelector(({ comment }) => ({
        comment: comment.comment,
    }))

    useEffect(() => {
        dispatch(getComment({ commentId }));
    }, [dispatch, commentId])

    const onChange = e => {
        const { name, value } = e.target;
        dispatch(changeField({
            key: name,
            value
        }))

    }

    return (
        <ReadForm
            onChange={onChange}
            comment={comment}
            type={type}
        ></ReadForm>

    );
};

export default withRouter(ReadContainer);