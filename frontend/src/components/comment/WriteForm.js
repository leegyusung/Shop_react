import styled from "styled-components";
import palette from "../../lib/style/palette";
import Responsive from "../common/Responsive";

const WriteFormBlock = styled(Responsive)`
    margin-top: 3rem;
`
const WriteLabel = styled.div`
    h3{
        text-decoration: solid;
        font-size: 40px;
        color: ${palette.gray[7]}
    }
`

const WriteFormTextDiv = styled.div`
    padding: 1rem 1rem 1rem 1rem ;
    border-radius: 0.5rem;
    border: 2px solid ${palette.gray[3]};
   // display: flex;
   // justify-content: space-around;
    align-items: center;
    margin-bottom: 1.5rem;
    
    input{
        border: none;
        width: 100%;
    }
`
const WriteFormTextAreaDiv = styled.div`
  padding: 1rem 1rem 1rem 1rem ;
    border-radius: 0.5rem;
    border: 2px solid ${palette.gray[3]};
   // display: flex;
   // justify-content: space-around;
    align-items: center;
    margin-bottom: 1.5rem;
    textarea{
        width: 100%;
        height: 100%;
        border: none;
        resize: none;
        
    }

`

const WriteForm = ({ type, comment, onChange }) => {
    return (
        <WriteFormBlock>
            <WriteLabel><h3>{type}</h3></WriteLabel>
            <WriteFormTextDiv>
                <input type="text" name="commentTitle" value={comment.commentTitle} placeholder="제목을 입력해주세요" onChange={onChange}></input>
            </WriteFormTextDiv>
            <WriteFormTextAreaDiv>
                <textarea name="commentContent" value={comment.commentContent} placeholder="내용을 입력해주세요" rows="25" onChange={onChange}></textarea>
            </WriteFormTextAreaDiv>
        </WriteFormBlock >
    );
};

export default WriteForm;