import styled from "styled-components";
import palatte from '../../lib/style/palette';
import { Link } from "react-router-dom";

const HeaderBlock = styled.div`
    background-color: ${palatte.gray[7]};
    position: fixed;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
`
const Wrapper = styled.div`
height: 4rem;
display: flex;
align-items: center;
justify-content: space-between;
.logo{
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-left: 3rem;
}
.right{
    display: flex;
    align-items: center;
    margin-right: 3rem;
    font-size: 1rem;
    font-weight: 800;  
}
.logout{
    cursor: pointer;
}
`
const UserInfo = styled.div`
    display: flex;
    margin-right: 1rem;
    font-weight: 800; 
`

const ProductRegister = styled.div`
    display: flex;
    margin-right: 1rem;
    font-weight: 800; 
`
const Spacer = styled.div`
    height: 4rem;
`

const Header = ({ user, onLogOut }) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/">
                        <div className="logo">SHOP</div>
                    </Link>
                    {!user.username ? (
                        <Link to="/login">
                            <div className="right">
                                로그인
                            </div>
                        </Link>) : (
                        <div className="right">
                            <UserInfo>{user.username} 님</UserInfo>
                            {user.admin && (
                                <Link to="/product">
                                    <ProductRegister>상품등록</ProductRegister>
                                </Link>
                            )}
                            <div className="logout" onClick={onLogOut}>로그아웃</div>
                        </div>
                    )}
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;