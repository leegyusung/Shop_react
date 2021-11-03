import HeaderContainer from "../containers/common/HeaderContainer";
import ProductListContainer from '../containers/product/ProductListContainer';
import PageNationContainer from "../containers/comment/PageNationContainer";

const ProductListPage = () => {
    return (
        <>
            <HeaderContainer></HeaderContainer>
            <ProductListContainer></ProductListContainer>
            <PageNationContainer></PageNationContainer>
        </>
    );
};

export default ProductListPage;