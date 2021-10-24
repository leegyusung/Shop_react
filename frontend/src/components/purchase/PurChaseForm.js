import styled from "styled-components";
import Responsive from "../common/Responsive";
import palette from "../../lib/style/palette";
import Button from "../common/Button";

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
`

const PurChaseLabel = styled.div`
    h3{
        text-decoration: solid;
        font-size: 40px;
        color: ${palette.gray[7]}
    }
`


const PurChaseForm = ({ form, loading }) => {

    if (loading || !form) return null;
    const link = "http://localhost:3002/" + form.productFile;

    return (
        <PurChaseFormBlock>
            <PurChaseLabel><h3>상품 정보</h3></PurChaseLabel>
            {!loading && (
                <PurChaseDiv>
                    <div className="left"><img src={link} alt=""></img></div>
                    <div className="right">
                        <h2>{form.productName}</h2>
                        <hr></hr>
                        <span>카테고리 {form.productCategory}</span><br />
                        <span>판매가 {form.productPrice}원</span><br />
                        <span>상품평 {form.productGrade}</span><br />
                        <span>구매수량
                            <input className="productAmount" type="number" max={form.productAmount} min="1" defaultValue="1"></input>
                        </span><br />
                        <span>상품소개 {form.productDescription}</span>
                        <div className="button-div">
                            <Button space cyan>구매</Button>
                            <Button>담기</Button>
                        </div>
                    </div>
                </PurChaseDiv>)}

        </PurChaseFormBlock>
    );
};

export default PurChaseForm;