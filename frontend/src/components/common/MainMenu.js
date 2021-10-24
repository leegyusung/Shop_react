import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import picA from '../../image/mypage.png';
import picB from '../../image/buy.png';
import picC from '../../image/online-shop.png';
import picD from '../../image/comment.png';
import { Link } from 'react-router-dom';

const MainMenuBlock = styled.div`
    display: flex;
    margin: 300px auto;
`

const CategoryForm = styled.div`
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    border: 2px solid ${palette.gray[5]};
    width: 300px;
    height: 200px;
    text-align: center;
    border-radius: 20px;
    border-style: solid;
    &+&{
        margin-left: 4rem;
    }
`
const StyledImage = styled.img`
    width: 100px;
    height: 100px;
    margin-top: 2rem;
`

const MainMenu = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <MainMenuBlock>
            {user && (<CategoryForm>
                <StyledImage src={picA}></StyledImage>
                <div>
                    <h4>
                        마이페이지
                    </h4>
                </div>
            </CategoryForm>)}
            <CategoryForm>
                <Link to='/products'>
                    <StyledImage src={picB}></StyledImage>
                    <div>
                        <h4>
                            상품보기
                        </h4>
                    </div>
                </Link>
            </CategoryForm>
            {user && (<CategoryForm>
                <Link to={`/cart/@${user.username}`}>
                    <StyledImage src={picC}></StyledImage>
                    <div>
                        <h4>
                            장바구니
                        </h4>
                    </div>
                </Link>
            </CategoryForm>)}
            <CategoryForm>
                <StyledImage src={picD}></StyledImage>
                <div>
                    <h4>
                        게시판
                    </h4>
                </div>
            </CategoryForm>
        </MainMenuBlock >
    );
};

export default MainMenu;