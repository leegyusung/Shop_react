import styled from "styled-components";
import palette from "../../lib/style/palette";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const AuthFormBlock = styled.div`
h3{
    margin: 0;
    color:${palette.gray[8]};
    margin-bottom: 1rem;
}
`;

const StyledInput = styled.input`
font-size: 1rem;
border: none;
border-bottom: 1px solid ${palette.gray[5]};
padding-bottom: 0.5rem;
outline: none;
width: 100%;
&:focus{
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
}
&+&{
    margin-top: 1rem;
}
`;

const StyledSelectBlock = styled.div`
    margin-top: 0.5rem;
    span{
    color:${palette.gray[8]};
    }
`

const StyledSelect = styled.select`
    width: 80%;
    float: right;
`

const Footer = styled.div`
margin-top: 2rem;
text-align: right;
a{
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover{
        color: ${palette.gray[9]};
    }
}
`;

const textMap = {
    login: '로그인',
    register: '회원가입'
};

const AuthForm = ({ type, form, onChangeField, onSubmit }) => {
    const text = textMap[type];

    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput type="text" name="username" placeholder="아이디" value={form.username} onChange={onChangeField}></StyledInput>
                <StyledInput type="password" name="password" placeholder="비밀번호" value={form.password} onChange={onChangeField}></StyledInput>
                {type === "register" ? (
                    <>
                        <StyledInput type="password" name="passwordConfirm" placeholder="비밀번호 확인" value={form.passwordConfirm} onChange={onChangeField}></StyledInput>
                        <StyledSelectBlock><span>관리자 :</span>
                            <StyledSelect name="admin" value={form.admin} onChange={onChangeField}>
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </StyledSelect>
                        </StyledSelectBlock>
                    </>
                ) : null}
                <Button cyan fullWidth>{text}</Button>
            </form>
            <Footer>
                {type === "login" ? (<Link to="/register">회원가입</Link>) : (<Link to="/login">로그인</Link>)}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;