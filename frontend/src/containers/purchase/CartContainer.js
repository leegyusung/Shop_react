import CartForm from "../../components/purchase/CartForm";
import { useDispatch, useSelector } from "react-redux";
import { getCarts, initForm } from "../../modules/cart";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { deleteCart } from "../../lib/api/cart";

const CartContainer = ({ match, history }) => {
    const { username } = match.params
    const dispatch = useDispatch();
    const { loading, cart } = useSelector(({ cart }) => ({
        loading: cart.loading,
        cart: cart.carts
    }))
    useEffect(() => {
        dispatch(getCarts({ username }))

    }, [dispatch, username])
    const onRemove = async cartId => {
        const result = window.confirm(`상품을 장바구에서 삭제 하시겠습니까?`);
        if (!result) return;

        await deleteCart({ cartId })
            .then((result) => {
                if (result) {
                    dispatch(getCarts({ username }))
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <CartForm
            onRemove={onRemove}
            loading={loading}
            cart={cart}
        />
    );
};

export default withRouter(CartContainer);