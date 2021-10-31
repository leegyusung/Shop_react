import styled from "styled-components";
import Button from "../common/Button";
import Responsive from "../common/Responsive";
import palette from "../../lib/style/palette";
import PurChaseDetailContainer from "../../containers/purchase/PurChaseDetailContainer";
import CartContainer from '../../containers/purchase/CartContainer';
import CommentContainer from '../../containers/comment/CommentContainer';
import { withRouter } from "react-router";
import qs from 'query-string'

const MypageFormBlock = styled.div`
    margin-top: 1.5rem;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
`

const MypageLabel = styled.div`
    h3{
        text-decoration: solid;
        font-size: 40px;
        color: ${palette.gray[7]}
    }
`
const MypageNav = styled.div`
    margin: 0;
    width: 200px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 10rem;
    margin-left: 5rem;
    margin-right: 5rem;
    display: flex;
    flex-direction: column;

    .nav{
        border: 1px solid ${palette.gray[2]};
        padding-top: 1rem;
        text-align: left;
        padding-left: 1rem;
        padding-bottom: 1rem;
        font-weight: bold;
        &:hover{
            background-color: ${palette.cyan[5]};
            color: white;
        }
    }
`

const ResponsiveBlock = styled(Responsive)`
    margin-top: -170px;
`

const PurchaseDetailBlock = styled(Responsive)`
    margin-top: 3rem;

    button{
        margin-bottom: 1rem;
        margin-left: 59rem;
    }

`

const PurchaseDetailDiv = styled.div`
    padding: 1rem 1rem 1rem 1rem ;
    border-radius: 0.5rem;
    border: 2px solid ${palette.gray[3]};
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
`
const PurchaseDetailLabel = styled.div`
    h3{
        text-decoration: solid;
        font-size: 40px;
        color: ${palette.gray[7]}
    }
`

export const PurchaseDetail = ({ loading, purchase }) => {
    if (loading || !purchase) return null;

    return (
        <PurchaseDetailBlock>
            <PurchaseDetailLabel><h3>구매정보</h3></PurchaseDetailLabel>
            {purchase && (
                <>
                    {purchase.map(data =>
                        <PurchaseDetailDiv key={data._id}>
                            <img src={"/" + data.product.productFile} alt="" width="100px" height="80px"></img>
                            <span>{data.product.productName}</span>
                            <span>{data.purchaseAmount}</span>
                            <span>{data.purchaseSum}</span>
                        </PurchaseDetailDiv>)}
                </>
            )}
        </PurchaseDetailBlock>
    )
}


const CartDetail = () => {
    return (
        <CartContainer>

        </CartContainer>
    )
}

const CommentDetail = () => {
    return (
        <CommentContainer>
        </CommentContainer>
    )
}


const MypageForm = ({ location }) => {
    const { mypage } = qs.parse(location.search)
    return (
        <>
            <MypageFormBlock>
                <MypageNav>
                    <a href="?mypage=purchase" className="nav">구매정보</a>
                    <a href="?mypage=cart" className="nav">장바구니</a>
                    <a href="?mypage=comment" className="nav">게시글</a>
                </MypageNav>
                <MypageLabel><h3>마이페이지</h3></MypageLabel>
            </MypageFormBlock>
            <ResponsiveBlock>
                {mypage === "purchase" ? (<PurChaseDetailContainer></PurChaseDetailContainer>) : null}
                {mypage === "cart" ? (<CartDetail></CartDetail>) : null}
                {mypage === "comment" ? (<CommentDetail></CommentDetail>) : null}

            </ResponsiveBlock>
        </>
    );
};

export default withRouter(MypageForm);