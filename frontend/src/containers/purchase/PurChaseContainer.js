import PurChaseForm from '../../components/purchase/PurChaseForm';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../modules/product';
import { changeCartAmount, changeCartSum, registerCart, initForm } from '../../modules/cart';
import { registerPurchase, changePurchaseAmount, changePurchaseSum, initForm2 } from '../../modules/purchase';
import { withRouter } from 'react-router';
import { useEffect } from 'react';

const PurChaseContainer = ({ match, location, history }) => {
    const dispatch = useDispatch();
    const { productId } = match.params;
    const username = JSON.parse(localStorage.getItem('user'));
    const { form, loading, cartAmount, cartSum, cartSuccess, purchaseSuccess, purchase } = useSelector(({ product, cart, purchase }) => ({
        form: product.productSuccess,
        loading: product.loading,
        cartAmount: cart.cart.cartAmount,
        cartSum: cart.cart.cartSum,
        cartSuccess: cart.cartSuccess,
        purchaseSuccess: purchase.purchaseSuccess,
        purchase: purchase.purchase
    }))
    useEffect(() => {
        dispatch(getProduct({ productId }));
    }, [productId, dispatch])

    const onPurchase = () => {
        const result = window.confirm(`${form.productName} 상품을 구매 하시겠습니까?`);
        if (!result) return
        dispatch(registerPurchase({
            product: productId,
            user: username._id,
            purchaseAmount: purchase.purchaseAmount,
            purchaseSum: purchase.purchaseSum
        }))
    }

    const onChange = e => {
        dispatch(changeCartAmount(parseInt(e.target.value)));
        dispatch(changeCartSum(parseInt(e.target.value * form.productPrice)));
        dispatch(changePurchaseAmount(parseInt(e.target.value)));
        dispatch(changePurchaseSum(parseInt(e.target.value * form.productPrice)))
    }
    const onCart = () => {
        const result = window.confirm(`${form.productName} 상품을 장바구에 추가 하시겠습니까?`);
        if (!result) return
        dispatch(registerCart({
            cartAmount,
            cartSum,
            product: productId,
            user: username._id
        }))
    }
    useEffect(() => {
        if (cartSuccess)
            alert(`장바구니에 ${form.productName} 의 상품이 추가 되었습니다.`);
        if (purchaseSuccess)
            alert(`${form.productName} 의 상품을 구매 하였습니다.`);
        dispatch(initForm())
        dispatch(initForm2())
    }, [purchaseSuccess, cartSuccess, form, dispatch])

    return (
        <PurChaseForm
            form={form}
            cartAmount={cartAmount}
            loading={loading}
            onChange={onChange}
            onCart={onCart}
            onPurchase={onPurchase}
        />
    );
};

export default withRouter(PurChaseContainer);