import styled from 'styled-components'
import Responsive from '../common/Responsive';
import palette from '../../lib/style/palette';
import { Link } from 'react-router-dom';

const ProductListBlock = styled(Responsive)`
    margin-top: 2rem;
    margin-bottom: 2rem;
    .row{
        display: flex;
        flex-wrap: wrap;
    }
`
const ProductForm = styled.div`
    margin-right: 2rem;
    border-radius: 10px;
    margin-top: 2rem;
    border: 1px solid ${palette.gray[5]};
    width: 250px;
    flex: 0;
    text-align: center;
    .item-price{
        color: orange;
        animation: blink-effect 0.8s step-end infinite;
    }
    .item-sold{
        color: red;
        animation: blink-effect 0.8s step-end infinite;
    }
    @keyframes blink-effect { 50% { opacity: 0; } }
`
const ProductLabel = styled.div`
    h3{
        text-decoration: solid;
        font-size: 40px;
        color: ${palette.gray[7]}
    }
`


const ProductList = ({ form, loading }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <ProductListBlock>
            <ProductLabel><h3>상품 목록</h3></ProductLabel>
            <div className="row">
                {!loading && user && (
                    form.map(data => (
                        <ProductForm key={data._id}>
                            <Link to={`/products/@${user.username}/${data._id}`}>
                                <img src={data.productFile} width="200px" height="200px" alt=""></img>
                            </Link>
                            <hr></hr>
                            <div><span>{data.productName}</span></div>
                            {data.productAmount > 0 ? (<div><span className="item-price">{data.productPrice}</span></div>) : (<div><span className="item-sold">Sold Out</span></div>)}
                        </ProductForm>
                    ))
                )}

            </div>
        </ProductListBlock >
    );
};

export default ProductList;