import Button from "../common/Button";
import styled from "styled-components";
import Responsive from '../common/Responsive'

const EditorButtonBlock = styled(Responsive)`
    margin-top: 1rem;
`


const EditorButton = ({ onCancel, onSubmit }) => {
    return (
        <EditorButtonBlock>
            <Button fullWidth cyan onClick={onSubmit}>등록</Button>
            <Button fullWidth onClick={onCancel}>취소</Button>
        </EditorButtonBlock>
    );
};

export default EditorButton;