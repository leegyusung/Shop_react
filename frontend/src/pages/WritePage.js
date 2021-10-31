import HeaderContainer from "../containers/common/HeaderContainer";
import WriteContainer from "../containers/comment/WriteContainer";
import EditorButtonContainer from "../containers/comment/EditorButtonContainer";


const WritePage = () => {
    return (
        <div>
            <HeaderContainer></HeaderContainer>
            <WriteContainer type="글쓰기"></WriteContainer>
            <EditorButtonContainer type="write"></EditorButtonContainer>
        </div>
    );
};

export default WritePage;