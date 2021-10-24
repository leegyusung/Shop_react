import styled from "styled-components";
import Button from "../common/Button";
import Responsive from "../common/Responsive";
import palette from "../../lib/style/palette";

const CartFormBlock = styled(Responsive)`
    margin-top: 3rem;
`
const CartLabel = styled.div`
    h3{
        text-decoration: solid;
        font-size: 40px;
        color: ${palette.gray[7]}
    }
`
const CartFormDiv = styled.div`
    padding: 1rem 1rem 1rem 1rem ;
    border-radius: 0.5rem;
    border: 2px solid ${palette.gray[3]};
    display: flex;
    justify-content: space-around;
    align-items: center;
`


const CartForm = () => {
    return (
        <CartFormBlock>
            <CartLabel><h3>장바구니</h3></CartLabel>
            <CartFormDiv>
                <input type="checkbox"></input>
                <img src="다운로드.webp" alt=""></img>
                <span>12313</span>
                <input type="number"></input>
                <span>12313</span>
                <Button cyan>구매</Button>
                <Button>삭제</Button>
            </CartFormDiv>
        </CartFormBlock>
    );
};

export default CartForm;