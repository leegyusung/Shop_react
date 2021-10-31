import HeaderContainer from "../containers/common/HeaderContainer";
import ReadContainer from "../containers/comment/ReadContainer";
import EditorButtonContainer from "../containers/comment/EditorButtonContainer";
import ReplyContainer from "../containers/reply/ReplyContainer";

const CommentPage = () => {
    return (
        <div>
            <HeaderContainer></HeaderContainer>
            <ReadContainer type="게시글"></ReadContainer>
            <EditorButtonContainer type="read"></EditorButtonContainer>
            <ReplyContainer></ReplyContainer>
        </div>
    );
};

export default CommentPage;