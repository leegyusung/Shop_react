import styled from "styled-components";
import Button from "../common/Button";
import Responsive from "../common/Responsive";
import palette from "../../lib/style/palette";
import { withRouter } from "react-router";

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
    margin-bottom: 1.5rem;
`


const CartForm = ({ loading, cart, onRemove }) => {
    if (loading || !cart) return null;
    return (
        <CartFormBlock>
            <CartLabel><h3>장바구니</h3></CartLabel>
            {!loading && cart && (
                <>
                    {cart.map(data => (
                        <CartFormDiv key={data._id}>
                            <input type="checkbox"></input>
                            <img src={"http://localhost:3000/" + data.product.productFile} alt="" width="100px" height="80px"></img>
                            <span>{data.product.productName}</span>
                            <input type="number" defaultValue={data.cartAmount}></input>
                            <span>{data.cartSum}</span>
                            <Button cyan>구매</Button>
                            <Button onClick={() => onRemove(data._id)}>삭제</Button>
                        </CartFormDiv>
                    ))}
                </>
            )}
        </CartFormBlock>
    );
};

export default withRouter(CartForm);