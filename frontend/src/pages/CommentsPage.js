import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import CommentContainer from '../containers/comment/CommentContainer';

const CommentsPage = () => {
    return (
        <div>
            <HeaderContainer></HeaderContainer>
            <CommentContainer></CommentContainer>
        </div>
    );
};

export default CommentsPage;