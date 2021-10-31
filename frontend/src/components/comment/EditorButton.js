import Button from "../common/Button";
import styled from "styled-components";
import Responsive from '../common/Responsive'

const EditorButtonBlock = styled(Responsive)`
    margin-top: 1rem;
`


const EditorButton = ({ role, type, onCancel, onSubmit, onUpdate }) => {
    const formType = {
        read: 'read',
        write: 'write'
    }

    return (
        <EditorButtonBlock>
            {formType[type] === 'write' ? (
                <>
                    <Button fullWidth cyan onClick={onSubmit} >등록</Button>
                    <Button fullWidth onClick={onCancel}>취소</Button>
                </>) : (
                <>
                    <Button fullWidth cyan onClick={onUpdate} disabled={!role}>수정</Button>
                    <Button fullWidth onClick={onCancel}>취소</Button>
                </>)}

        </EditorButtonBlock>
    );
};

export default EditorButton;