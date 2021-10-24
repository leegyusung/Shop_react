import PurChaseForm from '../../components/purchase/PurChaseForm';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../modules/product';
import { withRouter } from 'react-router';
import { useEffect } from 'react';

const PurChaseContainer = ({ match, location }) => {
    const dispatch = useDispatch();
    const { productId, username } = match.params;
    const { form, loading } = useSelector(({ product }) => ({
        form: product.productSuccess,
        loading: product.loading
    }))
    useEffect(() => {
        dispatch(getProduct({ productId }));
    }, [productId, dispatch])
    return (
        <PurChaseForm
            form={form}
            loading={loading}
        >
        </PurChaseForm>
    );
};

export default withRouter(PurChaseContainer);