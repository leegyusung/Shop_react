import styled from "styled-components";
import Responsive from "../common/Responsive";
import palette from "../../lib/style/palette";
import Button from "../common/Button";
import { withRouter } from "react-router";

const PurChaseFormBlock = styled(Responsive)`
 margin-top: 3rem;
`

const PurChaseDiv = styled.div`
     border: none;
     border-radius: 5px;
     height: 700px;
     width: 100%;
     .left{
         width: 50%;
         height: 50%;
         float: left;
         box-sizing: border-box;
     }
     .right{
         width: 50%;
         height: 50%;
         float: right;
         box-sizing: border-box;
     }
     span{
         color: ${palette.gray[7]};
         word-spacing: 1rem;
         letter-spacing: 0.5ch;
     }
     .button-div{
         margin-top: 8rem;
     }
     .productAmount{
         width: 100px;
     }
     .item-sold{
         color: red;
     }
`

const PurChaseLabel = styled.div`
    h3{
        text-decoration: solid;
        font-size: 40px;
        color: ${palette.gray[7]}
    }
`


const PurChaseForm = ({ form, loading, cartAmount, onChange, onCart, onPurchase }) => {

    if (loading || !form) return null;

    return (
        <PurChaseFormBlock>
            <PurChaseLabel><h3><a href="/products">상품 정보</a></h3></PurChaseLabel>
            {!loading && (
                <PurChaseDiv>
                    <div className="left"><img src={`/${form.productFile}`} alt="" width="450" height="300"></img></div>
                    <div className="right">
                        <h2>{form.productName}</h2>
                        <hr></hr>
                        <span>카테고리 {form.productCategory}</span><br />
                        <span>판매가 {form.productPrice}원</span><br />
                        <span>상품평 {form.productGrade}</span><br />
                        <span>구매수량
                            {form.productAmount > 0 ? (<input className="productAmount" type="number" name="cartAmount" max={form.productAmount} min="1" defaultValue="1" onChange={onChange}></input>)
                                : (<span className="item-sold">Sold Out</span>)}

                        </span><br />
                        <span>상품소개 {form.productDescription}</span>
                        {form.productAmount > 0 ? (<div className="button-div">
                            <Button space cyan onClick={onPurchase}>구매</Button>
                            <Button onClick={onCart}>담기</Button>
                        </div>) :
                            (null)}

                    </div>
                </PurChaseDiv>)}

        </PurChaseFormBlock>
    );
};

export default withRouter(PurChaseForm);