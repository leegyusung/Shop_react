import React, { useEffect } from 'react';
import CommentForm from '../../components/comment/CommentForm';
import { getList, initForm } from '../../modules/comment';
import { useDispatch, useSelector } from 'react-redux';

const CommentContainer = () => {
    const dispatch = useDispatch();
    const { comments, loading } = useSelector(({ comment }) => ({
        comments: comment.comments,
        loading: comment.loading
    }))

    useEffect(() => {
        dispatch(initForm())
    }, [dispatch])

    useEffect(() => {
        dispatch(getList())
    }, [dispatch])

    return (
        <CommentForm
            comments={comments}
            loading={loading}
        ></CommentForm>
    );
};

export default CommentContainer;