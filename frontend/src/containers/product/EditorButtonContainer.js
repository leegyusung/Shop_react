import EditorButton from "../../components/product/EditorButton";
import { withRouter } from "react-router";
import { useCallback, useEffect } from "react";
import { initForm, register } from "../../modules/product";
import { useDispatch, useSelector } from "react-redux";

const EditorButtonContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { product, productSuccess, productError } = useSelector(({ product }) => ({
        product: product.products,
        productSuccess: product.productSuccess,
        productError: product.productError
    }))

    const onSubmit = (() => {
        dispatch(register({ product }))
    })

    const onCancel = useCallback(() => {
        const result = window.confirm('상품등록을 취소하시겠습니까?');
        if (!result) return;
        history.push('/')
    }, [history])

    useEffect(() => {
        dispatch(initForm());
    }, [dispatch])

    useEffect(() => {
        if (productSuccess) {
            console.log(productSuccess)
            history.push('/')
        }
        if (productError) {
            console.log(productError)
        }
        dispatch(initForm());
    }, [productSuccess, productError, history, dispatch])

    return (
        <EditorButton
            onCancel={onCancel}
            onSubmit={onSubmit}
        >
        </EditorButton>
    );
};

export default withRouter(EditorButtonContainer);