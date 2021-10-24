import HeaderContainer from "../containers/common/HeaderContainer";
import ProductListContainer from '../containers/product/ProductListContainer';
import PageNation from "../components/common/PageNation";

const ProductListPage = () => {
    return (
        <>
            <HeaderContainer></HeaderContainer>
            <ProductListContainer></ProductListContainer>
            <PageNation></PageNation>
        </>
    );
};

export default ProductListPage;