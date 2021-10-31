import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";
import Responsive from "../common/Responsive";

const ReadFormBlock = styled(Responsive)`
    margin-top: 3rem;
`

const ReadLabel = styled.div`
    h3{
        text-decoration: solid;
        font-size: 40px;
        color: ${palette.gray[7]}
    }
`

const ReadFormTextDiv = styled.div`
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
const ReadFormTextAreaDiv = styled.div`
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
const ReadForm = ({ type, comment, onChange }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [role, setRole] = useState(true);
    useEffect(() => {
        if (user._id === comment.commentUser._id) {
            setRole(false);
        }
    }, [comment, user])

    return (
        <ReadFormBlock>
            <ReadLabel><h3>{type}</h3></ReadLabel>
            <ReadFormTextDiv>
                <input type="text" name="commentTitle" value={comment.commentTitle} placeholder="제목을 입력해주세요" onChange={onChange} disabled={role}  ></input>
            </ReadFormTextDiv>
            <ReadFormTextAreaDiv>
                <textarea name="commentContent" value={comment.commentContent} placeholder="내용을 입력해주세요" rows="25" onChange={onChange} disabled={role} ></textarea>
            </ReadFormTextAreaDiv>
        </ReadFormBlock>
    );
};

export default ReadForm;